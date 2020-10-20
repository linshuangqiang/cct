
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
// 代理商销售PDP名称下拉
export function quaryMemberlist(data){
  return request({
    url: '/c4c/memberlist/quaryMemberlist',
    method: 'post',
    data:qs.stringify(data)
  })
}

export function getProductList(data){
  return request({
    url: '/c4c/snd-product/getProductList',
    method: 'post',
    data:qs.stringify(data)
  })
}
export function sndDesign(data){
  return request({
    url: '/c4c/snd-design/addDesign',
    method: 'post',
    data:qs.stringify(data)
  })
}
export function filterSndSolution(data){
  return request({
    url: '/c4c/snd-solution/filterSndSolution',
    method: 'post',
    data:qs.stringify(data)
  })
}

// export function quaryStatuscode(data){
//   return request({
//     url: '/c4c/snd-statuscode/quaryStatuscode',
//     method: 'get',
//     data:qs.stringify(data)
//   })
// }
export function quaryStatuscode(data){
  return request({
    url: '/c4c/snd-statuscode/quaryStatuscode?'+data,
    method: 'get',
    data
  })
}

export function deleteSndSolution(data){
  return request({
    url: '/c4c/snd-solution/deleteSndSolution',
    method: 'post',
    data:qs.stringify(data)
  })
}
