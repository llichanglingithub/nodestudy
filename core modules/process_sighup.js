
//一个给自己发送信号的示例：
// process.on('SIGHUP', function () {
//   console.log('Got SIGHUP signal.');
// });

// setTimeout(function () {
//   console.log('Exiting.');
//   process.exit(0);
// }, 100);

// process.kill(process.pid, 'SIGHUP');



//运行Node的平台信息，如'linux2'，'darwin'`等等。
console.log('This platform is ' + process.platform);