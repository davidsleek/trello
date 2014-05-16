$(document).ready(function(){

var panes = document.querySelectorAll('.pane');
var cards = document.querySelectorAll('.card');

Array.prototype.forEach.call(panes, function(p) {
    //p.addEventListener('dragover', handleDragOver);
    p.addEventListener('dragenter', handleDragEnter);
    p.addEventListener('dragleave', handleDragLeave);
    p.addEventListener('drop', handleDropOntoPane);
    p.style.color="yellow"
});

Array.prototype.forEach.call(cards, function(p) {
    //p.addEventListener('dragover', handleDragOverc);
    p.addEventListener('dragenter', handleDragEnterc);
    p.addEventListener('dragleave', handleDragLeavec);
    p.addEventListener('drop', handleDropOntoCard);
    p.addEventListener('dragstart', handleDragStartc);
});




// function handleDragOver(e) {

//     /* Omits default behaviour of the element. Required to enable dropping */
//     if (e.preventDefault) {
//         e.preventDefault();
//     }

//     /* Some Browsers expect this instead of e.preventDefault(). 
//        Doesn't hurt to do both.*/
//     return false;
// }





function handleDragStartc(e) {
    this.style.opacity = '0.4';
    console.log("start")

    dragSrcEl = this.parentNode.parentNode;
    this.classList.add('dragging');
}


function handleDragEnd(e) {
    console.log("Drag end fired")
    this.style.opacity = '1.0';

    Array.prototype.forEach.call(cards, function(t) {
        t.classList.remove('dragging');
        t.classList.remove('over');
    });

    Array.prototype.forEach.call(panes, function(t) {
        t.classList.remove('over');
    });
}


function handleDropOntoCard(e) {
    // prevent Browser's default behaviour for drops
    if (e.stopPropagation) {
        e.stopPropagation(); 
    }

    // Don't do anything if dropping the same card we're dragging.
    if (dragSrcEl !== this.parentNode) {
        dragSrcEl.parentNode.removeChild(dragSrcEl);
        this.parentNode.parentNode.appendChild(dragSrcEl);
    }

    return false;
}

var handleDropOntoPane = function (e) {	
	
    if (e.stopPropagation) {
        e.stopPropagation();

    }

    dragSrcEl.parentNode.parentNode.removeChild(dragSrcEl.parentNode);
    this.appendChild(dragSrcEl);
    console.log("pane drop")

    return false;
}


function handleDragEnter(e) {  
	console.log("Drag enter fired")      
    this.classList.add('over');
}

function handleDragEnterc(e) {        
    this.classList.add('over');
}

function handleDragLeave(e) {
	console.log("Drag leave fired")
    this.classList.remove('over');
}

function handleDragLeavec(e) {
    this.classList.remove('over');
}



});