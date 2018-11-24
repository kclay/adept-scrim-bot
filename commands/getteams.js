const faker = require('faker');

exports.run = async (client, message, args, level) => {
  let teamSize = args[0]
  let lobbyReference = message.member.voiceChannel;
  let lobbyMembers = [];
  
  lobbyReference.members.forEach(member => {
    lobbyMembers.push(member);
  })
  let memberShuffle = FYshuffle(lobbyMembers);
  let teamGroups = randChunkSplit(memberShuffle, 3)
  
  teamGroups.forEach(team => {
    teamMembers = []
    team.forEach(member => {
      teamMembers.push(member.user.username)
    })
    if(teamMembers.length < 3) {
      message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        description: "Team Leftovers" + ' = ' + teamMembers.join(' ')
      }});
    } else {
      message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        description: "Team " + faker.address.country() + ' = ' + teamMembers.join(' ')
      }});
    }
  })

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randChunkSplit(arr,min,max) {
  // uncomment this line if you don't want the original array to be affected
  // var arr = arr.slice();
  var arrs = [],size=1; 
  var min=min||1;
  var max=max||min||1;
  while (arr.length > 0) {
    size = Math.min(max,Math.floor((Math.random()*max)+min));
    arrs.push(arr.splice(0, size));
  }
  return arrs;
}

function FYshuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rules", "guidelines"],
  permLevel: "User"
};

exports.help = {
  name: "getteams",
  category: "Miscelaneous",
  description: "Sets up 2 random teams",
  usage: "getteams"
};