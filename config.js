
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6285891634201','6288297258362']
global.packname = 'ꪶ𝒀𝑶𝑺𝑶𝑲𝑨 ✇ 𝑴𝑶𝑫𝑺🜏ꫂ'
global.author = 'ꪶ𝒀𝑶𝑺𝑶𝑲𝑨 ✇ 𝑴𝑶𝑫𝑺🜏ꫂ'
global.sessionName = 'session'
global.prefa = ['','!','.','#']
global.ownername = 'Owner'
global.sp = '>'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Data In Process, Please Wait A Minute.._',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
