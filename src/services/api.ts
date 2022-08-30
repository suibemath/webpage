// @ts-ignore
/* eslint-disable */
import request from '@/plugins/gllobalRequest';

/** 获取当前的用户 GET /api/user/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.CurrentUser>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据Id获取用户信息 POST /api/user/searchByUserId */
export async function searchByUserId(body: API.UserIdType,options?: { [key: string]: any }) {
  return request<API.CurrentUser>('/api/user/searchByUserId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/user/login/*/
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 POST /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.RegisterResult>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 POST /api/user/changePassword */
export async function changePassword(body: API.ChangePasswordParams, options?: { [key: string]: any }) {
  return request<string>('/api/user/changePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改积分接口 POST /api/user/scoreChange */
export async function scoreChange(body: API.ChangeScoreParams, options?: { [key: string]: any }) {
  return request<API.UserIdType>('/api/user/scoreChange', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 封禁接口 POST /api/user/sealUser */
export async function sealUser(body: API.UserIdType, options?: { [key: string]: any }) {
  return request<API.UserIdType>('/api/user/sealUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解封接口 POST /api/user/unsealUser */
export async function unsealUser(body: API.UserIdType, options?: { [key: string]: any }) {
  return request<API.UserIdType>('/api/user/unsealUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加为管理员接口 POST /api/user/giveManager */
export async function giveManager(body: API.UserIdType, options?: { [key: string]: any }) {
  return request<API.UserIdType>('/api/user/giveManager', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解除管理员接口 POST /api/user/recaptureManager */
export async function recaptureManager(body: API.UserIdType, options?: { [key: string]: any }) {
  return request<API.UserIdType>('/api/user/recaptureManager', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解除管理员接口 POST /api/user/scoreReset */
export async function scoreReset(body: API.ResetScore, options?: { [key: string]: any }) {
  return request<string>('/api/user/scoreReset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 返回所有用户排名列表 post /api/user/getAllUsers */
export async function getAllUsers(options?: { [key: string]: any }) {
  return request<API.CurrentUser[]>('/api/user/getAllUsers', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 返回所有用户月排名列表 post /api/user/getAllUsersByMonth */
export async function getAllUsersByMonth(options?: { [key: string]: any }) {
  return request<API.CurrentUser[]>('/api/user/getAllUsersByMonth', {
    method: 'POST',
    ...(options || {}),
  });
}


/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
