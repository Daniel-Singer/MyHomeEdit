// add a new Functionblock
var headerHeight = 30;
var headerTypeHeight = 30;
var fbWidth = 220;
var fbInputWidth = 15;
var fbOutputWidth = 15;


class CPUView {
  constructor(model, controller) {			// CPU Model fb
    this.model = model;
	this.controller = controller;
	this.rootg = undefined;
  }

  draw() {
    this.rootg = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.rootg.setAttribute('class', 'node-container');
	this.rootg.setAttribute('transform', 'translate(' + this.model.x + ', ' + this.model.y + ')');
	this.rootg.setAttribute('id', this.model.id);
    this.rootg.setAttribute('width', fbWidth);
    var root = document.getElementById(actRoomController.roomm.name + "_node-layer");
    root.setAttribute('x', '30');
    root.setAttribute('y', '30');
    root.setAttribute('width', fbWidth);
    root.appendChild(this.rootg);

 //   shapeElements.push(this.rootg);

	var maxports = this.model.inputPorts.length;

    // create node header
    var header = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    header.setAttribute('class', 'node-background');
    header.setAttribute('width', fbWidth - fbInputWidth - fbOutputWidth);
    header.setAttribute('x', fbInputWidth)
    header.setAttribute('height', (maxports - 1) * 30 + 38 + headerHeight + headerTypeHeight);
    header.setAttribute('rx', '2');
    header.setAttribute('ry', '2');
    this.rootg.appendChild(header);

    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('class', 'node-header');
    g.setAttribute('width', fbWidth - fbInputWidth - fbOutputWidth)
    this.rootg.appendChild(g);

    let irect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    irect.setAttribute('class', 'header-rect');
    irect.setAttribute('width', fbWidth - fbInputWidth - fbOutputWidth);
    irect.setAttribute('x', fbInputWidth);
    irect.setAttribute('height', headerHeight);
    g.appendChild(irect);
	
	var typeg = document.createElementNS("http://www.w3.org/2000/svg", "g");
    typeg.setAttribute('class', 'node-type-header');
    typeg.setAttribute('width', fbWidth - fbInputWidth - fbOutputWidth)
    this.rootg.appendChild(typeg);
	
	irect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    irect.setAttribute('class', 'header-type-rect');
    irect.setAttribute('width', fbWidth - fbInputWidth - fbOutputWidth);
    irect.setAttribute('x', fbInputWidth);
	irect.setAttribute('y', headerHeight);
    irect.setAttribute('height', headerTypeHeight);
    typeg.appendChild(irect);

    this.caption = document.createElementNS("http://www.w3.org/2000/svg", "text");
    this.caption.setAttribute('class', 'header-title');
    this.caption.setAttribute('x', fbInputWidth + ((fbWidth- fbInputWidth - fbOutputWidth)/2));
    this.caption.setAttribute('y', '25');
    this.caption.innerHTML = this.model.name;
    g.appendChild(this.caption);
	
	var itext = document.createElementNS("http://www.w3.org/2000/svg", "text");
    itext.setAttribute('class', 'header-title');
    itext.setAttribute('x', fbInputWidth + ((fbWidth- fbInputWidth - fbOutputWidth)/2));
    itext.setAttribute('y', headerHeight + 25);
    itext.innerHTML = this.model.type;
    typeg.appendChild(itext);

    g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('class', 'node-content');
    this.rootg.appendChild(g);

//    this.drawInputs(g);
//	this.drawOutputs(g);
    //this.drawShape(this.rootg);
  }
  
  updateCaption() {
	  this.caption.innerHTML = this.model.name;
  }

  drawInputs(root) {
    var inputs = document.createElementNS("http://www.w3.org/2000/svg", "g");
    inputs.setAttribute('class', 'inoutputs');
    root.appendChild(inputs);
    var i;

    for (i = 1; i <= this.model.inputPorts.length; i++) {
      this.drawInput(inputs, i);
    }
  }
  
  drawOutputs(root) {
    var outputs = document.createElementNS("http://www.w3.org/2000/svg", "g");
    outputs.setAttribute('class', 'inoutputs');
    root.appendChild(outputs);
    var i;

    for (i = 1; i <= this.model.outputPorts.length; i++) {
      this.drawOutput(outputs, i);
    }
  }

  drawInput(inp, index) {
	var inputPort = this.model.inputPorts[index - 1];
    var input = document.createElementNS("http://www.w3.org/2000/svg", "g");
    input.setAttribute('class', 'input-field');
    input.setAttribute('transform', 'translate(0, ' + (headerHeight + headerTypeHeight + 12 + 30 * (index-1)) + ')');
    inp.appendChild(input);
    var innerinput = document.createElementNS("http://www.w3.org/2000/svg", "g");
    innerinput.setAttribute('class', 'port');
    innerinput.setAttribute('data-clickable', 'false');
    input.appendChild(innerinput);
	
    var iport = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    iport.setAttribute('class', 'port-scrim_input');
    iport.setAttribute('points', fbInputWidth + ',0 ' + fbInputWidth + ',16 0,16 5,8 0,0');
    iport.setAttribute('data-clickable', 'false');
    iport.setAttribute('data-drag', 'port_5:port');
    innerinput.appendChild(iport);

    var inputText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    inputText.setAttribute('class', 'port-label');
	if(inputPort.inverted === true) {
		inputText.setAttribute('text-decoration', 'overline');
	}
    inputText.setAttribute('x', fbInputWidth + 10);
    inputText.setAttribute('y', '14');
    inputText.innerHTML = inputPort.name;
    input.appendChild(inputText);
    
  }
  
  drawOutput(outp, index) {
	var outputPort = this.model.outputPorts[index - 1];
    var input = document.createElementNS("http://www.w3.org/2000/svg", "g");
    input.setAttribute('class', 'output-field');
    input.setAttribute('transform', 'translate(0, ' + (headerHeight + headerTypeHeight + 12 + 30 * (index-1)) + ')');
    outp.appendChild(input);
    var innerinput = document.createElementNS("http://www.w3.org/2000/svg", "g");
    innerinput.setAttribute('class', 'port');
    innerinput.setAttribute('data-clickable', 'false');
    input.appendChild(innerinput);

    var oport = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    oport.setAttribute('class', 'port-scrim');
    oport.setAttribute('points', (fbWidth - fbOutputWidth)+',0 ' + (fbWidth - 5) + ',0 ' + fbWidth + ',8 ' + (fbWidth - 5) + ',16 '+(fbWidth - fbOutputWidth)+',16')
    oport.setAttribute('data-clickable', 'false');
    oport.setAttribute('data-drag', 'port_5:port');
    innerinput.appendChild(oport);

    var outputText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    outputText.setAttribute('class', 'port-label');
	if(outputPort.inverted === true) {
		outputText.setAttribute('text-decoration', 'overline');
	}
    outputText.setAttribute('x', fbWidth - fbOutputWidth - 10);
    outputText.setAttribute('y', '14');
    outputText.innerHTML = outputPort.name;
    input.appendChild(outputText);
  }

  delete() {
	  var parent = this.rootg.parentElement;
	  parent.removeChild(this.rootg);
  }
}
