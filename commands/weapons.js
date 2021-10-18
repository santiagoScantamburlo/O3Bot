const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weapons')
        .setDescription('Replies with Oryx 3 tiered weapons'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Tier 14 weapons dropped:', fetchReply: true });
        drops.weapons.forEach(weapon => {
            message.react(weapon);
        });
    },
};