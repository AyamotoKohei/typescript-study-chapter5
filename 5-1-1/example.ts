let s1: "test" = "test";
let s2: string = s1;
let s3: string = "test";
let s4: "test" = s4;

let n1: 0 = 0;
let n2: number = n1;
let n3: number = 0;
let n4: 0 = n3;

let a1: any = false;
let a2: string = a1;
let a3 = a1 as number;

let un1: unknown = "test";
let un2: string = un1;
let un3: number = un1 as number;

const b1 = "0";
const b2 = "0" as string;
const b3 = 0 as string;
const b4 = "0" as {};
