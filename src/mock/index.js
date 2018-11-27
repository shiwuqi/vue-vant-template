import Mock from 'mockjs'
const Random = Mock.Random

function randomImage(val) {
  let imgList = []
  for(var i=0; i < val; i++) {
    imgList.push(Random.image('700x350', Random.color(), '#FFF', 'png', i))
  }
  return imgList
}

if (process.env.NODE_ENV === 'development') {
  const data = {
    status: '00',
    log: '获取成功',
    data: {
      images: randomImage(4)
    }
  }
  Mock.mock(/\/image/, 'get', data)
}