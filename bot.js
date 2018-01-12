const Discord = require('discord.js'):
const client = new Discord.Client();
const Eris = require('eris');
var bot = new Eris("NDAwNzU2MjczNzk0MTIxNzI4.DTgS7Q.CW86zv5AHso802q3jZj-5mM_6No");

client.on('ready', () => {
  conslose.log('Irasshaimasen!');
});

//	1.	Sistema

//	1.1	Persongem

function Player(id, exp, lv, next, gold) {
	this.id = id;
	this.exp = exp;
	this.lv = lv;
	this.next = next;
	this.gold = gold;
};

player400756273794121728 = new Player(400756273794121728, 0, 1, 999999999999999, 0)
swords400756273794121728 = new Swords(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
kswords400756273794121728 = new Swords(0, 0, 0, 0, 0)
katanas400756273794121728 = new Swords(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
ninja400756273794121728 = new Ninja(0, 0, 0, 0, 0, 0, 0, 0)

//	1.2	Inventário
//	1.2.1	Espadas

function Swords(nagrarock, broadSword, longSword, ironSword, mythrilSword, coralSword, ancientSword, materiaBlade, platinumSword, iceBrand, runeBlade) {
	this.nagrarock = nagrarock;
	this.broadSword = broadSword;
	this.longSword = longSword;
	this.ironSword = ironSword;
	this.mythrilSword = mythrilSword;
	this.coralSword = coralSword;
	this.ancientSword = ancientSword;
	this.materiaBlade = materiaBlade;
	this.platinumSword = platinumSword;
	this.iceBrand = iceBrand;
	this.runeBlade = runeBlade;
};

//	1.2.2	Espadas Largas

function Kswords(defender, saveTheQueen, excalibur, ragnarok, chaosBlade) {
	this.defender = defender;
	this.saveTheQueen = saveTheQueen;
	this.excalibur = excalibur;
	this.ragnarok = ragnarok;
	this.chaosBlade = chaosBlade;
};

//	1.2.3	Katanas

function Katanas(asura, koutesu, bizenBoat, murasame, heavensCloud, kiyomori, muramasa, kikuichimoji, masamune, chirijiraden) {
	this.asura = asura;
	this.koutesu = koutesu;
	this.bizenBoat = bizenBoat;
	this.murasame = murasame;
	this.heavensCloud = heavensCloud;
	this.kiyomori = kiyomori;
	this.muramasa = muramasa;
	this.kikuichimoji = kikuichimoji;
	this.masamune = masamune;
	this.chirijiraden = chirijiraden;
};

//	1.2.4	Espadas Ninja



//	1.2.5	Facas



//	1.3	EXP Up

bot.on("messageCreate", (msg) => {
	//	Verificar se não é o BOT
	if(msg.author.id != 400756273794121728) {
		//	Verificar se os bancos de dados do jogador já foram criados
		eval("if (typeof player" + msg.author.id + " === 'undefined') {player" + msg.author.id + " = new Player(" + msg.author.id + ", 0, 1, 109, 100)}");
		eval("if (typeof swords" + msg.author.id + " === 'undefined') {swords" + msg.author.id + " = new Swords(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)}");
		eval("if (typeof kswords" + msg.author.id + " === 'undefined') {kswords" + msg.author.id + " = new Kswords(0, 0, 0, 0, 0)}");
		eval("if (typeof katanas" + msg.author.id + " === 'undefined') {katanas" + msg.author.id + " = new Katanas(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)}");
		//	Fim da verificação
		if(msg.content.indexOf("/") != 0) {
			eval("player" + msg.author.id + ".exp += 2");
		};
	//	Level Up!
	if(eval("player" + msg.author.id + ".exp >= player" + msg.author.id + ".next")) {
		eval("player" + msg.author.id + ".lv += 1");
		eval("player" + msg.author.id + ".next = Math.floor(9 * Math.pow(player" + msg.author.id + ".lv, 2) + 100 * player" + msg.author.id + ".lv)");
		bot.createMessage(msg.channel.id, {embed: {
			color: 16777215,
			thumbnail: {
				url: msg.author.avatarURL,
			},
			fields: [{
				name: "LEVEL UP!",
				value: msg.author.username + " alcançou o Lv " + eval("player" + msg.author.id + ".lv")
			}],
		}});
		bot.createMessage(msg.channel.id, {embed: {
			color: 16777215,
			thumbnail: {
				url: msg.author.avatarURL,
			},
			fields: [{
				name: msg.author.username,
				value: "―――――――"
			},
			{
				name: "EXP Total",
				value: eval("player" + msg.author.id + ".exp"),
				inline: true
			},
			{
				name: "Nível",
				value: eval("player" + msg.author.id + ".lv"),
				inline: true
			},
			{
				name: "EXP Necessária",
				value: eval("player" + msg.author.id + ".next"),
			},
			{
				name: "Gold",
				value: eval("player" + msg.author.id + ".gold"),
			}],
		}});
	}};
});

//	2	Jogador
//	2.1	Checar Atributos

bot.on("messageCreate", (msg) => {
	if(msg.content === "/player") {
		//	Verificar se não é o BOT
		if(msg.author.id != 400756273794121728) {
			//	Verificar se os bancos de dados do jogador já foram criados
			eval("if (typeof player" + msg.author.id + " === 'undefined') {player" + msg.author.id + " = new Player(" + msg.author.id + ", 0, 1, 109, 100)}");
			eval("if (typeof swords" + msg.author.id + " === 'undefined') {swords" + msg.author.id + " = new Swords(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)}");
			eval("if (typeof kswords" + msg.author.id + " === 'undefined') {kswords" + msg.author.id + " = new Kswords(0, 0, 0, 0, 0)}");
			eval("if (typeof katanas" + msg.author.id + " === 'undefined') {katanas" + msg.author.id + " = new Katanas(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)}");
			//	Fim das verificaçôes de jogador
			//	Início do Embed
			bot.createMessage(msg.channel.id, {embed: {
				color: 16777215,
				thumbnail: {
					url: msg.author.avatarURL,
				},
				fields: [{
					name: msg.author.username,
					value: "―――――――"
				},
				{
					name: "EXP Total",
					value: eval("player" + msg.author.id + ".exp"),
					inline: true
				},
				{
					name: "Nível",
					value: eval("player" + msg.author.id + ".lv"),
					inline: true
				},
				{
					name: "EXP Necessária",
					value: eval("player" + msg.author.id + ".next"),
				},
				{
					name: "Gold",
					value: eval("player" + msg.author.id + ".gold"),
				}],
			}});
		};
	};	
});

//	2.2	Checar Inventário

bot.on("messageCreate", (msg) => {
	if(msg.content === "/inventory") {
		//	Verificar se não é o BOT
		if(msg.author.id != 400756273794121728) {
			//	Verificar se os bancos de dados do jogador já foram criados
			eval("if (typeof player" + msg.author.id + " === 'undefined') {player" + msg.author.id + " = new Player(" + msg.author.id + ", 0, 1, 109, 100)}");
			eval("if (typeof swords" + msg.author.id + " === 'undefined') {swords" + msg.author.id + " = new Swords(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)}");
			eval("if (typeof kswords" + msg.author.id + " === 'undefined') {kswords" + msg.author.id + " = new Kswords(0, 0, 0, 0, 0)}");
			eval("if (typeof katanas" + msg.author.id + " === 'undefined') {katanas" + msg.author.id + " = new Katanas(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)}");
			//	Fim das verificaçôes de jogador
			//	Início do Embed
			bot.createMessage(msg.channel.id, {embed: {
				color: 16777215,
				thumbnail: {
					url: msg.author.avatarURL,
				},
				fields: [{
					name: "Inventário de:",
					value: "**\n" + msg.author.username + "**\nLv: " + eval("player" + msg.author.id + ".lv") + "\n" + eval("player" + msg.author.id + ".gold") + " Gold\n"
				}],
			}});
			//	Fim do Embed
			//	Listar Inventário
			//	Espadas
			let v = 0
			let w = ""
			let x = ""
			let y = eval("swords" + msg.author.id)
			let z = y.nagrarock
			if(z >= 1) {
				x += "\nNagrarock (" + z + ")"
				v += z
			};
			z = y.broadSword
			if(z >= 1) {
				x += "\nBroad Sword (" + z + ")"
				v += z
			};
			z = y.longSword
			if(z >= 1) {
				x += "\nLong Sword (" + z + ")"
				v += z
			};
			z = y.ironSword
			if(z >= 1) {
				x += "\nIron Sword (" + z + ")"
				v += z
			};
			z = y.mythrilSword
			if(z >= 1) {
				x += "\nMythril Sword (" + z + ")"
				v += z
			};
			z = y.coralSword
			if(z >= 1) {
				x += "\nCoral Sword (" + z + ")"
				v += z
			};
			z = y.ancientSword
			if(z >= 1) {
				x += "\nAncient Sword (" + z + ")"
				v += z
			};
			z = y.materiaBlade
			if(z >= 1) {
				x += "\nMateria Blade (" + z + ")"
				v += z
			};
			z = y.platinumSword
			if(z >= 1) {
				x += "\nPlatinum Sword (" + z + ")"
				v += z
			};
			z = y.iceBrand
			if(z >= 1) {
				x += "\nIce Brand (" + z + ")"
				v += z
			};
			z = y.runeBlade
			if(z >= 1) {
				x += "\nRune Blade (" + z + ")"
				v += z
			};
			//	Definir categoria Espadas Largas
			if(x != "") {
				w = "**Espadas (" + v + ")**" + x
			};
			//	Espadas Largas
			v = 0
			x = ""
			y = eval("kswords" + msg.author.id)
			z = y.defender
			if(z >= 1) {
				x += "\nDefender (" + z + ")"
				v += z
			};
			z = y.saveTheQueen
			if(z >= 1) {
				x += "\nSave The Queen (" + z + ")"
				v += z
			};
			z = y.excalibur
			if(z >= 1) {
				x += "\nExcalibur (" + z + ")"
				v += z
			};
			z = y.ragnarok
			if(z >= 1) {
				x += "\nRagnarok (" + z + ")"
				v += z
			};
			z = y.chaosBlade
			if(z >= 1) {
				x += "\nChaos Blase (" + z + ")"
				v += z
			};
			//	Definir categoria Espadas Largas
			if(x != "") {
				w += "\n\n**Espadas Largas (" + v + ")**" + x
			};
			//	Katanas
			v = 0
			x = ""
			y = eval("katanas" + msg.author.id)
			z = y.asura
			if(z >= 1) {
				x += "\nAsura (" + z + ")"
				v += z
			};
			z = y.koutesu
			if(z >= 1) {
				x += "\nKoutesu (" + z + ")"
				v += z
			};
			z = y.bizenBoat
			if(z >= 1) {
				x += "\nBizen Boat (" + z + ")"
				v += z
			};
			z = y.murasame
			if(z >= 1) {
				x += "\nMurasame (" + z + ")"
				v += z
			};
			z = y.heavensCloud
			if(z >= 1) {
				x += "\nHeavens Cloud (" + z + ")"
				v += z
			};
			z = y.kiyomori
			if(z >= 1) {
				x += "\nKiyomori (" + z + ")"
				v += z
			};
			z = y.muramasa
			if(z >= 1) {
				x += "\nMuramasa (" + z + ")"
				v += z
			};
			z = y.kikuichimoji
			if(z >= 1) {
				x += "\nKikuichimoji (" + z + ")"
				v += z
			};
			z = y.masamune
			if(z >= 1) {
				x += "\nMasamune (" + z + ")"
				v += z
			};
			z = y.chirijiraden
			if(z >= 1) {
				x += "\nChirijiraden (" + z + ")"
				v += z
			};
			//	Definir categoria Espadas Largas
			if(x != "") {
				w += "\n\n**Katanas (" + v + ")**" + x
			};
			//	Mostrar Inventário
			if(w + x !== "") {
				bot.createMessage(msg.channel.id, w);
			};
		};
	};
});

//	3.	Lojas
//	3.1	Gariland Magic City

bot.on("messageCreate", (msg) => {
	if(msg.content === "/shop" && msg.channel.id === "399316614152978446") {
		bot.createMessage(msg.channel.id, {embed: {
			color: 3447003,
//			thumbnail: {
//				url: "https://i.imgur.com/kKm4GEy.png",
//			},
			image: {
				url: "https://i.imgur.com/OXAR8HJ.png"
			},
			fields: [{
				name: "Vendedor:",
				value: "―*Irasshaimasen!* \n―*Algo lhe interessa?*"
			},
			{
				name: "Weapon",
				value: "Dagger \nBroad Sword\nRod \nOak Staff",
				inline: true
			},
			{
				name: "Price",
				value: "100 G\n200 G \n200 G \n120 G",
				inline: true
			},
			{
				name: "Hat",
				value: "Leather Hat",
				inline: true
			},
			{
				name: "Price",
				value: "140 G",
				inline: true
			},
			{
				name: "Hat",
				value: "Leather Hat",
				inline: true
			},
			{
				name: "Price",
				value: "140 G",
				inline: true
			},
			{
				name: "Clothes",
				value: "Clothes",
				inline: true
			},
			{
				name: "Price",
				value: "150 G",
				inline: true
			},
			{
				name: "Accessory",
				value: "―",
				inline: true
			},
			{
				name: "Price",
				value: "―",
				inline: true
			},
			{
				name: "Item",
				value: "Phoenix Down \nEye Drop \nAntidote \nPotion",
				inline: true
			},
			{
				name: "Price",
				value: "300 G\n50 G \n50 G \n50 G",
				inline: true
			}],
		}});
	};
});

//	3.2	Test Bot

bot.on("messageCreate", (msg) => {
	if(msg.content === "/shop" && msg.channel.id === "400772367560736769") {
		bot.createMessage(msg.channel.id, "Não há lojas por aqui.");
	};
});

//	Debug
//	+ Channel Id

bot.on("messageCreate", (msg) => {
	if(msg.content === "/place") {
		bot.createMessage(msg.channel.id, msg.channel.id);
	};
});

//	Fim

client.login(process.env.BOT_TOKEN);
