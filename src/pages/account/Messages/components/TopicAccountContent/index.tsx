import React from 'react';
import moment from 'moment';
import styles from './index.less';
import { deleteByAuthor } from '@/services/topicList';
import { message, Tag } from 'antd';

type TopicListContentProps = {
  data: {
    topicId: number;
    topicContent: string;
    createTime: Date;
  };
};

const TopicAccountContent: React.FC<TopicListContentProps> = ({
  data: { topicContent, createTime, topicId },
}) => {
  const content =
    topicContent.length >= 25 ? topicContent.substring(0, 25) + '······' : topicContent;
  const onDelete = async () => {
    const TopicIdType = {
      topicId: topicId,
    };
    await deleteByAuthor(TopicIdType);
    message.success('删除成功');
  };
  return (
    <div className={styles.listContent}>
      <div className={styles.description}>
        <Tag color="#108ee9" onClick={onDelete}>
          <a href="#">删除</a>
        </Tag>
        {content}
      </div>
      <div className={styles.extra}>
        <em>{moment(createTime).format('YYYY-MM-DD HH:mm')}</em>
      </div>
    </div>
  );
};

export default TopicAccountContent;
