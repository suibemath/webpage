export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export interface Params {
  count: number;
}
export interface current {
  current: number;
}
export interface ListItemDataType {
  topicId: number;
  topicTitle?: string;
  topicContent: string;
  topicLikes: number;
  isStared: boolean;
  userId: number;
  replyNum: number;
  isDelete: boolean;
  createTime: Date;
  updateTime: Date;
}
