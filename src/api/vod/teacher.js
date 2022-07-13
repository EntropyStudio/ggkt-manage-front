import request from '@/utils/request'

const API_NAME = '/admin/vod/teacher'
export default {
  // 讲师条件查询分页
  pageList(current, limit, searchObj) {
    return request({
      url: `${API_NAME}/findQueryPage/${current}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 讲师删除接口
  removeTeacherId(id) {
    return request({
      url: `${API_NAME}/remove/${id}`,
      method: 'delete'
    })
  },
  // 讲师条件查询分页
  saveTeacher(teacher) {
    return request({
      url: `${API_NAME}/save`,
      method: 'post',
      data: teacher
    })
  },
  // 根据id修改教师信息
  updateTeacher(teacher) {
    return request({
      url: `${API_NAME}/update`,
      method: 'put',
      data: teacher
    })
  },
  // 根据id查询信息
  getById(id) {
    return request({
      url: `${API_NAME}/get/${id}`,
      method: 'get'
    })
  },
  batchRemove(idList) {
    return request({
      url: `${API_NAME}/batchRemove`,
      method: `delete`,
      data: idList
    })
  },
  // 所有讲师
  list() {
    return request({
      url: `${API_NAME}/findAll`,
      method: `get`
    })
  }
}

