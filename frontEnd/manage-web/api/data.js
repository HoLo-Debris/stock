import axios from './axios'

export const getMenu = (param) => {
    return axios.request({
        usl: '/permission/getMenu',
        method: 'post',
        data: param
    })
} 

export const getData = () => {
    return axios.request({
        url: '/home/getData'
    })
}