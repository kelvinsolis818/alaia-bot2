const venom = require('venom-bot');

venom
  .create({
    session: 'AlaiaSession',
    multidevice: true,
    headless: true, // headless activado para que funcione en Render
    useChrome: false, // false para evitar problemas con entorno sin GUI
    disableWelcome: true,
    logQR: true, // Esto imprime el QR en texto
  })
  .then((client) => {
    console.log('✅ Bot conectado exitosamente');

    client.onMessage(async (message) => {
      if (message.body.toLowerCase() === 'hola' && !message.isGroupMsg) {
        await client.sendText(
          message.from,
          '¡Hola! Soy el bot de Alaia Clothes 👗✨. ¿En qué puedo ayudarte hoy?'
        );
      }
    });

  })
  .catch((error) => {
    console.error('❌ Error al iniciar el bot:', error);
  });
