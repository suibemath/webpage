// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { TopicType, UploadResult } from '@/model/topic';

/** 上传题目接口 POST /api/topic/upload */
export async function addTopics(body: TopicType, options?: { [p: string]: any }) {
  return request<UploadResult>('/api/topic/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
