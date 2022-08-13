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

type UploadResult = string;
type TopicPagesResult = number;
type getTopicByIdType = number;
