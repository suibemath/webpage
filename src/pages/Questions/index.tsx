import React, {useEffect, useState} from 'react';
import {Card, List, message, Tag} from 'antd';
import {useModel} from '@@/plugin-model/useModel';
import type {CurrentUser} from '@/model/user';
import './style.less';
import {Link} from "umi";
import styles from "@/pages/TopciList/style.less";
import TopicListContent from "@/pages/TopciList/components/TopicListContent";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import {searchTitle} from "@/services/topicList";

interface QuestionsProps {
  location: {
    pathname: string;
    query: {
      q?: string;
    };
  };
}

export interface ListItemDataType {
  topicId: number;
  topicTitle?: string;
  topicContent: string;
  topicLikes: number;
  isStared: boolean;
  userId: number;
  replyNum: number;
  isDelete: boolean;
  createTime: Date;
  updateTime: Date;
}

/**
 * 题目大全页
 *
 * @param props
 * @constructor
 * @author liyupi
 */
const Questions: React.FC<QuestionsProps> = (props) => {
  const { location} = props;
  const searchText = location.query.q;
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};
  const [list, setList] = useState<ListItemDataType[]>([]);

  /**
   * 加载数据
   */
  const loadData = async () => {
    const res = await searchTitle({
      searchTitle: searchText,
    });
    if (res) {
      setList(res);
    } else {
    }
  };

  useEffect(() => {
    loadData();
  }, []);
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

  // 登录后才允许搜索
  if (searchText !== undefined && !currentUser.id) {
    message.info('登录后才能搜索哦');
    return <></>;
  }

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

export default Questions;
