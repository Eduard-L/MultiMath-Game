"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const utility_1 = require("./utility");
const player_1 = require("./player");
let newGame;
document.getElementById("startGame").addEventListener("click", () => {
    const player = new player_1.Player();
    player.name = (0, utility_1.getInputValue)("playername");
    const problemCount = Number((0, utility_1.getInputValue)("problemCount"));
    const factor = Number((0, utility_1.getInputValue)("factor"));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById("calculate").addEventListener("click", () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map