const keepAlive = require("./server.js")
//api
const api = require("imageapi.js");
//discord.js
const Discord = require('discord.js');
//discord client
const client = new Discord.Client();
//fsLibrary
const fsLibrary  = require('fs') 
//got
const got = require('got');
var repeater;
//random colors
const list = [1, 2, 3, 4, 5]
function getRandomColor() {
  var color = '#' + Number(Math.floor(Math.random() * 16777215)).toString(16)
  console.log(color)
  return color;
}
keepAlive()

client.once('ready', () => {
  //Tell the bot is ready
	console.log('Ready!');
  //How many servers is the bot in
  console.log('In ' + client.guilds.cache.size + ' servers')
  //DaBaby bot server shows that the bot restarted
  client.user.setPresence({
   status: "online"
  });
	client.user.setActivity('Welcome', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' });
});

client.on('guildMemberAdd', member => {
  const welcomeEmbed = new Discord.MessageEmbed()
  welcomeEmbed.setTitle('Welcome')
  welcomeEmbed.setColor('#00ff00')
  welcomeEmbed.setDescription(member.user.username + ' is now part of our server of ' + member.guild.memberCount + ' people')
  welcomeEmbed.setTimestamp()
  client.channels.cache.get('845830073675677716').send(welcomeEmbed);
  var role = member.guild.roles.cache.find(role => role.name == 'Member');
  member.roles.add(role);

});
client.on("guildMemberRemove", member => {
  const goodbyeEmbed = new Discord.MessageEmbed()
  goodbyeEmbed.setTitle('Goodbye')
  goodbyeEmbed.setColor('#ff0000')
  goodbyeEmbed.setDescription(member.user.username + ' is now not a part of our server of ' + member.guild.memberCount + ' people')
  goodbyeEmbed.setTimestamp()
  client.channels.cache.get('845830073675677716').send(goodbyeEmbed);
  
});

client.login(process.env.TOKEN)