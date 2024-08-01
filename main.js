//base by Kenvofc (Kev.)
//YouTube: @Kenvofc
//Instagram: kenv8070
//Telegram: https://t.me/+1e2AuejQBkxmNDg8
//GitHub: @kenvofc
//WhatsApp: +237656774511
//Veuillez vous abonner a mes differentes pages pour ne rien rater sur les mises jour 

require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const { color } = require('./bibliotheque/couleur')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const { uncache, nocache } = require('./bibliotheque/loader')
const yargs = require('yargs/yargs')
const { Low, JSONFile } = require('./bibliotheque/lowdb')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./bibliotheque/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./bibliotheque/mes_fonctions')
const { default: KevConnect, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers } = require("@whiskeysockets/baileys")
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("@whiskeysockets/baileys").default

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(new JSONFile(`src/database.json`))

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    database: {},
    chats: {},
    game: {},
    settings: {},
    message: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
   if (global.db.data) await global.db.write()
}, 30 * 1000)

require('./SylversBot.js')
nocache('../SylversBot.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

let phoneNumber = "237656774511"
let owner = JSON.parse(fs.readFileSync('./recherche/donnees/role/proprio.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
         
async function startKev() {
//------------------------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const Kev = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      browser: Browsers.windows('Firefox'), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
      patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Sylvers Md!"
            }
        },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(Kev.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !Kev.authState.creds.registered) {
      if (useMobile) throw new Error('Vous ne pouvez pas utiliser le pairing code avec une api mobile')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Veuillez entrer votre numero WhatsApp en commençant par le code de votre pays, Exemple : +237656774511")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Veuillez entrer votre numero WhatsApp🍁\nExample: +237656774511 : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Veuillez entrer votre numero WhatsApp en commençant par le code de votre pays, Exemple : +237656774511")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Veuillez entrer votre numero WhatsApp🍁\nExample: +237656774511 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await Kev.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Votre Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
   
   Kev.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Mauvais fichier, Veuillez supprimer la session actuelle et scannez a nouveau`);
				startKev()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connexion fermee, reconnexion....");
				startKev();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connexion echouee depuis le server, Reconnexion...");
				startKev();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connexion remplacee, Nouvelle session ouverte, Veuillez d'abord fermer la session actuelle");
				startKev()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Impossible de charger, Veuillez supprimer la session actuelle et scannez a nouveau.`);
				startKev();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Reinitialisation imminente, Reinitialisation encours...");
				startKev();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Temps de connexion expirey, Reconnexion...");
				startKev();
			} else Kev.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🍁 Connexion...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`🍁Connectey a => ` + JSON.stringify(Kev.user, null, 2), 'yellow'))
            console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
            console.log(color(`< ================================================== >`, 'cyan'))
	        console.log(color(`\n${themeemoji} YT CHANNEL: Kenvodc`,'magenta'))
            console.log(color(`${themeemoji} GITHUB: kenvofc `,'magenta'))
            console.log(color(`${themeemoji} INSTAGRAM: @lenv8070 `,'magenta'))
            console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
            console.log(color(`${themeemoji} CREDIT: ${wm}\n`,'magenta'))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startKev()
	}
})
Kev.ev.on('creds.update', saveCreds)
Kev.ev.on("messages.upsert",  () => { })
//------------------------------------------------------

