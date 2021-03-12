/*
* this file contains all possible element models
* like FunctionBlock, Function, Input, Output, ..
*/
class CPUModel {
  constructor(cput) {
    this.id = `cpu_${actRoomController.roomm.ElementsCount++}`;
    this.name = cput.name;
	this.type = cput.type;
    //this.ports = ports;
    this.inputPorts = cput.inputs;
    this.outputPorts = cput.outputs;
	this.x = 50;								// default translattion x
	this.y = 50;								// default translattion y
  }
}

// test fb type
var cput = {
	"name": "Licht",
	"type": "Lichtsteuerung X5", 
	"inputs" : [
	  {
		  "name": "eingang1",
		  "type" : "bool"
	  },
	  {
		  "name": "eingang2",
		  "type" : "bool"
	  },
	  {
		  "name": "eingang3",
		  "type" : "bool"
	  },
	  {
		  "name": "eingang4",
		  "type" : "bool"		  
	  },
	  {
		  "name": "eingang5",
		  "type" : "bool"		  
	  }
	],
	"outputs" : [
	  {
		  "name": "ausgang",
		  "type" : "bool"
	  }
	,
	  {
		  "name": "ausgang_inv",
		  "type" : "bool",
		  "inverted": true
	  }
	]
  }
