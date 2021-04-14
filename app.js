const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config(); 

(async () => {
    client.on('ready', async () => { 
        await client.setActivity({ 
            buttons: [{ label: "Github🤖", url: "https://github.com/kingjuno" },{ label: "Instagram 🐵", url: "https://instagram.com/geo__jolly" }],
            details: "må kraften være med deg",
            largeImageKey: "test2",
            largeImageText: "😜"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();