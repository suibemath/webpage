// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 更新用户数据接口 POST /api/user/update */
export async function updateUser(body: API.CurrentUser, options?: { [p: string]: any }) {
  return request<API.UpdateResult>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
