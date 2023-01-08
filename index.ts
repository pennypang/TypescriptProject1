//console.log('Hello World!');

// let age: number = 20;
// if (age < 50)
//     age += 10;
// console.log(age);

/*built-in type */
// let sales : number = 123_456_789;
// let course : string = 'Typescript';
// let is_published : boolean = true;

// let level;

/*Arrays */
// let numbers: number[] = [1, 2, 3];

// let numbers1 = [1, 2, '3'];

// let numbers2: number[] = [];
// numbers2.forEach(n=> n.toString);

/*Tuple */
//1, 'Huimin'
// let user: [number, string, boolean, number] = [1, 'Huimin', true, 100];
// console.log(user[1].charAt(3));


/**Enums */
// enum Size { Small = 1, Medium = 2, Large = 3 };
// let mySize = Size.Medium;
// console.log(mySize);

/**Function */
// function calculateTax(income: number) {
//     return 100;
// }

// function calculateTax2(income: number, taxYear: number) : number {
//     if(taxYear < 2022)
//         return income * 0.2;
//     return income * 0.3;
// }

// console.log(calculateTax2(10_000, 2022));

//Objects
// let employee  = { id : 1};
// console.log(employee.id);


// let employee2 : {
//     readonly id: number,
//     name: string,
//     retire: (date: Date)=> void
// } = {
//     id:2, 
//     name:"Huimin", 
//     retire: (date: Date)=>{
//         console.log(date);
//     }};

// console.log(employee2.retire(new Date('2023-01-02')));

//Type Alias
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }
// let date = new Date('2023-01-02');
// let employee: Employee =  {
//          id:2, 
//          name:"Huimin", 
//          retire: (date: Date)=>{
//              console.log(date + "Happy");
//          }
// };

// console.log(employee.id);

//Union Type
function kgToLbs(weight: number | string) : number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}