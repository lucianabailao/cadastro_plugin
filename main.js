$(document).ready(function () {

    $('#telefone').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00.000-000',{
        placeholder: '00.000-00'
    });
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true,
            },
            cpf: {
                required: true,
            }
        },
        messages: {
            nome: 'Este campo é obrigatório',
            telefone: 'Este campo é obrigatório',
            email: 'Este campo é obrigatório'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos}  campos incorretos`)
            }
        }
    })

})
