<template>
  <div>
    <div class="row">
    <form action="#">
        <input @click="localTabela()" class="with-gap" name="group1" type="radio" id="rLocalStorage" />
        <label for="rLocalStorage">Somente localStorage &nbsp; </label>

        <input @click="firebaseTabela()" class="with-gap" name="group1" type="radio" id="rFirebase" />
        <label for="rFirebase">Somente Firebase &nbsp; </label>

        <input class="with-gap" name="group1" type="radio" id="rTodos" />
        <label for="rTodos">Todos &nbsp; </label>
    </form>
    </div>

    <table class="highlight" id="tabelaCadastros">
      <thead>
        <tr>
          <th>Email</th>
          <th>Nome</th>
          <th>Sexo</th>
          <th>Curso</th>
          <th>Endereço</th>
          <th>Complemento</th>
          <th>Cep</th>
          <th>Municipio</th>
          <th>Uf</th>
        </tr>
      </thead>

      <tbody>

      </tbody>
    </table>
  </div>

</template>

<<style>

#tabelaCadastros th {
  background-color: #FF5050;
  border: 1px solid black;
}

#tabelaCadastros td {
  border: 1px solid black;
}

</style>


<script>
import Formulario from './formulario'
    export default {
      components: { Formulario },
      name: 'cadastros',
      methods: {
        localTabela: function () {
          for (var i = 0; i <= 1; i++) {
            var formJson = JSON.parse(localStorage.getItem("inscritos"));
            if (formJson[i] == undefined) {
              break;
            }
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
            cell0.appendChild(document.createTextNode(formJson[i].fEmail));
            cell1.appendChild(document.createTextNode(formJson[i].fNome));
            cell2.appendChild(document.createTextNode(formJson[i].fSexo));
            cell3.appendChild(document.createTextNode(formJson[i].fCurso));
            cell4.appendChild(document.createTextNode(formJson[i].fEndereco));
            cell5.appendChild(document.createTextNode(formJson[i].fComplemento));
            cell6.appendChild(document.createTextNode(formJson[i].fCep));
            cell7.appendChild(document.createTextNode(formJson[i].fMunicipio));
            cell8.appendChild(document.createTextNode(formJson[i].fUf));
          }
        },
        firebaseTabela: function () {
          for (var i = 0; i <= 1; i++) {
            var cadInscritos = Formulario.methods.returnInscritos();
            window.console.log(cadInscritos);
            if (cadInscritos[i] == undefined) {
              break;
            }
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
            cell0.appendChild(document.createTextNode(cadInscritos[i].fEmail));
            cell1.appendChild(document.createTextNode(cadInscritos[i].fNome));
            cell2.appendChild(document.createTextNode(cadInscritos[i].fSexo));
            cell3.appendChild(document.createTextNode(cadInscritos[i].fCurso));
            cell4.appendChild(document.createTextNode(cadInscritos[i].fEndereco));
            cell5.appendChild(document.createTextNode(cadInscritos[i].fComplemento));
            cell6.appendChild(document.createTextNode(cadInscritos[i].fCep));
            cell7.appendChild(document.createTextNode(cadInscritos[i].fMunicipio));
            cell8.appendChild(document.createTextNode(cadInscritos[i].fUf));
          }
        }
      }
    }

  </script>

