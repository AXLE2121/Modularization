export const Vehicle = (() =>{

    let speed = 0;
    let fuel = 100;

    return {
    getSpeed: () => speed,
    getFuel: () => fuel,
    accelerate() {
      if (fuel > 0) {
        speed += 10;
        fuel -= 5;
        console.log(`Accelerated! Speed: ${speed} km/h, Fuel: ${fuel}%`);
      } else {
        console.log("Out of fuel!");
      }
    },
    brake() {
      speed = Math.max(speed - 10, 0);
      console.log(`Braked! Speed: ${speed} km/h`);
    },
    refuel() {
      fuel = 100;
      console.log("Vehicle refueled!");
    }
  };
})();