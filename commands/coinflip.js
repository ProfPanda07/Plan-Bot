const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = 
{
	data: new SlashCommandBuilder() // Comand REG
		.setName('coinflip')
		.setDescription('Flip a Coin'),

	async execute(interaction) // Funktion des Comands
	{
		try{
			const zahl = getRandomArbitrary(2)

			switch(zahl)
			{
				case 1: ausgabe = "Zahl"
					break;
				case 2: ausgabe = "Kopf"
					break;
				default: console.info("Fehler beim generiren der Zufals zahl")
			}
				
			  return interaction.reply({ content: `Deine Münze ist auf ${ausgabe} gelandet!`,});
		} catch (error) {
			console.warn('Error while performing coinflip'); 
			console.error(error)
		}
	},
};
try {
	function getRandomArbitrary(max) 
	{
	return Math.floor(Math.random() * max);
	}
} catch (error) {
	console.error('Error while performing Random Calculation In coinflip');
}
