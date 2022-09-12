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
  receiveDelete: boolean;
  createTime: Date;
  updateTime: Date;
}

export interface ReportType {
  messageContent: string;
  sendId: number;
}

export interface MessageIdType {
  messageId: number;
}
