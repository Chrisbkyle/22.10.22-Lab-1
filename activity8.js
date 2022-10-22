//Have an array of dealership objects
let Lisa = {
    "Name" : "Lisa",
    "Wage" : "30",
    "Department" : "Repair"
}
let Kevin = {
    "Name" : "Kevin",
    "Wage" : "28",
    "Department" : "Sales"
}

let Mazda = {
    "Model" : "Demio",
    "Year" : "2010",
    "Cost" : "7000"
}

let Ford = {
    "Model" : "Mustang",
    "Year" : "2012",
    "Cost" : "20000"
}

let Nissan = {
    "Model" : "March",
    "Year" : "2003",
    "Cost" : "3000"
}

let Tom = {
    "Name" : "Tom",
    "Wage" : "30",
    "Department" : "Repair"
}

let Julia = {
    "Name" : "Julia",
    "Wage" : "28",
    "Department" : "Sales"
}

let Jeep = {
    "Model" : "Cherokee",
    "Year" : "2016",
    "Cost" : "45000"
}

let LandRover ={
    "Model" : "RangeRover",
    "Year" : "2020",
    "Cost" : "110000"
}

let Tesla = {
    "Model" : "Model Y",
    "Year" : "2022",
    "Cost" : "250000"
}

let employeesOne = [Lisa, Kevin]
let carsOne = [Mazda, Ford, Nissan];
let employeesTwo = [Tom, Julia];
let carsTwo = [Jeep, LandRover, Tesla]

let dealershipOne = [employeesOne, carsOne];
let dealershipTwo = [employeesTwo, carsTwo];




console.log(dealershipOne[0][1])
console.log(dealershipTwo[1][1])
//Each dealership object should have 2 arrays. One for employees and one for cars

//An employee object should have their name, job title, and salary

//A car object should have model name, manufacturer name, model year, and price
