/**
 * 题目类型
 */
export interface TopicType {
  topicTitle?: string;
  topicContent: string;
  topicLikes: number;
  isStared: boolean;
  userId: number;
  isDelete: boolean;
  _createTime: Date;
  _updateTime: Date;
}

type UploadResult = string;
