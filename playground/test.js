// testing if data in external js file can connect with the vue data

var a = [0]

function updateTest() {
  if (a.length > 10) {
    a.pop()
    console.log(a)
    return
  } else {
    a.push(a.length)
  }
}

export default {
  a,
  updateTest() {
    return updateTest()
  }
}
