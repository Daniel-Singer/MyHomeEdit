function addRoom() {
	var room = new Room();
	Rooms["neu"] = new Room();
}

// add a new Functionblock (model and view)
class FunctionBlockController {
  constructor(fbt) {						// function block type - previously defined fb
    this.fbm = new FunctionBlockModel(fbt);
	this.fbV = new FunctionBlockView(this.fbm);
    shapeLookup[this.fbm.id] = this.fbm;
    // push function block into Device Array for easier overview
    FBArray[this.fbm.id] = this;
  }
  
  drawFB() {
	this.fbV.draw();
  }
  
  updateName(name) {
	  this.fbm.name = name;
	  this.fbV.updateCaption();
  }
  
  delete() {
	  this.fbV.delete();
  }
}

// add a new Function (model and view)
class FunctionController {
  constructor() {
    this.funcm = new FunctionModel();
	this.funcV = new FunctionView(this.funcm);
    shapeLookup[func.id] = func;
    // push Device into Device Array for easier overview
    FuncArray[this.funcm.id] = this;
  }
  
  drawFunc() {
	this.funcV.draw();
  }
  
  updateName(name) {
	  this.funcm.name = name;
	  this.funcV.updateCaption();
  }
  
  delete() {
	  this.funcV.delete();
  }
}

class InputController {
  constructor() {						// function block type - previously defined fb
    this.inm = new InputModel();
	this.inV = new InputView(this.inm);
    shapeLookup[this.inm.id] = this.inm;
    // push function block into Device Array for easier overview
    InArray[this.inm.id] = this;
  }
  
  drawInput() {
	this.inV.draw();
  }
  
  updateName(name) {
	  this.inm.name = name;
	  this.inV.updateCaption();
  }
  
  delete() {
	  this.inV.delete();
  }
}

class OutputController {
  constructor() {						// function block type - previously defined fb
    this.outm = new OutputModel();
	this.outV = new OutputView(this.outm);
    shapeLookup[this.outm.id] = this.outm;
    // push function block into Device Array for easier overview
    OutArray[this.outm.id] = this;
  }
  
  drawOutput() {
	this.outV.draw();
  }
  
  updateName(name) {
	  this.outm.name = name;
	  this.outV.updateCaption();
  }
  
  delete() {
	  this.outV.delete();
  }
}

class ConnecitonController {
	constructor() {
	}
	
	createConnector() {

		let connector;

	//	if (connectorPool.length) {
	//	  connector = connectorPool.pop();
	//	  connectorLookup[connector.id] = connector;
	//	} else {
		  connector = new Connector();
	//	}

		connector.init(this);
	//	this.lastConnector = connector;
	//	this.connectors.push(connector);
	}
	
	updatePath() {

    const x1 = this.inputHandle._gsTransform.x;
    const y1 = this.inputHandle._gsTransform.y;

    const x4 = this.inoutputHandle._gsTransform.x;
    const y4 = this.inoutputHandle._gsTransform.y;

	var p0x = 0;
	var p0y = 0;

	var p1x = 0;
	var p1y = 0;
	
	var p2x = 0;
	var p2y = 0;
	
	var p3x = 0;
	var p3y = 0;
	
	var p4x = 0;
	var p4y = 0;
	
	if(x1 < x4) {
		//from right to left
		p0x = x1;
		p0y = y1;
		
		p1x = x1 + (x4 - x1)/2;
		p1y = y1;

		p2x = x4 - (x4 - x1)/2;
		p2y = y4;

		p3x = x4;
		p3y = y4;
		
	} else {
		//from left to right
		p0x = x1;
		p0y = y1;

		p1x = x4 - (x4 - x1)/2;
		p1y = y1;

		p2x = x4 - (x4 - x1)/2;
		p2y = y4;
		
		p3x = x4;
		p3y = y4;
	}
	
//	const data = `M${p0x} ${p0y} ${p1x} ${p1y} ${p2x} ${p2y} ${p3x} ${p3y} ${p4x} ${p4y}`;
	const data = `${p0x} ${p0y} ${p1x} ${p1y} ${p2x} ${p2y} ${p3x} ${p3y}`;

 //   this.path.setAttribute("d", data);
 //   this.pathOutline.setAttribute("d", data);
	this.path.setAttribute("points", data);
    this.pathOutline.setAttribute("points", data);
  }
}