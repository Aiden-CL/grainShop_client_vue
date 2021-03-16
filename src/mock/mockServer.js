//主要是为了模拟接口
import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

//1.发请求的路径   2.生成的数据格式
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })

