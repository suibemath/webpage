import React from 'react';
import styles from "@/pages/account/AccountCenter/components/Topics/index.less";
import {List, Space} from "antd";
import {Link} from "umi";
import {getRead} from "@/services/sign";
import {SignType} from "@/model/sign";
import SignAccountContent from "@/pages/Admin/Sign/components/SignAccountContent";

const list = await getRead();

const Articles: React.FC = () => {

  return (
    <List<SignType>
      size="large"
      className={styles.articleList}
      rowKey="signId"
      itemLayout="vertical"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          key={item.signId}
        >
          <List.Item.Meta
            title={
              <Space>
                <Link className={styles.listItemMetaTitle} to={`/sg/${item.signId}`}>
                  {"姓名：" + item.signName + "  学号：" + item.signSId}
                </Link>
              </Space>
            }
          />
          <SignAccountContent  sign={item} createTime={item.createTime}  />
        </List.Item>
      )}
    />
  );
};

export default Articles;
