
import request from '@/utils/request'
import qs from 'qs';

export function logining(data) {
  return request({
  	//请求的后端接口，拿到后台数据
    url: '/c4c/snd-solution/addSndSolution',
    headers: {
      // 'Access-Control-Allow-Origin': *,
      'Content-Type':'application/x-www-form-urlencoded',
      "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjAxOTU5OTA0LCJpYXQiOjE2MDEzNTUxMDR9.nmW7nBw_ORoBtOW5ZVLlJW3a3blyXqmRWbKBXCnGbwi8C9tjYIB0rpILK52K--Gmbp-QpsWKYsjZXdzzmCt5DA"
    },
    //请求方式
    method: 'post',
    //提交的参数,其中本应该是data:data形式，但是因为request中参数data与该函数参数同名就只用写一个data即可
    data:qs.stringify(data)
  })
}
export function logining1(data) {
  return request({
  	//请求的后端接口，拿到后台数据
    url: '/c4c/snd-solution/addSndSolution',

    headers: {
      // 'Access-Control-Allow-Origin': *,
      'Content-Type':'application/x-www-form-urlencoded',
      "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjAxMzAwNDcxLCJpYXQiOjE2MDEyODI0NzF9.HeCKiMlnn2nctJ8T7Yg1Ive3pmsdRnrjDYTIHGE8lv9MMFIcrt977HyBmI6bZwwbUOKmyT87O1kRBnGSaQ-cWQ"
    },
    //请求方式
    method: 'post',
    //提交的参数,其中本应该是data:data形式，但是因为request中参数data与该函数参数同名就只用写一个data即可
    data
  })
}

/*

export function logining1(data) {
  return request({
  	//请求的后端接口，拿到后台数据
    url: 'http://221.122.122.58:8080/c4c/snd-solution/querySndSolution',

    headers: {
      // 'Access-Control-Allow-Origin': *,
      'Content-Type':'application/x-www-form-urlencoded',
      "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjAxMzAwNDcxLCJpYXQiOjE2MDEyODI0NzF9.HeCKiMlnn2nctJ8T7Yg1Ive3pmsdRnrjDYTIHGE8lv9MMFIcrt977HyBmI6bZwwbUOKmyT87O1kRBnGSaQ-cWQ"
    },
    //请求方式
    method: 'post',
    //提交的参数,其中本应该是data:data形式，但是因为request中参数data与该函数参数同名就只用写一个data即可
    data
  })
}

*/
