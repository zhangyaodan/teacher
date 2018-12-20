// 当前环境的域名
const hostname = window.location.hostname === 'localhost' ? 'test.wisdom.com' : window.location.hostname
// 是否是测试环境
export const islocal = window.location.hostname === 'localhost' || '192.168.0.112'
// 域名的拼接
export const HTTP_MAIN = `http://${hostname}/`
