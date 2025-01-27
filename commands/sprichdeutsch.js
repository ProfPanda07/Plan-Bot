const { SlashCommandBuilder } = require('@discordjs/builders'); 
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const path = require('path');
const cfs = require('../util/customfunctions.js')
const logger = require('../util/logger').log;


module.exports = 
{
	
	data: new SlashCommandBuilder() // Comand REG
		.setName('sprichdeutsch')
		.setDescription('sag jemandem das er Deutsch Sprechen soll')
        .addUserOption(option => option.setName('target').setDescription('der, der nicht deutsch spricht').setRequired(true)),

	async execute( interaction ) // Funktion des Comands
	{
        var datei = path.join(__dirname, '..', 'data', 'counter.json')
        var { deutschcounter } = JSON.parse(fs.readFileSync(datei, 'utf8'))
		let user = interaction.options.getUser('target');
        let Thumbnaillink = 'https://cdn.discordapp.com/attachments/826219699519225886/1001836621685080084/kkudmrvjx9r81.jpg'
        let jsonfile = 'counter.json'
        let jsonsubfolder = 'data'
        let jsonvariable = 'deutschcounter'
        let newcountervalue = deutschcounter+1

		try{
     
            const Embed = new MessageEmbed()
            .setColor('#e30926')
            .setTitle('Sprich Deutsch du Huren Sohn')
            .setAuthor({
                    name: user.username,
                    iconURL: user.displayAvatarURL()
            })
            .setDescription(`So viele Hurensöhne gibt es bereits:\`${newcountervalue}\``)
            .setThumbnail(Thumbnaillink)
            .setTimestamp();

            let output = Number((newcountervalue))
            let counted = cfs.writetojsonvariabl(jsonvariable, output, jsonfile, jsonsubfolder)

            if(counted === true)interaction.reply({embeds: [Embed]});



		}catch(error){
			logger.error('Error while performing sprichdeutsch'); 
            console.log(error)
		} 
	},
};
