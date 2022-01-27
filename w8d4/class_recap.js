// What's a class ?

// object, blueprint, fancy object
// blueprint to build objects
// blueprint to build instances of class as an object

class Toaster {
  constructor(brand, type, nickname) {
    this.brand = brand;
    this.type = type;
    this.nickname = `""${nickname}""`;
  }

  toast = function () {
    setTimeout(() => {
      console.log(`${this.type} Schklunk`);
    }, 1500);
  };
}

class SmartToaster extends Toaster {
  constructor(brand, type, nickname) {
    super(brand, type, nickname);
  }

  smartToast = function () {
    console.log("SENDING A TWEET ABOUT YOUR TOAST");
    setTimeout(() => {
      console.log(`${this.type} Schklunk`);
    }, 1500);
  };
}

const panasonic = new Toaster("Panasonic", "Fancy", "Bawb");
const blackAndDecker = new Toaster("Black & Decker", "Utilitarian", "Pewter");

const fancyToaster = new SmartToaster("Microsoft", "Very cool", "Cortana");

console.log(fancyToaster);
console.log(panasonic);
panasonic.toast();
blackAndDecker.toast();
