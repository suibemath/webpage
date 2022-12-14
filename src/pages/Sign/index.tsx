import {Card, message, Space} from 'antd';
import ProForm, {ProFormText, ProFormTextArea} from '@ant-design/pro-form';
import {PageContainer} from '@ant-design/pro-layout';
import React, {useState} from 'react';
import type {FormLayout} from 'antd/es/form/Form';
import {useModel} from "@@/plugin-model/useModel";
import {CurrentUser} from "@/model/user";
import {SignType} from "@/model/sign";
import {signReport} from "@/services/sign";

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const ContactManager: React.FC = () => {


  const [formLayoutType, setFormLayoutType] = useState<FormLayout>(LAYOUT_TYPE_HORIZONTAL);

  const [grid, setGrid] = useState(true);
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};

  const handleFinish = async (values: SignType) => {
    const {experience, email, qqId, reasons, majorClass, phoneNumber, signSId, signName} = values;
    const res = await signReport({
      sendId: currentUser.id,
      signName: signName,
      experience: experience,
      email: email,
      qqId: qqId,
      reasons: reasons,
      majorClass: majorClass,
      phoneNumber: phoneNumber,
      signSId: signSId
    });
    if (res.message === '提交成功') {
      message.success("提交成功");
    } else {
      message.error(res.message);
    }
  };

  return (
    <PageContainer content={
      <Space size={"large"}>
        <div>请填写以下信息申请加入上海对外经贸大学数学建模协会!</div>
      </Space>
    }>
      <Card bordered={false}>
        <ProForm
          layout={formLayoutType}
          grid={grid}
          rowProps={{
            gutter: [16, formLayoutType === 'inline' ? 16 : 0],
          }}
          initialValues={{ public: '1' }}
          onFinish={handleFinish}
        >
          <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{required: true,message: '请输入具体内容',}]} name="signName" label="姓名" />
          <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{required: true,message: '请输入具体内容',}]} name="signSId" label="学号" />
          <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{required: true,message: '请输入具体内容',}]} name="qqId" label="QQ号" />
          <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{required: true,message: '请输入具体内容',}]} name="majorClass" label="专业班级" />
          <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{required: true,message: '请输入具体内容',}]} name="phoneNumber" label="电话" />
          <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{required: true,message: '请输入具体内容',}]} name="email" label="邮箱" />
          <ProFormTextArea
            label="数学相关经历及获奖情况："
            width="xl"
            style={{whiteSpace:'pre-wrap'}}
            name="experience"
            rules={[
              {
                required: true,
                message: '请输入具体内容',
              },
            ]}
            placeholder="请输入具体内容"
          />
          <ProFormTextArea
            label="为什么想加入数学建模协会"
            width="xl"
            style={{whiteSpace:'pre-wrap'}}
            name="reasons"
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

