const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'T9tAClX7',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "XgXBOT-Mdོ" //namabot kalian
global.ownername= "XgtibXcyb" //nama kalian
global.myweb ="https://www.instagram.com/xgtib" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw" //bebas asal jan hapus
global.github = "https://github.com/MysticToruilo/" //bebas
global.email = "xgtibxcyb@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6285654001274'] //premium user
global.owner = ["6285654001274"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6285654001274" // nomor wa kalian
global.ownernomerr = "+6285654001274" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© Xgxbot-Mdོ' //sticker wm ubah
global.author = 'Di Buat Oleh XgtibXcyb' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 1000
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Udah tod',
    admin: 'Buat Atmin deckj',
    botAdmin: 'Minimal kalo nyuruh itu atminin gwehj dulu lah anjime',
    owner: 'Cmd Owner tod jangan ngadi ngadi kau',
    group: 'Khusu grup y',
    private: 'Private y tod',
	bot: 'Fitur sewabot😅',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: 'Tunggu Njink',
	lockCmd: 'Owner pelit gamau aktifin!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
