exports.wait = () => {
	return`*「❗」PLEASE WAIT*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」YOUR LEVEL IS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❗」NOT VERIFICATION YET「❗」*\n\nTYPE : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY BRO, YOU ARE ALREADY BANNED*`
}

exports.premium = (prefix) => {
	return`This feature is for premium user!
if you want to premium user
talk to my owner
Type : ${prefix}owner`
}

exports.rediregis = () => {
	return`*You have already verified -_-*`
}

exports.stikga = () => {
	return`*「 FAILED 」Tyring reply/tag *`
}

exports.linkga = () => {
	return`*「❗」Sorry the link is invalid*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT MUST BE  ADMIN*`
}

exports.bug = () => {
	return`*Problem have been reported to bot owner*`
}

exports.wrongf = () => {
	return`*「🗿」Where is the text?*`
}

exports.clears = () => {
	return`*All chat clear Boss*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ *Name* : ${pushname}\`\`\`
\`\`\`➸ *Nomber* : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ *Xp* : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*Sorry ${pushname} limit today expired*
*Limit is reset every 24:00 hours*

\`\`\`Upgrade Premium Free Limit\`\`\`
\`\`\`➸ 20K : 1 Month\`\`\`
\`\`\`If interested, please contect the owner\`\`\`
\`\`\`Type : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Your Remaining Limit : ${isPrem ? '9999' : `${limitCounts}`}

My Boss premium upgrade,so its free to use bots`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ NUMBER : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONATION*
Pulsa : 0305-7110-112
Gopay : 0305-7110-112
Dana : 0305-7110-112
Saweria : https://saweria.co/ramlangans

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *IKLAN ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *DAFTAR SEWA & BUAT BOT :*
◯ *SEWA : 25K/GRUP (BULAN)*
◯ *BUAT : 100K (BISA JADI OWNER)*
◯ *PEMBAYARAN BISA MELALUI :*
◯ *OVO, GOPAY, DANA, PULSA+10K*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR DIBAWAH :*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}
