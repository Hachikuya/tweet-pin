// 200519 1711
// test for char length of japanese

var a = `るるどちゃん`

console.log('12536478'.length)

// 200517 2120
// test for template literals

// var a = 1235456

// console.log(`The value of a is ${a + 5}`)

// 200517 2033
// test for let declaration scope

// var b = [0]

// function test() {
//   var a = 5
//   if(a) {
//     console.log(`I can access let declaration from primary if statement`)
//     if(a) {
//       console.log(`I can access let declaration from secondary if statement`)
//     } else {
//       console.log(`I can't access let declaration from secondary if statement`)
//     }
//   } else {
//     console.log(`I can't access let declaration from primary if statement`)
//   }

//   function test2() {
//     if(a) {
//       console.log(`I can access let declaration from an inner function`)
//     } else {
//       console.log(`I can't access let declaration from an inner function`)
//     }
//   }

//   test2()

//   test3()

//   b.forEach(() => {
//     console.log(`I can access let declaration from forEach loop`)
//   })

// }

// test()

// function test3() {
//   if(a) {
//     console.log(`I can access let declaration from an outer function`)
//   } else {
//     console.log(`I can't access let declaration from an outer function`)
//   }
// }

// >
// I can access let declaration from primary if statement
// I can access let declaration from secondary if statement
// I can access let declaration from an inner function
// ERROR: a is not defined
// I can access let declaration from forEach loop

// 200517 2024
// test for find min in array

// var a = [ 50, 238, 88, 65, 94, 21, 50, 2 ]

// function test(array) {
//   let max = -1
//   let max_index = -1
//   array.forEach((element, index) => {
//     if(element > max){
//       max = element
//       max_index = index
//     }
//   })
//   return [max, max_index]
// }

// console.log(test(a)) // > [238, 1 ]

// 200517 2020
// test for array.fill

// console.log(Array(4).fill(0)) // > [ 0, 0, 0, 0 ]

// 200517 1532
// test for calculating

// var a = 3

// console.log(a ? a : 2)

// 200517 1443
// test for async adding of objects but with the order base on its id

// var a = [
//   { id: 5, a: 2 },
//   { id: 2, a: 5 },
//   { id: 8, a: 4 },
//   { id: 1, a: 9 },
//   { id: 7, a: 5 },
//   { id: 4, a: 2 },
//   { id: 3, a: 5 },
//   { id: 0, a: 4 },
//   { id: 9, a: 9 },
//   { id: 6, a: 5 }
// ]

// function sortByID(array) {
//   let result = []

//   array.forEach(element => {
//     let splice_index = result.findIndex(result_element => element.id < result_element.id)
//     if(splice_index !== -1) {
//       result.splice(splice_index, 0, element)
//     } else {
//       result.push(element)
//     }
//   })

//   return result
// }

// console.log(sortByID(a))

// 200517 1413
// test for adding properties into object by direct assign

// a = { a: 0, b: 2}
// a.c = 3

// console.log(a) // >{ a: 0, b: 2, c: 3 }

// 200516 1227
// reverse the order of tweet object( we want the latest liked post at first)

// const fs = require('fs')

// data = fs.readFileSync('./store/likes_info_200515.json', { encoding:'utf8', flag:'r'})

// data = JSON.parse(data)

// console.log(data.likes_info)

// data = data.likes_info.reverse()

// console.log(data)

// 200516 0910
// write plain text json into json format file

// const fs = require('fs')

// let data = "[" + fs.readFileSync('./store/likes_info.txt', { encoding:'utf8', flag:'r'}) + "{}]"

// data = JSON.parse(data)

// data.forEach(element => {
//   if(element.tweetID) {
//     element.imageID_list.forEach(e => {
//       if(e.imageID) {
//         e.image_url = "https://pbs.twimg.com/media/" + e.imageID + "?format=" + e.image_type
//         console.log(e.image_url)
//       } else {
//         e.image_url = ""
//       }
//     })
//   }
// })

// data = JSON.stringify(data, null, 2)

// // console.log(data)

// // return

// fs.writeFile('./store/likes_info_200515.json', data, err => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log('output success')
// })

// 200516 0030
// test stringfy

// var test_stringfy = {
//   "name": "aaaaa",
//   "id": 12341718
// }

// console.log(JSON.stringify(test_stringfy))

// 200516 0016
//test the undefined statement logic
// test for a logic to find whether an element exists in the array

// var test = "0122,456,435,345"

// let a = undefined

// if(a) {
//   console.log('undefined passed')
// } else if (!a) {
//   console.log('!undefined passed')
// } else {
//   console.log('test failed')
// }

// if(!parseByComma(test).includes("0122")) {
//   console.log('function return undefined and !result passed')
// } else {
//   console.log(';a')
// }

//var Buffer = require('buffer')

// var b = Buffer.from('aaa')
// console.log(b)

// b = Buffer.from('')
// console.log(b)

// var a = Buffer.from('ccc')

// b = Buffer.concat([b, a])
// console.log(b)
