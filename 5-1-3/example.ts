let fn1 = (a1: number) => {};
let fn2 = (a1: string) => {};
fn2 = fn1; // Error
fn1 = fn2; // Error

let fn3 = (a: number) => 0;
let fn4 = (b: number, s: string) => 0;
fn4 = fn3;
fn3 = fn4; // Error
