import {Card} from 'antd';
import React, {useState} from 'react';
import type {RouteChildrenProps} from 'react-router';
import UnRead from './components/UnRead';
import type {tabKeyType} from './data.d';
import styles from './Center.less';
import Read from "@/pages/account/Messages/components/Read";

const operationTabList = [
  {
    key: 'unRead',
    tab: (
      <span>
        未读信息<span style={{ fontSize: 14 }}></span>
      </span>
    ),
  },
  {
    key: 'read',
    tab: (
      <span>
        已读信息<span style={{ fontSize: 14 }}></span>
      </span>
    ),
  },
];

const Messages: React.FC<RouteChildrenProps> = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('unRead');

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'unRead') {
      return <UnRead />;
    }
    if (tabValue === 'read') {
      return <Read />;
    }
    return null;
  };

  return (
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
  );
};
export default Messages;
