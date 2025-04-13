const venom = require('venom-bot');

venom
  .create({
    session: 'AlaiaSession',
    headless: false, // Esto permite mostrar el QR
    multidevice: true,
    useChrome: true,
    disableWelcome: true,
  })
  .then((client) => {
    console.log('🤖 Bot conectado exitosamente');
    
    // Aquí puedes empezar a programar las respuestas del bot
    client.onMessage(async (message) => {
      if (message.body === 'hola' && message.isGroupMsg === false) {
        await client.sendText(message.from, '¡Hola! Soy el bot de Alaia Clothes 👗✨. ¿En qué puedo ayudarte hoy?');
      }
    });

  })
  .catch((erro) => {
    console.error('❌ Error al iniciar el bot:', erro);
  });
