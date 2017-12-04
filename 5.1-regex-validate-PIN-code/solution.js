function validatePIN(pin) { //declaring function expecting single argument
    let value = false; //declaring value as flag set to false
    if (/^[0-9]{4}$/.test(pin) === true || /^[0-9]{6}$/.test(pin) === true) { // logic running regex test on pin 
        value = true; //if pin is acceptable, set value to true
    }
    return value; //return value
}