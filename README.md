# akikaki-bot [Version 4.0.5] 
Voice and messages.
## まずこれは何？
秋柿ボットのindex.js とかです。
node_modulesとかは入ってません。 自分で入れてね。
## 仕様
- discord.js v12.5.3
- node.js
- npm
- ytdl-core
- youtube-search
- fs
- pc
- date-utils
> mainfile
- index.js
## Prefix関連
Prefixを保管しているファイルは
config.jsonデス。
```
//config.json
{
"prefix" : "a."
}
```
## Tokenを入れて動かす
まずconsoleで
```
npm init -y
```
と
```
npm i discord.js
npm i ytdl-core
npm i youtube-search
npm i pc
npm i date-utils
npm i yt-search //add
npm i node-opus //add
npm i ffmpeg //add
```
などを実行してみてください。
これで何かモジュールが足りなかったりしたらそれを追加でインストールしてみてください。

## 動かすPart 2
npmでモジュールを入れたら
consoleで
```
node index.js
```
を実行するか、付属のbatファイルを実行してください。
```
起動に成功したよ！
 ||  情報　||
 |ログイン : Login Bot Account|
 |参加サーバー : NaN|
 |ping : -1|
 |Date : Error|
 ========================
 ```
 こんな感じにLogに出たら完了です。

## あとがき
こんなボット動かす人いる？


