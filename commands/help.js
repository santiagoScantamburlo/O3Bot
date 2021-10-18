const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with all available commands'),
    async execute(interaction) {
        await interaction.reply("Available commands:\n\`\`\`- /ping\n- /weapons\n- /abilities\n- /armors\n- /dammah\n- /gemsbok\n- /leucoryx\n- /beisa\n- /oryx\`\`\`");
    },
};