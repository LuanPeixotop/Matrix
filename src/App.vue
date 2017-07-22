<template>
  <div id="app">
    <nav id="navbar" class="top-nav">
      <div class="nav-wrapper">
        <a id="titulo-pag" href="#" class="brand-logo center">Ficha de cadastro</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li id="formStyle">
            <router-link to="/formulario">Formulário</router-link>
          </li>
          <li id="cadaStyle">
            <router-link to="/cadastros">Ver Todos</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<<style>

.top-nav {
  margin-bottom: 100px;
  background-color: #A1141C;
}

#formStyle {
  background-color: darkred;
  border-left: 1.5px solid black;
}

#cadaStyle {
  background-color: darkred;
  border-left: 1.5px solid black;
  border-right: 1.5px solid black;
}

</style>


