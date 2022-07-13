import request from '@/utils/request'

const API_NAME = '/admin/vod/subject'
export default {
  getChildList(id) {
    return request({
      url: `${API_NAME}/getChildSubject/${id}`,
      method: 'get'
    })
  }
}
