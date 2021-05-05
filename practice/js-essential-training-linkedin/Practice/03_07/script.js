/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const myPhone = {
    name: "Samsung",
    model: "A5",
    size: 5.2,
    buttons: 4,
    isOn: true,
    turnOnOff: function (onStatus) {
        this.isOn = onStatus;
    }
}