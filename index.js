const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'dadakan.aternos.me',
    port: 53575,
    username: 'Kuncen Server',
    version: '1.20.1'
})

bot.on('spawn', () =>{
    console.clear()
    console.log('Kuncen sudah menjaga world kita')
})

bot.on('end', ()=>{
    console.clear()
    console.log('Kuncen telah berhenti menjaga world kita')
})
