const Discord = require('discord.js');
const db = require('quick.db')
// Lütfen Çalmayınız Emek Verdim - GamerWolf
exports.run = async (client, message, args) => { 

let aboneyetkili = '937701162348585050'    // Buraya Abone Sorumlusu Rolü ID Sini Koyunuz

  if(!message.member.roles.cache.has(aboneyetkili)) 
  return message.channel.send('Bu Komudu Sadece Yetkililer Kullanabilir.')
  let uye = message.mentions.members.first()
  let etiket = args[1]
  if (!uye) return message.channel.send('Lütfen Bir Kişi Etiketleyiniz.')
  
      setTimeout(function(){
  uye.roles.remove(abonerolü)
  uye.roles.add(nonwhitelist)
  },500)
  
  let abonerolü = '937705060274671637'  // Buraya Abone Rolü ID Sini Koyunuz
  let nonwhitelist = '937705867720151070'
  
  let gamerwolf = new Discord.MessageEmbed() 
  .setDescription(`<@&937705060274671637> Permi Alındı.✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(gamerwolf)

let alındı = new Discord.MessageEmbed() 
.setDescription(`<@&937705867720151070> Permi Verildi. ✅`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(alındı)

};

exports.conf = {               
  enabled: true,
  guildOnly: true,
    aliases: ['a','Abone'],
  permLevel: 0
}
exports.help = {
  name: 'whal',
  description: "GamerWolf Abone Rolü Verme Komutu", // Lütfen Çalmayınız Emek Verdim - GamerWolf
  usage: 'whal' // Lütfen Çalmayınız Emek Verdim - GamerWolf
}
