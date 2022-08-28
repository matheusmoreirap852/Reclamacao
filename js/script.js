function exibeDivPessoaFisica() {
    var divShow = document.getElementById("FormularioShow");
    divShow.style.display = "block";
    var divNone = document.getElementById("PessoaFisicaNone");
    divNone.style.display = "none";
    var divShowFisica = document.getElementById("PessoaJuridicaNoneFisica");
    divShowFisica.style.display = "block";
    $(".campoPessoaFisica").prop('required', true);
    $(".campoPessoaJuridica").prop('required', false);
    $(".campoPessoaJuridica").val("");
}


function AbriReclamacao() {
    alert("valores");
}