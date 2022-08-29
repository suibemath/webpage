import { request } from '@@/plugin-request/request';
import {ReplyIdType, Replyres, ReplyType, writeReplyType} from '@/model/reply';
import { TopicType } from '@/model/topic';

/** 根据题目获取用户信息 POST /api/reply/getTopicReply */
export async function getReply(body: TopicType, options?: { [key: string]: any }) {
  return request<ReplyType[]>('/api/reply/getTopicReply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据题目获取用户信息 POST /api/reply/writeReply */
export async function writeReply(body: writeReplyType, options?: { [key: string]: any }) {
  return request<Replyres>('/api/reply/writeReply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 点赞回复 POST /api/reply/like */
export async function replyLike(body: ReplyType, options?: { [key: string]: any }) {
  return request<ReplyType>('/api/reply/like', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 返回登录者发布的回复GET /api/reply/getMyReply */
export async function getMyReply(options?: { [key: string]: any }) {
  return request<ReplyType[]>('/api/reply/getMyReply', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 作者删除回复 POST /api/reply/deleteByAuthor */
export async function deleteReplyByAuthor(body: ReplyIdType, options?: { [key: string]: any }) {
  return request<ReplyIdType>('/api/reply/deleteByAuthor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 管理员删除回复 POST /api/reply/deleteByAuthor */
export async function deleteReplyByManager(body: ReplyIdType, options?: { [key: string]: any }) {
  return request<ReplyIdType>('/api/reply/deleteByAuthor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 精选或取消回复 POST /api/reply/star */
export async function star(body: ReplyType, options?: { [key: string]: any }) {
  return request<ReplyType>('/api/reply/star', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
