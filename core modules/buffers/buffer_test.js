
var buf = new Buffer(1024);

//console.log(buf.length)

len = buf.write('\u00bd + \u00bc = \u00be', 0);
//console.log(len + " bytes: " + buf.toString('utf8', 0, len));
console.log(buf.byteLength)

