// var name = 'Loki';
// function hello(name) {
//   console.log('Hello,', name);
// }
// hello('Thor');

// var counter = 0;
// function hello() {
//   console.log('Hello, world!');
//   counter = counter + 1;
// }
// hello();
// hello();
// console.log('Called hello', counter, 'times.');

// var counter = 0;
// function updateCounter() {
//   counter += 1;
//   console.log('The global count is', counter);
//   var counter = 0;
//   console.log('The local count is reset to', counter);
// }
// updateCounter();
// updateCounter();
// updateCounter();

// // Line 1
// var a = 0;
// // Line 2
// function f(c) {
//   // Line 3
//   var b = 1;
//   // Line 4
//   function g(d) {
//     // Line 5
//     var e = 4;
//     // Line 6
//   }
//   // Line 7
//   return g;
//   // Line 8
// }
// // Line 9
// f(2)(3);
// // Line 10