const fs = require('fs')
const { getBuffer } = require('../../lib/Function')

module.exports = {
  name: "donasi",
  cmd: ['donasi','sewa'],
  category: 'main',
  start: async (naisa, m, { text }) => {
    
    let teks = 'Scan QR Above To Donate\n\nRental Bot Price :\n💰 10k/week\n💰 25k/month\n💰 100k/year'

    naisa.sendMessage(m.from, { image: fs.readFileSync('../../media/qris.jpg'), caption: teks, footer: global.footer }, { quoted: m })
  }
}