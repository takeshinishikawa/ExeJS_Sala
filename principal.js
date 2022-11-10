const body = document.querySelector("body");
const animais = [{"Nome":"Baleia Franca do Sul", "Espécie":"Eubalaena australis",
 "País": "Brasil, Uruguai e Argentina", "Número de exemplares vivos": "13611"},
 {"Nome":"Ararajuba", "Espécie":"G. guarouba",
 "País": "Brasil, Uruguai e Argentina", "Número de exemplares vivos": "10001"}


]

function generateTable() {
	// creates a <table> element and a <tbody> element
	const tbl = document.createElement("table");
	const tbHead = document.createElement("thead");

	const cabecalho = ["Nome", "Espécie", "País", "Número de exemplares vivos"]
	const collumn = document.createElement("th");
	for (let i = 0; i < 4; i++) {

		const cell = document.createElement("td");
		cell.textContent = cabecalho[i];
		tbHead.appendChild(cell);
	}
	tbl.appendChild(tbHead);
	const tblBody = document.createElement("tbody")
	for(let j = 0; j < animais.length; j++) {
		let row = document.createElement("tr");
		let cell = document.createElement("td");
		cell.textContent = animais[j].Nome;
		cell.classList.add("nome");
		row.appendChild(cell);
		cell = document.createElement("td");
		cell.textContent = animais[j].Espécie;
		cell.classList.add("especie");
		row.appendChild(cell);
		cell = document.createElement("td");
		cell.textContent = animais[j].País;
		cell.classList.add("país");
		row.appendChild(cell);
		cell = document.createElement("td");
		cell.textContent = animais[j]["Número de exemplares vivos"];
		cell.classList.add("quantidade");
		row.appendChild(cell);
		tblBody.appendChild(row);
		tbl.appendChild(tblBody);
	}

	/*const tblBody = document.createElement("tbody");
	let cell = document.createElement("td");
	cell.textContent = 'Ararajuba';
	tblBody.appendChild(cell);
	cell = document.createElement("td");
	cell.textContent = 'G. guarouba';
	tblBody.appendChild(cell);
	cell = document.createElement("td");
	cell.textContent = 'Brasil';
	tblBody.appendChild(cell);
	cell = document.createElement("td");
	cell.textContent = '10001';
	tblBody.appendChild(cell);
	tbl.appendChild(tblBody);*/


	const tblFooter = document.createElement("tfoot");

	/*function SomaQtd() {

	}*/

    

	tblFooter.textContent = '0';
	tbl.appendChild(tblFooter);
	
	body.appendChild(tbl);
	/*// creating all cells
	for (let i = 0; i < 2; i++) {
	  // creates a table row
	  const row = document.createElement("tr");
	  const cell = document.createElement("td");
	  const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);

	  for (let j = 0; j < 4; j++) {
		// Create a <td> element and a text node, make the text
		// node the contents of the <td>, and put the <td> at
		// the end of the table row
		const cell = document.createElement("td");
		const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
		cell.appendChild(cellText);
		row.appendChild(cell);
	  }

	  // add the row to the end of the table body
	  tblBody.appendChild(row);
	}

	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	document.body.appendChild(tbl);
	// sets the border attribute of tbl to '2'
	tbl.setAttribute("border", "2");*/


  }
  generateTable()

  document.querySelector("table").style.border = "solid 1px black"

  function SumQtd() {
		const lista = document.querySelectorAll(".quantidade");
		let valor = parseInt(document.querySelector("tfoot").textContent);
		for (let i=0 ; i < lista.length ; i++){
		valor += parseInt(lista[i].textContent);
		}
		let sum = document.querySelector("tfoot");
		sum.textContent = valor;
	}

	SumQtd();
