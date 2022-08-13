import React, {useEffect, useState} from "react";
import {EditOutlined} from "@ant-design/icons";
import {Button, Card, List, message} from "antd";
import {ReplyItemDataType} from "@/model/reply";
import ReplyListContent from "@/pages/QuestionDetail/ReplyListContent";
import {TopicType} from "@/model/topic";
import {getReply} from "@/services/reply";
import AddReplyModal from "@/pages/QuestionDetail/AddReplyModal";

interface ReplyListProps {
  topic: TopicType;
}

const  ReplyList: React.FC<ReplyListProps> = (props) => {
  const { topic } = props;
  const [list, setList] = useState<ReplyItemDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
  /**
   * 加载数据
   */
  const loadData = async () => {
    if (!topic.topicId) {
      return;
    }
    setLoading(true);
    const res = await getReply(topic);
    if (res) {
      setList(res);
    } else {
      message.error('加载失败，请刷新重试');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (topic?.topicId) {
      loadData();
    }
  }, [topic]);



  const doAnswer = async ()=>{
    setAddModalVisible(true);
  }


  return (
    <>
      <Card
        style={{marginTop: 24}}
        bordered={false}
        bodyStyle={{padding: '8px 32px 32px 32px'}}
        extra={
          <Button type="primary" icon={<EditOutlined />} onClick={() => doAnswer()}>
            写回答
          </Button>
        }
      >
        <List<ReplyItemDataType>
          size="large"
          rowKey="topicId"
          itemLayout="vertical"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          loading={loading}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              key={item.replyId}
            >
              <ReplyListContent reply={item}/>
            </List.Item>
          )}
        />
        <AddReplyModal
          topicId={topic.topicId}
          visible={addModalVisible}
          onClose={() => setAddModalVisible(false)}
        />
      </Card>
    </>
  );
};

export default ReplyList;
