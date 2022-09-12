import {Avatar, Card, Descriptions, message, Space, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import type {RouteChildrenProps} from 'react-router';
import {useParams} from "react-router";
import moment from "moment";
import {MessageType} from "@/model/message";
import {messageRead} from "@/services/message";
import styles from "@/pages/UserDetail/style.less";
import Title from "antd/lib/skeleton/Title";
import {CurrentUser} from "@/model/user";
import {searchByUserId} from "@/services/api";


const UserDetail: React.FC<RouteChildrenProps> = () => {
  const {id} = useParams<any>();
  const [msg, setMsg] = useState<MessageType>({} as MessageType);
  const [user, setUser] = useState<CurrentUser>({} as CurrentUser);
  // const [tabKey, setTabKey] = useState<tabKeyType>('topics');
  const [messageId, setMessageId] = useState<number>(id);


  useEffect(() => {
    setMessageId(id);
  }, [id]);
  const loadData = async () => {
    if (!messageId) {
      return;
    }
    const IdType = {
      messageId: messageId,
    }
    const res = await messageRead(IdType);
    if (res) {
      setMsg(res);
      const userIdType = {
        userId: res.sendId,
      }
      const _user = await searchByUserId(userIdType);
      if(_user){
        setUser(_user);
      }else{
        message.error("加载失败，请刷新重试")
      }
    } else {
      message.error('加载失败，请刷新重试');
    }
  };
  useEffect(() => {
    loadData();
  }, [messageId]);

  const formatDateTimeStr = (time: any, format = 'YYYY-MM-DD HH:mm:ss') => {
    if (!time) {
      return '';
    }
    return moment(time).format(format);
  };



  return (
    <div>
      <Card >
        <Card.Meta
          className={styles.cardMeta}
          title={
            <Space align="center">
              <Title level={4} style={{ marginBottom: 0 }}>
                {user?.username}
              </Title>
            </Space>
          }
          description={user.username || ''}
          avatar={
            <Avatar
              src={user.avatarUrl}
              size={96}
            />
          }
        />
      </Card>
      <div style={{ marginTop: 16 }} />
      <Card>
        <Descriptions column={1} labelStyle={{ width: 100, marginBottom: 8 }} colon={false}>
          <Descriptions.Item label="内容">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
            {msg.messageContent}
          </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="发送时间">
            {formatDateTimeStr(msg.createTime)}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>

  );
};
export default UserDetail;
