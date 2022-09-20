import request from '@/plugins/gllobalRequest';
import {MessageIdType, MessageType, ReportType} from "@/model/message";


/** 返回登录者未读的信息POST /api/message/getUnRead */
export async function getUnRead(options?: { [key: string]: any }) {
  return request<MessageType[]>('/api/message/getUnRead', {
    method: 'POST',
    ...(options || {}),
  });
}


/** 返回登录者已读的信息POST /api/message/getRead */
export async function getRead(options?: { [key: string]: any }) {
  return request<MessageType[]>('/api/message/getRead', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 返回登录者已读的信息POST /api/message/report */
export async function report(body: ReportType,options?: { [key: string]: any }) {
  return request<API.StringResult>('/api/message/report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取信息POST /api/message/read */
export async function messageRead(body: MessageIdType,options?: { [key: string]: any }) {
  return request<MessageType>('/api/message/read', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除消息POST /api/message/delete */
export async function messageDelete(body: MessageType,options?: { [key: string]: any }) {
  return request<API.StringResult>('/api/message/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
