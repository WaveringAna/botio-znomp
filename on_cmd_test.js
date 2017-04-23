var botio = require(process.env['BOTIO_MODULE']);
var shell = require('shelljs');

/*echo('These are the files in your repo:');
ls().forEach(function(file) {
  echo('  '+file);
});

botio.message('#### Hello world');
botio.message('Your Botio installation works! View full output for the list of files in this repo');*/

shell.echo('>> Installing');
shell.echo();
shell.exec('npm install', {async:false});

shell.echo('>> Copying bot.json');
shell.cp(__dirname+'/bot.json', './pool_configs/bot.json');

shell.echo('>> Copying config.json');
shell.cp('config_example.json', 'config.json');

shell.echo('>> Running z-nomp for 60 seconds');
shell.exec('timeout 30 npm start');

shell.echo('********************************************');
shell.echo('********************************************');
shell.echo('Done!!!!!!!');
