import {Button, Card, Descriptions, message, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import type {RouteChildrenProps} from 'react-router';
import {useParams} from "react-router";
import moment from "moment";
import {SignType} from "@/model/sign";
import {approved, signRead} from "@/services/sign";


const UserDetail: React.FC<RouteChildrenProps> = () => {
  const {id} = useParams<any>();
  const [sign, setSign] = useState<SignType>({} as SignType);
  // const [tabKey, setTabKey] = useState<tabKeyType>('topics');
  const [signId, setSignId] = useState<number>(id);


  useEffect(() => {
    setSignId(id);
  }, [id]);
  const loadData = async () => {
    if (!signId) {
      return;
    }
    const IdType = {
      signId: signId,
    }
    const res = await signRead(IdType);
    if (res) {
      setSign(res);
    } else {
      message.error('加载失败，请刷新重试');
    }
  };
  useEffect(() => {
    loadData();
  }, [signId]);

  const doApproved = async ()=>{
    const res = await approved(sign);
    if(res.message === '操作成功！'){
      message.success("操作成功！")
    }else{
      message.error(res.message);
    }
  }

  const formatDateTimeStr = (time: any, format = 'YYYY-MM-DD HH:mm:ss') => {
    if (!time) {
      return '';
    }
    return moment(time).format(format);
  };

  return (
    <div>
      <div style={{ marginTop: 16 }} />
      <Card>
        <Descriptions column={1} labelStyle={{ width: 192, marginBottom: 8 }} colon={false}>
          <Descriptions.Item label="姓名">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
            {sign.signName}
          </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="学号">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
              {sign.signSId}
            </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="专业班级">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
              {sign.majorClass}
            </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="电话号码">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
              {sign.phoneNumber}
            </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="QQ号">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
              {sign.qqId}
            </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="电子邮件">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
              {sign.email}
            </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="数学相关经历及获奖情况：">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
              {sign.experience}
            </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="为什么想加入数学建模协会：">
            <Typography.Paragraph style={{whiteSpace:'pre-wrap'}}>
              {sign.reasons}
            </Typography.Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label="发送时间">
            {formatDateTimeStr(sign.createTime)}
          </Descriptions.Item>
        </Descriptions>
        <Button onClick={doApproved}>审核通过！</Button>
      </Card>
    </div>

  );
};
export default UserDetail;
