const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
   message.channel.send('**Donate İçin Teşekkür Ederiz Öncelikle**')
   message.channel.send('**Donate Çağrınız İletilmiştir <@852822316811288617> <@757888125598171136> `✅`**')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'donate',
  description: 'İp Kodu',
  usage: 'donate'
};