const venom = require('venom-bot');

venom
  .create({
    session: 'AlaiaSession',
    multidevice: true
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hola' && message.isGroupMsg === false) {
      client.sendText(message.from, '¡Hola! Soy el Asistente de Alaia Clothes. ¿En qué puedo ayudarte hoy?');
    }
  });
}