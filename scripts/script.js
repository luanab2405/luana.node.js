/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function scrollPara(id) {

    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 700, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = id;
    });
}

$(function () { // jquery

    console.log("documento carregado..");

    // exemplo de funcao definida inline (funcao anonima)
    $("#oque").on("click", function () {
        scrollPara("#oquee");
    });
    $("#praque").on("click", function () {
        scrollPara("#serve");
    });
    $("#exemploss").on("click", function () {
        scrollPara("#exemplos");
    });
    $("#imagens").on("click", function () {
        scrollPara("#screenshots");
    });
    $("#coment").on("click", function () {
        scrollPara("#comentarios");
    });
    $("#form").on("click", function () {
        scrollPara("#formulario");
    });
    $("#ref").on("click", function () {
        scrollPara("#referencias");
    });
    $("#van").on("click", function () {
        scrollPara("#vantagens");
    });
    $("#desvan").on("click", function () {
        scrollPara("#desvantagens");
    });
    $("#avalia").on("click", function () {
        scrollPara("#avaliacoes");
    });
});


$(window).scroll(function () {
    console.log("scroll");
    var altura = $(window).scrollTop();
    var alturaImg = $("#img1").prop("height");
    console.log(altura);
    console.log("altura imagem " + alturaImg);

    if (altura > alturaImg) {
        $("#menu").addClass("sticky-top");
    } else {
        $("#menu").removeClass("sticky-top");
    }
});


$("#extra").on("click", function () {

    var imagemAtual = document.getElementById("img1");

    $("section").css("background-color", "#CEE3F6");
    $("h1").css("color", "#0B0B3B");
    $("b").css("color", "#0B0B3B");
    $("hr").css("border", "2px solid #0B0B3B");
    $("#button").css("background-color", "#0B0B3B");
    $("#button").css("color", "white");
    $("#button2").css("background-color", "#0B0B3B");
    $("#button2").css("color", "white");
    $("footer").css("background-color", "#0B0B3B");
    $("footer").css("color", "wheat");
    $("p").css("color", "black");
    $("h3").css("color", "black");
    $("li").css("color", "black");
    $("label").css("color", "black");
    $("body").css("background-image", "url(imagens/fundo2.jpg)");
    $("nav").removeClass("bg-success");
    $("nav").removeClass("bg-dark");
    $("nav").addClass("bg-primary");
    imagemAtual.src = "imagens/baner2.jpg";
});

$("#contraste").on("click", function () {
    var imagemAtual = document.getElementById("img1");

    $("section").css("background-color", "#151515");
    $("h1").css("color", "#E6E6E6");
    $("h3").css("color", "#E6E6E6");
    $("p").css("color", "#E6E6E6");
    $("b").css("color", "#E6E6E6");
    $("hr").css("border", "2px solid #E6E6E6");
    $("#button").css("background-color", "#E6E6E6");
    $("#button").css("color", "#151515");
    $("#button2").css("background-color", "#E6E6E6");
    $("#button2").css("color", "#151515");
    $("label").css("color", "#E6E6E6");
    $("li").css("color", "#E6E6E6");
    $("footer").css("background-color", "#E6E6E6");
    $("footer").css("color", "#151515");
    $("body").css("background-image", "url(imagens/fundo3.jpg)");
    $("#normal").css("color", "black");
    $("#contraste").css("color", "black");
    $("#extra").css("color", "black");
    $("nav").removeClass("bg-success");
    $("nav").removeClass("bg-primary");
    $("nav").addClass("bg-dark");
    imagemAtual.src = "imagens/baner3.jpg";
});

$("#normal").on("click", function () {
    var imagemAtual = document.getElementById("img1");

    $("section").css("background-color", "#ccffcc");
    $("h1").css("color", "#003300");
    $("hr").css("border", "2px solid green");
    $("#button").css("background-color", "#088A29");
    $("#button").css("color", "white");
    $("#button2").css("background-color", "#088A29");
    $("#button2").css("color", "white");
    $("footer").css("background-color", "#088A29");
    $("footer").css("color", "wheat");
    $("p").css("color", "black");
    $("b").css("color", "#088A29");
    $("h3").css("color", "black");
    $("li").css("color", "black");
    $("label").css("color", "black");
    $("body").css("background-image", "url(imagens/fundo1.jpg)");
    $("nav").removeClass("bg-dark");
    $("nav").removeClass("bg-primary");
    $("nav").addClass("bg-success");
    imagemAtual.src = "imagens/Baner.jpg";
});


const target = document.querySelectorAll("[data-anime]");
const animationClass = "animete";

function animeScroll(){
    const windowTop = window.pageYOffSet + 600;
    
    target.forEach(function(element){
        if((windowTop)>element.offSetTop){
            element.classList.add(animationClass);
        }
    });
}

window.addEventListener("scroll", function(){
    animeScroll();
});