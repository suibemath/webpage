import React, { useLayoutEffect, useRef, useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Menu } from 'antd';
import BaseView from './components/base';
import styles from './style.less';
import PasswordView from "@/pages/account/AccountSettings/components/changePassword";

const { Item } = Menu;

type AccountSettingsStateKeys = 'base';
type AccountSettingsState = {
  mode: 'inline' | 'horizontal';
  selectKey: AccountSettingsStateKeys;
};

const AccountSettings: React.FC = () => {
  const menuMap: Record<string, React.ReactNode> = {
    base: '基本设置',
    changePassword: '修改密码'
  };

  const [initConfig, setInitConfig] = useState<AccountSettingsState>({
    mode: 'inline',
    selectKey: 'base',
  });
  const dom = useRef<HTMLDivElement>();

  const resize = () => {
    requestAnimationFrame(() => {
      if (!dom.current) {
        return;
      }
      let mode: 'inline' | 'horizontal' = 'inline';
      const { offsetWidth } = dom.current;
      if (dom.current.offsetWidth < 641 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      if (window.innerWidth < 768 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      setInitConfig({ ...initConfig, mode: mode as AccountSettingsState['mode'] });
    });
  };

  useLayoutEffect(() => {
    if (dom.current) {
      window.addEventListener('resize', resize);
      resize();
    }
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [dom.current]);

  const getMenu = () => {
    return Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>);
  };

  const renderChildren = () => {
    const { selectKey } = initConfig;
    if (selectKey === 'base') {
      return <BaseView/>;
    } else if (selectKey === 'changePassword') {
      return <PasswordView/>;
    } else {
      return null;
    }
  };

  return (
    <GridContent>
      <div
        className={styles.main}
        ref={(ref) => {
          if (ref) {
            dom.current = ref;
          }
        }}
      >
        <div className={styles.leftMenu}>
          <Menu
            mode={initConfig.mode}
            selectedKeys={[initConfig.selectKey]}
            onClick={({ key }) => {
              setInitConfig({
                ...initConfig,
                selectKey: key as AccountSettingsStateKeys,
              });
            }}
          >
            {getMenu()}
          </Menu>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuMap[initConfig.selectKey]}</div>
          {renderChildren()}
        </div>
      </div>
    </GridContent>
  );
};
export default AccountSettings;
