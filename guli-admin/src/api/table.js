import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin/edu/teacher',
    method: 'get',
    params
  })
}
