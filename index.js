/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

function convert (val) {
  if (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(val)) {
    return Number(val)
  }

  if (/^(true|false)$/.test(val)) {
    return val === 'true'
  }

  if (/(\d{4}-\d{2}-\d{1,2}).*/.test(val)) {
    return new Date(val)
  }

  if (/null/.test(val)) {
    return null
  }

  if (/undefined/.test(val)) {
    return undefined
  }

  return val
}

module.exports = parser

function parser (args) {
  args = args || process.argv.slice(2)
  var key
  var obj = {_: []}

  for (var i = 0; i < args.length; i++) {
    if (/^-\w|^--\w*=\w*/.test(args[i])) {
      key = args[i].replace(/^--/, '').replace(/^-/, '')

      // passing args this way --app=80 or -p 80
      if (/=/.test(key)) {
        var splArg = key.split('=')
        obj[splArg[0]] = convert(splArg[1])
        key = null
      }

      continue
    }

    if (key) {
      obj[key] = convert(args[i])
      key = null
    } else {
      if (/^--/.test(args[i])) {
        args[i] = args[i].replace('--', '')
      }

      obj._.push(convert(args[i]))
    }
  }
  return obj
}
