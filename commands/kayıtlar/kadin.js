
const { MessageEmbed } = require('discord.js')
const data = require('quick.db')
const bb = require('../set/kk.json')

exports.run = async (client, message, args) => {

let kayıtcı = "833275420140634152"
if(!message.member.roles.cache.get(kayıtcı) && !message.member.hasPermission('ADMINISTRATOR'))  // "833275420140634152" = Kayıtçı ID
return message.channel.send(new MessageEmbed().setDescription(`☆ Bu komutu kullanabilmen için <@&${kayıtcı}> rolüne sahip olmalısın.`).setColor("RED")).then(x => x.delete({ timeout: 6500 }));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

let Name = args[1]
let Age = args[2]

if(!member) return message.channel.send('Lütfen bir kullanıcı belirt.').then(x => x.delete({timeout: 6500}));
if(!Name || !Age) return message.channel.send('Komutu tekrar İsim Yaş şeklinde kullan.').then(x => x.delete({timeout: 6500}));
if(Age < 13) return message.channel.send('13 Yaşından küçük kullanıcıları kayıt edemezsin!').then(x => x.delete({timeout: 6500}));
if(member.id === message.author.id) return message.channel.send('Kendini kayıt edemezsin.').then(x => x.delete({timeout: 6500}));
if(member.id === message.guild.OwnerID) return message.channel.send('Sunucu sahibini kayıt edemezsin.').then(x => x.delete({timeout: 6500}));
if(member.id === client.user.id) return message.channel.send('Sunucuda bulunan herhangi bir botu kayıt edemezsin.').then(x => x.delete({timeout: 6500}));
if(member.roles.highest.position > message.member.roles.highest.position) return message.channel.send('Belirtilen kullanıcı sizden üst pozisyonda.').then(x => x.delete({timeout: 6500}));
if(member.roles.highest.position === message.member.roles.highest.position) return message.channel.send('Belirtilen kullanıcı siz ile aynı pozisyonda.').then(x => x.delete({timeout: 6500}));



data.add(`yetkili.${message.author.id}.kadin`, 1)
data.add(`yetkili.${message.author.id}.toplam`, 1)
let kayıtlar = data.fetch(`yetkili.${message.author.id}.toplam`)




member.setNickname(`☆ ${Name} | ${Age}`)
member.roles.add("833275444563935232") // Kız Rolü 1
member.roles.add("833275444991754262") // Kız Rolü 2
member.roles.add("833275446178480128") // Kız Rolü 3
member.roles.remove("833275448732418050") //karantina
member.roles.remove("833275433909878834") //yeni hesap
member.roles.remove("833275435726536704") //kayıtsız
member.roles.remove("833275449676660736") // Kayıtz 2

// Pingletiyorum burda

member.setNickname(`☆ ${Name} | ${Age}`)
member.roles.add("833275444563935232") // Kız Rolü 1
member.roles.add("833275444991754262") // Kız Rolü 2
member.roles.add("833275446178480128") // Kız Rolü 3
member.roles.remove("833275449676660736") // Kayıtsız 2
member.roles.remove("833275448732418050") //karantina
member.roles.remove("833275433909878834") //yeni hesap
member.roles.remove("833275435726536704") //kayıtsız


message.react('833306174765400084') // Onay Emoji ID
message.channel.send(new MessageEmbed().setTitle('KAYIT BAŞARILI').setDescription(`\`>\` ${member} adlı üye <@&833275444563935232> olarak kayıt edildi. \n\n\ İsmi **☆ ${Name} | ${Age}** olarak ayarlandı.`).setFooter(`.isimler komutu ile kullanıcının daha önceki isimlerine bakabilirsin.`).setColor("GREEN")).then(x => x.delete({timeout: 6500}));
client.channels.cache.get("833275601472716810").send(`${member} aramıza katıldı, iyi eğlenceler. <a:kutlama:834097592455004190>`)  // "833275601472716810" = genel chat

data.push(`isim.${member.id}`,{userID: member.id, isimleri: isimler, role: bb.kadın, teyitciid: message.author.id, teyitcisim: message.author.username})}

exports.conf = {enabled: true, guildOnly: true, aliases: ["kız", "kadın", "k"]};
exports.help = {name: 'kadin'};
