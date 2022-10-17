import { Person } from "./Person";
export class Player implements Person {
  name: string;
  age: number;
  highScore: number;

  formatName() {
    return this.name.toUpperCase();
  }
}
