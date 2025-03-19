//type
//primitives refrence
// primitives => number boolean undefined string characters 
//eg1
// let a = 12;
// let b = a;

// a = a+2;
//eg 2
// let arr = [1, 2, 3, 4];
// let arr2 = arr;

// arr2.pop();

//refrence => objects classes function arrays tuples 

//Basic type
//Number
// let a : number;
// let arr : string = "hey";
// let variable : []

//tuple
// let arr: [number, string] = [1,"hey", "huhuh"];
// let arr2: [boolean, number, string] = [false, 12, "hey"];

//never
// eg:
// function runInfinite():never {
//     while(true) {
//         console.log("Infinite run")
//     }
// }

// runInfinite();
// console.log("hey");

//void

// function abcd(): void {  //void doesnot return any type
//     console.log("hey");
// }

//Enums

//eg1
// enum Direction{
//     top = "Top",
//     left = "Left",
//     right = "Right",
//     bottom = "Bottom",
// }

// Direction.top

//eg2

// enum MousePosition {
//     x =0,
//     y =0,
// }

// MousePosition.x
// MousePosition.y

// enum Human {
//     x = "man",
//     y = "women",
// }
// Human.x

//Tpye Inference
// let variable: string | null;
// variable = null;
// variable = "ujjwal"

// function abcd(variable: number | string) {

// }

// abcd(12);
// abcd("12");
// abcd("hero");
// abcd("true");


    // Intersection Types
// let a : number | string;
// a =12;
// a ="harsh";

// let a: number & string;
// type City = {
//     name: string,
//     population: number
// }

// type Planet = {
//     name: string,
//     cities: number
// }

// type CitiesInPlanet = City & Planet;

// let value: CitiesInPlanet = {
//     name: "Ujjwal",
//     population: 12494000,
//     cities: 12
// }

   // primitive type aliases


   //object type aliases
//    type Human = {
//     name: string,
//     age: number,
//     email: string,
//    }

//    let ujjwal: Human = {
//     name: 'ujjwal',
//     age : 21,
//     email: 'hackerujjwal.com '
//    };

// type Hey = {
//     weight: number,
//     color: string
// }

// let hey: Hey = {
//     weight: 20,
//     color:'#FFFFFFFF'
// }

   // Interfaces 
   // interface User{
   //  name: string,
   //  username: string,
   //  age:number,
   //  email:string,
   //  password:string
   // }

   // function getUser(user: User){
    
   // }

      // type
// type Sankhya = number;

// interface User {

// }

//type name = string;
// type name = number;
   //interface
// interface Human{
//    name: string;
// }

// interface Human{
//    age: number;
// }

// function abcd(human: Human){
//    human.
// }
// interface Food{
//    name: string;
//    price: number;
// }
// interface MithaFood extends Food{
//    verySweet: boolean;
// }

// interface KhattaFood extends Food{
//    verySour: boolean;
// }

// function getMithaai(mithaai: MithaFood){
//    mithaai.verySweet
// }

// function getKhattaFood(khattafood: KhattaFood){
//    khattafood.
// }







//1.39