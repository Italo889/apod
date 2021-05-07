let data = $('#data')

requisicaoApi()

$('form').submit(false)

$("#botao").on('click', function(){
    requisicaoApi( data.val() )
})

function requisicaoApi(data){
$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=eVc0LCED0ssWAdwchebpzAWE9dhe4u5QPbsBZJ2Q',
    data: {
        date: data
    },
    success: function( param ){
        console.log("Requisição aceita!")
        carregaDados( param )
    },
})
}

function carregaDados(parametro){

    if(parametro.media_type === 'image'){
        $('#img').html(`<img width='960px' heigth='770px' src=${parametro.hdurl}>`)
    }
    else if(parametro.media_type ==='video'){
        $('#img').html(`<iframe width="960px" height="540px" frameborder="0" src=${parametro.url}>`)
    }

    $('#tituloImage').html(`${parametro.title}`)
            
    $('#descricao').html(`${parametro.explanation}`)
    $('#copy').html(`${parametro.copyrigth}`)
}
