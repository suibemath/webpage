import {Card, message, Space} from 'antd';
import ProForm, {ProFormTextArea} from '@ant-design/pro-form';
import {PageContainer} from '@ant-design/pro-layout';
import React from 'react';
import {useModel} from "@@/plugin-model/useModel";
import {CurrentUser} from "@/model/user";
import {MessageType} from "@/model/message";
import {report} from "@/services/message";


const ContactManager: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};

  const handleFinish = async (values: MessageType) => {
    const {messageContent} = values;
    const res = await report({
      sendId: currentUser.id,
      messageContent: messageContent,
    });
    if (res.message === '举报成功') {
      message.success("提交成功");
    } else {
      message.error(res.message);
    }
  };


  return (
    <PageContainer content={
      <Space size={"large"}>
      <div>您的建议将被珍视！</div>
      </Space>
    }>
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={handleFinish}
        >
          <ProFormTextArea
            label="内容"
            width="xl"
            style={{whiteSpace:'pre-wrap'}}
            name="messageContent"
            rules={[
              {
                required: true,
                message: '请输入具体内容',
              },
            ]}
            placeholder="请输入具体内容"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default ContactManager;

