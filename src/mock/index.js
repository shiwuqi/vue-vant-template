import Mock from 'mockjs'
const Random = Mock.Random

if (process.env.NODE_ENV === 'development') {
  const login = {
    status: '00',
    log: '登录成功',
    data: {
      token: Random.guid()
    }
  }
  Mock.mock(/\/login/, 'post', login)
}