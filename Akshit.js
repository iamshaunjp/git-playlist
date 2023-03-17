const users = [
    { name: 'Arihant', age: 29, id: 'Ky10'},
    { name: 'Alex', age: 35, id: 'fY29'},
    { name: 'Ajay', age: 20, id: 'mG88'},
    { name: 'Akshay', age: 20, id: 'yyG7'},
    { name: 'Akansha', age: 19, id: 'g6H9'},
]

users.map((user) => {
    console.log(`ID: ${user.id}`)
    console.log(`Name: ${user.name}`)
    console.log(`Age: ${user.age}\n`)
})