import React from 'react';
import { List } from 'antd';
import styles from './index.less';
import { getMyReply } from '@/services/reply';
import { ReplyItemDataType } from '@/model/reply';
import AccountReplyListContent from '@/pages/account/AccountCenter/components/AccountReplyListContent';

const list = await getMyReply();

const Articles: React.FC = () => {
  return (
    <List<ReplyItemDataType>
      size="large"
      className={styles.articleList}
      rowKey="topicId"
      itemLayout="vertical"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item key={item.topicId} style={{ whiteSpace: 'pre-wrap' }}>
          <AccountReplyListContent reply={item} />
        </List.Item>
      )}
    />
  );
};

export default Articles;
