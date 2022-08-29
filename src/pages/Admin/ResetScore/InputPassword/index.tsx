import React, {useEffect} from 'react';
import {ProFormText} from "@ant-design/pro-components";
import {LockOutlined} from "@ant-design/icons";
import styles from "@/pages/UserDetail/style.less";
import ProForm from "@ant-design/pro-form";
import {scoreReset} from "@/services/api";
import {useModel} from "@@/plugin-model/useModel";
import {CurrentUser} from "@/model/user";
import {message, Modal} from "antd";

interface InputPasswordProps {
  visible: boolean;
  onClose: () => void;
}

const InputPassword: React.FC<InputPasswordProps> = (props) => {
  const { visible ,onClose } = props;
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};
  useEffect(() => {
    if (!visible || !currentUser.id) {
      return;
    }
  }, [currentUser , visible]);
  const handleSubmit = async (values: API.ResetScore)=>{
    const {userPassword} = values;
    const res = await scoreReset({
      id: currentUser.id,
      userRole: currentUser.userRole,
      userPassword: userPassword,
    })
    if (res === '重置总积分成功'){
      message.success("重置成功")
      onClose();
    }else{
      message.error(res)
    }
  }
  const doCancel = () => {
    onClose();
  };

  return (
    <Modal
      title={`输入密码`}
      width="60vw"
      style={{ minWidth: 300 }}
      visible={visible}
      destroyOnClose
      maskClosable={false}
      footer={null}
      onCancel={() => doCancel()}
    >
      <ProForm
        onFinish={async (values) => {
          await handleSubmit(values as API.ResetScore);
        }}
      >
        <ProFormText.Password
          name="userPassword"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={styles.prefixIcon} />,
          }}
          placeholder={'请输入密码'}
          rules={[
            {
              required: true,
              message: '密码是必填项！',
            },
            {
              min: 8,
              type: 'string',
              message: '密码长度不能小于8',
            },
          ]}
        />
      </ProForm>
    </Modal>
  );
};

export default InputPassword;
