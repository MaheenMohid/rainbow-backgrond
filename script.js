// const rainbow = document.getElementsByClassName(".rainbow")
// const box = document.getElementById("box")

// function hmm() {
//     addEventListener("click", () => {
//         style.background-color = red
//     })
// }

const array = [1, 2, 10, 16]
const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2)
})

console.log(double)

// map, filter , reduce
const mapArray = array.map((num) => {
  return num * 2
})
console.log('map ', mapArray)

const filterArray = array.filter((num) => {
  return num > 5
})
console.log(filterArray)

const reduceArray = array.reduce((accumalator, num) => {
  return accumalator + num
}, 0)
console.log('reduce', reduceArray)

// refernce type
var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

instantiation

class Player {
  constructor(name, type) {
    console.log(this)
    this.name = name
    this.type = type
  }
  introduce() {
    console.log(`hi I am ${this.name}, I am ${this.type}`)
  }
}

class wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`weeee i am a ${this.type}`)
  }
}

const wizard1 = new wizard('sheelly', 'healer')
const wizard2 = new wizard('shawn', 'darkmagic')
