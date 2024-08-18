const getLeftCurrent = (minTDay:number, maxTDay:number, currenT:number, widthBar:number, heightContainer:number, tempPerPixel:number):number=>{
  let leftCurrent

  switch(currenT){
    case minTDay:
      leftCurrent = 0
      break
    case maxTDay:
      leftCurrent = widthBar - heightContainer
      break
    default:
      leftCurrent = Math.abs(minTDay - currenT) * tempPerPixel +tempPerPixel/2 - heightContainer/2
      break
  }

  return leftCurrent
}

export default getLeftCurrent