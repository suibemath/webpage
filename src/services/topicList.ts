import request from '@/plugins/gllobalRequest';
import {TopicType} from "@/model/topic";

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
export async function getTopicById(body: API.TopicIdType,options?: { [key: string]: any }) {
  return request<TopicType>('/api/topic/getTopicById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取题目点赞数 POST /api/topic/searchTitle */
export async function searchTitle(body: API.SearchTopic,options?: { [key: string]: any }) {
  return request<TopicType[]>('/api/topic/searchTitle', {
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

/** 作者删除题目 POST /api/topic/deleteByAuthor */
export async function deleteByAuthor(body: API.TopicIdType,options?: { [key: string]: any }) {
  return request<API.TopicIdType>('/api/topic/deleteByAuthor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 管理员删除题目 POST /api/topic/deleteByManager */
export async function deleteTopicByManager(body: API.TopicIdType,options?: { [key: string]: any }) {
  return request<API.TopicIdType>('/api/topic/deleteByManager', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 精选题目 POST /api/topic/star */
export async function topicStar(body: TopicType,options?: { [key: string]: any }) {
  return request<TopicType>('/api/topic/star', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
