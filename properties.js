class Properties {
	constructor() {
	}
	
	setRoomProperties(room) {
		if(room == undefined || room.roomm == undefined)
			return;
		var props = document.getElementById("properties");
		props.innerHTML="";
		var propTable = document.createElement("table");
		propTable.classList.add("table-style-three");
		props.appendChild(propTable);
		var propTbody = document.createElement("tody");
		propTable.appendChild(propTbody);
		
		var propTr = document.createElement("tr");
		propTbody.appendChild(propTr);
		
		// set input name
		var propTd1 = document.createElement("td");
		propTr.appendChild(propTd1);
		propTd1.innerHTML = "name";
		
		var propTd2 = document.createElement("td");
		propTr.appendChild(propTd2);
		var roomNameInput = document.createElement("input");
		roomNameInput.value = room.roomm.name;
		propTd2.appendChild(roomNameInput);
		
		roomNameInput.addEventListener ("change", function () {
			room.updateName(this.value);
		});
	}
	
	setFBProperties(fbC) {
		if(fbC == undefined || fbC.model == undefined)
			return;
		var props = document.getElementById("properties");
		props.innerHTML="";
		var propTable = document.createElement("table");
		propTable.classList.add("table-style-three");
		props.appendChild(propTable);
		var propTbody = document.createElement("tody");
		propTable.appendChild(propTbody);
		
		var propTr = document.createElement("tr");
		propTbody.appendChild(propTr);
		
		// set input name
		var propTd1 = document.createElement("td");
		propTr.appendChild(propTd1);
		propTd1.innerHTML = "name";
		
		var propTd2 = document.createElement("td");
		propTr.appendChild(propTd2);
		var fbNameInput = document.createElement("input");
		fbNameInput.value = fbC.model.name;
		propTd2.appendChild(fbNameInput);
		
		fbNameInput.addEventListener ("change", function () {
			fbC.updateName(this.value);
		});
	}
	
	setFuncProperties() {
		if(fbC == undefined || fbC.fbm == undefined)
			return;
		var props = document.getElementById("properties");
		props.innerHTML="";
		var propTable = document.createElement("table");
		propTable.classList.add("table-style-three");
		props.appendChild(propTable);
		var propTbody = document.createElement("tody");
		propTable.appendChild(propTbody);
		
		var propTr = document.createElement("tr");
		propTbody.appendChild(propTr);
		
		// set input name
		var propTd1 = document.createElement("td");
		propTr.appendChild(propTd1);
		propTd1.innerHTML = "name";
		
		var propTd2 = document.createElement("td");
		propTr.appendChild(propTd2);
		var fbNameInput = document.createElement("input");
		fbNameInput.value = fbC.fbm.name;
		propTd2.appendChild(fbNameInput);
		
		fbNameInput.addEventListener ("change", function () {
			fbC.updateName(this.value);
		});
	}
	
	setOutputProperties(outputC) {
		if(outputC == undefined || outputC.model == undefined)
			return;
		var props = document.getElementById("properties");
		props.innerHTML="";
		var propTable = document.createElement("table");
		propTable.classList.add("table-style-three");
		props.appendChild(propTable);
		var propTbody = document.createElement("tody");
		propTable.appendChild(propTbody);
		
		var propTr = document.createElement("tr");
		propTbody.appendChild(propTr);
		
		// set input name
		var propTd1 = document.createElement("td");
		propTr.appendChild(propTd1);
		propTd1.innerHTML = "name";
		
		var propTd2 = document.createElement("td");
		propTr.appendChild(propTd2);
		var outputNameInput = document.createElement("input");
		outputNameInput.value = outputC.model.name;
		propTd2.appendChild(outputNameInput);
		
		outputNameInput.addEventListener ("change", function () {
			outputC.updateName(this.value);
		});
	}
	
	setInputProperties(inputC) {  					// inputController
		if(inputC == undefined || inputC.model == undefined)
			return;
		var props = document.getElementById("properties");
		props.innerHTML="";
		var propTable = document.createElement("table");
		propTable.classList.add("table-style-three");
		props.appendChild(propTable);
		var propTbody = document.createElement("tody");
		propTable.appendChild(propTbody);
		
		var propTr = document.createElement("tr");
		propTbody.appendChild(propTr);
		
		// set input name
		var propTd1 = document.createElement("td");
		propTr.appendChild(propTd1);
		propTd1.innerHTML = "name";
		
		var propTd2 = document.createElement("td");
		propTr.appendChild(propTd2);
		var inputNameInput = document.createElement("input");
		inputNameInput.value = inputC.model.name;
		propTd2.appendChild(inputNameInput);
		
		inputNameInput.addEventListener ("change", function () {
			inputC.updateName(this.value);
		});
	}
}	

const properties = new Properties();
//properties.setDeviceProperties();

function closeProperties() {
 // document.getElementById("main").style.marginLeft = "0";
  document.getElementById("myProperties").style.display = "none";
  document.getElementById("openProps").style.display = "block";
}

function openProperties() {
 // document.getElementById("main").style.marginLeft = "0";
  document.getElementById("myProperties").style.display = "block";
  document.getElementById("openProps").style.display = "none";
}