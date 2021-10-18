const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dammah')
        .setDescription('Replies with Dammah whites and ST\'s'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Dammah\'s white bags and ST\'s dropped:', fetchReply: true });
        drops.dammah.forEach(ut => {
            message.react(ut);
        });
    },
};