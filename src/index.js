require('dotenv').config();
const { Client, IntentsBitField, SlashCommandBuilder, VoiceChannel } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) =>{
    console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    }
    
    if (msg.content === 'hallo') {
        msg.reply('Moin!');
    }

})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('hey!')
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!')
    }

    if (interaction.commandName === 'tao') {
        interaction.reply("Hu Tao[Note 2] (Chinese: 胡桃 Hú Táo) is a playable Pyro character in Genshin Impact. Hu Tao's antics and eccentricity belies her role as the 77th Director of the Wangsheng Funeral Parlor and her talent as a poet. Nevertheless, she treats the parlor's operations with utmost importance, and holds funeral ceremonies with the highest dignity and solemnity.")
    }
    
    if (interaction.commandName === 'präsentation') {
        const voiceChannel = interaction.member.voice.channel;
        
        /*if (!voiceChannel) {
            interaction.reply('Du musst in einem Voice-Channel sein, um die Präsentation zu starten.');
            return;
        }*/
        //TODO: Text einfügen
        const presentationText = ' ';
        
        voiceChannel
        .join()
        /*.then((connection) => {
            
            const dispatcher = connection.play(presentationText);
            dispatcher.on('finish', () => {
                voiceChannel.leave
            });
        })
        .catch(console.error);*/
        
        interaction.reply(`Die Präsentation wurde im Voice-Channel gestartet: %{voiceChannel.name}`);
        }
});


client.login(process.env.TOKEN);