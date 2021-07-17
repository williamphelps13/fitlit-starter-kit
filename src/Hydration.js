class Hydration {
  constructor(userHydration) {
    this.userHydration = userHydration;
  }

  getUserAvgOz() {
    return Math.round(
      this.userHydration.reduce((totalOunces, userEntry) => {
        return (totalOunces += userEntry.numOunces);
      }, 0) / this.userHydration.length
    );
  }

  getUserOzByDate(date) {
    return this.userHydration.find((userEntry) => userEntry.date === date)
      .numOunces;
  }

  // getUserOzByWeek() {

  // }
}
export default Hydration;
