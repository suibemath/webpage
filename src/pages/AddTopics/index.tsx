import {Card, message} from 'antd';
import ProForm, {ProFormText, ProFormTextArea} from '@ant-design/pro-form';
import {PageContainer} from '@ant-design/pro-layout';
import {currentUser as queryCurrentUser} from '@/services/api';
import {TopicType} from '@/model/topic';
import React from 'react';
import {addTopics} from '@/services/addTopics';
import {useModel} from "@@/plugin-model/useModel";
import {CurrentUser} from "@/model/user";

const fetchUserInfo = async () => {
    const user = await queryCurrentUser();
    return user;
};



const AddTopics: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};

  const handleFinish = async (values: TopicType) => {
    const {topicTitle,topicContent} = values;
    const res = await addTopics({
      topicTitle: topicTitle,
      topicContent: topicContent,
      userId: currentUser.id,
    });
    if (res.message === '上传成功') {
      message.success("上传成功，恭喜你获得10点积分");
      const newCurrentUser = await fetchUserInfo();
      setInitialState({ ...initialState, currentUser: newCurrentUser });
    } else {
      message.error(res.message);
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
            style={{whiteSpace:'pre-wrap'}}
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
function setInitialState(arg0: any) {
  console.log(arg0)
  throw new Error('Function not implemented.');
}

