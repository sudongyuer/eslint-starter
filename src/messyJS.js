let y = {
  name: "Jack",

  age: 11,
};

console.log(y);

// 原来的代码
function foo() {
  let isTrue;
  return (
    isTrue &&
    [0, 1, 2].map(function (num) {
      return num * 2;
    })
  );
}
foo();

console.log({
  name: "Jack",

  age: 11,
});
