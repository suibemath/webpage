import React from 'react';
import { Form, message, Select } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import styles from './BaseView.less';
import { currentUser as queryCurrentUser } from '@/services/api';
import { history } from '@@/core/history';
import { updateUser } from '@/services/updateUser';
import initialState from '@@/plugin-initial-state/models/initialState';

const loginPath = '/user/login';
const { Option } = Select;

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
// @ts-ignore
const _email = !currentUser.email ? '您还未设置邮箱' : '您现在的邮箱为' + currentUser.email;
// @ts-ignore
const _username = !currentUser.username
  ? '您还未设置昵称'
  : '您现在的昵称为' + currentUser.username;
// @ts-ignore
const _id = currentUser.id;
// @ts-ignore
const _avatarUrl = currentUser.avatarUrl;
// @ts-ignore
const _gender = currentUser.gender ? '女' : '男';
// @ts-ignore
// 头像组件 方便以后独立，增加裁剪之类的功能
// eslint-disable-next-line @typescript-eslint/no-shadow

const BaseView: React.FC = () => {
  // const {loading} = useRequest(() => {
  //   return queryCurrent();
  // });

  const handleFinish = async (values: API.CurrentUser) => {
    const user = await updateUser(values);
    if (user) {
      message.success('更新基本信息成功');
      const newCurrentUser = await fetchUserInfo();
      setInitialState({ ...initialState, currentUser: newCurrentUser });
    }
    if (!user) {
      message.error('修改信息失败');
    }
    window.location.reload();
  };
  return (
    <div className={styles.baseView}>
      {
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleFinish}
              submitter={{
                resetButtonProps: {
                  style: {
                    display: 'none',
                  },
                },
                submitButtonProps: {
                  children: '更新基本信息',
                },
              }}
            >
              <div className={styles.avatar_title}>头像</div>
              <div className={styles.avatar}>
                <img src={_avatarUrl} alt="avatar" width={150} height={150} />
              </div>
              <div className={styles.button_view}>
                <ProFormText
                  width="md"
                  name="avatarUrl"
                  label="更换头像"
                  placeholder="请输入头像地址"
                />
              </div>
              <ProFormText width="md" name="id" disabled label="用户唯一ID码" initialValue={_id} />

              <ProFormText
                width="md"
                name="email"
                label="邮箱"
                placeholder={_email}
                rules={[
                  {
                    required: true,
                    message: '请输入您的邮箱',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="username"
                label="昵称"
                placeholder={_username}
                rules={[
                  {
                    required: true,
                    message: '请输入您的昵称!',
                  },
                ]}
              />
              <Form.Item name="gender" label="性别" rules={[{ required: true }]}>
                <Select placeholder={_gender} allowClear>
                  <Option value="false">男</Option>
                  <Option value="true">女</Option>
                </Select>
              </Form.Item>
              {/*<ProFormTextArea*/}
              {/*  name="profile"*/}
              {/*  label="个人简介"*/}
              {/*  rules={[*/}
              {/*    {*/}
              {/*      required: true,*/}
              {/*      message: '请输入个人简介!',*/}
              {/*    },*/}
              {/*  ]}*/}
              {/*  placeholder="个人简介"*/}
              {/*/>*/}
            </ProForm>
          </div>
        </>
      }
    </div>
  );
};

export default BaseView;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setInitialState(arg0: any) {
  throw new Error('Function not implemented.');
}
