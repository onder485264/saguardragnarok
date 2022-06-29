const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('Destek Talebiniz Yetkililerimize İletilmiştir`✅` Lütfen Bekleyiniz <@&937701162348585050>')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'İp Kodu',
  usage: 'destek'
};