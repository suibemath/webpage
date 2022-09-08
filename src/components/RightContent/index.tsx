import type { Settings as ProSettings } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import { Button } from 'antd';
import AvatarDropdown from './AvatarDropdown';
import HeaderSearch from '@/components/HeaderSearch';
import { Link, useLocation } from 'umi';
import { isMobile } from '@/utils/utils';
import styles from './index.less';

type GlobalHeaderRightProps = Partial<ProSettings>;

/**
 * 全局菜单右侧
 * @constructor
 */
const GlobalHeaderRight: React.FC<GlobalHeaderRightProps> = () => {
  const location = useLocation();
  // @ts-ignore
  const [searchText, setSearchText] = useState<string>(location.query.q);

  return (
    <div className={styles.right}>
      <div style={{ width: '40vw' }}>
        <HeaderSearch
          value={searchText}
          placeholder="全站搜索面试题目"
          onChange={(value) => setSearchText(value)}
        />
      </div>
      {!isMobile() && (
        <Link to="/addtopics" target="_blank">
          <Button
            type="primary"
            className="uploadDropdown"
            style={{ marginLeft: 24, marginRight: 8 }}
          >
            上传
          </Button>
        </Link>
      )}
      <AvatarDropdown />
    </div>
  );
};

export default GlobalHeaderRight;
