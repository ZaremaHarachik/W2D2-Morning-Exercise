// Write 5 functions in a JS file.
// #1
const checkTypeOf = (data) => {
console.log(typeof(data))
}
checkTypeOf(true)
checkTypeOf("Good Morning!")
checkTypeOf(777)

// #2
const logWeather = () => {
    console.log("The Weather is cold")
}
logWeather()

// #3
const reverseLoopTwennyTimes = () => {
for (i=20; i>0; i--) {
    console.log(i)
}
}
reverseLoopTwennyTimes() 

// #4

const multiplyTwoNumbers = (x,y) => {
console.log(x*y)
}
multiplyTwoNumbers(3,4)

// #5
const oddNumber = (num) => {
if (num%2 === 0) {
    console.log("This number is odd") 
}
}
oddNumber(7)
oddNumber(16)
oddNumber(9)