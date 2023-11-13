require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
    {
        name: 'ping',
        description: 'Pong!',
    },
    {
        name: 'tao',
        description: 'Hu Tao!',
    },
    {
        name: 'präsentation',
        description: 'Gibt die Präsentation aus!'
    },
    {
        name: 'konvertiere',
        description: 'Konvertiert zwischen den Zahlensystemen!',
        type: 1,
        options : [
            {
                name: 'kategorie',
                description: 'Wähle zwischen den Zahlensystemen aus',
                type: 3,
                required: true,
                choices: [
                   { name: 'BinärZuDezimal', value: '0'},
                   { name : 'DezimalZuBinär', value: '1'},
                   { name: 'DezimalZuHex', value: '2'},
                   {name: 'BinärZuHex', value: '3'},
                ],
            },
            {
                name: 'input',
                description: 'Nummer die Konvertiert werden soll',
                type: 3,
                required: true,
            }
        ]
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Slash Command wird Analysiert...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
                ),
            { body: commands }
        );

        console.log('Slash Commands wurden erfolgreich Analysiert!');
    } catch (error) {
        console.log(`Es ist ein Fehler passiert: ${error}`);
    }
})();