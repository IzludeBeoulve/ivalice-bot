//  Configuração do BOT

const Eris = require('eris');
const http = require('http');
const express = require('express');
const app = express();
var bot = new Eris("NDAwNzU2MjczNzk0MTIxNzI4.DTgS7Q.CW86zv5AHso802q3jZj-5mM_6No");
var fs = require('fs');

//  Manter BOT online 24/7

app.listen(8080);
setInterval(() => {
  http.get(`http://robust-waste.glitch.me/`);
}, 300000);

//  Pré-definições

var i = ""
var path = ""
const dbplayer = "dbplayer/"
const exptxt = "/exp.txt"
const lvtxt = "/lv.txt"
const nexttxt = "/next.txt"
const goldtxt = "/gold.txt"
const dbinv = "dbinv/"
var pExp = 0
var pLv = 1
var pNext = 109
var pGold = 100
var winRate = 0

function createPlayer() {
  fs.writeFile((dbplayer + i + exptxt), "0")
  fs.writeFile((dbplayer + i + lvtxt), "1")
  fs.writeFile((dbplayer + i + nexttxt), "109")
  fs.writeFile((dbplayer + i + goldtxt), "100")
};

//	Console

bot.on("ready", () => {
	console.log("Irasshaimasen!");
});

//	Debug
//	+ Channel Id

bot.on("messageCreate", (msg) => {
	if(msg.content === "/reset") {
    i = msg.author.id.toString()
		fs.writeFile((dbplayer + i + exptxt), "0")
    fs.writeFile((dbplayer + i + lvtxt), "1")
    fs.writeFile((dbplayer + i + nexttxt), "109")
    fs.writeFile((dbplayer + i + goldtxt), "100")
    bot.createMessage(msg.channel.id, ("```Personagem de " + msg.author.username + " resetado```"))
	};
});

//	1.	Sistema

bot.on("messageCreate", (msg) => {
	if(msg.content === "/help") {
		bot.createMessage(msg.channel.id, {embed: {
			author: {
        name: "Ivalice System",
      },
      description: "`v0.2`",
      color: 16777215,
      thumbnail: {
				url: "https://i.imgur.com/PsxsFfA.png"
			},
			fields: [{
				name: "Comandos",
				value: "` `"
			},
      {
				name: "/help",
				value: "Abre esta janela de ajuda"
			},
      {
				name: "/player",
				value: "Verifica os atributos básicos do personagem, como Experiência, Nível e *Gold*"
			},
      {
				name: "/inventory",
				value: "Verifica os itens do seu inventário"
			},
      {
				name: "/shop",
				value: "Abre a loja local, caso haja"
			},
      {
        name: "/field",
			  value: "Verifica os monstros da região"
			},
      {
        name: "/explore",
			  value: "Explora a região com chances de encontrar e batalhar com algum inimigo a fim de ganhar Experiência, *Gold* e *Loot*. Caso a região possua algum *Boss*, utilizar o comando `/boss` e o nome do *Boss*"
			},
      {
        name: "/boss",
			  value: "Entra em batalha contra o *boss* especificado"
			}],
    }});
  };
});

//	1.1	Persongem

function Player(exp, lv, next, gold) {
	this.exp = exp;
	this.lv = lv;
	this.next = next;
	this.gold = gold;
};

