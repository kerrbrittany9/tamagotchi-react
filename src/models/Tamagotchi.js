import Moment from "moment";

class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.life = 100;
    this.timeBirth= new Moment();
    this.timeSinceBirth = this.setTimeSinceBirth();
  }

  setTimeSinceBirth() {
    this.timeSinceBirth = this.timeBirth.fromNow(true);
  }
}
export default Tamagotchi;
