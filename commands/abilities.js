const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('abilities')
        .setDescription('Replies with Oryx 3 tiered abilities'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Tier 7 abilities dropped:', fetchReply: true });
        drops.abilities.forEach(ability => {
            message.react(ability);
        });
    },
};