// dragging functions
const Drag = (() => {
	let offsetX;
	let offsetY;
	let nodeContainer = null;
	let newX = 0;
	let newY = 0;
	function updatePosition(element, x, offsetX, y, offsetY) {
		const menuWidth = document.querySelector('.w3-bar-block').getBoundingClientRect().width;
		if (element !== null) {
			var elem = actRoomController.roomm.Elements[element.id];
			newX = x - offsetX + elem.model.x;
			newY = y - offsetY + elem.model.y;
			newX = Math.round(newX / 5) * 5;
			newY = Math.round(newY / 5) * 5;
			console.log()
			element.setAttribute('transform', 'translate(' + newX + ',' + newY + ")");
		}
	};

	function getOffset(measurement, offset, clientPosition) {
		return measurement - (measurement + offset - clientPosition);
	};

	function move(e) {
		console.log(offsetX);
		console.log(e.clientX);
		updatePosition(nodeContainer, e.clientX, offsetX, e.clientY, offsetY)
	}
	return {
		dragNode(e) {
			nodeContainer = e.target.parentElement;
			if (!nodeContainer.classList.contains('node-container')) {
				nodeContainer = nodeContainer.parentElement;
			}
			if (nodeContainer.classList.contains('node-container')) {

				const rect = nodeContainer.getBoundingClientRect();
				offsetX = e.clientX;
				offsetY = e.clientY;
 
				document.addEventListener('mousemove', move);

				document.addEventListener('mouseup', function () {
					var elem = actRoomController.roomm.Elements[nodeContainer.id];
					elem.model.x = newX;
					elem.model.y = newY;
					nodeContainer = null;
					document.removeEventListener('mousemove', move);
				});

				var button = e.which || e.button;
				var del = false;
				if (button === 3) {
					del = true;
				}
				var id = nodeContainer.getAttribute('id');

				if (id.startsWith('fb_')) {
					var elem = actRoomController.roomm.Elements[id];
					if (del) {
						// delete FB
						elem.delete();
						delete actRoomController.roomm.Elements[id];
					}
					else {
						properties.setFBProperties(elem);
					}
				} else if (id.startsWith('func_')) {
					var elem = actRoomController.roomm.Elements[id];
					if (del) {
						// delete Func
						elem.delete();
						delete actRoomController.roomm.Elements[id];
					}
					else {
						properties.setFuncProperties(elem);
					}
				} else if (id.startsWith('in_')) {
					var elem = actRoomController.roomm.Elements[id];
					if (del) {
						// delete input
						elem.delete();
						delete actRoomController.roomm.Elements[id];
					}
					else {
						properties.setInputProperties(elem);
					}
				} else if (id.startsWith('out_')) {
					var elem = actRoomController.roomm.Elements[id];
					if (del) {
						// delete Output
						elem.delete();
						delete actRoomController.roomm.Elements[id];
						return false;
					}
					else {
						properties.setOutputProperties(elem);
					}
				}
			} else if (nodeContainer.classList.contains('output-field')) {
				// create connector
				new ConnectionController();
				console.log(nodeContainer);
			} else if (nodeContainer.classList.contains('input-field')) {
				// create connector
				console.log(nodeContainer);
			}
		}
	}
})();