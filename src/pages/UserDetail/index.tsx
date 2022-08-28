import {Avatar, Card, Descriptions, message, Space} from 'antd';
import React, {useEffect, useState} from 'react';
import type {RouteChildrenProps} from 'react-router';
import {useParams} from "react-router";
import {CurrentUser} from "@/model/user";
import {searchByUserId} from "@/services/api";
import styles from './style.less';
import Title from 'antd/lib/skeleton/Title';
import moment from "moment";


const UserDetail: React.FC<RouteChildrenProps> = () => {
  const { id } = useParams<any>();
  const [user, setUser] = useState<CurrentUser>({} as CurrentUser);
  // const [tabKey, setTabKey] = useState<tabKeyType>('topics');
  const [userId, setUserId] = useState<number>(id);

  useEffect(() => {
    setUserId(id);
  }, [id]);
  const loadData = async () => {
    if (!userId) {
      return;
    }
    const IdType = {
      userId: userId,
    }
    const res = await searchByUserId(IdType);
    if (res) {
      setUser(res);
    } else {
      message.error('加载失败，请刷新重试');
    }
  };
  useEffect(() => {
    loadData();
  }, [userId]);

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
      <Card
        title="信息"
      >
        <Descriptions column={1} labelStyle={{ width: 100, marginBottom: 8 }} colon={false}>
          <Descriptions.Item label="积分">{user.score}</Descriptions.Item>
          <Descriptions.Item label="性别">
            {!user.gender ? '暂无' : user.gender}
          </Descriptions.Item>
          <Descriptions.Item label="简介">{user.selfIntroduction || '暂无'}</Descriptions.Item>
          <Descriptions.Item label="身份">
            {user.userRole === 0 ? '协会成员' : '管理员'}
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">{user.email || '暂无'}</Descriptions.Item>
          <Descriptions.Item label="注册时间">
            {formatDateTimeStr(user.createTime)}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>

  );
};
export default UserDetail;
