// console.log(process.argv)
// const double = (n) => n * 3
// // console.log(double(process.argv[2]))

// const [, , nums] = process.argv

// console.log(double(nums))

const sum = (a, b) => a + b
const [, , n1, n2] = process.argv
console.log(sum(n1, n2))

console.log(global)
console.log(window)
console.log(document)