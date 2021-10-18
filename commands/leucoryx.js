const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leucoryx')
        .setDescription('Replies with Leucoryx whites and ST\'s'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Leucoryx\'s white bags and ST\'s dropped:', fetchReply: true });
        drops.leucoryx.forEach(ut => {
            message.react(ut);
        });
    },
};