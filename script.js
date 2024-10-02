function checkAccess() {
    const age = document.getElementById('ageInput').value;
    const resultDiv = document.getElementById('result');
    let message;

    if (age === "") {
        message = "Invalid age";
    } else {
        const numericAge = Number(age);

        if (numericAge < 18) {
            message = "Access denied. You are too young.";
        } else if (numericAge > 65) {
            message = "Access denied. You are too old.";
        } else if (numericAge >= 18 && numericAge < 65) {
            message = "Access granted.";
        }
    }

    resultDiv.textContent = message;
}
