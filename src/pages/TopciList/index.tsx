import {LikeOutlined, MessageOutlined, StarOutlined} from '@ant-design/icons';
import {Card, List, Tag} from 'antd';
import type {FC} from 'react';
import React from 'react';
import TopicListContent from './components/TopicListContent';
import type {ListItemDataType} from './data.d';
import {getTotalTopics} from '../../services/topicList';
import styles from './style.less';
import {Link} from "umi";

const list = await getTotalTopics();
const  TopciList: FC = () => {
  const IconText: React.FC<{
    type: string;
    text: React.ReactNode;
  }> = ({type, text}) => {
    switch (type) {
      case 'star-o':
        return (
          <span>
            <StarOutlined style={{marginRight: 8}}/>
            {text}
          </span>
        );
      case 'like-o':
        return (
          <span>
            <LikeOutlined style={{marginRight: 8}}/>
            {text}
          </span>
        );
      case 'message':
        return (
          <span>
            <MessageOutlined style={{marginRight: 8}}/>
            {text}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card
        style={{marginTop: 24}}
        bordered={false}
        bodyStyle={{padding: '8px 32px 32px 32px'}}
      >
        <List<ListItemDataType>
          size="large"
          rowKey="topicId"
          itemLayout="vertical"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              style={{whiteSpace:'pre-wrap'}}
              key={item.topicId}
              actions={[
                <IconText key="like" type="like-o" text={item.topicLikes}/>,
                <IconText key="message" type="message" text={item.replyNum}/>,
              ]}
            >
              <List.Item.Meta
                title={
                  <Link className={styles.listItemMetaTitle} to={`/qd/${item.topicId}`}>
                    {item.topicTitle}
                  </Link>
                }
                description={
                  <Tag visible={item.isStared} color={"red"}>{item.isStared}</Tag>
                }
              />
              <TopicListContent data={item}/>
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default TopciList;
