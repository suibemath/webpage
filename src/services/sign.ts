import request from '@/plugins/gllobalRequest';
import {ReportType, SignIdType, SignType} from "@/model/sign";


/** 向管理员提交报名信息 /api/sign/signReport */
export async function signReport(body: ReportType,options?: { [key: string]: any }) {
  return request<API.StringResult>('/api/sign/signReport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 读申请表 /api/sign/read */
export async function signRead(body: SignIdType,options?: { [key: string]: any }) {
  return request<SignType>('/api/sign/read', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 返回登录者未读的信息POST /api/sign/getUnRead */
export async function getUnRead(options?: { [key: string]: any }) {
  return request<SignType[]>('/api/sign/getUnRead', {
    method: 'POST',
    ...(options || {}),
  });
}


/** 返回登录者已读的信息POST /api/sign/getRead */
export async function getRead(options?: { [key: string]: any }) {
  return request<SignType[]>('/api/sign/getRead', {
    method: 'POST',
    ...(options || {}),
  });
}


/** 删除申请表POST /api/sign/delete */
export async function signDelete(body: SignType,options?: { [key: string]: any }) {
  return request<API.StringResult>('/api/sign/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 管理员审核通过 /api/sign/approved */
export async function approved(body: SignType,options?: { [key: string]: any }) {
  return request<API.StringResult>('/api/sign/approved', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
