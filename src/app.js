

// let student = {id : 1, name : 'kadir'};

// function save(puan=10,ogrenci) {
//     console.log(ogrenci.name +" : "+ puan );
// }

// // save(undefined,student);

// let students = ["kadir erg","şelale şengör","berke alya"];

// // console.log(students)

// let students2 = [student,{id:3, name:"demir"},"kastamonu", {city:"İstanbul"}]

// // console.log(students2)

// //rest
// let showProducts = function (id,...products) {
//     console.log(id)
//     console.log(products)
// }

// console.log(typeof showProducts)

// showProducts(10,["btc","eth","avax"])

// let points = [89,99,12,9,1,40]

// console.log(Math.max(...points))

// console.log(..."ABD","U",..."UKG",..."TR")

//  let populations = [10000,20000,30000]
//  let [small,medium,high,cokhigh,maximum] = populations


//  console.log(small)
//  console.log(medium)
//  console.log(high)

let category = {id:1, name:"ekmek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)


//Redux
