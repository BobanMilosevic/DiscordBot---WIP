require('dotenv').config();
const { Client, IntentsBitField, SlashCommandBuilder, VoiceChannel } = require('discord.js')
const { joinVoiceChannel } = require('@discordjs/voice');

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
        interaction.reply("Vortrag über Discord: Moderne Kommunikation in der Digitalen Welt - Liebe Zuhörerinnen und Zuhörer, Discord, im Jahr 2015 von Jason Citron und Stan Vishnevskiy gegründet, hat sich von seiner ursprünglichen Rolle als Kommunikationsplattform für Gamer zu einer vielseitigen und universellen Lösung entwickelt. Discord bietet eine Fülle von Funktionen, darunter Sprach- und Videoanrufe, Textnachrichten, Server und Kanäle, Bots und Erweiterungen sowie integrierte Spielefunktionen. Dies macht Discord zu einer äußerst vielseitigen Plattform, die in zahlreichen Bereichen Anwendung findet. Die Anwendungsbereiche von Discord sind breit gefächert. In der Bildung nutzen Lehrer und Schüler Discord für virtuellen Unterricht und Gruppenarbeit. Unternehmen setzen Discord für Teamkommunikation und Videokonferenzen ein. Online-Communities, sei es für Hobbys, Interessen oder Fanclubs, finden auf Discord ihren Treffpunkt. Die Plattform wird auch für die Organisation von Veranstaltungen und Konferenzen verwendet. Künstler, Streamer und Content-Ersteller verwenden Discord, um mit ihren Fans und Zuschauern in Kontakt zu treten.In der Schlussfolgerung lässt sich sagen, dass Discord die Art und Weise, wie wir online kommunizieren, nachhaltig verändert hat. Als vielseitige Plattform hat sie in den Bereichen Bildung, Geschäftswelt, Gemeinschaften, Veranstaltungen und Unterhaltung einen wichtigen Platz eingenommen. Es wird spannend sein zu beobachten, wie Discord in den kommenden Jahren weiterhin unsere Kommunikation beeinflusst. Vielen Dank für Ihre Aufmerksamkeit, und ich stehe Ihnen gerne für Fragen zur Verfügung.")
    }   
   /*     if (!voiceChannel) {
            interaction.reply('Du musst in einem Voice-Channel sein, um die Präsentation zu starten.');
            return;
        }
        //TODO: Text einfügen
        const presentationText = ' ';
        
        voiceChannel
        .joinVoiceChannel()
        .then((connection) => {
            
            const dispatcher = connection.play(presentationText);

            dispatcher.on('start', () => {
                interaction.reply(`Die Präsentation wurde im Voice-Channel gestartet: %{voiceChannel.name}`); 
            });

            dispatcher.on('finish', () => {
                connection.leave();
            });

            dispatcher.on('error', (error) => {
                console.error('Fehler beim starten der Präsentation:', error);
                interaction.reply('Es ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
            });
        });

        client.join();*/
});
client.login(process.env.TOKEN);