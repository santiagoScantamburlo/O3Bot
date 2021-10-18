const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gemsbok')
        .setDescription('Replies with Gemsbok whites and ST\'s'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Gemsbok\'s white bags and ST\'s dropped:', fetchReply: true });
        drops.gemsbok.forEach(ut => {
            message.react(ut);
        });
    },
};