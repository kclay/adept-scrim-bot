exports.run = async (client, message, args, level) => {
  let lobbyReference = message.member.voiceChannel;
  let memberShuffle = FYshuffle(['hounds', 'levy', 'krasher', 'boxes', 'fierce', 'eclipse']);
  if (lobbyReference.members.length !== 6) {
    let splitArray = randChunkSplit(memberShuffle, 3)
    console.log(splitArray);
    message.channel.send(splitArray);
  } else {
    let splitArray = randChunkSplit(lobbyReference.members, 3)
    console.log(splitArray);
  }

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