import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Avatar, Button, message, Row, Space, Tag} from "antd";
import {getTopic} from "@/services/topicList";
import {TopicType} from "@/model/topic";
import {CurrentUser} from "@/model/user";
import {searchByUserId} from "@/services/api";
import Col from 'antd/es/grid/col';
import Card from 'antd/lib/card/Card';
import {formatPartDateTimeStr} from '@/utils/utils';
import {GridContent} from '@ant-design/pro-components';
import QuestionDetailCard from "@/pages/QuestionDetail/QuestionDetailCard";
import ReplyList from "@/pages/QuestionDetail/ReplyList";
import AddReportModal from "@/components/AddReportModal";


const QuestionDetail: React.FC = () => {
  const { id } = useParams<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [topic, setTopic] = useState<TopicType>({} as TopicType);
  const [user, setUser] = useState<CurrentUser>({} as CurrentUser);
  const [topicId, setTopicId] = useState<number>(id);
  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);

  useEffect(() => {
    setTopicId(id);
  }, [id]);

  const loadData = async () => {
    if (!topicId) {
      return;
    }
    const IdType = {
      topicId: topicId,
    }
    setLoading(true);
    const res = await getTopic(IdType);
    if (res) {
      setTopic(res);
      const userIdType = {
        userId: res.userId,
      }
      searchByUserId(userIdType)?.then((tmpUser) => {
        setUser(tmpUser);
      });
    } else {
      message.error('题目加载失败，请刷新重试');
    }
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, [topicId]);

  const clickChange = async () =>{
    setAddModalVisible(true);
  }

  return (
    <GridContent className="question-detail" style={{ overflowX: 'hidden' }}>
      <Row gutter={[24, 24]}>
        <Col xl={16} lg={24} xs={24}>
          <Card
            title= "题目详情"
            bordered={false}
            extra={
              <Tag visible={topic.isStared} color={"red"}>{topic.isStared}</Tag>
            }
            style={{ marginBottom: 24 }}
            loading={loading}
          >
            {topic.topicId && (
              <div>
                <QuestionDetailCard topic={topic} />
                <div style={{ marginBottom: 16 }} />
              </div>
            )}
          </Card>
          <ReplyList topic={topic}/>
        </Col>
        <Col xl={8} lg={24} xs={24}>
          <Card
            title={[
              <Space size={"large"}>
                <div>题目信息</div>
                <Button onClick={clickChange}>举报</Button>
              </Space>
            ]}
            bodyStyle={{ paddingBottom: 8 }}>
            {topic.createTime && (
              <p>发布时间：{formatPartDateTimeStr(topic?.createTime)}</p>
            )}
            <p>
              上传者：
              <Space>
                <Avatar src={user.avatarUrl} />
                  <span>{user.username}  {user.gender}</span>
              </Space>
            </p>
          </Card>
          <div style={{ marginBottom: 24 }} />
          <div style={{ marginBottom: 24 }} />
        </Col>
      </Row>
      <AddReportModal
        topic={topic}
        visible={addModalVisible}
        onClose={() => setAddModalVisible(false)}
      />
    </GridContent>


  );
};

export default QuestionDetail;