player400756273794121728 = new Player(0, 1, 999999999999999, 0)
swords400756273794121728 = new Swords(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
kswords400756273794121728 = new Swords(0, 0, 0, 0, 0)
katanas400756273794121728 = new Swords(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
//ninja400756273794121728 = new Ninja(0, 0, 0, 0, 0, 0, 0, 0)
//knives400756273794121728 = new Knives(0, 0, 0, 0, 0, 0, 0, 0)

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



//	1.3	Atualizar Dados

bot.on("messageCreate", (msg) => {
  i = msg.author.id.toString()
  //	Verificar se não é o BOT
  if(msg.author.id != 400756273794121728) {
		if(msg.content.indexOf("/") != 0) {

      //	Verificar se jogador já foram criados
      if (fs.existsSync(dbplayer + i + exptxt)) {
      } else {
        //  Criar jogador
        fs.writeFile((dbplayer + i + exptxt), "0")
        fs.writeFile((dbplayer + i + lvtxt), "1")
        fs.writeFile((dbplayer + i + nexttxt), "109")
        fs.writeFile((dbplayer + i + goldtxt), "100")
      }
		  //	Fim da verificação

      //  Definir Jogador
			fs.readFile(dbplayer + i + exptxt, 'utf8', function(err, data) {
        pExp = data
      });
      fs.readFile(dbplayer + i + lvtxt, 'utf8', function(err, data) {
        pLv = data
      });
      fs.readFile(dbplayer + i + nexttxt, 'utf8', function(err, data) {
        pNext = data
      });
      fs.readFile(dbplayer + i + goldtxt, 'utf8', function(err, data) {
        pGold = data
        eval("player" + i + " = new Player(" + pExp + ", " + pLv + ", " + pNext + ", " + pGold + ")")
      
        //  Atualizar Jogador
  			eval("player" + i + ".exp += 2");
        let ae = eval("player" + i + ".exp")
        fs.writeFile(dbplayer + i + exptxt, ae)
        
        //	Aplicar Level Up!
        if(eval("player" + i + ".exp >= player" + i + ".next")) {
		      eval("player" + i + ".lv += 1");
          let al = eval("player" + i + ".lv")
          fs.writeFile(dbplayer + i + lvtxt, al)
      		eval("player" + i + ".next = Math.floor(9 * Math.pow(player" + i + ".lv, 2) + 100 * player" + i + ".lv)");
          let an = eval("player" + i + ".next")
          fs.writeFile(dbplayer + i + nexttxt, an)
		      bot.createMessage(msg.channel.id, {embed: {
      			color: 16777215,
      			thumbnail: {
      				url: msg.author.avatarURL,
      			},
      			fields: [{
      				name: "LEVEL UP!",
      				value: msg.author.username + " alcançou o Lv " + eval("player" + msg.author.id + ".lv")
      		  }]
      	  }});
        };
      });
    };
  };
});

//	2	Jogador
//	2.1	Checar Atributos

bot.on("messageCreate", (msg) => {
	if(msg.content === "/player") {
		//	Verificar se não é o BOT
		if(msg.author.id != 400756273794121728) {
      i = msg.author.id.toString()

      //	Verificar se jogador já foram criados
      if (fs.existsSync(dbplayer + i + exptxt)) {
      } else {
        //  Criar jogador
        fs.writeFile((dbplayer + i + exptxt), "0")
        fs.writeFile((dbplayer + i + lvtxt), "1")
        fs.writeFile((dbplayer + i + nexttxt), "109")
        fs.writeFile((dbplayer + i + goldtxt), "100")
      }
			//	Fim das verificaçôes de jogador

      //  Definir Jogador
			fs.readFile(dbplayer + i + exptxt, 'utf8', function(err, data) {
        pExp = data
      });
      fs.readFile(dbplayer + i + lvtxt, 'utf8', function(err, data) {
        pLv = data
      });
      fs.readFile(dbplayer + i + nexttxt, 'utf8', function(err, data) {
        pNext = data
      });
      fs.readFile(dbplayer + i + goldtxt, 'utf8', function(err, data) {
        pGold = data

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
     				value: pExp,
   	  			inline: true
	      	},
   			  {
     				name: "Nível",
     				value: pLv,
   	  			inline: true
   		  	},
   			  {
     				name: "EXP Necessária",
     				value: pNext,
   	  		},
   		  	{
   			  	name: "Gold",
   				  value: pGold,
     			}],
   		  }});
      });
    };
	};	
});

//	3.	Lojas
//  3.1  Igros Castle

bot.on("messageCreate", (msg) => {
	if(msg.content === "/shop" && msg.channel.id === "400723494738067456") {
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
	}

  //	3.2	Mandalia Plains
	else if(msg.content === "/shop" && msg.channel.id === "401723622533890049") {
		bot.createMessage(msg.channel.id, "Não há lojas por aqui.");
  }

  //	3.3	Gariland Magic City
  else if(msg.content === "/shop" && msg.channel.id === "399316614152978446") {
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
	}

  //	3.x	Test Bot
	else if(msg.content === "/shop" && msg.channel.id === "400772367560736769") {
		bot.createMessage(msg.channel.id, "Não há lojas por aqui.");
	};
});

//  4  Inimigos

bot.on("messageCreate", (msg) => {
  
  //	Verificar se jogador já foram criados
  if (fs.existsSync(dbplayer + i + exptxt)) {
  } else {
    //  Criar jogador
    fs.writeFile((dbplayer + i + exptxt), "0")
    fs.writeFile((dbplayer + i + lvtxt), "1")
    fs.writeFile((dbplayer + i + nexttxt), "109")
    fs.writeFile((dbplayer + i + goldtxt), "100")
  }
	//	Fim das verificaçôes de jogador
  
  //  Definir nível do Jogador
  fs.readFile(dbplayer + i + lvtxt, 'utf8', function(err, data) {
    winRate = data
  
    //  4.1  Igros Castle
    if(msg.content === "/field" && msg.channel.id === "400723494738067456") {
		  bot.createMessage(msg.channel.id, "Não há monstros ou inimigos por aqui...");
    }
  
    //  4.2  Mandalia Plains
    else if (msg.content === "/field" && msg.channel.id === "401723622533890049") {
      bot.createMessage(msg.channel.id, {embed: {
  		  fields: [{
     		  name: "Inimigos",
   	    	value: "Chocobo\nGoblin",
          inline: true
   	  	},
   		  {
     		  name: "% de Vitória",
 	    	  value: (Math.floor(139 + Number(winRate)) / 2) + "%\n" + (Math.floor(159 + Number(winRate)) / 2) + "%",
          inline: true
   		  }],
   	  }});
    }

    //  4.3  Gariland Magic City
    else if (msg.content === "/field" && msg.channel.id === "399316614152978446") {
		  bot.createMessage(msg.channel.id, "Não há monstros ou inimigos por aqui...");
    }

    //  4.x  Test Bot
    else if(msg.content === "/field" && msg.channel.id === "400772367560736769") {
		  bot.createMessage(msg.channel.id, "Não há monstros ou inimigos por aqui...");
    };
  });
});

//	Fim

bot.connect();
