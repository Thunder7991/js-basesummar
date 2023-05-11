function person(name,age,height,address) {

    this.name = name
    this.age = age
    this.height = height;
    this.address = address
    
}

let p1 =  new person("thunder",18,1.88,"北京市")

// console.log(p1.__proto__.constructor);
