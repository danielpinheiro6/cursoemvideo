var idade = 70
if (idade < 16) { 
    console.log('Você é menor de idade e não pode votar')
} else {
    if (idade < 18) {
        console.log('Você continua sendo menor de idade, porém pode votar')
    } else {
        console.log('Você é maior de idade e deve votar')
    }
}

var idade = 70
if (idade < 16) { 
    console.log('Você é menor de idade e não pode votar')
} else if (idade < 18) {
    console.log('Você continua sendo menor de idade, porém pode votar')
} else  if (idade >=65) {    
    console.log('Você não é mais obrigado a votar')
} else {
    console.log('Você é maior de idade e deve votar')
}

var idade = 66
if (idade < 16) { 
    console.log('Você é menor de idade e não pode votar')
} else if (idade < 18 || idade > 65) {
    console.log('Você não é mais obrigado a votar')
} else {
    console.log('Você é maior de idade e deve votar')
}