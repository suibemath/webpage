import React from 'react';
import {LikeOutlined, MessageFilled} from '@ant-design/icons';
import {List, Space, Tag} from 'antd';
import type {ListItemDataType} from '../../data.d';
import styles from './index.less';
import {getMyTopic} from '@/services/topicList';
import {Link} from 'umi';
import TopicAccountContent from "@/pages/account/AccountCenter/components/TopicAccountContent";

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
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          key={item.topicId}
          actions={[
            <IconText key="like" icon={<LikeOutlined />} text={item.topicLikes} />,
            <IconText key="message" icon={<MessageFilled />} text={item.replyNum} />,
          ]}
        >
          <List.Item.Meta
            title={
              <Space>
                <Tag visible={item.isStared} color={"green"}>{item.isStared}</Tag>
                <Link className={styles.listItemMetaTitle} to={`/qd/${item.topicId}`}>
                  {item.topicTitle}
                </Link>
              </Space>
            }
          />
          <TopicAccountContent data={item} />
        </List.Item>
      )}
    />
  );
};

export default Articles;
