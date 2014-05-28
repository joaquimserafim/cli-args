
function convert (val) {
  if (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(val)) return Number(val);
  if (/^(true|false)$/.test(val)) return 'true' === val;
  if (/(\d{4}-\d{2}-\d{1,2}).*/.test(val)) return new Date(val);
  if (/null/.test(val)) return null;
  if (/undefined/.test(val)) return undefined;

  return val;
}


module.exports = parser;

function parser (args) {
  args = args || process.argv.slice(2);
  var key;
  var obj = {_: []};

  for (var i = 0; i < args.length; i++) {
    if (args[i].indexOf('--') === 0) {
      key = args[i].replace('--', '');

      // let pass args this way --app=80
      if (/=/.test(key)) {
        var splArg = key.split('=');
        obj[splArg[0]] = convert(splArg[1]);
        key = null;
      }

      continue;
    }

    if (key) {
      obj[key] = convert(args[i]);
      key = null;
    } else {
      obj._.push(convert(args[i]));
    }
  }
  return obj;
}
