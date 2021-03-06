import request from '@/utils/request'
// import getToken from '@/utils/auth'
import Cookies from 'js-cookie'


const TokenKey = 'Admin-Token'



export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/v1/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(access_token) {
  return request({
    url: '/v1/user/login',
    method: 'get',
    params: { access_token }
  })
}

export function getMyToken() {
  return Cookies.get(TokenKey)
}



