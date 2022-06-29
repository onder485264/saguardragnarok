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
  uye.roles.add(yte)
  uye.roles.add(regi)
  uye.roles.add(kullanıcı)
  uye.roles.add(perme)
  },500)
  
  let yte = '937711845739987045'  // Buraya Abone Rolü ID Sini Koyunuz
  let regi = '937701158942822440'  // Buraya Abone Rolü ID Sini Koyunuz
  let kullanıcı = '937701162348585050'  // Buraya Abone Rolü ID Sini Koyunuz
  let perme = '937704669256491009'  // Buraya Abone Rolü ID Sini Koyunuz
  
  let yt = new Discord.MessageEmbed() 
  .setDescription(`<@&937711845739987045> Permi Verildi. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(yt).then(m => m.delete({timeout: 5000}));

let reg = new Discord.MessageEmbed() 
.setDescription(`<@&937701158942822440> Permi Verildi. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(reg).then(m => m.delete({timeout: 5000}));

let sustur = new Discord.MessageEmbed() 
.setDescription(`<@&937701162348585050> Permi Verildi. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(sustur).then(m => m.delete({timeout: 5000}));

let perm = new Discord.MessageEmbed() 
.setDescription(`<@&937704669256491009> Permi Verildi. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(perm).then(m => m.delete({timeout: 5000}));

};

exports.conf = {               
  enabled: true,
  guildOnly: true,
    aliases: ['a','Abone'],
  permLevel: 0
}
exports.help = {
  name: 'dyver',
  description: "GamerWolf Abone Rolü Verme Komutu", // Lütfen Çalmayınız Emek Verdim - GamerWolf
  usage: 'dyver' // Lütfen Çalmayınız Emek Verdim - GamerWolf
}
