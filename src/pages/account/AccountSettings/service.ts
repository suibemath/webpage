import { request } from 'umi';

export async function query() {
  return request('/api/users');
}
