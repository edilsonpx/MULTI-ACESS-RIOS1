$(function(){

    //Aqui vai todo nosso código de javascript.
    $('nav.mobile').click(function(){
        //O que vai acontecer quando clicarmos na nav.mobile!
        var listaMenu = $('nav.mobile ul');


/***************EXEMPLOS*********************************/

        //Abrir menu através do fadein
        /*
        if(listaMenu.is(':hidden') == true){
            listaMenu.fadeIn();
        }
        else{
            listaMenu.fadeOut();
        }
        */

        //Abrir ou fechar sem efeitos
        /*
        
        if(listaMenu.is(':hidden') == true){
            //listaMenu.show();
            listaMenu.css('display','block');
        }
        else{
            //listaMenu.hide();
            listaMenu.css('display','none');
        }
        */

          /*  listaMenu.slideToggle();  */

/*****************************************************************/



     
/***************CODIGO BOTÃO ABRI E FECHAR MENU***************************/


    if(listaMenu.is(':hidden') == true){
            //fa fa-times
            //fa fa-bars
            //var icone =  $('.botao-menu-mobile i');
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();
        }








/************************************************************/


     })   

    })