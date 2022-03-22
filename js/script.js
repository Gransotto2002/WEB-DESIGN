$('#circle').hide()
$('#circle').fadeIn(1500)

$('.msg').hide()
$('.msg').fadeIn(2500)


$('#radio1').click(function(){
    $('.tenis').hide()
    $('.tenis').fadeIn(1500)
    $('.tenis').attr({
        "src" : "./img/tenis.png"
    })

    $('.valor').hide()
    $('.valor').text(
        "$ 99.99"
    )
    $('.valor').fadeIn(1500)
})

$('#radio2').click(function(){
    $('.tenis').hide()
    $('.tenis').fadeIn(800)
    $('.tenis').attr({
        "src" : "./img/tenis2.png"
    })

    $('.valor').hide()
    $('.valor').text(
        "$ 89.99"
    )
    $('.valor').fadeIn(800)
})

$('#radio3').click(function(){
    $('.tenis').hide()
    $('.tenis').fadeIn(1500)
    $('.tenis').attr({
        "src" : "./img/tenis3.png"
    })

    $('.valor').hide()
    $('.valor').text(
        "$ 59.99"
    )

    $('.valor').fadeIn(800)
})