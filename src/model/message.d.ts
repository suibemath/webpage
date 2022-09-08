/**
 * 消息类型
 */
export interface MessageType {
  messageId: number;
  messageContent: string;
  sendId: number;
  receiveId: number;
  isDelete: boolean;
  isRead: boolean;
  sendDelete: boolean;
  createTime: Date;
  updateTime: Date;
}
