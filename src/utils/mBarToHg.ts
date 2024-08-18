const mBarToHg = (value:number):number => {
  const k = 0.750062
  return Math.round(k * value)
}

export default mBarToHg