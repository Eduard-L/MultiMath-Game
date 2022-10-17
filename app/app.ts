import { Game } from "./game";
import { getInputValue } from "./utility";
import { Player } from "./player";

let newGame: Game;

// add click handler to the start game button
document.getElementById("startGame")!.addEventListener("click", () => {
  const player: Player = new Player();
  player.name = getInputValue("playername");

  const problemCount: number = Number(getInputValue("problemCount"));
  const factor: number = Number(getInputValue("factor"));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById("calculate")!.addEventListener("click", () => {
  newGame.calculateScore();
});

// function startGame() {
//   //blalalal
//   //   let messagesElement = document.getElementById("messages");
//   //   messagesElement!.innerText = "Welcome to MultiMath! Starting new game...";
//   let player: string | undefined;
//   player = Utility.getInputValue("playername");

//   logPlayer(player);

//   postScores(100, player);
// }

// function logPlayer(name: string = "MultiPlayer"): void {
//   console.log(` new game starting for player : ${name}`);
// }

// function postScores(score: number, playerName: string = "MultiPlayer"): void {
//   let logger: (value: string) => void;

//   if (score < 0) {
//     logger = logError;
//   } else {
//     logger = logMessage;
//   }
//   const scoreElement: HTMLElement | null =
//     document.getElementById("postedScores");
//   scoreElement!.textContent = `${score}-${playerName}`;

//   logger(`Score is ${score}`);
// }

// document.getElementById("startGame")!.addEventListener("click", startGame);

// const logMessage = (message: string): void => console.log(message);

// function logError(err: string) {
//   console.error(err);
// }

// const firstPlayer: Player = new Player();
// firstPlayer.name = "Lanier";
// console.log(firstPlayer.name);

// let myResult: Result = {
//   playerName: "Eddy",
//   score: 5,
//   problemCount: 5,
//   factor: 7,
// };

// let player: Person = {
//   name: "Danny",
//   formatName: () => "Dan",
// };

// interface Employee {
//   name: string;
//   title: string;
// }

// interface Manager extends Employee {
//   department: string;
//   numOfEmployee: string;
//   kick?: (name: string) => void;
// }

// const obj: Manager = {
//   name: "eddy",
//   title: "boss",
//   department: "blala",
//   numOfEmployee: "lahslka",
// };
