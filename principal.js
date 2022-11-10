const body = document.querySelector("body");
const animais = [{"Nome":"Baleia Franca do Sul", "Espécie":"E. australis",
 "País": "Brasil, Uruguai e Argentina", "NúmeroDeExemplaresVivos": "13611"},
 {"Nome":"Ararajuba", "Espécie":"G. guarouba",
 "País": "Brasil, Uruguai e Argentina", "NúmeroDeExemplaresVivos": "10001"},
{"Nome":"Ariranha", "Espécie":"P. brasiliensis",
 "País": "Brasil", "NúmeroDeExemplaresVivos": "1100"},
{"Nome":"Gato-maracajá", "Espécie":"L. wiedii",
 "País": "América Central, Brasil, Paraguai", "NúmeroDeExemplaresVivos": "4700"},
{"Nome":"Mico-leão-dourado", "Espécie":"L. rosalia",
 "País": "Brasil", "NúmeroDeExemplaresVivos": "3200"},
{"Nome":"Arara-azul", "Espécie":"A. hyacinthinus",
 "País": "Brasil", "NúmeroDeExemplaresVivos": "200"},
{"Nome":"Boto-cor-de-rosa", "Espécie":" I. geoffrensis",
 "País": "Bolívia, Brasil, Peru", "NúmeroDeExemplaresVivos": "484"},
{"Nome":"Elefante-africano", "Espécie":" Loxodonta",
 "País": "Países da África Subsaariana", "NúmeroDeExemplaresVivos": "415000"},
{"Nome":"Jacutinga", "Espécie":" A. jacutinga",
 "País": "Brasil, Paraguai", "NúmeroDeExemplaresVivos": "2000"}, 
{"Nome":"Lobo-guará", "Espécie":" C. brachyurus",
 "País": "Brasil, Argentina,Bolívia", "NúmeroDeExemplaresVivos": "24000"}, 
]

function generateTable() {
	// creates a <table> element and a <tbody> element
	const tbl = document.createElement("table");
	const tbHead = document.createElement("thead");

	const cabecalho = ["Nome", "Espécie", "País", "NúmeroDeExemplaresVivos"]
	const collumn = document.createElement("th");
	for (let i = 0; i < 4; i++) {

		const cell = document.createElement("td");
		cell.textContent = cabecalho[i];
		tbHead.appendChild(cell);
	}
	tbl.appendChild(tbHead);
	const tblBody = document.createElement("tbody")
	for(let j = 0; j < animais.length; j++) {
		let animal = animais[j];
		console.log(animal);
		let row = document.createElement("tr");
		for(let k = 0; k< cabecalho.length; k++){
			let cell = document.createElement("td");
			let conteudo = animal[cabecalho[k].trim()];
			cell.textContent = `${conteudo}`;
		cell.classList.add(cabecalho[k].trim());
		row.appendChild(cell);
		}
		
		tblBody.appendChild(row);
		tbl.appendChild(tblBody);
	}

	const tblFooter = document.createElement("tfoot");

	tblFooter.textContent = '0';
	tbl.appendChild(tblFooter);
	
	body.appendChild(tbl);
	
  }
  generateTable()

  document.querySelector("table").style.border = "solid 1px black"

  function SumQtd() {
		const lista = document.querySelectorAll(".NúmeroDeExemplaresVivos");
		let valor = parseInt(document.querySelector("tfoot").textContent);
		for (let i=0 ; i < lista.length ; i++){
		valor += parseInt(lista[i].textContent);
		}
		let sum = document.querySelector("tfoot");
		sum.textContent = valor;
	}

	SumQtd();
