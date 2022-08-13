import React from 'react';
import {LikeOutlined, MessageFilled} from '@ant-design/icons';
import {List} from 'antd';
import ArticleListContent from '../ArticleListContent';
import type {ListItemDataType} from '../../data.d';
import styles from './index.less';
import {getMyTopic} from "@/services/topicList";

const list = await getMyTopic();

const Articles: React.FC = () => {
  const IconText: React.FC<{
    icon: React.ReactNode;
    text: React.ReactNode;
  }> = ({ icon, text }) => (
    <span>
      {icon} {text}
    </span>
  );

  return (
    <List<ListItemDataType>
      size="large"
      className={styles.articleList}
      rowKey="topicId"
      itemLayout="vertical"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          key={item.topicId}
          actions={[
            <IconText key="like" icon={<LikeOutlined />} text={item.topicLikes} />,
            <IconText key="message" icon={<MessageFilled />} text={"评论的数量"} />,
          ]}
        >
          <List.Item.Meta
            title={
              <a className={styles.listItemMetaTitle} href={"#"}>
                {item.topicTitle}
              </a>
            }
          />
          <ArticleListContent data={item} />
        </List.Item>
      )}
    />
  );
};

export default Articles;
