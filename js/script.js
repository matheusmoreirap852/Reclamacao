

function AbriReclamacao(val) {

    document.getElementById("contact_assunto").disabled = true;

    if (val == 1) {
        document.getElementById("contact_assunto").value = "DENUNCIA";
    }
    else if (val == 2) {
        document.getElementById("contact_assunto").value = "RECLAMACAO";
    }
    else if (val == 3) {
        document.getElementById("contact_assunto").value = "SUGESTAO";
    }
    else if (val == 4) {
        document.getElementById("contact_assunto").value = "ELOGIO";
    }
    var divNone = document.getElementById("formReclamacao");
    divNone.style.display = "block";
}