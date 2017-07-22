<template>
  <div>
    <div class="container">
      <form @submit="addInscrito" name="formulario" id="formulario" method="post">

        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input v-model="novoInscrito.fEmail" id="email" type="email" class="validate" autofocus required>
            <label for="email">E-mail:</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">assignment_ind</i>
            <input v-model="novoInscrito.fNome" id="nome" type="text" class="validate" required>
            <label for="nome">Nome:</label>
          </div>
        </div>

        <div class="form-select">
          <div class="row">
            <div id="sexoselect" class="input-field col s12">
              <i class="material-icons prefix">supervisor_account</i>
              <select class="browser-default" v-model="novoInscrito.fSexo" id="sexo" required>
              <option value="" disabled selected></option>
               <option v-for="sexo in fSexoOp" v-bind:key="sexo.value">
                {{ sexo.texto }}
              </option>
            </select>
              <label for="sexo">Sexo:</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">view_list</i>
              <select class="browser-default" v-model="novoInscrito.fCurso" id="curso" required>
              <option value="" disabled selected></option>
              <option v-for="curso in fCursoOp" v-bind:key="curso.value">
                {{ curso.texto }}
              </option>
            </select>
              <label for="curso">Curso:</label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">location_on</i>
            <input v-model="novoInscrito.fEndereco" id="endereco" type="text" class="validate" required>
            <label for="endereco">Endereço para correspondência:</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">my_location</i>
            <input v-model="novoInscrito.fComplemento" id="complemento" type="text" class="validate">
            <label for="complemento">Complemento do endereço:</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">navigation</i>
            <input v-model="novoInscrito.fCep" id="cep" type="text" placeholder="xxxxx-xxx" pattern="\d{5}-?\d{3}" class="validate" required>
            <label for="cep">Cep:</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s11">
            <i class="material-icons prefix">open_with</i>
            <input v-model="novoInscrito.fMunicipio" id="municipio" type="text" class="validate" required>
            <label for="municipio">Município:</label>
          </div>

          <div class="input-field col s1">
            <select class="browser-default" v-model="novoInscrito.fUf" name="uf" id="uf" required>
            <option value="" disabled selected>UF</option>  
            <option v-for="uf in fUfOp" v-bind:key="uf.value">
                {{ uf.texto }}
            </option>
          </select>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s3 push-s4" id="gravarfirebase">
            <p>
              <input type="checkbox" class="filled-in" id="filled-in-box" />
              <label for="filled-in-box">Salvar no Firebase</label>
            </p>
          </div>

          <div class="input-field col s3 push-s4" id="btnsalvarid">
            <button class="waves-effect waves-light btn" type="submit"> <i class="material-icons left">save</i>Salvar</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<<style>

.form-select label {
  font-size: 15.5px;
}

#sexo {
  margin-top: 2px;
  text-indent: 85px;
  font-size: 16px;
}

#curso {
  margin-top: 2px;
  text-indent: 89px;
  font-size: 16px;
}

#gravarfirebase {
  margin-top: -5px;
  margin-bottom: 50px;
  margin-right: -60px;
}

#btnsalvarid {
  margin-bottom: 50px;
}