//farewell/welcome
    Kev.ev.on('group-participants.update', async (anu) => {
    	if (global.welcome){
console.log(anu)
try {
let metadata = await Kev.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Kev.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Kev.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
KevWlcm = await getBuffer(ppuser)
KevLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const kevbuffer = await getBuffer(ppuser)
                let kevName = num
                const ktime = moment.tz('Africa/Abidjan').format('HH:mm:ss')
	            const kdate = moment.tz('Africa/Abidjan').format('DD/MM/YYYY')
	            const kmembers = metadata.participants.length
                kevbody = `┌─❖
│「 𝗛𝗶 👋 」
└┬❖ 「  @${kevName.split("@")[0]}  」
   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
   │✑  ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${kmembers}th
   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
   │✑ ${ktime} ${kdate}
   └───────────────┈ ⳹`
let msgs = generateWAMessageFromContent(anu.id, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevbody
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: KevWlcm }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Bienvenue 💐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [num], 
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
}, {})
Kev.relayMessage(anu.id, msgs.message, {})
                } else if (anu.action == 'remove') {
                	const kevbuffer = await getBuffer(ppuser)
                    const kevtime = moment.tz('Africa/Abidjan').format('HH:mm:ss')
	                const kevdate = moment.tz('Africa/Abidjan').format('DD/MM/YYYY')
                	let kevName = num
                    const kevmembers = metadata.participants.length
                    kevbody = `┌─❖
│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
└┬❖ 「 @${kevName.split("@")[0]}  」
   │✑  𝗟𝗲𝗳𝘁 
   │✑ ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${kevmembers}th
   │✑  𝗧𝗶𝗺𝗲 : 
   │✑  ${kevtime} ${kevdate}
   └───────────────┈ ⳹`
let msgs = generateWAMessageFromContent(anu.id, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevbody
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: KevLft }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"RIP 👋\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [num], 
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
}, {})
Kev.relayMessage(anu.id, msgs.message, {})
}
}
} catch (err) {
console.log(err)
}
}
})
// Anti Call
    Kev.ev.on('call', async (TonTonKev) => {
    	if (global.anticall){
    console.log(TonTonKev)
    for (let KevFucks of TonTonKev) {
    if (KevFucks.isGroup == false) {
    if (KevFucks.status == "offer") {
    let KevBlokMsg = await Kev.sendTextWithMentions(KevFucks.from, `*${Kev.user.name}* ne peut pas recevoir d'appel ${KevFucks.isVideo ? `video` : `voice` } . Sorry @${KevFucks.from.split('@')[0]} tu seras bloquey. s'il s'agit d'un appel accidentel veuillez contacter le proprio pour etre debloquey!`)
    Kev.sendContact(KevFucks.from, owner, KevBlokMsg)
    await sleep(8000)
    await Kev.updateBlockStatus(KevFucks.from, "block")
    }
    }
    }
    }
    })
    //autostatus view
        Kev.ev.on('messages.upsert', async chatUpdate => {
        	if (global.antiswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await Kev.readMessages([mek.key]) }
            }
    })
    //admin event
    Kev.ev.on('group-participants.update', async (anu) => {
    	if (global.adminevent){
console.log(anu)
try {
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Kev.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Kev.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
 if (anu.action == 'promote') {
const kevtime = moment.tz('Africa/Abidjan').format('HH:mm:ss')
const kevdate = moment.tz('Africa/Abidjan').format('DD/MM/YYYY')
let kevName = num
kevbody = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${kevName.split("@")[0]}, you have been *promoted* to *admin* 🥳`
   Kev.sendMessage(anu.id,
 { text: kevbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": KevWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const kevtime = moment.tz('Africa/Abidjan').format('HH:mm:ss')
const kevdate = moment.tz('Africa/Abidjan').format('DD/MM/YYYY')
let kevName = num
kevbody = `𝗢𝗼𝗽𝘀‼️ @${kevName.split("@")[0]}, you have been *demoted* from *admin* 😬`
Kev.sendMessage(anu.id,
 { text: kevbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": KevLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})

// detect group update
		Kev.ev.on("groups.update", async (json) => {
			if (global.groupevent) {
			try {
ppgroup = await Kev.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0]
			if (res.announce == true) {
				await sleep(2000)
				Kev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`,
				})
			} else if (res.announce == false) {
				await sleep(2000)
				Kev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`,
				})
			} else if (res.restrict == true) {
				await sleep(2000)
				Kev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`,
				})
			} else if (res.restrict == false) {
				await sleep(2000)
				Kev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`,
				})
			} else if(!res.desc == ''){
				await sleep(2000)
				Kev.sendMessage(res.id, { 
					text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`,
				})
      } else {
				await sleep(2000)
				Kev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`,
				})
			} 
			}
		})
		
		// respon cmd pollMessage
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Sylvers Md!"
        }
    }
    Kev.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = kprefix+toCmd
	                Kev.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

    Kev.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!Kev.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(Kev, mek, store)
            require("./SylversBot")(Kev, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
   
   Kev.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    Kev.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Kev.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    Kev.getName = (jid, withoutContact = false) => {
        id = Kev.decodeJid(jid)
        withoutContact = Kev.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Kev.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === Kev.decodeJid(Kev.user.id) ?
            Kev.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

Kev.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Kev.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Kev.getName(i)}\nFN:${await Kev.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
	    })
	}
	Kev.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    Kev.public = true

    Kev.serializeM = (m) => smsg(Kev, m, store)

    Kev.sendText = (jid, text, quoted = '', options) => Kev.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    Kev.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Kev.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    Kev.sendTextWithMentions = async (jid, text, quoted, options = {}) => Kev.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    Kev.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Kev.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

Kev.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Kev.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    Kev.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Kev.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

Kev.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Kev.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    Kev.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    Kev.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return Kev.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Kev.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Kev.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Kev.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Kev.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      Kev.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
      
      Kev.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await Kev.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await Kev.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await Kev.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

Kev.cMod = (jid, copy, text = '', sender = Kev.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === Kev.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }

Kev.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await Kev.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await Kev.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    
    Kev.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Kev.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
    
    Kev.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return Kev.sendMessage(jid, { poll: { name, values, selectableCount }}) }

Kev.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
            
    Kev.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return Kev
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

startKev()

process.on('uncaughtexception', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})