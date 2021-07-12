function solve() {
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = parts.engine*parts.power;
            this.fuel = fuel;
        }
        drive(fuelLoss) {
            this.fuel -= fuelLoss;
            return this.fuel;
        }
    }
    let parts = { engine: 6, power: 100 };
    let car = new Vehicle("a", "b", parts, 300);
    console.log(car);
}
solve();