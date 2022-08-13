import React from 'react';
import moment from 'moment';
import styles from './index.less';

export type ApplicationsProps = {
  data: {
    content?: string;
    createTime?: Date;
  };
};
const ArticleListContent: React.FC<ApplicationsProps> = ({
  data: { content, createTime },
}) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{content}</div>
    <div className={styles.extra}>
      <em>{moment(createTime).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;
