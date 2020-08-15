const tmi = require('tmi.js')

const options = {
  options: {
    debug: true
  },
  connection:{
    reconnect: true
  },
  identity: {
    username:'TiagoI1704',
    password:'oauth:7g79ojnsf5djm7byq9mmxl4nw590fz'
  },
  channels: ['TiagoI1704']
}

const client = new tmi.client(options)

client.connect();

client.on('connected', (address, port) => {
  client.action('TiagoI1704', `Conectado, pasala joya ${address}:${port}`)
})

client.on('chat', (target, ctx, message, self) => {
  if(self) return;

  console.log(target);
  console.log(ctx)

  const commandName= message.trim();

  if(commandName ==='!saludo'){
  client.say(target, `Bienvenido ${ctx.username}`)
  }

  if(commandName === "!game"){
    client.say(target, 'Tiago está jugando Buscaminas');
  }
  if(commandName === "!dice"){
    const num = rollDice();
    client.say(target, `Tirás el dado y sale un: ${num}`)
  }



});

function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
