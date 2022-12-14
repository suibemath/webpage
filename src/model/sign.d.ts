/**
 * 消息类型
 */
export interface SignType {

  signId: number;
  signName: string;
  signSId: string;
  qqId: string;
  majorClass: string;
  phoneNumber: string;
  email: string;
  experience: string;
  reasons: string;
  sendId: number;
  receiveId: number;
  isDelete: boolean;
  isRead: boolean;
  receiveDelete: boolean;
  createTime: Date;
  updateTime: Date;
}

export interface ReportType {
  signName: string;
  signSId: string;
  qqId: string;
  majorClass: string;
  phoneNumber: string;
  email: string;
  experience: string;
  reasons: string;
  sendId: number;
}

export interface ListReportType {
  signId: number;
  signName: string;
  signSId: string;
  qqId: string;
  majorClass: string;
  phoneNumber: string;
  email: string;
  experience: string;
  reasons: string;
  sendId: number;
  createTime: Date;
}

export interface SignIdType {
  signId: number;
}
