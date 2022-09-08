import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ReplyType } from '@/model/reply';
import { Avatar, Comment, message, Tag } from 'antd';
import { CurrentUser } from '@/model/user';
import { searchByUserId } from '@/services/api';
import { TopicType } from '@/model/topic';
import { getTopic } from '@/services/topicList';
import { LikeOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import styles from '@/pages/account/AccountCenter/components/Topics/index.less';
import { deleteReplyByAuthor } from '@/services/reply';

type TopicListContentProps = {
  reply: ReplyType;
};

const AccountReplyListContent: React.FC<TopicListContentProps> = ({ reply }) => {
  const [user, setUser] = useState<CurrentUser>({} as CurrentUser);
  const [topic, setTopic] = useState<TopicType>({} as TopicType);
  const loadData = async () => {
    const IdType = {
      userId: reply.userId,
    };
    const _user = await searchByUserId(IdType);
    if (_user == null) {
      message.error('加载错误');
    } else {
      setUser(_user);
    }
    const topicIdType = {
      topicId: reply.topicId,
    };
    const res = await getTopic(topicIdType);
    if (res) {
      setTopic(res);
    } else {
      message.error('题目加载失败，请刷新重试');
    }
  };
  useEffect(() => {
    loadData();
  }, [reply]);

  const IconText: React.FC<{
    icon: React.ReactNode;
    text: React.ReactNode;
  }> = ({ icon, text }) => (
    <span>
      {icon} {text}
    </span>
  );

  const onDelete = async () => {
    const ReplyIdType = {
      replyId: reply.replyId,
    };
    await deleteReplyByAuthor(ReplyIdType);
    message.success('删除成功');
  };

  return (
    <Comment
      content={reply.replyContent}
      datetime={moment(reply.createTime).format('YYYY-MM-DD HH:mm')}
      avatar={<Avatar src={user.avatarUrl} alt={user.username} />}
      author={<a>{user.username}</a>}
      actions={[
        <IconText key="like" icon={<LikeOutlined />} text={reply.replyLikes} />,
        <span key="comment-nested-reply-to">
          <Link className={styles.listItemMetaTitle} to={`/qd/${topic.topicId}`}>
            “{topic.topicTitle}”
          </Link>
        </span>,
        <Tag color="#108ee9" onClick={onDelete}>
          <a href="#">删除</a>
        </Tag>,
      ]}
    ></Comment>
  );
};

export default AccountReplyListContent;
