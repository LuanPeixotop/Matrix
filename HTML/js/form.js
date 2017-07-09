function formFunc() {
    var formObj = {
        email : document.getElementById("email").value,
        nome : document.getElementById("nome").value,
        sexo : document.getElementById("sexo"),
        sexo : sexo[sexo.selectedIndex].value,
        curso : document.getElementById("curso"),
        curso : curso[curso.selectedIndex].value,
        endereco : document.getElementById("endereco").value,
        complemento : document.getElementById("complemento").value,
        cep : document.getElementById("cep").value,
        municipio : document.getElementById("municipio").value,
        uf : document.getElementById("uf"),
        uf : uf[uf.selectedIndex].value
    }

    localStorage.setItem("formStg", JSON.stringify(formObj));
}

function formGetStorage() {
    var formJson = JSON.parse(localStorage.getItem("formStg"));

    document.getElementById("email").value = formJson['email'];
    document.getElementById("nome").value = formJson['nome'];
    document.getElementById("sexo").value = formJson['sexo'];
    document.getElementById('curso').value = formJson['curso'];
    document.getElementById("endereco").value = formJson['endereco'];
    document.getElementById("complemento").value = formJson['complemento'];
    document.getElementById("cep").value = formJson['cep'];
    document.getElementById("municipio").value = formJson['municipio'];
    document.getElementById("uf").value = formJson['uf'];
}