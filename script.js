function enviar(){
    let ano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if(ano.value.length == 0){
        window.confirm('Anos aceitos: 2015, 2016, 2020, 2021')
    }
    else{
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        res.innerHTML = ''
        
        if(ano.value == 0 ){
            res.innerHTML += `[ERRO] Tente 2015, 2016,2020,2021`
        }
        else if(ano.value == 2015){
            img.setAttribute('src' , 'foto-2015.png')
            res.innerHTML += `Aqui você tinha trinta e dois anos; mal sabia que um tempo depois iria realizar meu desejo de morar com você. Sei que você senti muito a falta do nosso pai; saiba que ele tinha muito orgulho de você.\u{1F60A}`
        }

        else if(ano.value == 2016) {
            img.setAttribute('src', 'foto-2016.png')
            res.innerHTML += `Essa época foi boa, bom nunca te contei isso mas você é minha grande inspiração para tudo que faço na minha vida; você me apoiou em tudo que fiz até agora. Bom maninha te amo e quero te orgulhar muito ainda.`
        }
        else if(ano.value == 2020) {
            img.setAttribute('src', 'foto-2020.png')
            res.innerHTML += `Aqui é a época que eu estava no projeto do shape; infelizmente não deu muito certo; mais isso não é interessante hoje. obs: Continua digitando os números que tem mais algumas surpresas. Não  é muita coisa por quer ainda estou no basico peço até desculpa. \u{1F495}`
        }

        else if(ano.value == 2021){
            img.setAttribute('src','foto-2021.png')
            res.innerHTML += `Enfim para chegar até aqui você deve ter digitado todos os anos. Certo!
            Bom desde o começo você deve ter percebido um botão ali em baixo, Bom clica nele; tem mais uma hoenagem nele espero que goste.`
        }
        else{
            res.innerHTML +=``
        }
    }
    res.style.textAlign = 'center'
    res.appendChild(img)
}