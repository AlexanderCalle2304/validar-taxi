`use strict`;
let vehicle = {
  licensePlate: "AAA-4112",
  Year: 2016,
  brand: "Chevrolet",
  model: "Luv D-max",
};

function validarTaxi(vehicle) {
  let currentYear = 2023;
  let carAge = currentYear - vehicle.Year;
  return carAge < 10;
}

let taxiaproved = validarTaxi(vehicle);
alert(taxiaproved);
