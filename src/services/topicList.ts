import {request} from 'umi';
import {TopicLikesType, TopicType} from "@/model/topic";

/** 返回所有题目 GET /api/topic/getTotalTopic */
export async function getTotalTopics(options?: { [key: string]: any }) {
  return request<TopicType[]>('/api/topic/getTotalTopic', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 返回登录者发布的题目GET /api/topic/getMyTopic */
export async function getMyTopic(options?: { [key: string]: any }) {
  return request<TopicType[]>('/api/topic/getMyTopic', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据Id获取题目信息 POST /api/topic/getTopicById */
export async function getTopic(body: API.TopicIdType,options?: { [key: string]: any }) {
  return request<TopicType>('/api/topic/getTopicById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取题目点赞数 POST /api/topic/getTopicById */
export async function getTopicLikes(body: API.TopicIdType,options?: { [key: string]: any }) {
  return request<TopicLikesType>('/api/topic/getTopicById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 点赞题目 POST /api/topic/like */
export async function topicLike(body: TopicType,options?: { [key: string]: any }) {
  return request<TopicType>('/api/topic/like', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
