var test = require('tape');
var parser = require('./');


test('parsing the various types', function (t) {
  t.plan(7);

  t.deepEqual(parser(['--port', '80']),
              { _: [], port: 80 },
              'parse a number - port: 80');

  t.deepEqual(parser(['hello', 'world', '556.7']),
              { _: ['hello', 'world', 556.7]},
              'parse an array of args - [\'hello\', \'world\', 556.7]');

  t.deepEqual(parser(['--date', '2014-05-29T12:00:02']),
              { _: [], date: new Date('2014-05-29T12:00:02') },
              'parse a date - date: Thu May 29 2014 13:00:02 GMT+0100 (WEST)');

  t.deepEqual(parser(['--null_arg', 'null']),
              { _: [], null_arg: null},
              'parse a null value - null_arg: null');

  t.deepEqual(parser(['--undefined_arg', 'undefined']),
              { _: [], undefined_arg: undefined},
              'parse a undefined value - undefined_arg: undefined');

  t.deepEqual(parser(['--reboot=false']), {_: [], reboot: false}, 'parse a boolean - reboot: false');

  t.deepEqual(parser(['--port', '80',
                     'test1', 'test2',
                     '--app=hello',
                     '--status=true',
                     '--clean=null',
                     '--a', '122.2',
                     '--b', 'undefined',
                     '--c', '2012-09-11T11:00:00',
                     '122.5']),
              { _: [ 'test1', 'test2', 122.5 ],
                a: 122.2,
                app: 'hello',
                b: undefined,
                c: new Date('2012-09-11T11:00:00'),
                clean: null,
                port: 80,
                status: true },
              'parsing a big arguments line - ' +
             '--port 80 test1 test2 --app=hello --status=true --clean=null' +
             ' --a 122.2 --b undefined --c "2012-09-11T11:00:00" 122.5');
});
