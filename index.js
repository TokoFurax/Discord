const Discord = require('discord.js');

var myBot = new Discord.Client();

/* Aides */

myBot.on("ready", () => {
    myBot.user.setPresence({ game : { name : 'http://generalcraft.cf', type: 0} });
    console.log("Bot sur une plage paumée");
})

myBot.login("NTUwMzI3ODQ1NTg3Nzc5NjA0.D1hOBw.8tvz6YCatzzLuGemE6rx0eBcVVY");

myBot.on('message', data => {
if (data.content === 'rpg maker xp'){
    data.channel.send('http://www.final-rpg.com/rpg_maker_xp-telecharger-installation.html ,clic sur la deuxième image et installe le ,puis installer http://www.mediafire.com/file/fzl5rz6asgj1ppk/rpg_maker_xp.rar');
}
})
myBot.on('message', data => {
    if (data.content === 'unity'){
        data.channel.send('https://store.unity.com/download?ref=personal');
}
})
myBot.on('message', data => {
    if (data.content === 'python'){
        data.channel.send('https://www.python.org/downloads/');
}
})
myBot.on('message', data => {
    if (data.content === 'visual studio'){
        data.channel.send('https://code.visualstudio.com/');
}
})
myBot.on('message', data => {
    if (data.content === 'minecraft'){
        data.channel.send('http://generalcraft.cf');
}
})
myBot.on('message', data => {
    if (data.content === 'Minecraft'){
        data.channel.send('http://generalcraft.cf');
}
})
myBot.on('message', data => {
    if (data.content === 'aide'){
        data.channel.send('les commandes possibles sont: rpg maker xp, unity, python et visual studio, bot pc, bot android, photoshop crack');
}
})
myBot.on('message', data => {
    if (data.content === 'bot pc'){
        data.channel.send('https://www.youtube.com/watch?v=FMijzVzh4MQ&t=1s');
}
})
myBot.on('message', data => {
    if (data.content === 'bot android'){
        data.channel.send('https://www.youtube.com/watch?v=XkIBT1ONfOc&index=2&t=0s&list=WL');
}
})
myBot.on('message', data => {
    if (data.content === 'photoshop crack'){
        data.channel.send('https://www.youtube.com/watch?v=CI5zI-1XjYM');
}
})