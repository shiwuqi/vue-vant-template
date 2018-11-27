import request from "@/utils/request"

// 获取图片
export function queryImgList() {
  return request({
    url: '/image',
    method: 'get'
  })
}
