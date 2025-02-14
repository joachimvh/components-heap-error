const { ComponentsManager } = require('componentsjs');
const path = require('path');

async function test(){
  const rootDir = path.join(__dirname, '../');

  const manager = await ComponentsManager.build({
    mainModulePath: rootDir,
    logLevel: 'silly',
    typeChecking: false,
  });

  await manager.configRegistry.register(path.join(rootDir, './config/default.json'));

  await manager.instantiate('urn:test:Bar');
}
test();
