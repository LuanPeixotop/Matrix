var formCadastros = new Vue ({
        el: "#formulario",
        data: function () {
            return {
                vSexoOp: [
					{ texto: "Masculino", value: "masculino" },
					{ texto: "Feminino", value: "feminino" }
			    ],
                vCursoOp: [
						{texto:"Técnico em informática", value:"informatica"},
						{texto:"Técnico em alimentos", value:"alimentos"},
                        {texto:"Técnico em agropecuária", value:"agropecuaria"}
				],
                vUfOp: [
					{texto:"AC", value:"AC"},
					{texto:"AL", value:"Al"},
                    {texto:"AP", value:"AP"},
                    {texto:"AM", value:"AM"},
                    {texto:"BA", value:"BA"},
                    {texto:"CE", value:"CE"},
                    {texto:"DF", value:"DF"},
                    {texto:"ES", value:"ES"},
                    {texto:"GO", value:"GO"},
                    {texto:"MA", value:"MA"},
                    {texto:"MT", value:"MT"},
                    {texto:"MS", value:"MS"},
                    {texto:"MG", value:"MG"},
                    {texto:"PA", value:"PA"},
                    {texto:"PB", value:"PB"},
                    {texto:"PR", value:"PR"},
                    {texto:"PE", value:"PE"},
                    {texto:"PI", value:"PI"},
                    {texto:"RJ", value:"RJ"},
                    {texto:"RN", value:"RN"},
                    {texto:"RS", value:"RS"},
                    {texto:"RO", value:"RO"},
                    {texto:"RR", value:"RR"},
                    {texto:"RO", value:"RO"},
                    {texto:"SC", value:"SC"},
                    {texto:"SP", value:"SP"},
                    {texto:"SE", value:"SE"},
                    {texto:"TO", value:"TO"}
				],
                formObj : {
                    vEmail: "",
                    vNome: "",
                    vSexo: "",
                    vCurso: "",
                    vEndereco: "",
                    vComplemento: "",
                    vCep: "",
                    vMunicipio: "",
                    vUf: ""
                }
            }
        },
        
        methods: {
            salvarLocal: function () {
                localStorage.setItem("inscrito " + localStorage.length, JSON.stringify(this.formObj));
                alert("Inscrito Salvo com sucesso!");
                this.formObj = "";
            }
        },
});