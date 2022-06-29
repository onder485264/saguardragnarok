const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    
    "Ragnarok Roleplay#Yakında",
    "Buyur Sende Katıl ",
    "Discord : https://discord.gg/HqbCgAC4za"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 20000);
  
  client.user.setStatus("idle"); //dnd, idle, online, offline
  
}