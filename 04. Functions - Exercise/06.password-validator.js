function passwordValidator(password) {
    let currentChar = "";
    let currentCharCode = 0; 
    let isValid = true;
    if (!validation1(password)) {
        console.log("Password must be between 6 and 10 characters");
    };
    if (!validation2(password)) {
        console.log("Password must consist only of letters and digits");
    };
    if (!validation3(password)) {
        console.log("Password must have at least 2 digits");
    };
    if (validation1(password) && validation2(password) && validation3(password)) {
        console.log("Password is valid");
    }

    function validation1(input1) {
      if (input1.length >= 6 && input1.length <= 10) {
          return true;
      } else {
          return false;
      }
    }
    function validation2(input2) {
        for (let i = 0; i < input2.length; i++) {
            currentChar = input2[i];
            currentCharCode = currentChar.charCodeAt();
            if ((currentCharCode >= 48 && currentCharCode <= 57) || (currentCharCode >= 65 && currentCharCode <=90) || (currentCharCode >= 97 && currentCharCode <=122)) {
                isValid = true;
            } else {
                return false;
            }
        }
        if (isValid) {
            return true;
        }
    }
    function validation3(input3) {
        let digitsCounter = 0;
        for (let j = 0; j < input3.length; j++) {
            currentChar = input3[j];
            currentCharCode = currentChar.charCodeAt();
            if (currentCharCode >= 48 && currentCharCode <= 57) {
                digitsCounter++;
            }
            if (digitsCounter >= 2) {
                return true;
            }
        }
        if (digitsCounter < 2) {
            return false;
        }
        
    }
}
passwordValidator("66221114e.");