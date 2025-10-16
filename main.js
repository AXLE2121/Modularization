import { registerButtonEvent } from "./eventModule.js";
import { Vehicle } from "./patternModule.js";
import { EventEmitter } from "./observerModule.js";
import { sakyanan } from "./factoryModule.js";

document.addEventListener('DOMContentLoaded', () => {
  const eventBus = new EventEmitter();
  const info = sakyanan("car");

  const speedDisplay = document.getElementById('speed');
  const fuelDisplay = document.getElementById('fuel');

  eventBus.on('update', () => {
    speedDisplay.textContent = Vehicle.getSpeed();
    fuelDisplay.textContent = Vehicle.getFuel();
  });

  registerButtonEvent('btnAccelerate', () => {
    Vehicle.accelerate();
    eventBus.emit('update');
  });

  registerButtonEvent('btnBrake', () => {
    Vehicle.brake();
    eventBus.emit('update');
  });

  registerButtonEvent('btnRefuel', () => {
    Vehicle.refuel();
    eventBus.emit('update');
  });

  console.log(`Vehicle Created: ${info.type} | Fuel type: ${info.fuelType}`);
});