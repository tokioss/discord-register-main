const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./mercius.json");
const { prefix, sahip } = require("./mercius.json");
const AsciiTable = require('ascii-table');
const fs = require("fs");
const moment = require('moment');




client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);
  var table = new AsciiTable('command table paradomikal');
  table.setHeading("komut", 'durum', "adlandırılmalar")
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  table.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  table.addRow(komutcuklar.help.name, "❌")
  continue;
    }
 
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });

    console.log(table.toString())
  }
  
})

client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === sahip) permlvl = 4;
  return permlvl;
};

client.on('ready', () => {
  console.log(`Bot Başarılı Bir Şekilde Giriş Yaptı`);

});

client.login(config.token);

client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "Mercîuš. ❤️ Valence" }, status: "online" });
  let botVoiceChannel = client.channels.cache.get('BotSes Kanalı ID');
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});


//

client.on("guildMemberAdd", member => {
  member.roles.add("833275448732418050") // Kayıtsız rol ID
  member.setNickname(`İsim | Yaş`)
  })

  //

  client.on("guildMemberAdd", member => {
    member.roles.add("833275448732418050") // Kayıtsız rol ID
    member.roles.add("833275449676660736") // Kayıtsız rol 2 ID
    member.setNickname(`İsim | Yaş`)
    })

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
    const kanal = member.guild.channels.cache.find(r => r.id === "833275506719588372");  // Register chat
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY [Yıl] DD [Gün] HH [Saat] mm [Dakika,] `) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = 'Hesap Güvenilir Değil'
  if (kurulus > 1296000000) kontrol = 'Hesap Güvenilir Gözüküyor'
    moment.locale("tr");
    kanal.send("<a:valencetag1:833583756668305420> <@"+ member +"> Sunucumuza hoş geldin , seninle birlikte **"+ member.guild.memberCount +"** kişiyiz \n\n <a:valencetag4:833939955881345054> Hesabın "+ gecen +" önce oluşturulmuş - `["+ kontrol +"]` \n\n<a:valencetag4:833939955881345054> Tagımızı almak istersen .tag yazıp tagımıza ulaşabilirsin. \n\n<a:valencetag8:833939959505223720> <@&833275420140634152> rolünde bulunan yetkililerimiz seninle ilgilenecektir.")});
  
//

    client.on("guildMemberAdd", member => {
        let tag = "☆";  // Tagınız
        let rol = "833275430894567435"; // Tag Rol
      if(member.user.username.includes(tag)){
      member.roles.add(rol)
      }
      })

      //

      client.on("userUpdate", async(old, nev)=> { 
        let alinmayacakroller = ["833275444563935232", "833275444991754262", "833275446178480128", "833275446867001394", "833275447542022185", "833275448268029952", "833275448732418050"]  // Kız , erkek , kayıtsız rol ID
        let tagrol = "833275430894567435";  // Taglı Rolü
        let sunucu = "832137486188806154";  // Sunucu ID
        //let kayıtsız = "832890253094027264";
        let gchat = "833275601472716810";  // Genel Chat
        let tag = "☆";
       
        if (old.username === nev.username) return;
        if (nev.username.includes(tag)){
        if (old.username.includes(tag)) return;
      client.guilds.cache.get(sunucu).channels.cache.get(gchat).send({
        embed: {
         description: "<@"+ nev.id +"> " + " Tagımızı alarak ailemize katıldı !",
        footer: {
          text: "Tagımızı aldığın için teşekkürler , tekrardan hoş geldin."
        },
        timestamp: new Date(),
         color: Math.floor(Math.random() * 0xFFFFFF + 1)
         }
          }).catch(console.error);
      client.guilds.cache.get(sunucu).members.cache.get(nev.id).roles.add(tagrol).catch(console.error);
      } else {
        if (!old.username.includes(tag)) return;
        client.guilds.cache.get(sunucu).members.cache.get(old.id).roles.cache.filter(r => r.id !== client.guilds.cache.get(ayarlar.server_id).id && !alinmayacakroller.includes(r.id)).forEach(r => {
          client.guilds.cache.get(sunucu).members.cache.get(old.id).roles.remove(r.id)
        })
      client.guilds.cache.get(sunucu).channels.cache.get(gchat).send({
        
        embed: {
         description: "<@"+ nev.id +"> " + " Tagımızı bırakarak ailemize veda etti.",
        footer: {
         text: "Seni tekrar aramızda görmek isteriz..."
        },
          
        timestamp: new Date(),
          color: Math.floor(Math.random() * 0xFFFFFF + 1)
        }
         }).catch(console.error);
        
        
      client.guilds.cache.get(sunucu).members.cache.get(nev.id).roles.remove(tagrol).catch(console.error);
      //client.guilds.cache.get(sunucu).members.cache.get(nev.id).roles.add(kayıtsız).catch(console.error);
         };
          });
client.on('message', msg => {
  if (msg.content === '590904453289213982') {
    msg.react('833939955881345054');
  }
});   // Elleşme

client.on('message', msg => {
  if (msg.content === 'tag') {
    msg.channel.send('☆');
  }
});

client.on('message', msg => {
  if (msg.content === '.tag') {
    msg.channel.send('☆');
  }
});

client.on('message', msg => {
  if (msg.content === '!tag') {
    msg.channel.send('☆');
  }
});

client.on('message', msg => {
  if (msg.content === '-tag') {
    msg.channel.send('☆');
  }
});


client.on("ready", () => {
  client.channels.cache.get("833276582243336192").join();
})  // Bot Ses Kanalı ID