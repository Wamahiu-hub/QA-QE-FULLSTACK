type pesron1 = {
    name: string
    age: number
    location: string
}

type NameAndAge = Pick<pesron1,"name" | "age">

const NameAndAge:NameAndAge = {
    name: "Alice",
    age: 30
}

console.log(NameAndAge)