const Discod = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = (client,message,args) => {
  let kayıtcı = "833275420140634152"
    if(!message.member.roles.cache.get(kayıtcı) && !message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(new MessageEmbed().setDescription(`☆ Bu komutu kullanabilmen için <@&${kayıtcı}> rolüne sahip olmalısın.`).setColor("RED")).then(x => x.delete({ timeout: 6500 }));

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(new MessageEmbed().setDescription(`Bir kullanıcı belirtmelisin. @Mercîušeryy/İD`).setTimestamp().setColor('RED').setFooter('Mercîušeryy')).then(x => x.delete({timeout: 6500}));

widmember.roles.cache.has('Booster ID') ? widmember.roles.set(['Booster ID', 'Kayıtsız']) : widmember.roles.set(['Kayıtsız']); 
message.react('✅');
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unregister"],
  permLevel: 0
};

exports.help = {
  name: 'kayıtsız',
  description: '',
  usage: ''
}; 