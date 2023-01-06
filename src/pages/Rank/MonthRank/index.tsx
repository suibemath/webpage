import type {FC} from 'react';
import React from 'react';
import {getAllUsersByMonth} from "@/services/api";
import {Avatar, List, Space, Tag} from 'antd';
import {Link} from 'umi';

const data = await getAllUsersByMonth();
const  MonthRank: FC = () => {

  let sortNum = 1;

  return (
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Space>
                <Tag color="#cd201f">{sortNum++}</Tag>
                <Avatar src={item.avatarUrl} />
              </Space>}
              title={
              <Space>
                <Link to={`/us/${item.id}`}>{item.username}</Link>
                <Tag color="gold" visible={item.userRole===1} >管理员</Tag>
              </Space>
            }
            />
              <div>{item.monthScore}</div>
          </List.Item>
        )}
      />

  );
};

export default MonthRank;
