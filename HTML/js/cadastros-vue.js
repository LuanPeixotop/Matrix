var cadastros = new Vue ({
    el: "#tabelaCadastros",
    created: function () {
        for (var i = 0; i < localStorage.length; i++) {
            var formJson = JSON.parse(localStorage.getItem("inscrito " + i));
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
            cell0.appendChild(document.createTextNode(formJson.vEmail));
            cell1.appendChild(document.createTextNode(formJson.vNome));
            cell2.appendChild(document.createTextNode(formJson.vSexo));
            cell3.appendChild(document.createTextNode(formJson.vCurso));
            cell4.appendChild(document.createTextNode(formJson.vEndereco));
            cell5.appendChild(document.createTextNode(formJson.vComplemento));
            cell6.appendChild(document.createTextNode(formJson.vCep));
            cell7.appendChild(document.createTextNode(formJson.vMunicipio));
            cell8.appendChild(document.createTextNode(formJson.vUf));
        }
    }
})