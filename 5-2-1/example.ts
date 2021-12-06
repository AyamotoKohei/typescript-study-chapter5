const Test = {};
interface Test {}
namespace Test {}

const value1 = "test";
let value = "test";
function greet() {} // Error
const greet = "hello"; // Error

interface User {
  name: string;
}
interface User {
  age: number;
}
/*
interface User{
  name: string;
  age: number;
}
*/

type User = {
  // Error
  name: string;
};
type User = {
  // Error
  age: string;
};

interface Test {
  value: string;
}
namespace Test {
  export interface Properties {
    name: string;
  }
}
// interfaceの型の付与
const test: Test = {
  value: "value",
};
// 名前空間が保持する型の付与
const properties: Test.Properties = {
  name: "Taro",
};
