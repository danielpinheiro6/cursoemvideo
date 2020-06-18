function carregar() { 
    var msg = document.querySelector('h2#horainf')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
        msg.innerHTML = `${hora}:${min}`
    var manha = hora >= 8 && hora < 12
    var almoco = hora >= 12 && hora < 14 
    var tarde = hora >= 14 && hora < 18
    var entardecer = hora >= 18 && hora < 20
                           

    if (manha) {
        img.src = 'cafemanha2.png'
        document.body.style.background = 'rgb(181, 189, 201)'
        document.getElementById('secao').style.backgroundColor = 'rgb(181, 189, 201)'
    }
    else if (almoco) {
        img.src = 'almoco.png'
        document.body.style.background = 'rgb(172, 160, 152)'
        document.getElementById('secao').style.backgroundColor = 'rgb(172, 160, 152)'
    }
    else if (tarde) {
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(212, 189, 69)'
        document.getElementById('secao').style.backgroundColor = 'rgb(212, 189, 69)'
    }
    else if (entardecer) {
        img.src = 'entardecer.png'
        document.body.style.background = 'rgb(93, 22, 41)'
        document.getElementById('secao').style.backgroundColor = 'rgb(93, 22, 41)'
        document.body.style.color = 'white'
    }
    else {
        img.src = 'lua.png'
        document.body.style.background = 'rgb(0, 0, 0)'
        document.getElementById('secao').style.backgroundColor = 'rgb(0, 0, 0)'
    }
}

