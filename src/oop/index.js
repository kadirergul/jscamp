class Customer{
    constructor(id,customerNumber,name){
        this.id = id
        this.customerNumber = customerNumber
        this.name = name
    }
}

let customer = new Customer(1,1234,"kadir") 
// customer.name = "Kadir ERgül"
console.log(customer)

Customer.bisey = "Bişey"
console.log(Customer.bisey)