var url = require('url')

var urlString = "http://192.168.1.102:8080/l/c/l?name=lcl&pass=123#hash"

var URL= url.parse(urlString)//把urlString解析为一个对象
console.log('parse===',URL.hash)

console.log('format', url.format(URL))//把一个对象转换为一个URLString字符串


