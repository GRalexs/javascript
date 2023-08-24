var idade =  66

if(idade < 16){
   console.log('Não vota') 
}
else if(idade< 18 || idade > 65){
    console.log('Voto opcional')
}
else{
    console.log('Voto obrigatório')
}

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}`)

if(hora < 12)
{
    console.log('Bom Dia!!')
}
else if(hora <=18)
{
    onsole.log('Boa Tarde!!')
}
else
{
    onsole.log('Boa Noite!!')
}