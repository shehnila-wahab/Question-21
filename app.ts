interface item {
    name:string
    price:number
}

//create two objects
const book: item ={
    name: 'ESSENTIAL TYPESCRIPT',
    price:450
}
const apple: item={
    name:'Apple',
    price:200
}
console.log(`Book name:${book.name},price: $${book.price}`)
console.log(`apple name:${apple.name},price: $${apple.price}`)