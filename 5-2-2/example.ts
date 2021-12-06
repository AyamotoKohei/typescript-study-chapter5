interface aBounds {
  width: number;
  height: number;
}
interface aBounds {
  left: number;
  top: number;
}
/*
interface aBounds {
  width: number;
  height: number;
  left: number;
  top: number;
}
*/

interface anotherBounds {
  width: number;
  height: number;
}
interface anotherBounds {
  width: number;
  height: string; // Error
}

interface secondBounds {
  witdh: number;
  height: number;
  move(amount: number): string;
}
interface secondBounds {
  left: number;
  top: number;
  move(amount: number): string;
}
/*
const bounds: secondBounds = {
  witdh: 0,
  height: 0,
  left: 0,
  top: 0,
  move: (amount: string | number) => {
    return `${amount}`;
  },
};
*/
