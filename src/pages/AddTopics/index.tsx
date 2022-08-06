import { Card, message } from 'antd';
import ProForm, { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { currentUser as queryCurrentUser } from '@/services/api';
import { history } from '@@/core/history';
import { TopicType } from '@/model/topic';
import React from 'react';
import { addTopics } from '@/services/addTopics';

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

const currentUser = await fetchUserInfo();
// @ts-ignore
const _id = currentUser.id;

const AddTopics: React.FC = () => {
  const handleFinish = async (values: TopicType) => {
    // @ts-ignore
    const res = await addTopics(values);
    if (res == '上传成功') {
      message.success(res);
    } else {
      message.error('上传失败，请刷新重试');
    }
  };

  return (
    <PageContainer content="你可以上传题目或者发表话题">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={handleFinish}
        >
          <ProFormText width="md" name="userId" disabled label="用户唯一ID码" initialValue={_id} />
          <ProFormText
            width="md"
            label="标题"
            name="topicTitle"
            rules={[
              {
                required: true,
                message: '请输入标题',
              },
            ]}
            placeholder="请输入标题"
          />

          <ProFormTextArea
            label="内容"
            width="xl"
            name="topicContent"
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

export default AddTopics;
