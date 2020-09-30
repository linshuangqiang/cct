
import request from '@/utils/request'
import qs from 'qs';

/*
    headers: {
      // 'Access-Control-Allow-Origin': *,
      'Content-Type':'application/x-www-form-urlencoded',
    },
*/
export function querySndSolution(data) {
  return request({
    url: '/c4c/snd-solution/querySndSolution',
    method: 'post',
    //提交的参数,其中本应该是data:data形式，但是因为request中参数data与该函数参数同名就只用写一个data即可
    data:qs.stringify(data)
  })
}
export function addSndSolution(data) {
  return request({
    url: '/c4c/snd-solution/addSndSolution',
    method: 'post',
    data:qs.stringify(data)
  })
}
export function logining1(data) {
  return request({
    url: '/c4c/snd-solution/addSndSolution',
    method: 'post',
    data
  })
}
