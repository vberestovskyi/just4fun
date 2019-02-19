function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function () {
    console.log("Speaking");
}
Robot.prototype.makeCoffee = function () {
    console.log("Making coffee");
}
Robot.prototype.blinkLights = function () {
    console.log("Blinking lights");
}
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log("Making coffee");
}
rosie.cleanHouse = function () {
    console.log("Cleaning a house");
}
console.log(robby.name + " was made by " + robby.maker +
    " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker +
    " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();