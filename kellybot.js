"use strict";

const Eris = require("eris");

var token = require("./token.json");
var bot = new Eris.CommandClient(token, {}, { prefix: "_" });

bot.registerCommand("kelly", function(msg, args) {
    msg.channel.createMessage("Hello!");
});

bot.registerCommand("say", function(msg, args) {
    var argsText = args.join(" ");
    msg.channel.createMessage("Okay, " + argsText);
});

bot.connect();
