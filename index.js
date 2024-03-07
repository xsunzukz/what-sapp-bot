const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', async (message) => {
	if (message.body === 'Hi') {
		await message.reply(`Hi, \n${message.from} \n It's Sandip/ChaiWala, \n How can i help you today? \n it's a automate message!`);
	}
});

client.initialize();
