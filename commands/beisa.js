const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beisa')
        .setDescription('Replies with Beisa whites and ST\'s'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Beisa\'s white bags and ST\'s dropped:', fetchReply: true });
        drops.beisa.forEach(ut => {
            message.react(ut);
        });
    },
};