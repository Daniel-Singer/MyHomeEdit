// dragging functions

const Drag = (() => {
  
  function updatePosition(element, x, offsetX, y, offsetY) {
    const menuWidth = document.querySelector('.w3-bar-block').getBoundingClientRect().width;
    if (element !== null) {
		var newx = x - offsetX - menuWidth - 40;
		var newy = y - offsetY;
		newx = Math.round(newx/5)*5;
		newy = Math.round(newy/5)*5;
		var elem = actRoomController.roomm.Elements[element.id];
		elem.model.x = newx;
		elem.model.y = newy;
		element.setAttribute('transform', 'translate('+ newx + ',' + newy + ")");
    }
  };

  function getOffset(measurement, offset, clientPosition) {
    return measurement - (measurement + offset - clientPosition);
  };

  return {
    dragNode(e) {
      let nodeContainer = null;
      // find node container
    //  nodeContainer = e.target.parentElement.parentElement;
	  nodeContainer = e.target.parentElement;
	  if (!nodeContainer.classList.contains('node-container')) {
		  nodeContainer = nodeContainer.parentElement;
	  }
      if (nodeContainer.classList.contains('node-container')) {
		
        const rect = nodeContainer.getBoundingClientRect();

        const offsetX = getOffset(rect.width, rect.x, e.clientX);
        const offsetY = getOffset(rect.height, rect.y, e.clientY);

        document.addEventListener('mousemove', function (e) {
          updatePosition(nodeContainer, e.clientX, offsetX, e.clientY, offsetY)
        });

        document.addEventListener('mouseup', function () {
          nodeContainer = null;
        });
		
		var button = e.which || e.button;
		var del = false;
		if ( button === 3 ) {
      		del = true;
    	}
		var id = nodeContainer.getAttribute('id');
		
		if(id.startsWith('fb_')) {
		  var elem = actRoomController.roomm.Elements[id];
		  if(del) {
			  // delete FB
			  elem.delete();
			  delete actRoomController.roomm.Elements[id];
		  }
		  else {
			properties.setFBProperties(elem);
		  }
		} else if(id.startsWith('func_')) {
		  var elem = actRoomController.roomm.Elements[id];
		  if(del) {
			  // delete Func
			  elem.delete();
			  delete actRoomController.roomm.Elements[id];
		  }
		  else {
			properties.setFuncProperties(elem);
		  }
		} else if(id.startsWith('in_')) {
		  var elem = actRoomController.roomm.Elements[id];
		  if(del) {
			  // delete input
			  elem.delete();
			  delete actRoomController.roomm.Elements[id];
		  }
		  else {
			properties.setInputProperties(elem);
		  }
		} else if(id.startsWith('out_')) {
		  var elem = actRoomController.roomm.Elements[id];
		  if(del) {
			  // delete Output
			  elem.delete();
			  delete actRoomController.roomm.Elements[id];
		  }
		  else {
			properties.setOutputProperties(elem);
		  }
		}
      } else {
		  // create connector
		  
	  }
    }
  }


})();

