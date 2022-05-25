const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = 
{
	data: new SlashCommandBuilder() // Comand REG
		.setName('kick')
		.setDescription('Select a member and kick them (but not really).')
		.addUserOption(option => option.setName('target').setDescription('The member to kick')),

	async execute(interaction) // Funktion des Comands
	{
		try {
			const user = interaction.options.getUser('target');
			return interaction.reply({ content: `You wanted to kick: ${user.username}`, ephemeral: true });
		} catch (error) {
			console.error('Error while performing Kick'); 
		}

	},
};