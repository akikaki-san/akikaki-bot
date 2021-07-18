const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()
const serp = require('serp')
const { MessageEmbed } = require('discord.js')
const { default: discordButtons } = require('discord-buttons')
const { cpu } = require('pc')

client.on('ready', () => {
  console.log(`起動に成功したよ！ \n ||  情報　|| \n |ログイン :  ${client.user.tag}| \n |参加サーバー : ${client.guilds.cache.size}| \n |ping : ${client.ws.ping}| \n |Date : Error| \n ========================`)
  client.channels.cache.filter(ch => ch.name === '起動通知').forEach(ch => ch.send(`>>> 起動に成功したよ！ \n  ** 情報　** \n |ログイン :  ${client.user.tag} \n |参加サーバー : ${client.guilds.cache.size} \n |ping : ${client.ws.ping} \n |Date : Error \n ========================`))

  setInterval (() => {
    try{
      require('date-utils');
     var dt = new Date();
     var timesys = dt.toFormat("YYYY | MM/DD | HH24:MI.SS");
     time = timesys
    } catch(error) {
      time = "あれれ？時間が分からないぞ？？？ \n エラーコード : "+error
    }
   
  client.user.setActivity({
    name: `a.help | 現在時刻は...${time}`
   })
 }, 5000) 

})

