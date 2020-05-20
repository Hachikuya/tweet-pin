// Determine the position of the image block

// Predefined params
const thumbnail_width = 300 // px
const column_amount = 4
const hor_dis = 20 //px
const ver_dis = 16 //ox
var main_column_width_style = `width: ${thumbnail_width * column_amount +
  hor_dis * (column_amount - 1)}px;`

var current_height = Array(column_amount).fill(0)
var data = []

// Main function
function getBlockPosition(image_data) {
  // sort image_data into data array by id

  addElementByID(image_data)

  // a function process the position of ImageBlock
  layoutCalc()
}

// a function initializes the position info array
function resetData() {
  resetData_execute()
  console.log('Data reset')
}

// export
export default {
  data,
  main_column_width_style,
  getBlockPosition(image_data) {
    return getBlockPosition(image_data)
  },
  resetData() {
    return resetData()
  }
}

// PRIMARY FUNCTION

function addElementByID(element) {
  // find the the first element in the data array which has id property and larger than arg_element.id
  let splice_index = data.findIndex(
    array_element => element.id < array_element.id
  )
  // if found, then insert image_data before the matched element
  // if not found, then add the data to the end of the data array.
  if (splice_index !== -1) {
    data.splice(splice_index, 0, element)
  } else {
    data.push(element)
  }
}

function layoutCalc() {
  // initialize current_height info
  current_height = Array(column_amount).fill(0)

  data.forEach((element, index) => {
    calc_pos_size(index)
  })
}

function resetData_execute() {
  data = []
}

// SECONDARY FUNCTION

function calc_pos_size(image_index) {
  let next_column = { height: 0, index: -1 }
  // DETERMINE NEXT COLUMN
  if (image_index < column_amount) {
    // FIRST ROW IMAGE
    next_column.index = image_index
  } else {
    // REMAINING IMAGE
    current_height.forEach((column_height, index) => {
      if (index === 0) {
        next_column.height = column_height
        next_column.index = index
      } else {
        if (column_height < next_column.height) {
          next_column.height = column_height
          next_column.index = index
        }
      }
    })
  }
  // CALCULATE POSITION & SIZE
  // DETERMINE IMAGE POS
  // xPos = column left
  data[image_index].xPos = (thumbnail_width + hor_dis) * next_column.index
  // yPos = current height (current height contains precalculated space)
  data[image_index].yPos = next_column.height
  // DETERMINE IMAGE SIZE
  // newWidth = thumbnail_width
  data[image_index].newWidth = thumbnail_width
  // newHeight = oriHeight / oriWidth * thumbnail_width
  data[image_index].newHeight = Math.round(
    (data[image_index].oriHeight / data[image_index].oriWidth) * thumbnail_width
  )
  // STRING OUT THE CSS STYLE
  // string out the css style for img container
  data[
    image_index
  ].posize = `transform:translateX(${data[image_index].xPos}px)translateY(${data[image_index].yPos}px);width: ${data[image_index].newWidth}px;height: ${data[image_index].newHeight}px;`
  // string out the width css style for img tag
  data[
    image_index
  ].imgStyle = `width: ${data[image_index].newWidth}px; height: ${data[image_index].newHeight}px`
  // UPDATE CURRENT LAYOUT INFO
  // update column height => current_height + newHeight + ver_dis
  current_height[next_column.index] =
    next_column.height + data[image_index].newHeight + ver_dis
}
