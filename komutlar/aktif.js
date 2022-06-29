const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
    message.channel.send('Sunucu Bağlantısı Kontrol Ediliyor')
   message.channel.send('Sunucu Aktif `✅` @everyone')
    message.channel.send('Sunucu IP : 168.119.89.117:10303')
    message.channel.send('https://api.creavite.co/out/KdpeHqeuuordrxql_static.png')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'aktif',
  description: 'İp Kodu',
  usage: 'aktif'
};