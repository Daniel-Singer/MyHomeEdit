
// add a new Functionblock (model and view)
class CPUController {
  constructor(cbut) {						// function block type - previously defined fb
    this.model = new CPUModel(cbut);
	this.view = new CPUView(this.model);
    shapeLookup[this.model.id] = this.model;
    // push function block into Device Array for easier overview
  }
  
  drawCPU() {
	this.view.draw();
  }
  
  updateName(name) {
	  this.model.name = name;
	  this.view.updateCaption();
  }
  
  delete() {
	  this.view.delete();
  }
}