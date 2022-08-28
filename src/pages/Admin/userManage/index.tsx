import {ActionType, ProColumns, ProTable, TableDropdown} from '@ant-design/pro-components';
import React, {useRef} from 'react';
import {getAllUsers, giveManager, recaptureManager, scoreChange, sealUser, unsealUser} from "@/services/api";
import {Dropdown, Menu, message, Space, Tag} from "antd";
import {DownOutlined} from '@ant-design/icons';
import {Link} from "umi";

type ItemType = {
  id: number;
  username: string;
  userAccount: string;
  userRole: number;
  score: number;
};


const QuestionDetail: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const doSubmit = async (value: number,userid: number)=>{
    const _id = await scoreChange({
      score: value,
      id: userid,
    })
    if(_id){
      message.success("修改积分成功")
    }
    else{
      message.error("修改积分失败")
    }
  }

  const deleteUser = async (userid: number)=>{
    const _id = await sealUser({
      userId: userid,
    })
    if(_id){
      message.success("封号成功")
    }
    else{
      message.error("封号失败")
    }
  }

  const unDeleteUser = async (userid: number)=>{
    const _id = await unsealUser({
      userId: userid,
    })
    if(_id){
      message.success("解封成功")
    }
    else{
      message.error("解封失败")
    }
  }

  const addManager = async (userid: number)=>{
    const _id = await giveManager({
      userId: userid,
    })
    if(_id){
      message.success("添加成功")
    }
    else{
      message.error("添加失败")
    }
  }

  const removeManager = async (userid: number)=>{
    const _id = await recaptureManager({
      userId: userid,
    })
    if(_id){
      message.success("解除成功")
    }
    else{
      message.error("解除失败")
    }
  }

  const columns: ProColumns<ItemType>[] = [
    {
      title: '用户名',
      search: false,
      dataIndex: 'username',
      ellipsis: true,
      tip: '用户名过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      params: {},
    },
    {
      disable: true,
      title: '身份',
      dataIndex: 'userRole',
      search: false,
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
      render: (_, record) => (
        <Space>
          <Tag key={record.userRole===1 ? '管理员':'协会成员'} color="#108ee9">{record.userRole===1 ? '管理员':'协会成员'}</Tag>
          <Tag key={record.userRole===2 ? '':'封禁中'} visible={record.userRole===2} color="#f50">{record.userRole===1 ? '':'封禁中'}</Tag>
        </Space>
      ),
    },
    {
      title: '学号',
      search: false,
      dataIndex: 'userAccount',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      params: {},
    },
    {
      title: '积分',
      search: false,
      dataIndex: 'score',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '操作',
      valueType: 'option',
      dataIndex: 'id',
      key: 'option',
      render: (text, record, _, action) => [
        <Dropdown overlay={
          <Menu
            items={[
              {
                key: '1',
                label: '加5分',
                onClick: ()=> doSubmit(5,record.id),
              },
              {
                key: '2',
                label: '扣5分',
                onClick: ()=> doSubmit(-5,record.id),
              },
              {
                key: '3',
                label: '加10分',
                onClick: ()=> doSubmit(10,record.id),
              },
              {
                key: '4',
                label: '扣10分',
                onClick: ()=> doSubmit(-10,record.id),
              },
            ]}
          />
        }>
          <a onClick={e => e.preventDefault()}>
            <Space>
              修改积分
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>,
        <Link  to={`/us/${record.id}`} target="_blank">
          查看
        </Link>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'addManage', name: '添加为管理员', onClick: ()=> addManager(record.id),},
            { key: 'removeManage', name: '解除管理员', onClick: ()=> removeManager(record.id),},
            { key: 'delete', name: '封禁用户', onClick: ()=> deleteUser(record.id),},
            { key: 'unDelete', name: '解封用户', onClick: ()=> unDeleteUser(record.id),},
          ]}
        />,
      ],
    },
  ];
  return (

    <ProTable<ItemType>
      columns={columns}
      actionRef={actionRef}
      request={async ( params) => {
        console.log(params);
        const userList = await getAllUsers();
        return {
          data: userList,
          success: true,
        };
      }}

      cardBordered
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={false}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      headerTitle="用户列表"
    />
  );
};

export default QuestionDetail;
