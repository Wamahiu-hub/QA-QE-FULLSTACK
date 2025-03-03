async function add(x, y) {
    return x + y
}
const addMarks = async () => {
    console.log(`I am adding marks`)
    const result = await add(4, 5)
    console.log(result);
}
addMarks()