//used to store and manipulate ordered collection of values
const siz = ['felistus', 'Nelly', 'Per1']
//siz.splice(1,0, 'Fatma')
//console.log(siz)
siz.splice(1,2, 'najmar', 'jane' )
console.log(siz)

const broz = ['Mark', 'Allan', 'Ian', 'Stano']


//console.log(broz.slice(1,3)) // Removes from index 1 to index 3-1 [Mark.Allan]
//console.log(broz.includes('ANN'))
//console.log(broz.includes('Mark'))

console .log(broz.slice(0, broz.length-1)) //[ 'Mark', 'Allan', 'Ian' ] at index zero to the length of the array minus 1
broz.pop(4)
console.log(broz) // [ 'Mark', 'Allan', 'Ian' ]