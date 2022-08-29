import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {ReplyType} from '@/model/reply';
import {Avatar, Button, Comment, Dropdown, Menu, message, Space, Tag} from 'antd';
import {CurrentUser} from '@/model/user';
import {currentUser as queryCurrentUser, searchByUserId} from '@/services/api';
import {LikeOutlined} from '@ant-design/icons';
import {deleteReplyByManager, replyLike, star} from '@/services/reply';
import {Link} from "umi";

type TopicListContentProps = {
  reply: ReplyType;
};
const fetchUserInfo = async () => {
  const user = await queryCurrentUser();
  return user;
};

const currentUser = await fetchUserInfo();
const ReplyListContent: React.FC<TopicListContentProps> = ({ reply }) => {
  const [user, setUser] = useState<CurrentUser>({} as CurrentUser);
  const [replyLikes, setReplyLikes] = useState<number>(reply.replyLikes);

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
  };
  useEffect(() => {
    loadData();
  }, [reply]);

  const onClickLikes = async () => {
    if (currentUser.id === reply.userId) {
      message.info('您不能给自己的回复点赞');
    } else {
      const newReply = await replyLike(reply);
      if (newReply == null) {
        message.error('点赞出错');
      }else{
        setReplyLikes(newReply.replyLikes)
      }
    }
  };
  const IconText: React.FC<{
    type: string;
    text: React.ReactNode;
  }> = ({ type, text }) => {
    switch (type) {
      case 'like-o':
        return (
          <span>
            <LikeOutlined style={{ marginRight: 8 }} />
            {text}
          </span>
        );
      default:
        return null;
    }
  };
  const onDelete = async ()=>{
    const ReplyIdType = {
      replyId: reply.replyId
    }
    await deleteReplyByManager(ReplyIdType);
    message.success("删除成功");
  }

  const onStar = async ()=>{
    if(reply.userId === currentUser.id){
      message.info("不能对自己进行操作")
    }else{
      const res = await star(reply);
      if(res){
        message.success("设置成功");
      }
    }
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: reply.isStared ? '取消精选':'设置精选',
          onClick: ()=> onStar(),
        },
        {
          key: '2',
          label: '删除',
          danger: true,
          onClick: ()=> onDelete(),
        },
      ]}
    />
  );



  return (
    <Comment
      content={reply.replyContent}
      datetime={[moment(reply.createTime).format('YYYY-MM-DD HH:mm')]}
      avatar={<Link to={`/us/${user.id}`} target="_blank"><Avatar src={user.avatarUrl} alt={user.username} /></Link>}
      author={<a>{user.username}</a>}
      actions={[
        <Space size="middle">
        <Button onClick={onClickLikes}>
          <IconText key="like" type="like-o" text={replyLikes} />
        </Button>
          <Tag visible={currentUser.userRole===1}>
          <Dropdown overlay={menu} >
            <a onClick={e => e.preventDefault()}>
              <Space>
                ...
              </Space>
            </a>
          </Dropdown>
          </Tag>
          <Tag visible={reply.isStared} color={"green"}>{reply.isStared}</Tag>
        </Space>,
      ]}
    ></Comment>
  );
};

export default ReplyListContent;


