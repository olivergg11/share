const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
------
[ ${member}  ]
***

PLZ JOIN AND SEND SERVER YOU WANT INVITE FOR IT PLZ JOIN
============================
https://discord.gg/uUdbru
***
-------------------------------------`) 
}).catch(console.error)
})
client.login("NTE0OTE5OTQxMzA1MTM5MjAx.Dt8UwQ.fEMeS-rZj7rfCxPXyQUtakWEmYE");
