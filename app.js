const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json')

bot.on('ready', () => {
  console.log(`CrazyVenela göreve hazır`);
});

//bot.on('', '' => {});

bot.on('guildCreate', guild => {
    console.log(`${guild.name} sunucusuna katıldım. ${guild.members.size} kullanıcı bulunmaktadır`)
});

bot.on('guildDelete', guild => {
    console.log(`Sunucudan Çıkış: ${guild.name} sunucusundan cıkıldı.`);
});

let prefix = '+'
bot.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  let args = message.content.split(' ').slice(1)
  let sonuc = args.join(' ');

   if (message.content.startsWith(prefix + 'sa')) {
    message.channel.send(prefix + 'Aleyküm Selam!');   
    } else
  if (message.content.startsWith(prefix + 'temizle')) { 
    message.channel.bulkDelete(100);
    message.channel.sendMessage('Sizin için mesajları sildim :)')
  }  else

  if (message.content.startsWith(prefix + 'send')){
      message.guild.channels.get('463758880942456853').send('Crazy Aveneladan selamlar');
  } else

  if (message.content.startsWith(prefix + 'setgame')) {
    if(!sonuc) {
       sonuc = null
    }
   bot.user.setActivity(sonuc)
  } else

  if(message.content.startsWith(prefix + 'durum')) {
    if(!sonuc) {
      sonuc = 'online'
    }
    bot.user.setStatus(sonuc)
  }
});


bot.login(settings.token);