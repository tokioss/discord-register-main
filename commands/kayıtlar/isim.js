const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {


        let kayıtcı = "833275420140634152"
        if(!message.member.roles.cache.get(kayıtcı) && !message.member.hasPermission('ADMINISTRATOR'))
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

       message.react('833306174765400084') // Onay Emoji ID
       member.setNickname(`☆ ${Name} | ${Age}`)

       member.setNickname(`☆ ${Name} | ${Age}`)

}


exports.conf = {enabled: true, guildOnly: true, aliases: ["nick", "i"]};
exports.help = {name: 'isim'};