client.on('message', async message => {

  

const searchcmd = "a.gosh"
  if (message.content.startsWith(searchcmd)) {
    const searchword = message.content.slice(searchcmd.length + 1)

    if (!searchword) return message.channel.send('404. **That is an Error.** \n \n The requested searchword was not found this command. That is \n all we know.')

    const links = await serp.search({
      host: 'google.com',
      qs: {
        q: searchword,
        filter: 0,
        pws: 0
      },
      num: 3
    })

    const embed = new MessageEmbed()
      .setTitle(`「${searchword}」の検索結果`)
    links.forEach(link => embed.addField('\u200b', `[${link.title}](https://google.com${link.url})`))
    embed.addField('\u200b', `すべての検索結果は[こちら](https://www.google.com/search?q=${searchword})`)
    message.channel
      .send(embed)
      .catch (err => {
        message.channel.send(
          new MessageEmbed()
            .setDescription(`413. **That is an Error.** \n \n Your client issued a request that was too large. \n That’s all we know.`)
        )
      })
  }

if(message.author.bot) return;
 



  if(message.content === "akikakisannoprefix"){
    message.channel.send("my prefix is : "+config.prefix)
}

  if(message.channel.type === "dm") {
    const embed = new Discord.MessageEmbed()
    .setTitle('⚠️DMは対応して(ないです。', true)
    .setDescription('Error : 00 ', )
    .addField("どうすればいい？", "サーバーで使ってください...", true)
    .setTimestamp()
    .setColor('#FF0000')
    message.channel.send(embed)
    message.react('✖')
    return;
  }
//Base64 MD5 SHA256にも対応(((こんな高性能なぼっとあったのね！？！？)))
  if(message.content.match(/E270AEB347F2165574C3A5C5BF11D038BCD3ACD5ABFDB5AE8A1B52D91CB842F0|ef8ba923e8c50c81a753ab6aa9b6f8ff|662afafe523370a20b967c6fd1606e71|5D04C6A96439100AD3CB4672EF2FDC219DAE8AAA655C9A3095C9E7AD25F4D96C|おはよう|お早う|ohayou|おは|おわよう|おわ|44GK44Gv44KI44GG|ぉゎょぅ|goodmorning|morning/)){
    const embed = new Discord.MessageEmbed()
        .setTitle('🌞ぉはょぅ💛(⋈◍＞◡＜◍)。✧♡', true)
        .setDescription('OK : 114514810',)
        .addField("おはよう！！", `${message.author.username}ちゃん💛💕\n ぉぢさんはね、8時間:bed:寝ちゃった:heart::heart:`)
        .addField("今日:sunny:は学校:school:ヵな❓",`おじさんは、今日:sunny:は大事な会議:pencil:があるから、休めないんダ*o )oﾊﾞﾀｯ\nでも、${message.author.username}ちゃんのこと考えると、元気出ちゃうかも(^_-)-☆\nじゃあおじさん頑張って:heart:会社行ってくる:blue_car:ネo(^▽^)o`)
        .setTimestamp()
        .setColor('#FFFFFF')
        message.channel.send(embed)
        console.log(`Command System V1 >${message.guild.name}サーバーでお早うコマンドが実行されました。`)
  }
 
  if(message.content.match(/おちんちん|OTINTIN|ちんちん|ちんこ/)){
    message.channel.send("ちんちんおちんちん！！！！", { file: { attachment: nkodice } })
  }

  


  if(message.content.match(/ねむい|ねむ|ねたい|ねｍ|nemu|Nemu|newmwoi|nwenu/)){
    message.channel.send("寝なさい....おや( ˘ω˘)ｽﾔｧ")
    console.log(`Command System V1 >${message.guild.name}サーバーでお休みコマンドが実行されました。\n 実行者 ${message.author.username}`)
}

  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  var seigen = 0



  if(command === "error"){
try{
  const embed = new Discord.MessageEmbed()
  .setTitlea('aaa')
  message.channel.send(embed)
}catch(error){
  message.channel.send(error.message)
}
}

if(command === "zentaihaisin"){
  if(message.member.hasPermission('ADMINISTRATOR')){
  client.channels.cache.forEach(channel =>
    {
        if (message.attachments.size <= 0)
        {
            const embed = new Discord.MessageEmbed()
                .setTitle('おしらせ')
                .setDescription(args)
                .setColor("#E8822A")
                .setTimestamp()
            if (channel.name === 'aki-glo')
            {
                channel.send(embed)
                return;
            }
            return;
        }
      });
    }else{
      message.channel.send('権限が足りないようです。ざんねん。')
    }
    }
    

    if (command === "ytsh"){//コマンド
      try{
    const AKB = message.content.split(" ").slice(1).join(" ")
    if (!AKB) {
      const embed = new Discord.MessageEmbed()
        .setTitle('Youtube Search Command の使い方', true)
        .setDescription(' a.ytsh [ Search World ]')
        .setTimestamp()
        .setColor('#E8822A')
        message.channel.send(embed)
        message.react('✖')
        console.log(`Command ERR >${message.guild.name}サーバーでytshエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02`)
        return
    }
    const yts = require( 'yt-search' )//yt-searchを読み込む 
    const r = await yts(AKB)

  const videos = r.videos.slice( 0, 1 )
  videos.forEach( function ( v ) {
	const views = String( v.views ).padStart( 10, ' ' )
  const embed = new Discord.MessageEmbed()
  .setTitle('Search result')
  .addField('動画のタイトル',v.title)
  .addField('動画の視聴回数',views)
  .addField('動画の長さ',v.timestamp)
  .addField('投稿者',v.author.name)
  .addField('動画を見る',`[見る](${v.url})`)
  .setColor('#FF0000')
  message.channel.send(embed)
	console.log( `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )
    }
    )
}catch(error){
  message.channel.send(error)
}
}

if(command === "roleadd"){
  try{
    if(message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send('実行できるよ～').then((msg)=> {
        msg.react('💻')
        
        const collector = msg.createReactionCollector((reaction, user) => {
          return ['💻'].includes(reaction.emoji.name)&&!user.bot;
        }, {
          time: 900000,
          dispose: true
        });

        collector.on('collect', collected => {
        if (collected.emoji.name === '💻') {
           //role.add('認証済み')
            msg.edit('ロールを付与しました。')
          }
          }); //collect end

        collector.on("remove", collected => {
      if(collected.emoji.name === '💻') {
           // role.delete('認証済み')
            msg.edit('ロールを消去しました。')
          }
          }); 
        });
      }else{
      const embed = new Discord.MessageEmbed()
        .setTitle(`⚠️権限エラー`, true)
        .addField("エラー内容",'権限が不足しています')
        .setTimestamp()
        .setColor('#FF0000')
        message.channel.send(embed)
        return;
    }
  }catch(error){
    message.channel.send(error)
    return;
  }
}
 

  if(command === "time")      
  try{
    require('date-utils');
   var dt = new Date();
   let toda = Date.today();
   var tom = Date.tomorrow();
   var yes = Date.yesterday();
   var timesys = dt.toFormat("YYYY | MM/DD | HH24:MI");
   var tomo = tom.toFormat(" MM/DD ");
   var today = toda.toFormat(" MM/DD ");
   var yest = yes.toFormat(' MM/DD ');
   const embed = new Discord.MessageEmbed()
    .setTitle('⌚日付のもろもろ')
    .addField("昨日 :", yest)
    .addField('今日', today)
    .addField("今日の今の時間 :", timesys)
    .addField("明日",tomo)
    .setColor('#FF0000')
    .setFooter("成功メッセージ")
    message.channel.send(embed)
  } catch(error) {
    console.log(error)
    const embed = new Discord.MessageEmbed()
    .setTitle(`⚠️${error}`, true)
    .setDescription('Error : 05')
    .addField("どうすればいい？", "コードエラーなので気長に待ちましょうね。")
    .setTimestamp()
    .setColor('#FF0000')
    .setFooter("失敗メッセージ・ログを送信しました。")
    message.channel.send(embed)
    return;
  }

  


   if(command === "susida") {
    if(seigen === 1){
      message.channel.send('使用されないコマンドは無効化されています。')
    } else{
     if(args[0] == null) {
    const embed = new Discord.MessageEmbed()
    .setTitle('⚠️実装中のコマンドですよと', true)
    .setDescription('Error : 01')
    .addField("どうすればいい？", "ほかのこまんどをつかおうね！", true)
    .setTimestamp()
    .setColor('#FF0000')
    .setFooter("成功メッセージ")
    message.channel.send(embed)
    console.log(`Command System V1 > ERR : ${message.guild.name}サーバーでsusidaコマンドが実行されました。\n 実行者 ${message.author.username}`)
   } else {
    const embed = new Discord.MessageEmbed()
    .setTitle('❓if => else のテスト中です', true)
    .setDescription('Error : 01')
    .addField("なにこれ？", "てすとこまんどです", true)
    .setTimestamp()
    .setColor('#FF0000')
    .setFooter("成功メッセージ")
    message.channel.send(embed)
   }
  }
  }
  
  if(command === "glbst") {
    const embed = new Discord.MessageEmbed()
    .setTitle('Sorry.')
    .setDescription('グローバルチャットは2021年 7/09日に廃止になりました。')
    message.channel.send(embed)
 }



  if(command === "ytshold") {
    const embed = new Discord.MessageEmbed()
    .setTitle('⚠️廃止されたコマンドです。', true)
    .setDescription('Error : 03')
    .addField("どうすればいい？", "新コマンド -> a.ytsh を使ってください。", true)
    .setTimestamp()
    .setColor('#FF0000')
    .setFooter("失敗メッセージ")
    console.log(`Command ERR >${message.guild.name}サーバーでytshエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 03\n`)
    message.channel.send(embed)
    message.react('✖')
}

if(command === 'info') {
try{
  const permissions = Object.keys(Discord.Permissions.FLAGS);
  kengen = permissions.map((perm) => {
    return message.member.hasPermission(perm) ? `${perm}✅ ` : `${perm}✖`
  }).join(' **|** ')
  let User = message.author.username;
  const bot = message.author.bot
  if(bot === true) {
    kekka = "**This user is bot**"
  } else {
    kekka = "This user is not bot"
  }
  const embed = new Discord.MessageEmbed()
    .setColor('#E8822A')
    .setTitle('👤ユーザー、💭サーバーの情報')
    .setThumbnail(message.guild.iconURL())
    .addField(`実行者(Practitioner) : `, User)
    .addField(`実行者詳細(Executerdetails) :`, message.author.tag )
    .addField(`実行者ID(ExecuterID) : `, message.author.id )
    .addField(`実行者のステータス(ExecuterStatus) : `,message.author.presence.status )
    .addField(`実行者がBOTか(Is the BOT?) : `, kekka)
    .addField(`あなたの権限（You are Permissons) ` , kengen)
    .addField(`サーバー名(ServerName)`, message.guild.name)
    .addField(`サーバーに参加している人数(Number of server participants)`, message.guild.memberCount)
    .addField(`サーバーのチャンネル一覧(Channel list)`, message.guild.channels.cache.array())
    
    .setTimestamp()
    message.channel.send(embed)
    message.react('👌')
    console.log(`Command System V1 >>${message.guild.name}サーバーでinfoコマンドが実行されました。\n 実行者 ${message.author.username}\n`)
} catch(error){
  const embed = new Discord.MessageEmbed()
      .setTitle(`⚠️コードエラー`, true)
      .addField("エラー内容", error)
      .setTimestamp()
      .setColor('#FF0000')
      .setFooter("失敗メッセージ・ログを送信しました。")
      message.channel.send(embed)
      return;
}
}

if (command === 'userinfo') {
  const embed = new Discord.MessageEmbed()
  .setTitle('⚠️移植されたコマンドです。', true)
  .setDescription('Error : 03')
  .addField("どうすればいい？", "新コマンド -> a.info を使ってください。", true)
  .setTimestamp()
  .setColor('#FF0000')
  .setFooter("失敗メッセージ・ログを送信しました。")
  console.log(`Command ERR >${message.guild.name}サーバーでinfoエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 03 : Command Not Found\n`)
  message.channel.send(embed)
  message.react('✖')
  }

if(command === 'status') {
  const pc = require('pc')
  const errorHandler = function(err){ console.log(err); throw err; };
  var time = JSON.stringify(pc.uptime())
  var memory = JSON.stringify(pc.memory())
  var CPU = JSON.stringify(pc.cpu().then(function(cpu){
  }))
  var PLATFORM = require( '@stdlib/os-platform' );
  if(PLATFORM === "win32"){
    paso = "**WindowsPC** ( Win32 )"
  } else if(PLATFORM === "dawin"){
    paso = "**Mac User** ( dawin )"
  } else{
    paso = "Ubuntu? Linux? or order?"
  }
  const embed = new Discord.MessageEmbed()
  .setTitle('Status', true)
  .addField(` CPU : \n Ryzen 5 3500 Six Core Prosessors \n______________________\n Memory : \n ${memory}byte  ALL : 16GB \n______________________\n UPTime : \n ${time}ms \n\n ______________________` ,`.`)
  .addField('PC PLATFORM',paso)
  .setTimestamp()
  .setColor('#E8822A')
  .setFooter("失敗メッセージ・ログを送信しました。")
  message.channel.send(embed)
}
if(command === 'logsay') {
  if(args[0] == null) {
    const embed = new Discord.MessageEmbed()
       .setTitle('⚠️Can`t send messages.', true)
       .setAuthor('Error msg', 'https://pbs.twimg.com/profile_images/1637157686/Xtake_400x400.png', 'https://youtube.com')
       .setDescription('Error : 02')
       .addField("どうすればいい？", "a.logsayの後に文章を書けばいいだけだと思います....", true)
       .addField ("What should I do?", "I think I just need to write a sentence after a.logsay ....", true)
       .addField("ただしい使用方法 How to use","a.logsay [Word]")
       .setFooter("失敗メッセージ・ログを送信しました。")
       .setTimestamp()
       .setColor('#FF0000')
       message.channel.send(embed)
       message.react('✖')
       console.log(`Command ERR >${message.guild.name}サーバーでlogsayエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02 [Underfind]\n`)
  } else {
    let User = message.author.username;
    const logmsg = args.join(" ");
    console.log(`${message.guild.name}サーバー : ${User}の発言 「${logmsg}」`)
    console.log(`Command System V1 >>${message.guild.name}サーバーでlogsayコマンドが実行されました。\n 実行者 ${message.author.username}\n`)
  }
}

if(command === "otintin"){
  try{
  message.channel.send('OTINTIN',{
    files: [`nkodice.png`]
  })
}catch(error){
  message.channel.send(error)
}
}
//https://i.imgur.com/QsFAQso.jpg
if(command === "btexmp"){
  try{
    
var fs = require("fs");

// 非同期で行う場合
  fs.writeFileSync(`botsan.js`,`
  \nconst Discord = require('discord.js')
  \nconst client = new Discord.Client()
  \n
  \nclient.on('ready', () => {
    \nconsole.log("ログインしました。")
 \n })
  \n
 \n client.on('message', async msg => {
    \n//if()っていうのはもしこれが～っていう実行。
    \n//この↓のコマンドは!pingっていうメッセージが来たらPong!と実行するっていう意味だよ☆彡
    \nif (msg.content === '!ping') {
      \nmsg.channel.send('Pong!')
    \n}
\n })
  
  client.login('トークンをここに入れてね')`); 
  message.channel.send('write end');
  message.channel.send('こちらbotのサンプルファイルでございます。',{
    files: [`botsan.js`]
});

  } catch(error){
    message.channel.send(error)
    return;
  }
}     

if(command === "statexmp"){
  try{
    
var fs = require("fs");

// 非同期で行う場合
  fs.writeFileSync(`exmpstatus.txt`,`
  client.user.setActivity({
    name: 'げんきだよ～'
   })
   //※Discord V12で動作確認済み
  `); 
  message.channel.send('write end');
  message.channel.send('サンプルファイルを送信しました。',{
    files: [`exmpstatus.txt`]
});

  } catch(error){
    message.channel.send(error)
    return;
  }
}   

if(command === "pingexmp"){
  try{
    
var fs = require("fs");

// 非同期で行う場合
  fs.writeFileSync(`exmpping.txt`,`
  message.channel.send("応答時間 : "+Date.now() - message.createdTimestamp)
  message.channel.send("API応答時間 : "+client.ws.ping)
   //※Discord V12で動作確認済み
  `)
  message.channel.send('write end');
  message.channel.send('サンプルファイルを送信しました。',{
    files: [`exmpping.txt`]
});

  } catch(error){
    message.channel.send(error)
    return;
  }
}   


    if( command === 'timer') {
      if(seigen === 1){
        message.channel.send('使用されないコマンドは無効化されています。')
      } else{
      try{
      if(args[0] == null) { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Timer の使い方', true)
        .setDescription('a.timer [ ms ]',)
        .setColor('#E8822A')
        message.channel.send(embed)
        message.react('✖')
        console.log(`Command ERR >${message.guild.name}サーバーでtimerエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02 [Underfind]\n`)
      } else {
        const embed = new Discord.MessageEmbed()
        .setTitle('⌚時間を設定しました Setting the time.')
        .setDescription(args+`秒後に設定しました \n set after ${args}seconds`)
        .addField('それまでどうするの？','まってろ', true)
        .setColor('#E8822A')
        message.channel.send(embed)
        message.react('👌')
        console.log(`Command System V1 >>${message.guild.name}サーバーでタイマーコマンドが実行されました。\n 実行者 ${message.author.username}　\n 次実行する時間は${args}msです。\n`)

        setTimeout(() => {
          const embed = new Discord.MessageEmbed()
        .setTitle('⌚時間ですよ | Times up!')
        .addField('それまでどうしてたの？','しらねえよ', true)
        .setColor('#E8822A')
        message.channel.send(embed)
        console.log(`Command System V1 >>${message.guild.name}サーバーでタイマーの処理が実行されました。\n 実行者 ${message.author.username}\n`)
        }, args)

      }     
    }catch(error){
      const embed = new Discord.MessageEmbed()
      .setTitle(`⚠️コードエラー`, true)
      .addField("エラー内容", error)
      .setTimestamp()
      .setColor('#FF0000')
      message.channel.send(embed)
      return;
    }
  }
    }

    if (command === 'ping') {
      try{
      const setting = "testing."
      
      const embed = new Discord.MessageEmbed()
      .setTitle('🏓Pong!')
      .addField('応答時間(Response time) ⌛', `**${Date.now() - message.createdTimestamp}ms**`,  true)
      .addField(`API応答時間(API Response time)⏲ `,` **${client.ws.ping}ms**`, true)
      .addField('ワタシから見た回線の速さ',`${setting}`)
      .addField('ヒント','msの値が大きいほど応答時間が長い。')
      .addField('hint','the longer the response time.')
      .setTimestamp()
      .setColor('#E8822A')
      message.channel.send(embed);
      message.react('🏓')
      console.log(`Command System V1 >>${message.guild.name}サーバーでpingが実行されました。\n 実行者 ${message.author.username}\n`)
    } catch(error){
      console.log('pingを実行できませんでした。\n LOG : '+error)
      const embed = new Discord.MessageEmbed()
        .setTitle(`⚠️コードエラー`, true)
        .addField("エラー内容", error)
        .setTimestamp()
        .setColor('#FF0000')
        message.channel.send(embed)
        return;
    }
    }

    //aOaaaaaaaaaaaaOa
    //aaOaaaaaaaaaaOaa
    //aaaOaaaaaaaaOaaa
    //aaaaOaaaaaaOaaaa
    //aaaaaOaaaaOaaaaa
    //aaaaaaOaaOaaaaaa
    //aaaaaaaOOaaaaaaa

    if(command === "ranemo") {
      if(seigen === 1){
        message.channel.send('制限モードが有効になっているためこのコマンドは使えません。')
      } else {

      var min = 1 ;
      var max = 10 ;
      
      var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

      switch (a){
        case 1:
          message.react('🏓')
        break;
      case 2:
        message.react('✖')
        break;
      case 3:
        message.react('💩')
        break;
      case 4:
        message.channel.send("👍");
        break;
      case 5:
        message.channel.send("✊");
        break;
      case 6:
        message.channel.send("✋");
        break;
      case 7:
        message.channel.send("🌞");
        break;
      case 8:
        message.channel.send("🌑");
        break;
      case 9:
        message.channel.send("🍉");
        break;
      case 10:
        message.channel.send("🍈");
        break;
    }
  }
}

    if(command === "random") {

      var min = 1 ;
      var max = 10 ;
      
      var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

      switch (a){
        case 1:
          message.react('1')
        break;
      case 2:
        message.react('2')
        break;
      case 3:
        message.react('3')
        break;
      case 4:
        message.channel.send("4");
        break;
      case 5:
        message.channel.send("5");
        break;
      case 6:
        message.channel.send("6");
        break;
      case 7:
        message.channel.send("7");
        break;
      case 8:
        message.channel.send("8");
        break;
      case 9:
        message.channel.send("9");
        break;
      case 10:
        message.channel.send("10");
        break;
    }
  }

  if(command === "omikuji") {
  {

    var min = 1 ;
    var max = 10 ;
    
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    switch (a){
      case 1:
    unsei = ("**あきかきだいきちすごいなんかもうやばい大吉** \n 訳:きっとめっちゃいいことが起きるかも。")
      break;
    case 2:
    unsei = ("**Tokyo** \n 東京に行けるほどいいことが起きるかも")
      break;
    case 3:
    unsei = ("**だいきょう** \n ちょっと...運勢...悪くない？")
      break;
    case 4:
    unsei = ("**きょう** \n うーん。がんばって！")
      break;
    case 5:
    unsei = ("**きち** \n そうね。イイことをしてみたら？")
      break;
    case 6:
    unsei = ('**しょうきち** \n すこしだけいいこと起きるんじゃない？')
      break;
    case 7:
    unsei = ('**ちゅうきち** \n そうね。いいことが起こりそうな気がしなくもない。')
      break;
    case 8:
    unsei = ('**だいきち** \n いいことが起こると思います！がんばれ～')
      break;
    case 9:
    unsei = ("**しょうあききち** \n 訳：少しばかりだけどいいことが起こる可能性があるってこと")
      break;
    case 10:
    unsei = ("**あきだいきち** \n すばらしい！なんかもうすごい、言葉にできないほどいいことが起こるかも")
      break;
  }
}
  {
  var min = 1 ;
  var max = 10 ;
  
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  switch (a){
    case 1:
    osuemo = (":partying_face:")
    break;
  case 2:
    osuemo = (":wrench:")
    break;
  case 3:
    osuemo = (":cold_face:")
    break;
  case 4:
    osuemo = (":gear:")
    break;
  case 5:
    osuemo = (":hot_face:")
    break;
  case 6:
    osuemo = (":poop:")
    break;
  case 7:
    osuemo = (":bomb:")
    break;
  case 8:
    osuemo = (":robot:")
    break;
  case 9:
  osuemo = (":one:")
    break;
  case 10:
  osuemo = (":o:")
    break;
  }
}
const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username}の運勢`)
.addField('**今日の運勢**', unsei)
.addField('**おすすめ絵文字**', osuemo)
.setColor('#E8822A')
message.channel.send(embed)

  }

  if(command === "a"){
    const emoji = client.emojis.find( "name", "a_" );
    message.channel.send( `${emoji}` );
  }


    if(command === "say"){
        if(args[0] == null) {
          const embed = new Discord.MessageEmbed()
       .setTitle('Say の使い方', true)
       .setDescription('a.say [ Word ]')
       .setTimestamp()
       .setColor('#E8822A')
       message.channel.send(embed)
       message.react('✖')
       console.log(`Command ERR >${message.guild.name}サーバーでsayエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02 [Underfind]\n`)
        } else {
      const say_message = args.join(" ");
      message.delete().catch(msg=>{})
      message.channel.send(say_message);
      console.log(`Command System V1 >>${message.guild.name}サーバーでsayが実行されました。\n 実行者 ${message.author.username} \n`)
        }
        } 

   if(command === "sayembed" || command === "sem") {
     if(args[0] == null) {
       const embed = new Discord.MessageEmbed()
       .setTitle('⚠️あれ....字幕スタッフどこ行った....?(That .... where did the subtitle staff go ....?)', true)
       .setAuthor('Error msg', 'https://pbs.twimg.com/profile_images/1637157686/Xtake_400x400.png', 'https://youtube.com')
       .setDescription('Error : 02')
       .addField("どうすればいい？", "A.喋らせる内容を書く")
       .addField ("What should I do?", "A. Write what you want to say")
       .addField('ただしい使用方法\n How to use',"a.sayembed [word]")
       .setTimestamp()
       .setColor('#FF0000')
       message.channel.send(embed)
       message.react('✖')
       console.log(`Command ERR >${message.guild.name}サーバーでsayembedエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02 [Underfind]\n`)
     } else {    
          const embed = new Discord.MessageEmbed()
          .setDescription(args.join(" "))
          .setTimestamp()
          .setColor("#E8822A")
          message.channel.send(embed)
          console.log(`Command System V1 >>${message.guild.name}サーバーでsayembedコマンドが実行されました。\n 実行者 ${message.author.username}\n`)
      }
    }

  
  
if(command === "hey"){
  message.channel.send('Shit the fuck up')
  const embed = new Discord.MessageEmbed()
  .setTitle('Trophy Collected!')
  .setDescription(' Trophy : Noisy Human ')
  .addField('What is this?','You are very Noisy.')
  .setColor('#1232E2')
  message.channel.send(embed)
}
   


   if(command === "vote") {
      const [title, ...choices] = args
      if (!title) {
        const embed = new Discord.MessageEmbed()
         .setTitle('⚠️タイトルが未記入です。| The title is blank', true)
         .setAuthor('Error msg', 'https://pbs.twimg.com/profile_images/1637157686/Xtake_400x400.png', 'https://youtube.com')
         .setDescription('Error : 02')
         .addField("どうすればいいの？", "タイトルを書こう。")
         .addField ("What should I do?", "Let's write the title.")
         .addField("使用方法 | how to use","a.vote [title] [naiyou 1] [naiyou 2]")
         .setTimestamp()
         .setColor('#FF0000')
         message.channel.send(embed)
         message.react('✖')
         console.log(`Command ERR >${message.guild.name}サーバーでbingエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02 [Underfind]\n`)
         return
      }
      const emojis = ['🇦', '🇧', '🇨', '🇩']
      if (choices.length < 2 || choices.length > emojis.length)
        {
          const embed = new Discord.MessageEmbed()
          .setTitle(`選択肢は2つから${emojis.length}つ選んでください。`)
          .setColor("#FF0000")
          message.channel.send(embed)
          return
        }
      const poll = await message.channel.send({
        embed: {
          title: title,
          description: choices.map((c, i) => `${emojis[i]} ${c}`).join('\n')
        }
      });
      emojis.slice(0, choices.length).forEach(emoji => poll.react(emoji))
   }

  if(command === "nube") {
    const embed = new Discord.MessageEmbed()
    .setTitle('└(՞ةڼ◔)」ヌベヂョンヌゾジョンベルミッティスモゲロンボョ')
    .addField("└(՞ةڼ◔)」",'あなたもぬべすこ教に入りませんか！？！？？', true)
    .setColor('#E8822A');
    message.channel.send(embed);
    message.react('❓')
    console.log(`Command System V1 >${message.guild.name}サーバーでnubeコマンドが実行されました。\n 実行者 ${message.author.username}　\n`);
  }

    if(command === "mozibake" || command === "mzbk"){
      var uni = "";
        if (args[0] == null) {
          const embed = new Discord.MessageEmbed()
          .setTitle('⚠️変換する内容が無いようです。ないようだけに....。(There does not seem to be any content to convert.)', true)
          .setAuthor('Error msg', 'https://pbs.twimg.com/profile_images/1637157686/Xtake_400x400.png', 'https://youtube.com')
          .setDescription('Error : 02')
          .addField("どうすればいいの？", "A.変換する内容を書いて、botちゃんに与えよう！")
          .addField("What should I do?","A. Write the content to be converted and give it to bot!")
          .setTimestamp()
          .setColor('#FF0000')
          message.channel.send(embed)
          message.react('✖')
          console.log(`Command ERR >${message.guild.name}サーバーでmozibakeエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02 [Underfind]`)
        } else {
            for (let i = 0; i < (args[0]).length; i++) {
                uni = uni + "44KC44GY44Gw44GRYnnjgYLjgY3jgYvjgY1ib3Q=" +"013a27g3210w9" + ('2132' + ((args[0]).charCodeAt(i)).toString(19).toUpperCase(10)).slice(-42);
            }
            message.channel.send(uni);
            message.react('👌')
            console.log(`Command System V1 >>${message.guild.name}サーバーでmozibakeコマンドが実行されました。\n 実行者 ${message.author.username} \n`)
        }

      
      }



    if(command === 'error') {
      if(seigen === 1){
        message.channel.send('使用されないコマンドは無効化されています。')
      } else{
      const e = new Discord.MessageEmbed()
      .setTitle('⚠️Error 一覧')
      .setDescription('ここに書いているエラーの一覧表です')
      .addField('Error 00','DMからコマンドを実行したりすると起こるエラーです。基本的にはDM受け付けてないのであしからず',)
      .addField('Error 01','このエラーは実装中のコマンドを実行しようとすると起こるエラーです。よいこのみんなは、ほかのこまんどを、つかおうね！')
      .addField('Error 02','このエラーは書くべきところに書いていないと起こるエラーです。書くべきところはちゃんとかこうね！')
      .addField('Error 03','廃止されたコマンドを使うと出てくるエラーです。新しいコマンドを使おうね！')
      .addField('Error 04','必要なロールを持っていない人がコマンドを実行すると起こるエラーです。ちゃんとろーるはもとうね！')
      .setColor('#FF0000')
      message.channel.send(e);
      message.react('👌')
      console.log(`Command System V1 >>${message.guild.name}サーバーでErrorコマンドが実行されました。\n 実行者 ${message.author.username} \n`)
    }}


    if(command === 'thx') {
      const embed = new Discord.MessageEmbed()
      .setTitle('スペシャルテンクス＆お世話になった人！')
      .setDescription('このbotにしてはめずらしいまともなコマンド')
      .addField('Rollphes さん！', 'いやホントに殆どこの方のおかげだから....。',)
      .addField('Discord.js.org', 'いやこれはサイトなんだけれども....。',)
      .addField('stackoverflow.com','これもサイトだった....',)
      .addField('隙あらばping値 : ', `**${client.ws.ping}ms**`,)
      .setTimestamp()
      .setColor('#E8822A');
      message.channel.send(embed);
      message.react('👌')
      console.log(`Command System V1 >>${message.guild.name}サーバーでthxコマンドが実行されました。\n 実行者 ${message.author.username} \n`)
    }

    if(command === 'version' || command === "ver") {
      try{
      if(seigen = 1){
        adf = "有効だよぉ"
      }
      if(seigen = 0){
        adf = "無効だよぉ"
      }
      const embed = new Discord.MessageEmbed()
      .setTitle('あきかき.7z BOT [Version 4.0.5]')
      .setDescription(':o: 正常') 
      .addField('アップデート情報','```音楽再生機能を追加```')
      .addField('バグ','```a.plで動画を再生中、1:25で止まってしまう問題。原因は不明です。```')
      .addField('修正内容','```とくになし。```')
      .addField('制限モードは？',adf)
      .addField('index.jsの行数','**1436** 前回アップデート比+**36**行')
      .addField('問題があった？',` | [サポートサーバー](https://discord.gg/m8HV53pJWE) | [このボットを招待する](https://discord.com/oauth2/authorize?client_id=825676293466619905&permissions=8&scope=bot) | [公式サイト](https://akikaki-bot.github.io)`)
      .setTimestamp()
      .setColor('#228C22');
      message.channel.send(embed);
      message.react('👌')
      console.log(`Command System V1 >>${message.guild.name}サーバーでversionコマンドが実行されました。\n 実行者 ${message.author.username} \n`)
    }catch(error){
      message.channel.send(error)
    }
    }
//ここからボイス関連に入ります～
//ad
//ad
//ads
//asd
//asd
//はじまりはじまり～
      if(command === "conect" || command === "cn"){

           message.channel.send('ボイスチャットに接続中....')
           if(message.member.voice.channel){
           message.member.voice.channel.join().then((msg) => {
             msg.edit('ボイスチャットに接続しました～！')
           }).catch(console.log)
           return
          }else{
            message.channel.send('エラー。ボイスちゃんねるにちゃんと入ってる？')
          
          }
      }

      if(command === "zplay" || command === "zpl"){
        
         if(args[0] === "suki"){
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('audio.wav');

          dispatcher.on('start', () => {
            message.channel.send('audio.wavを再生してるで');
          });
     
          dispatcher.on('end', () => {
            message.channel.send('再生し終わったよ～');
          });
        }
         if(args[0] == null){
          message.channel.send('メニュー表です \n 1. suki')
        }

      }

      if(command === "pl" || command === "play"){
        if(!message.member.voice.channel) {
          message.channel.send('ちゃんとボイスチャンネル入ってる？') 
        return;
      }
        try{
          const AKB = message.content.split(" ").slice(1).join(" ")
    if (!AKB) {
      const embed = new Discord.MessageEmbed()
        .setTitle('Youtube music player の使い方', true)
        .setDescription(' a.pl [ Search World ]')
        .setTimestamp()
        .setColor('#E8822A')
        message.channel.send(embed)
        message.react('✖')
        console.log(`Command ERR >${message.guild.name}サーバーでytshエラーが起きました。\n 実行者 ${message.author.username} \n ErrorCode 02`)
        return
    }
    const yts = require( 'yt-search' )//yt-searchを読み込む 
    const r = await yts(AKB)

  const videos = r.videos.slice( 0, 1 )
  videos.forEach( async function ( v ) {
	const views = String( v.views ).padStart( 10, ' ' )
  const embed = new Discord.MessageEmbed()
  .setTitle('Search result and now play')
  .addField('動画のタイトル',v.title)
  .addField('動画の視聴回数',views)
  .addField('動画の長さ',v.timestamp)
  .addField('投稿者',v.author.name)
  .setColor('#FF0000')
  message.channel.send(embed)
	console.log( `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )
          const ytdl = require('ytdl-core')
        const connection = await message.member.voice.channel.join();
        const dispatcher =  connection.play(ytdl(v.url, {
          filter: 'audioonly'
}))
            dispatcher.on('end', () => {
            message.channel.send('再生し終わったよ～');
            });
}) 
}catch(error){
          message.channel.send(error.message)
          return;
        }
  
  }
       

        
    
    
    

    if(command === "ytdl" || command === "yd"){

      const fs = require('fs');
      const ytdl = require('ytdl-core');

      ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
     .pipe(fs.createWriteStream('video.mp4'));
     message.channel.send('a'),{
       files: [`video.mp4`]
     }
    }
      if(command === "disconect" || command === "dc"){
        message.channel.send('切断中....')
        if(message.member.voice.channel){
        message.member.voice.channel.leave()
      }else{
        message.channel.send('エラー。入って``` a.dc ```を実行してね。')
      }
        return
      }

if(!command){
  message.channel.send('404 NOT FOUND')
}


    if(command === 'boturl' || command === "iv") {
      if(args[0] == null) {
        const embed = new Discord.MessageEmbed()
      .setTitle('招待')
      .setDescription('招待のリンクです！よければ使ってください！')
      .addField('招待リンク','[こちらをクリック](https://discord.com/oauth2/authorize?client_id=825676293466619905&permissions=8&scope=bot)')
      .setColor('#E8822A')
      message.channel.send(embed)
      message.react('👌')
      } else {
        const embed = new Discord.MessageEmbed()
        .setTitle(`ID : ${args} のbotを招待する`)
        .setDescription('メニューを選んでください。')
        .addField(`1.`,`[管理者権限を与えて招待する](https://discord.com/oauth2/authorize?client_id=${args}&permissons=8&scope=bot)`)
        .addField(`2.`,`[普通に招待する](https://discord.com/oauth2/authorize?client_id=${args}&permissons=0&scope=bot)`)
        .setColor('#E8822A')
        message.channel.send(embed)
        message.react('👌')
        
      }
      
    }

    if (command === 'math') {
      if(args[0] == null) {
        const embed = new Discord.MessageEmbed()
        .setTitle('⚠️計算する内容が無いようです。(There is can"t be calculated.', true)
         .setAuthor('Error msg', 'https://pbs.twimg.com/profile_images/1637157686/Xtake_400x400.png', 'https://youtube.com')
         .setDescription('Error : 02')
         .addField("どうすればいいの？", "A.計算する内容を書いて、botちゃんに与えよう！")
         .addField("ただしい使用方法","a.math 1 1")
         .setTimestamp()
         .setColor('#FF0000')
         message.channel.send(embed)
         message.react('✖')
      } else { 
        if(args[0] == "p"){
      const [a, b] = args.map(str => Number(str))
      message.channel.send(`${args[1]} + ${args[2]} = ${args[1] + args[2]}`)
      message.react('👌')
        }else{
          if(args[0] == "h"){
            const [a, b] = args.map(str => Number(str))
            message.channel.send(`${args[1]} - ${args[2]} = ${args[1] - args[2]}`)
            message.react('👌') 
          } else{
            if(args[0] == "k"){
              const [a, b] = args.map(str => Number(str))
              message.channel.send(`${args[1]} X ${args[2]} = ${args[1] * args[2]}`)
              message.react('👌') 
            } else{
              if(args[0] == "w"){
                const [a, b] = args.map(str => Number(str))
                message.channel.send(`${args[1]} / ${args[2]} = ${args[1] / args[2]}`)
                message.react('👌') 
              } else{
                const embed = new Discord.MessageEmbed()
                .setTitle(`モードを選んでください。`)
                .addField(`モードの選び方`,`**足し算** \n p [数字(空白)数字] \n **引き算** \n h [数字(空白)数字] \n **掛け算** \n k [数字(空白)数字] \n **割り算** \n w [数字(空白)数字] `)
               .setColor('#4545')
               message.channel.send(embed)
              }
            }
          }
        }
    }
  }
  
    if (command === 'help') {
      try{
        
        const embed = new Discord.MessageEmbed()
        .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
        .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
        .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
        .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
        .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🎵 Music \n 🤔? \n 👀 build情報')
        .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
        .setTimestamp()
        .setColor('#E8822A');
    message.channel.send(embed).then((msg)=> {
    msg.react('💻').then(() => msg.react('⚙').then(() => msg.react('🔍').then(() => msg.react('💬').then(() => msg.react('🔧').then(() => msg.react('🤖').then(() => msg.react('🤔').then(() => msg.react('👀').then(() => msg.react('🎵')))
    ))))));
    const collector = msg.createReactionCollector((reaction, user) => {
      return ['💻','⚙',
      '🔍','💬','🔧','🤖','🤔','👀','🎵'].includes(reaction.emoji.name)&&!user.bot;
    }, {
      time: 300000,
      dispose: true
    });
    //collect sta
    collector.on('collect', collected => {
    if (collected.emoji.name === '💻') {
      const embed = new Discord.MessageEmbed()
      .setTitle('category : Moderation💻')
      .addField('a.help','helpメニューを表示します。\n Display a simplified help menu.')
      .addField('a.boturl','botの招待メニューを表示します。a.boturl [ボットのID]で他のボットも招待できます。\n Display the bot invitation menu. You can also invite other bots with a.boturl [bot ID].')
      .setColor('#E8822A')
      msg.edit(embed);
    }
    }); //collect end
    //remove sta
    collector.on("remove", collected => {
      if(collected.emoji.name === '💻') {
      const embed = new Discord.MessageEmbed()
      .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
        .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
        .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
        .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
        .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot  \n 🎵 Music \n 🤔?')
        .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
      .setTimestamp()
      .setColor('#E8822A');
    msg.edit(embed)
    }
    }); //remove end
    
    collector.on('collect', collected => {
      if (collected.emoji.name === '⚙') {
        const embed = new Discord.MessageEmbed()
        .setTitle('category : Infomation⚙')
        .addField('a.ping','サーバーとの通信時間を表示します。\n Displays the communication time with the server.')
        .addField('a.info','実行したユーザーの詳細＆サーバーの詳細を表示します。\nView the details of the user who ran & the details of the server.')
        .addField('a.version','botのバージョンを表示します。\nShows the bot version.')
        .addField('a.status','ステータスを確認できます。\n You can check the bot status.')
        .setColor('#E8822A')
        msg.edit(embed);
      }
      }); //collect end
      //remove sta
      collector.on("remove", collected => {
        if(collected.emoji.name === '⚙') {
        const embed = new Discord.MessageEmbed()
        .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
        .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
        .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
        .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
        .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🎵 Music \n 🤔?')
        .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
        .setTimestamp()
        .setColor('#E8822A');
      msg.edit(embed)
      }
      }); 
    
      collector.on('collect', collected => {
        if (collected.emoji.name === '🔍') {
          const embed = new Discord.MessageEmbed()
          .setTitle('category : Search🔍')
          .addField('a.gosh','Googleで検索ができます。\n You can search on Google.')
          .addField('a.ytsh','youtubeの動画を検索します。\n Search for youtube videos.')
          .setColor('#E8822A')
          msg.edit(embed);
        }
        }); //collect end
        //remove sta
        collector.on("remove", collected => {
          if(collected.emoji.name === '🔍') {
          const embed = new Discord.MessageEmbed()
          .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
          .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
          .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
          .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
          .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🎵 Music \n 🤔?')
          .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
          .setTimestamp()
          .setColor('#E8822A');
        msg.edit(embed)
        }
        }); 
    
        collector.on('collect', collected => {
          if (collected.emoji.name === '💬') {
            const embed = new Discord.MessageEmbed()
            .setTitle('category : Say💬')
            .addField('a.say','sayコマンドです。\n The say command.')
            .addField('a.sayembed','sayコマンドの埋め込みメッセージ版です。\n An embedded message version of the say command.')
            .addField('a.logsay','logでのsayコマンドです。ここなら荒らしても....()\n It is a say command in log. Even if you troll here ...')
            .setColor('#E8822A')
            msg.edit(embed);
          }
          }); //collect end
          //remove sta
          collector.on("remove", collected => {
            if(collected.emoji.name === '💬') {
            const embed = new Discord.MessageEmbed()
            .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
            .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
            .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
            .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
            .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🎵 Music \n 🤔?')
            .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
            .setTimestamp()
            .setColor('#E8822A');
          msg.edit(embed)
          }
          }); 
    
          collector.on('collect', collected => {
            if (collected.emoji.name === '🔧') {
              const embed = new Discord.MessageEmbed()
              .setTitle('Category : Tools🔧')
              .addField('a.mozibake','文字化け（unicode)させます \n Makes garbled (unicode)')
              .addField('a.timer','ms単位でタイマーを実行できます。\n You can run the timer in ms units.')
              .addField('a.time','JSTを取得します。\n Get a JST time.')
              .addField('a.math','計算ができます（足し算のみ）\n Can be calculated (addition only)')
              .addField('a.vote','投票ができます。\n You can vote message.')
              .addField('a.random','ランダムな数（1~10)を出します。（語彙力)\n Generate a random number (1-10). (vocabulary)')
              .addField('a.btexmp','ボットのサンプルファイルを送信します。使えると思います。')
              .addField('a.statexmp','Discord.jsのサンプル : ステータスバージョン')
              .addField('a.pingexmp','Discord.jsのサンプル : PINGコマンド')
              .setColor('#E8822A')
              msg.edit(embed);
            }
            }); //collect end
            //remove sta
            collector.on("remove", collected => {
              if(collected.emoji.name === '🔧') {
              const embed = new Discord.MessageEmbed()
              .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
              .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
              .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
              .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
              .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🎵 Music \n 🤔?')
              .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
              .setTimestamp()
              .setColor('#E8822A');
            msg.edit(embed)
            }
            }); 
    
            collector.on('collect', collected => {
              if (collected.emoji.name === '🤖') {
                const embed = new Discord.MessageEmbed()
                .setTitle('Category : Bot🤖')
                .addField('a.thx','お世話になった方のあれです。\n That is the one who took care of me.')
                .addField('a.error','Errorcodeの解説です \n Explanation of Error code.')
                .addField('a.globalchat-setup','あきかきグローバルのセットアップ方法です。 \n This is how to set up Akikaki Global.')
                .setColor('#E8822A')
                msg.edit(embed);
              }
              }); //collect end
              //remove sta
              collector.on("remove", collected => {
                if(collected.emoji.name === '🤖') {
                const embed = new Discord.MessageEmbed()
                .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
                .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
                .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
                .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
                .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🎵 Music \n 🤔?')
                .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
                .setColor('#E8822A');
              msg.edit(embed)
              }
              }); 

              collector.on('collect', collected => {
                if (collected.emoji.name === '🎵') {
                  const embed = new Discord.MessageEmbed()
                  .setTitle('Category : Music ( BETA )')
                  .addField('a.conect | a.cn','ボイスチャンネルに接続します。')
                  .addField('a.disconect | a.dc','ボイスチャンネルから切断します。')
                  .addField('a.play | a.pl','音楽を再生します。')
                  .setColor('#E8822A')
                  msg.edit(embed);
                }
                }); //collect end
                //remove sta
                collector.on("remove", collected => {
                  if(collected.emoji.name === '🎵') {
                  const embed = new Discord.MessageEmbed()
                  .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
                  .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : '+config.prefix)
                  .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
                  .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
                  .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🎵 Music \n 🤔?')
                  .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
                  .setColor('#E8822A');
                msg.edit(embed)
                }
                }); 
    
              collector.on('collect', collected => {
                if (collected.emoji.name === '🤔') {
                  const embed = new Discord.MessageEmbed()
                  .setTitle('Category : ?🤔')
                  .addField('a.nube','ぬべすこ\n Nubesuko')
                  .addField('a.ranemo',':thinking:')
                  .addField('a.hey','WTF')
                  .setColor('#E8822A')
                  msg.edit(embed);
                }
                }); //collect end
                //remove sta
                collector.on("remove", collected => {
                  if(collected.emoji.name === '🤔') {
                  const embed = new Discord.MessageEmbed()
                  .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
                  .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : +config.prefix')
                  .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
                  .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
                  .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🤔?')
                  .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
                  .setTimestamp()
                  .setColor('#E8822A');
                msg.edit(embed)
                }
                }); 

                collector.on('collect', collected => {
                  if (collected.emoji.name === '👀') {
                    const ve = require("./package.json")
                    const embed = new Discord.MessageEmbed()
                    .setTitle('秋柿ボット Bulid情報')
                    .addField('基本情報',`ここでは基本的な情報が分かります。`)
                    .addField('name',ve.name)
                    .addField('version',ve.version)
                    .addField('mainfile',ve.main)
                    .addField('scripts',ve.scripts.test)
                    .addField('licence',ve.license)
                    .addField('使っているモジュール',"モジュール名とバージョンが確認できます。")
                    .addField("@stadlib/os-platform",ve.dependencies['@stdlib/os-platform'])
                    .addField("discord.js",ve.dependencies['discord.js'])
                    .addField("date-utils",ve.dependencies['date-utils'])
                    .addField('fs',ve.dependencies.fs)
                    .addField('pc',ve.dependencies.pc)
                    .addField('request',ve.dependencies.request)
                    .addField('serp',ve.dependencies.serp)
                    .addField('youtube-search',ve.dependencies['youtube-search'])
                    .setColor('#E8822A')
                    msg.edit(embed);
                  }
                  }); //collect end
                  //remove sta
                  collector.on("remove", collected => {
                    if(collected.emoji.name === '👀') {
                    const embed = new Discord.MessageEmbed()
                    .setTitle('あきかきぼっとの取説！！ [version 4.2] \n ')
                    .setDescription('使いたいコマンドがありそうなカテゴリーを選択してね。\nSelect the category that seems to have the command you want to use. \n \n prefix : +config.prefix')
                    .setAuthor('Ryzen Ryzen Ryzen Ryzen', 'https://i.imgur.com/wSTFkRM.png', 'https://akikaki-bot.github.io/')
                    .setThumbnail('https://cdn.discordapp.com/attachments/822041560530681876/826046383277735976/37b8e72a0b9545d5.png')
                    .addField('Category','\n 💻 Moderation \n ⚙ Infomation \n 🔍 Search \n 💬 Say \n 🔧 Tools　\n 🤖 Bot \n 🤔?')
                    .addField('⚠️注意 Note','a.helpコマンドを実行して1分経つと、メニューが切り替わらなくなります。予めご了承ください。\n After 1 minute of running the a.help command, the menu does not switch. Please note.')
                    .setTimestamp()
                    .setColor('#E8822A');
                  msg.edit(embed)
                  }
                  }); 
    
      });
    
   }catch (error){ 
     message.channel.send("help command error "+error)
     return;
    
  }
  } 

});

client.login("ODI1Njc2MjkzNDY2NjE5OTA1.YGBY-A.Aqk1Larpqg9EyBa3ySTDnNLgtd4");

