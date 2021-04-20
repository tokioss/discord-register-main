const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kayıtcı = "833275420140634152"
    if(!message.member.roles.cache.get(kayıtcı) && !message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(new MessageEmbed().setDescription(`☆ Bu komutu kullanabilmen için <@&${kayıtcı}> rolüne sahip olmalısın.`).setColor("RED")).then(x => x.delete({ timeout: 6500 }));
 
 let kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0])

 
if(!kullanıcı) {
let erkek = db.fetch(`yetkili.${message.author.id}.erkek`);
let kadın = db.fetch(`yetkili.${message.author.id}.kadin`);
let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`); 
if(erkek === null) erkek = "0"  
if(erkek === undefined) erkek = "0"
if(kadın === null) kadın = "0"
if(kadın === undefined) kadın = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new Discord.MessageEmbed()
.setFooter('Mercîušeryy')
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`sToplam : \`${kayıtlar}\` , Erkek : \`${erkek}\` , Kadın : \`${kadın}\``)
.setColor('GREEN')
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let erkek1 = db.fetch(`yetkili.${kullanıcı.id}.erkek`);
let kadın1 = db.fetch(`yetkili.${kullanıcı.id}.kadin`);
let kayıtlar1 = db.fetch(`yetkili.${kullanıcı.id}.toplam`); 
if(erkek1 === null) erkek1 = "0"  
if(erkek1 === undefined) erkek1 = "0"
if(kadın1 === null) kadın1 = "0"
if(kadın1 === undefined) kadın1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new Discord.MessageEmbed()
.setFooter('Mercîušeryy')
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(` Toplam : \`${kayıtlar1}\` , Erkek : \`${erkek1}\` , Kadın : \`${kadın1}\``)
.setColor('GREEN')
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıtlarım", "kayıtlar", "kayıt-kontrol", "kstat"],
    permLvl: 0,
}
  
exports.help = {  
  name: "kayıt"
}