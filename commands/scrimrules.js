const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DTR Scrim Rules Ver. 2.4")
  .setAuthor("Rules Issued by DTR")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("These are the rules. There are many like them but these ones are ours. Without the rules we are useless. Without us, the rules are useless")
  .setFooter("Look for news and updates https://twitter.com/DTRChampions")
  .setImage("https://pbs.twimg.com/media/DqR_5F-UUAADxKs.jpg:large")
 
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rules", "guidelines"],
  permLevel: "User"
};

exports.help = {
  name: "scrimrules",
  category: "Miscelaneous",
  description: "Shows you the rules. Unless Hounds didn't update the file. Then it shows you old rules.",
  usage: "scrimrules"
};