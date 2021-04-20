  
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
   let kayıtcı = "833275420140634152"
    if(!message.member.roles.cache.get(kayıtcı) && !message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(new MessageEmbed().setDescription(`☆ Bu komutu kullanabilmen için <@&${kayıtcı}> rolüne sahip olmalısın.`).setColor("RED")).then(x => x.delete({ timeout: 6500 }));

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!user) return message.channel.send(new MessageEmbed().setDescription(`Bir kullanıcı belirtmelisin. @Mercîušeryy/İD`).setTimestamp().setColor('RED').setFooter('Mercîušeryy')).then(x => x.delete({timeout: 6500}));
var sayi = 1
let data = db.get(`isim.${user.id}`)
if(!data) return message.channel.send(new MessageEmbed().setFooter('Mercîušeryy').setDescription(`Belirtilen kullanıcının herhangi bir kayıtı gözükmüyor.`) .setColor('RED').setTimestamp())
let isimler = data.filter(x => x.userID === user.id).map(x => `${sayi++}- \`${x.isimleri}\` - [<@&${x.role}>]`).join("\n")
if(isimler === null) isimler = "Kullanıcı hiç kayıt olmamış"
if(isimler === undefined) isimler = "Kullanıcı hiç kayıt olmamış"
const embed = new MessageEmbed()
.setFooter('Mercîušeryy')
.setDescription(`Kullanıcının önceki isimleri ; \n\n==> ${isimler}`)
.setColor('GREEN')
message.channel.send(embed)}
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimler', 'eski-isim'],
    permLevel: 0,
  }
  
  exports.help = {
        name: "isimler"
    
  }