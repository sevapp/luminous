import lucid, { log } from '../mod.ts';

namespace Main {
  log.def(lucid.Level.TRACE, 'this is default log');
  log.trc`
  this is trace log
  this is trace log
  this is trace log`;

  log.dbg`this is debug log`;
  log.vrb`this is verbose log`;
  log.inf`this is info log`;
  log.wrn`this is info log`;
  log.err`this is info log`;
  log.ftl`this is fatal log`;
}

namespace ModuleA {
  const log = lucid.createLogger({
    name: 'ModuleA',
  });

  log.inf`this is info log`;
}

namespace ModuleB {
  const log = lucid.createLogger({
    name: 'ModuleB',
  });

  log.inf`this is info log`;
}