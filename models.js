/*
* this file contains all possible element models
* like FunctionBlock, Function, Input, Output, ..
*/
class FunctionBlockModel {
  constructor(fbt) {
    this.id = `fb_${actRoomController.roomm.FBArrayCount++}`;
    this.name = fbt.name;
	this.type = fbt.type;
    //this.ports = ports;
    this.inputPorts = fbt.inputs;
    this.outputPorts = fbt.outputs;
	this.x = 50;								// default drawing x coordinate
	this.y = 50;								// default drawing y coordinate
  }
}

class FunctionModel {
  constructor() {
    this.id = `func_${actRoomController.FuncArray.length + 1}`;
    this.name = "";
   // this.ports = ports;
    this.inputPorts = [];
    this.outputPorts = [];
	this.x = 50;								// default drawing x coordinate
	this.y = 50;								// default drawing y coordinate
  }
}

class InputModel {
  constructor() {
	this.id = `in_${actRoomController.roomm.InArrayCount++}`;
    this.name = "Schalter Tür";
	this.output = undefined;
	this.x = 50;								// default drawing x coordinate
	this.y = 50;								// default drawing y coordinate
  }
}

class OutputModel {
  constructor() {
	this.id = `out_${actRoomController.roomm.OutArrayCount++}`;
    this.name = "Licht Wohnzimmer";
	this.input = undefined;
	this.x = 50;								// default drawing x coordinate
	this.y = 50;								// default drawing y coordinate
  }
}

//
// CONNECTOR
// ===========================================================================
class Connector {

  constructor(connectionType) {
    this.id = `connector_${++actRoomController.nextUid}`;
//    this.dragType = "connector";
//    this.isSelected = false;
//    this.element = connectorElement.cloneNode(true);
//	this.connectionType = connectionType;
	this.elementin = undefined;
	this.elementout = undefined;
  }
}

class RoomModel {
  constructor(name) {
    this.name = name;
    this.FBArray = {};
    this.FBArrayCount = 0;
    this.FuncArray = {};
    this.FuncArrayCount = 0;
    this.InArray = {};
    this.InArrayCount = 0;
    this.OutArray = {};
    this.OutArrayCount = 0;
	this.nextUid = 0;
  }
}

// test fb type
var fbt = {
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
  
  // test roll type
var roll = {
	"name": "Rollladen",
	"type": "Rollladen X1", 
	"inputs" : [
	  {
		  "name": "rauf",
		  "type" : "bool"
	  },
	  {
		  "name": "stop",
		  "type" : "bool"
	  },
	  {
		  "name": "runter",
		  "type" : "bool"
	  }
	],
	"outputs" : [
	  {
		  "name": "rauf",
		  "type" : "bool"
	  }
	,
	  {
		  "name": "runter",
		  "type" : "bool",
		  "inverted": true
	  }
	]
  }
// *******************************************************************************
//
// Array where newly created fbs, functions, outputs, .. get stored as object
//
// *******************************************************************************
//const FBArray = {};
//var FBArrayCount = 0;
//const FuncArray = {};
//var FuncArrayCount = 0;
//const InArray = {};
//var InArrayCount = 0;
//const OutArray = {};
//var OutArrayCount = 0;
//var actRoomController = new RoomController("Wohnzimmer_Licht");
var RoomControllers = {};
var actRoomController = undefined;
var RoomControllerCount = 0;
//Rooms["Wohnzimmer_Licht"] = actRoom;
//Rooms["Kueche_Licht"] = new Room("Kueche_Licht");
