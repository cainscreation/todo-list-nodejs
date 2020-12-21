
const fs =require("fs")
// const book = {
//     name: 'Harshit',
//     planet:'mars',
//     age:1000
// }

const read = fs.readFileSync('1.json')
const dataJSON = read.toString()
const user = JSON.parse(dataJSON)

user.name = 'Harshit Goyal'
user.age = 18
user.planet = 'Earth'
const userJSON =JSON.stringify(user)
fs.writeFileSync('1.json',userJSON)