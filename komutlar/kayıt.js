const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('Sunucumuza HoşGeldiniz `✅` Kayıt İçin <#937702952955707422> Odasına Geçip Bekleyiniz Yetkililerimiz İlgilenicektir. <@&937701162348585050>')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'İp Kodu',
  usage: 'kayıt'
};