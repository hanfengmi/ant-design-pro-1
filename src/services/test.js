import request from '@/utils/request';

export default async function find() {
  return request('/api/test');
}
