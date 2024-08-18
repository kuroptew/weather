const kmPerHourToMeterPerSec = (kmPerHour:number):number=>{
  return Math.round(kmPerHour * 1000 / 3600)
}

export default kmPerHourToMeterPerSec