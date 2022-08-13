import {Button, Typography} from 'antd';
import React, {useState} from 'react';
import './index.less';
import {TopicType} from "@/model/topic";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import {topicLike} from "@/services/topicList";
import message from "antd/es/message";
import {currentUser as queryCurrentUser} from "@/services/api";

interface QuestionDetailCardProps {
  topic: TopicType;
  index?: number; // 题号
}

const fetchUserInfo = async () => {
  const user = await queryCurrentUser();
  return user;
};

const currentUser = await fetchUserInfo();
/**
 * 题目详细信息（只读，给试卷、题目详情等页面使用）
 * @param props
 * @constructor
 * @author liyupi
 */
const QuestionDetailCard: React.FC<QuestionDetailCardProps> = (props) => {
  const { topic = {} as TopicType} = props;
  const IconText: React.FC<{
    type: string;
    text: React.ReactNode;
  }> = ({type, text}) => {
    switch (type) {
      case 'star-o':
        return (
          <span>
            <StarOutlined style={{marginRight: 8}}/>
            {text}
          </span>
        );
      case 'like-o':
        return (
          <span>
            <LikeOutlined style={{marginRight: 8}}/>
            {text}
          </span>
        );
      case 'message':
        return (
          <span>
            <MessageOutlined style={{marginRight: 8}}/>
            {text}
          </span>
        );
      default:
        return null;
    }
  };
  // const doThumbUp = async (id: string) => {
  //
  //   if (thumbLoading) {
  //     return;
  //   }
  //   setThumbLoading(true);
  //   const res = await thumbUpComment(id);
  //   if (res === 1 || res === -1) {
  //     comment.thumbNum = (comment.thumbNum ?? 0) + res;
  //     const thumbCommentIds = currentUser.thumbCommentIds ?? [];
  //     if (res > 0) {
  //       thumbCommentIds.push(comment._id);
  //     } else {
  //       thumbCommentIds.splice(thumbCommentIds.indexOf(comment._id), 1);
  //     }
  //     const newCurrentUser = { ...currentUser, thumbCommentIds };
  //     setInitialState({ ...initialState, currentUser: newCurrentUser });
  //   } else {
  //     message.error('操作失败，请刷新重试');
  //   }
  //   setThumbLoading(false);
  // };

  const onClickLikes = async ()=>{
    if ( currentUser.id === topic.userId ){
      message.info("您不能给自己的题目点赞")
    }else{
      const newTopic = await topicLike(topic);
      if(newTopic== null){
        message.error("点赞出错")
      }
    }
  }
  const questionTitle = topic.topicTitle;
  const [ellipsis] = useState(true);
  return (
    <div className="question-detail-card">
      <Typography.Title level={4} style={{ marginBottom: 16 }}>
        {questionTitle}
      </Typography.Title>
      <Typography.Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
        {topic.topicContent}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Button onClick={onClickLikes}><IconText key="like" type="like-o" text={topic.topicLikes}/></Button>
      </Typography.Paragraph>
    </div>
  );
};

export default QuestionDetailCard;


