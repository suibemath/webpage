import {request} from "@@/plugin-request/request";
import {Replyres, ReplyType, writeReplyType} from "@/model/reply";
import {TopicType} from "@/model/topic";

/** 根据题目获取用户信息 POST /api/reply/getTopicReply */
export async function getReply(body: TopicType,options?: { [key: string]: any }) {
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
export async function writeReply(body: writeReplyType,options?: { [key: string]: any }) {
  return request<Replyres>('/api/reply/writeReply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 点赞题目 POST /api/reply/like */
export async function replyLike(body: ReplyType,options?: { [key: string]: any }) {
  return request<ReplyType>('/api/reply/like', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
