const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
    message.delete();  
   await client.users.cache.forEach(u => {
u.send(`Herkeze Selam Arkadaşlar Ben Sulies Ragnarok Roleplay Kurucusu Sunucumuz Tekrar Açılıyor Tekrar Sizinle Olacağız İyi Günler.`)
})
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'duyur',
  description: 'duyur',
  usage: 'duyur'
};