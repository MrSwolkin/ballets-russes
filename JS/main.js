$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome para enviar o formulário.',
            email: 'Por favor, insira seu E-mail para enviar o formulário.',
        },
        submitHandler: function(form) {
            console.log(form);
            $('.formulario').each (function(){
                this.submit();
            })
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
});