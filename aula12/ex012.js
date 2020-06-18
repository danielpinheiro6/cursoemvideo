var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >=8 && hora < 12) {
    console.log('Ainda é período da manhã')
} else if (hora > 12 && hora <= 18) {
    console.log('Estamos no período da tarde')
} else if (hora > 18 && hora <= 24) {
    console.log('É noite')
} else {
    console.log('É madrugada! Vai dormir que você é corno e não morcego')
}