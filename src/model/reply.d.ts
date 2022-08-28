/**
 * 回复类型
 */
export interface ReplyType {
  replyId: number;
  replyContent: string;
  replyLikes: number;
  isStared: boolean;
  topicId: number;
  userId: number;
  isDelete: boolean;
  createTime: Date;
  updateTime: Date;
}

export interface ReplyItemDataType {
  replyId: number;
  replyContent: string;
  replyLikes: number;
  isStared: boolean;
  topicId: number;
  userId: number;
  isDelete: boolean;
  createTime: Date;
  updateTime: Date;
}

export interface writeReplyType {
  userId: number;
  topicId: number;
  replyContent: string;
}
type ReplyIdType = {
  replyId: number;
};
type Replyres = string;
