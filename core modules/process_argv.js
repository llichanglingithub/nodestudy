
// 这产生如下的信息：

// $ node process-2.js one two=three four
// 0: node
// 1: /Users/mjr/work/node/process-2.js
// 2: one
// 3: two=three
// 4: four

//一个包含命令行参数的数组。第一个元素是'node'，第二个元素是JavaScript文件的文件名。接下来的元素则是附加的命令行参数。
// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });




////////////process.getgid()
// console.log('Current gid: ' + process.getgid());
// console.log('Current gid: ' + process.getgid());


//用来显示node version的
//console.log('Version: ' + process.version);


//一个编译内置的属性，用于显示NODE_PREFIX（Node安装路径前缀）。
console.log('Prefix: ' + process.installPrefix);