/*
* this file contains all possible element models
* like FunctionBlock, Function, Input, Output, ..
*/
class FunctionBlockModel {
  constructor(fbt) {
    this.id = `fb_${FBArrayCount++}`;
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
    this.id = `func_${FuncArray.length + 1}`;
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
	this.id = `in_${InArrayCount++}`;
    this.name = "Schalter Tür";
	this.output = undefined;
	this.x = 50;								// default drawing x coordinate
	this.y = 50;								// default drawing y coordinate
  }
}

class OutputModel {
  constructor() {
	this.id = `out_${OutArrayCount++}`;
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
    this.id = `connector_${++nextUid}`;
//    this.dragType = "connector";
//    this.isSelected = false;
//    this.element = connectorElement.cloneNode(true);
//	this.connectionType = connectionType;
	this.elementin = undefined;
	this.elementout = undefined;
  }
}

class Room {
  constructor() {
    this.FBArray = {};
    this.FBArrayCount = 0;
    this.FuncArray = {};
    this.FuncArrayCount = 0;
    this.InArray = {};
    this.InArrayCount = 0;
    this.OutArray = {};
    this.OutArrayCount = 0;
  }
}

// test fb type
var fbt = {
	"name": "Licht",
	"type": "Lichtsteuerung X5", 
	"inputs" : [
	  {
		  "name": "taster1",
		  "type" : "int"
	  },
	  {
		  "name": "taster2",
		  "type" : "int"
	  },
	  {
		  "name": "taster3",
		  "type" : "int"
	  },
	  {
		  "name": "taster4",
		  "type" : "int"		  
	  },
	  {
		  "name": "taster5",
		  "type" : "int"		  
	  }
	],
	"outputs" : [
	  {
		  "name": "OK",
		  "type" : "bool"
	  }
	,
	  {
		  "name": "OK",
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
const FBArray = {};
var FBArrayCount = 0;
const FuncArray = {};
var FuncArrayCount = 0;
const InArray = {};
var InArrayCount = 0;
const OutArray = {};
var OutArrayCount = 0;

var Rooms = {};