import request from '@/utils/request'
const api_name = '/edu/teacher'
export default {
  getList() {
    return request({
      url: api_name,
      method: 'get'
    })
  },
  getPageList(page, limit) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get'
    })
  },
  getById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'get'
    })
  }
}
