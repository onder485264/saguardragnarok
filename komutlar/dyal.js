const Discord = require('discord.js');
const db = require('quick.db')
// Lütfen Çalmayınız Emek Verdim - GamerWolf
exports.run = async (client, message, args) => { 

let aboneyetkili = '937701157374132294'    // Buraya Abone Sorumlusu Rolü ID Sini Koyunuz

  if(!message.member.roles.cache.has(aboneyetkili)) 
  return message.channel.send('Bu Komudu Sadece Yetkililer Kullanabilir.')
  let uye = message.mentions.members.first()
  let etiket = args[1]
  if (!uye) return message.channel.send('Lütfen Bir Kişi Etiketleyiniz.')
  
      setTimeout(function(){
  uye.roles.remove(yte)
  uye.roles.remove(regi)
  uye.roles.remove(kullanıcı)
  uye.roles.remove(perme)
  uye.roles.remove(adminn)
  },500)
  
  let yte = '937711844834045963'  // Buraya Abone Rolü ID Sini Koyunuz
  let regi = '937711845739987045'  // Buraya Abone Rolü ID Sini Koyunuz
  let kullanıcı = '937701162348585050'  // Buraya Abone Rolü ID Sini Koyunuz
  let perme = '937701158942822440'  // Buraya Abone Rolü ID Sini Koyunuz
  let adminn = '937704669256491009'  // Buraya Abone Rolü ID Sini Koyunuz
  
  let yt = new Discord.MessageEmbed() 
  .setDescription(`<@&937711844834045963> Permi Alındı. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(yt).then(m => m.delete({timeout: 5000}));

let reg = new Discord.MessageEmbed() 
.setDescription(`<@&937711845739987045> Permi Alındı. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(reg).then(m => m.delete({timeout: 5000}));

let sustur = new Discord.MessageEmbed() 
.setDescription(`<@&937701162348585050> Permi Alındı. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(sustur).then(m => m.delete({timeout: 5000}));

let perm = new Discord.MessageEmbed() 
.setDescription(`<@&937701158942822440> Permi Alındı. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(perm).then(m => m.delete({timeout: 5000}));

let üadmin = new Discord.MessageEmbed() 
.setDescription(`<@&937704669256491009> Permi Alındı. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(üadmin).then(m => m.delete({timeout: 5000}));
};

exports.conf = {               
  enabled: true,
  guildOnly: true,
    aliases: ['a','Abone'],
  permLevel: 0
}
exports.help = {
  name: 'dyal',
  description: "GamerWolf Abone Rolü Verme Komutu", // Lütfen Çalmayınız Emek Verdim - GamerWolf
  usage: 'dyal' // Lütfen Çalmayınız Emek Verdim - GamerWolf
}
