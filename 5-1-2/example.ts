let o1: {} = 0;
let o2: {} = "1";
let o3: {} = false;
let o4: {} = {};

let o5: object = 0;
let o6: object = "1";
let o7: object = false;
let o8: object = {};

type K0 = keyof {};
type K1 = keyof { K: "K" };
type K2 = keyof 0;
type K3 = keyof "1";
type K4 = keyof false;

let a1 = { p1: 0 };
let a2 = { p1: "test" };
a1 = a2;
a2 = a1;

let b1 = { p1: "test" };
let b2 = { p2: "test" };
b1 = b2;
b2 = b1;

let c1 = { p1: "test" };
let c2 = { p1: "test", p2: 0 };
c1 = c2;
c2 = c1;

let d1 = {};
let d2 = { p1: "test" };
d1 = d2;
d2 = d1;
