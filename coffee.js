function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        if (this.ounces === 8) {
            return "small";
        }
        if (this.ounces === 12) {
            return "medium";
        }
        if (this.ounces === 16) {
            return "large";
        }
    }
    this.toString = function () {
        return "You’ve ordered a " + this.getSize() + " " + this.roast + " coffee."

    }
}
var houseBlend = new Coffee("House Blend", 12); 
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16); 
console.log(darkRoast.toString());
var oneShot = new Coffee("One Shot", 8); 
console.log(oneShot.toString());