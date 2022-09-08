import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import type { RouteChildrenProps } from 'react-router';
import Topics from './components/Topics';
import type { tabKeyType } from './data.d';
import styles from './Center.less';
import Answers from '@/pages/account/AccountCenter/components/Answers';

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
