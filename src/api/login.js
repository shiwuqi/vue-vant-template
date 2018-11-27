import request from '../utils/request'

export function loginIn(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}