const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => { 
  

  let tag = "☆";
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const booster = message.guild.roles.cache.get("832713041559814217").members.size  //"832713041559814217" = booster ID
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 
  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setFooter('Mercîušeryy')
  message.channel.send(embed.setDescription(`
  <a:valencetag4:833939955881345054> Sunucumuzda Toplam **${toplam}** Üye bulunmakta. 
  <a:valencetag4:833939955881345054> Sunucumuzda **${ttag}** Taglı üye bulunmakta.
  <a:valencetag4:833939955881345054> Sunucumuzda **${booster}** Booster üye bulunmakta.
  <a:valencetag4:833939955881345054> Ses kanallarında **${ses}** Üye bulunmakta.`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}