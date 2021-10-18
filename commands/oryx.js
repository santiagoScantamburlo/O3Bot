const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('oryx')
        .setDescription('Replies with Oryx whites and ST\'s'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Oryx\'s white bags dropped:', fetchReply: true });
        drops.oryx.forEach(ut => {
            message.react(ut);
        });
    },
};