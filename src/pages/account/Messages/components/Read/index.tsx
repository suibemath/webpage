import React from 'react';
import {ListItemDataType} from "@/pages/account/AccountCenter/data";
import styles from "@/pages/account/AccountCenter/components/Topics/index.less";
import {List, Space} from "antd";
import {Link} from "umi";
import {getRead} from "@/services/message";
import MessageAccountContent from "@/pages/account/Messages/components/MessageAccountContent";

const list = await getRead();

const Articles: React.FC = () => {

  return (
    <List<ListItemDataType>
      size="large"
      className={styles.articleList}
      rowKey="messageId"
      itemLayout="vertical"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          key={item.messageId}
        >
          <List.Item.Meta
            title={
              <Space>
                <Link className={styles.listItemMetaTitle} to={`/ms/${item.messageId}`}>
                  {item.messageContent.length > 20 ? item.messageContent.substring(0,25)+"······" : item.messageContent}
                </Link>
              </Space>
            }
          />
          <MessageAccountContent  msg={item} createTime={item.createTime}  />
        </List.Item>
      )}
    />
  );
};

export default Articles;
