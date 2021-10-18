const drops = require("./emojis.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('armors')
        .setDescription('Replies with Oryx 3 tiered armors'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Tier 15 armors dropped:', fetchReply: true });
        drops.armors.forEach(armor => {
            message.react(armor);
        });
    },
};