function f(parameter) {

    parToNum = Number(parameter);

    if (isNaN(parToNum)) {
        alert("Parameter is not a number.");
    } else {
        alert(parToNum**3);
    }

 }

 let parameter = prompt("Enter parameter. It must be a number.");
 f(parameter);