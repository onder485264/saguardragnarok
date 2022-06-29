const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('Sunucu Bağlantısı Kontrol Ediliyor...')
  message.channel.send('Sunucu Kapalı @everyone')
 message.channel.send('https://api.creavite.co/out/9ZigJj2xoqrdrxj0_static.png')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kapalı',
  description: 'Kapalı',
  usage: 'kapalı'
};