</style>



  <script>
    $(document).ready(function () {
      $('select').material_select();
    });

    import Firebase from 'firebase'

    let config = {
      apiKey: "AIzaSyBdr4zwqWLOM-VTfTH7gBKFmVf4xBTKD_s",
      authDomain: "formulario-matrix.firebaseapp.com",
      databaseURL: "https://formulario-matrix.firebaseio.com",
      projectId: "formulario-matrix",
      storageBucket: "formulario-matrix.appspot.com",
      messagingSenderId: "194827965926"
    }

    let app = Firebase.initializeApp(config);
    let db = app.database();

    let inscritosRef = db.ref('inscritos');

    export default {
      name: 'formulario',
      firebase: {
        inscritos: inscritosRef
      },
      data() {
        return {
          fSexoOp: [{
              texto: "Masculino",
              value: "masculino"
            },
            {
              texto: "Feminino",
              value: "feminino"
            }
          ],
          fCursoOp: [{
              texto: "Técnico em informática",
              value: "informatica"
            },
            {
              texto: "Técnico em alimentos",
              value: "alimentos"
            },
            {
              texto: "Técnico em agropecuária",
              value: "agropecuaria"
            }
          ],
          fUfOp: [{
              texto: "AC",
              value: "AC"
            },
            {
              texto: "AL",
              value: "Al"
            },
            {
              texto: "AP",
              value: "AP"
            },
            {
              texto: "AM",
              value: "AM"
            },
            {
              texto: "BA",
              value: "BA"
            },
            {
              texto: "CE",
              value: "CE"
            },
            {
              texto: "DF",
              value: "DF"
            },
            {
              texto: "ES",
              value: "ES"
            },
            {
              texto: "GO",
              value: "GO"
            },
            {
              texto: "MA",
              value: "MA"
            },
            {
              texto: "MT",
              value: "MT"
            },
            {
              texto: "MS",
              value: "MS"
            },
            {
              texto: "MG",
              value: "MG"
            },
            {
              texto: "PA",
              value: "PA"
            },
            {
              texto: "PB",
              value: "PB"
            },
            {
              texto: "PR",
              value: "PR"
            },
            {
              texto: "PE",
              value: "PE"
            },
            {
              texto: "PI",
              value: "PI"
            },
            {
              texto: "RJ",
              value: "RJ"
            },
            {
              texto: "RN",
              value: "RN"
            },
            {
              texto: "RS",
              value: "RS"
            },
            {
              texto: "RO",
              value: "RO"
            },
            {
              texto: "RR",
              value: "RR"
            },
            {
              texto: "RO",
              value: "RO"
            },
            {
              texto: "SC",
              value: "SC"
            },
            {
              texto: "SP",
              value: "SP"
            },
            {
              texto: "SE",
              value: "SE"
            },
            {
              texto: "TO",
              value: "TO"
            }
          ],
          novoInscrito: {
            fEmail: "",
            fNome: "",
            fSexo: "",
            fCurso: "",
            fEndereco: "",
            fComplemento: "",
            fCep: "",
            fMunicipio: "",
            fUf: ""
          },
          lInscritos: [],
        }
      },
      methods: {
        addInscrito: function (e) {
          e.preventDefault(true);
          var locOuFb = document.getElementById("filled-in-box");
          if (locOuFb.checked == true) {
            inscritosRef.push(this.novoInscrito);
            this.novoInscrito.fEmail = "";
            this.novoInscrito.fNome = "";
            this.novoInscrito.fSexo = "";
            this.novoInscrito.fCurso = "";
            this.novoInscrito.fEndereco = "";
            this.novoInscrito.fComplemento = "";
            this.novoInscrito.fCep = "";
            this.novoInscrito.fMunicipio = "";
            this.novoInscrito.fUf = "";
            alert("Inscrito salvo no Firebase com sucesso!")
          } else {
            if (localStorage.getItem("inscritos")) {
              this.lInscritos = JSON.parse(localStorage.getItem("inscritos"));
            }
            this.lInscritos.push(this.novoInscrito);
            localStorage.setItem("inscritos", JSON.stringify(this.lInscritos));
            alert("Inscrito salvo no LocalStorage com sucesso!");
            this.novoInscrito.fEmail = "";
            this.novoInscrito.fNome = "";
            this.novoInscrito.fSexo = "";
            this.novoInscrito.fCurso = "";
            this.novoInscrito.fEndereco = "";
            this.novoInscrito.fComplemento = "";
            this.novoInscrito.fCep = "";
            this.novoInscrito.fMunicipio = "";
            this.novoInscrito.fUf = "";
          }
        },
        returnInscritos: function () {
          return "teste";
        }
      }
    }

  </script>
