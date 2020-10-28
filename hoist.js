// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//       const name = names[index];
  
//       console.log(name + ' was found at index ' + index);
//     }
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

// console.log(hello);                                   
// var hello = 'world';                                 
//var hello;
// console.log(hello);
// hello = "world"
//predicted result:undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
// predicted result: magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//predicted result: only okay
//super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//predicted result: chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//predicted result: undefined
//chicken
//fish

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//predicted result: Undefined
//rock
//r&b
//disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//predicted result: san jose
//seattle
//burbank
//san jose

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

