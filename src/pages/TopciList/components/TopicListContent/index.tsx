import React from 'react';
import moment from 'moment';
import styles from './index.less';

type TopicListContentProps = {
  data: {
    topicContent: string;
    createTime: Date;
  };
};

const TopicListContent: React.FC<TopicListContentProps> = (
  {data: {topicContent, createTime}}
) => {
  const content = topicContent.length>=25 ? topicContent.substring(0,25)+"······" : topicContent;
  return(
  <div className={styles.listContent}>
    <div className={styles.description}>{content}</div>
    <div className={styles.extra}>
      <em>{moment(createTime).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
  );
};

export default TopicListContent;
