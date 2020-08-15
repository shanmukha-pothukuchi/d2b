function isFloat(n){
    return n % 1 != 0;
}

function toBinary(x){    
    if(x == null || x.trim() === '' || isNaN(x) || isFloat(x) || parseInt(x) < 0){
        alert('Must be a valid positive integer')
        
        myInput.value = ""
        myInput.focus()
        return
    }

    let result = ''

    while(Math.floor(x/2) > 0) {
        result += x % 2
        x = Math.floor(x/2)
    }

    result += '1'

    let resultActual = ''
    for(let idx = result.length - 1; idx >= 0; idx--) {
        resultActual += result[idx];
    }

    resultValue.innerHTML = (x == 0 ? 0 : resultActual)

    myInput.value = ""
    myInput.focus()
}