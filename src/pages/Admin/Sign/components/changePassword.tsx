import React from 'react';
import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import styles from './BaseView.less';
import { changePassword, currentUser as queryCurrentUser } from '@/services/api';
import { history } from '@@/core/history';
import { useModel } from '@@/plugin-model/useModel';
import { CurrentUser } from '@/model/user';

const loginPath = '/user/login';

const fetchUserInfo = async () => {
  try {
    const user = await queryCurrentUser();
    return user;
  } catch (error) {
    history.push(loginPath);
  }
  return undefined;
};

const PasswordView: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};

  const handleFinish = async (values: API.ChangePasswordParams) => {
    const { oldPassword, newPassword, newCheckPassword } = values;
    const res = await changePassword({
      id: currentUser.id,
      oldPassword: oldPassword,
      newPassword: newPassword,
      newCheckPassword: newCheckPassword,
    });
    if (res.message === '修改密码成功') {
      message.success('更新密码成功');
      const newCurrentUser = await fetchUserInfo();
      setInitialState({ ...initialState, currentUser: newCurrentUser });
    } else {
      message.error(res.message);
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
                  children: '更新密码',
                },
              }}
            >
              <ProFormText.Password
                width="md"
                name="oldPassword"
                label="旧密码"
                rules={[
                  {
                    min: 8,
                    required: true,
                    message: '请输入原来的密码',
                  },
                ]}
              />
              <ProFormText.Password
                width="md"
                name="newPassword"
                label="新密码"
                rules={[
                  {
                    min: 8,
                    required: true,
                    message: '请输入新密码(首位字母至少8位)',
                  },
                ]}
              />
              <ProFormText.Password
                width="md"
                name="newCheckPassword"
                label="校验码"
                rules={[
                  {
                    required: true,
                    message: '请再次输入',
                  },
                ]}
              />
            </ProForm>
          </div>
        </>
      }
    </div>
  );
};

export default PasswordView;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setInitialState(arg0: any) {
  throw new Error('Function not implemented.');
}
