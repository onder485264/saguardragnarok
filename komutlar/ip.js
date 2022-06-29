const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('Buyrun Güncel İP : 168.119.89.117:10303 İyi Oyunlar Dileriz : )')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'İp Kodu',
  usage: 'ip'
};