/**
 * 题目类型
 */
export interface TopicType {
  topicId: number;
  topicTitle?: string;
  topicContent: string;
  topicLikes: number;
  isStared: boolean;
  userId: number;
  isDelete: boolean;
  replyNum: number;
  createTime: Date;
  updateTime: Date;
}

export interface simpleTopicType {
  topicTitle?: string;
  topicContent: string;
  userId: number;
}


type UploadResult = string;
type TopicLikesType = number;
