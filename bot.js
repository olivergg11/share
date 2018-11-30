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
https://discord.gg/8A5ymU
***
-------------------------------------`) 
}).catch(console.error)
})
client.login("NTEyNzc2NjE4OTQzNTc4MTIz.Ds-YAA.-L_iILPkXM9K0fccO5ocBmc7tMg");