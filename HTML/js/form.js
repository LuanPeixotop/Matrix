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
    localStorage.setItem(localStorage.length, JSON.stringify(formObj));
}

function formGetCadastros() {
    for (var i = 0; i < localStorage.length; i++) {

        var formJson = JSON.parse(localStorage.getItem(i));
        var tb = document.getElementById("tabelaCadastros");
        var tbrow = tb.insertRow(-1);
        var cell0 = tbrow.insertCell(0);
        var cell1 = tbrow.insertCell(1);
        var cell2 = tbrow.insertCell(2);
        var cell3 = tbrow.insertCell(3);
        var cell4 = tbrow.insertCell(4);
        var cell5 = tbrow.insertCell(5);
        var cell6 = tbrow.insertCell(6);
        var cell7 = tbrow.insertCell(7);
        var cell8 = tbrow.insertCell(8);
        cell0.appendChild(document.createTextNode(formJson.email));
        cell1.appendChild(document.createTextNode(formJson.nome));
        cell2.appendChild(document.createTextNode(formJson.sexo));
        cell3.appendChild(document.createTextNode(formJson.curso));
        cell4.appendChild(document.createTextNode(formJson.endereco));
        cell5.appendChild(document.createTextNode(formJson.complemento));
        cell6.appendChild(document.createTextNode(formJson.cep));
        cell7.appendChild(document.createTextNode(formJson.municipio));
        cell8.appendChild(document.createTextNode(formJson.uf));
    }
}