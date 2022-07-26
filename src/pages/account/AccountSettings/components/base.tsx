import React from 'react';
import {Form, message, Select} from 'antd';
import ProForm, {ProFormText, ProFormTextArea} from '@ant-design/pro-form';
import styles from './BaseView.less';
import {currentUser as queryCurrentUser} from '@/services/api';
import {history} from '@@/core/history';
import {updateUser} from '@/services/updateUser';
import {useModel} from "@@/plugin-model/useModel";
import {CurrentUser} from "@/model/user";

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

const BaseView: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};

  const handleFinish = async (values: API.CurrentUser) => {
    const {username,avatarUrl,gender,email,selfIntroduction} = values;
    const user = await updateUser({
      id: currentUser.id,
      userRole: currentUser.userRole,
      username: username,
      userAccount: currentUser.userAccount,
      avatarUrl: avatarUrl,
      gender: gender,
      email: email,
      score: currentUser.score,
      selfIntroduction: selfIntroduction,
      createTime: currentUser.createTime,
      monthScore: currentUser.monthScore,
    });
    if (user) {
      message.success('更新基本信息成功');
      const newCurrentUser = await fetchUserInfo();
      setInitialState({ ...initialState, currentUser: newCurrentUser });
    }
    if (!user) {
      message.error('修改信息失败');
    }
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
                <img src={currentUser.avatarUrl} alt="avatar" width={150} height={150} />
              </div>
              <div className={styles.button_view}>
                <ProFormText
                  width="md"
                  name="avatarUrl"
                  label="更换头像"
                  placeholder="请输入头像地址"
                />
              </div>
              <ProFormText
                width="md"
                name="email"
                label="邮箱"
                placeholder={currentUser.email}
              />
              <ProFormText
                width="md"
                name="username"
                label="昵称"
                placeholder={currentUser.username}
              />
              <Form.Item name="gender" label="性别">
                <Select placeholder={currentUser.gender ? '女':'男'} allowClear>
                  <Option value="♂">男</Option>
                  <Option value="♀">女</Option>
                </Select>
              </Form.Item>
              <ProFormTextArea
                name="selfIntroduction"
                label="个人简介"
                placeholder={!currentUser.selfIntroduction ? '个人简介': currentUser.selfIntroduction}
              />
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
