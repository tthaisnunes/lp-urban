function sendFormAgende() {
    if (form.valid()) {
        var a = $(".form-email").serializeArray();
        return $.ajax({
            type: "POST",
            url: "functions/agenda.php",
            data: a,
            dataType: "json",
            success: function(a) {
              if("OK" == a.status){
                    $("#myModal").modal("hide");
                    $("#modalsucesso").modal("show");
                    $('#modalsucesso').append('<iframe src="tag-GA.html" frameborder="0"></iframe>');
                } else {
                    $("#myModal").modal("hide"); 
                    $("#modalerro").modal("show");
                }
            }
        }), !1
    }
}
var form = $(".form-email");
$("input[name=tel]").mask("(00) 0000-00000"), $(".form-email").validate({
    rules: {
        name: "required",
        email: {
            required: !0,
            email: !0
        },
        tel: {
            required: !0
        }
    },
    messages: {
        name: "Favor preencher seu nome",
        email: {
            required: "Favor preencher seu e-mail",
            email: "Favor preencher com um e-mail válido"
        },
        tel: {
            required: "Favor preencher seu e-mail"
        }
    }
});


$(document).ready(function($) {
    //Abre imagem com alta qualidade no modal
    $('.img-slider').click(function() {
        var url = $(this).attr('src');
        $('#img-slider-modal').attr('src',url);
         $( "#hidden-gif" ).show(0).delay(2000).hide(0);
    });

    //Altera titulo dos slider de acordo com a imagem mostrada
    $('.carousel').on('slid.bs.carousel', function () {
        var title = $('.item.active img', this).attr('data-title');
        var ordem = $('.item.active img', this).attr('data-ordem');
        $(this).next().next().text(title);
        $(this).next().text(ordem);       
    });

    $(".tel-hidden").click(function() {
        $(this).hide();
        $(".tel-visible").css('display','block');
    });
});