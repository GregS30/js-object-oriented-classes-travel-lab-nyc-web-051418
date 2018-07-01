const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const thisDate = new Date(year, 0, 1)
    return thisDate.getFullYear() - this.startDate.getFullYear()
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled () {
    let x = this.endingLocation.vertical
    let y = this.beginningLocation.vertical
    let northBlocks = x > y ? x - y : y - x

    let p = eastWest.findIndex ((street) => street == this.endingLocation.horizontal) + 1
    let q = eastWest.findIndex ((street) => street == this.beginningLocation.horizontal) + 1
    let eastBlocks = p > q ? p - q : q - p

    return northBlocks + eastBlocks
  }

  estimatedTime(peakTime) {
    return peakTime ? this.blocksTravelled() * 3 / 6 : this.blocksTravelled() * 2 / 6   
  }


}
