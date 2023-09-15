"use strict";
function car_Obj(manufacturer, model, ...args) {
    return {
        manufacturer: manufacturer,
        model: model,
        args: args,
    };
}
console.log(car_Obj("Honda", 2023, "Black"));
console.log(car_Obj("Royal Rolyce - Phantom", 2017, "Belladonna Purple", "Auto Transmission", "5000 RPM"));
