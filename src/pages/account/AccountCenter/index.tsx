import {Card, Col, Divider, Row, Tag} from 'antd';
import React, { useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import type { RouteChildrenProps } from 'react-router';
import Topics from './components/Topics';
import type { tabKeyType } from './data.d';
import styles from './Center.less';
import Answers from '@/pages/account/AccountCenter/components/Answers';
import { currentUser as queryCurrentUser } from '@/services/api';
import { history } from '@@/core/history';

const loginPath = '/user/login';
const operationTabList = [
  {
    key: 'topics',
    tab: (
      <span>
        我的题目<span style={{ fontSize: 14 }}></span>
      </span>
    ),
  },
  {
    key: 'answers',
    tab: (
      <span>
        我的回复<span style={{ fontSize: 14 }}></span>
      </span>
    ),
  },
];

const fetchUserInfo = async () => {
  try {
    const user = await queryCurrentUser();
    return user;
  } catch (error) {
    history.push(loginPath);
  }
  return undefined;
};
const currentUser = await fetchUserInfo();
const AccountCenter: React.FC<RouteChildrenProps> = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('topics');

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'topics') {
      return <Topics />;
    }
    if (tabValue === 'answers') {
      return <Answers />;
    }
    return null;
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{ marginBottom: 24 }}>
            {currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={currentUser.avatarUrl} />
                  <div className={styles.name}>{currentUser.username} {currentUser.gender}</div>
                  <div><Tag color="red">{currentUser.userRole===1 ? '管理员':(currentUser.userRole === 0 ? '普通用户': '协会成员')}</Tag>积分:{currentUser.score}</div>
                  <div>个人简介:  {!currentUser.selfIntroduction ? '这个人很懒没有简介~' : currentUser.selfIntroduction}</div>
                </div>
                <Divider dashed />
                <Divider style={{ marginTop: 16 }} dashed />
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default AccountCenter;
