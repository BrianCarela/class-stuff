class Robot {
    // constructor is always run first
    constructor(name, color, battery) {
      //console.log(this)

    // using keyword this to define properties in this class
      this.name = name;
      this.color = color;
      this.battery = battery;
      //console.log(this)
      //this.checkBatteryHealth = this.checkBatteryHealth.bind(this)
      //console.log(this)
    }
    // using arrow functions to bind methods to class
    greeting = () => {
      console.log(`My name is ${this.name}`)
      this.battery -= 1
    }
    sayColor = () => {
      console.log(`My color is ${this.color}`)
      this.battery -= 1
    }
    checkBatteryHealth = () => {
      console.log(`My battery is at ${this.battery}%`)
    }
    chargeBattery = (energy) => {
      this.battery += energy;
      console.log(`Battery charged`)
      this.checkBatteryHealth()
    }
  }
  let prime = new Robot('optimus prime', 'black', 1000);
  // prime.checkBatteryHealth();
  // prime.chargeBattery(50)
  // prime.greeting()
  class Defender extends Robot {
    constructor(name, color, battery, shield) {
      super(name, color, battery);
      this.shield = shield
    }
    useSheild = (amount) => {
      this.shield -= amount; 
      if (this.shield === 0 || this.shield < 0) {
        console.log(`Shield is destroyed. The next attack will be critical`)
      }
      console.log(`Shield level is at ${this.shield}%`)
    }
    showShieldLife = () => {
      console.log(`Current shield life is ${this.shield}%`)
    }
  }
  //let bumblebee = new Defender('bumble bee', 'yellow', 500, 1000)
  //bumblebee.useSheild(1000)
  //bumblebee.sayColor()
  class SuperRobot extends Defender {
    constructor(name, color, battery, shield, weapon) {
      super(name, color, battery, shield)
       this.weapon = weapon
    }
    attack = () => {
      console.log(`${this.weapon} is used`);
    }
  }
  let evilPrime = new SuperRobot('Evil Prime', 'black', 10000, 10000, 'Missile');
  evilPrime.attack()