var destination = document.getElementsByClassName("destination2")[0];

function next() {

    var temp = destination.firstElementChild.innerHTML;
    for(var i=0; ; i++) {
        if(i==destination.childElementCount-1) {
            destination.children[i].innerHTML = temp;
            break;
        }
        destination.children[i].innerHTML = destination.children[i+1].innerHTML;
    }
}

function prev() {

   var temp = destination.lastElementChild.innerHTML;
   for(var i=destination.childElementCount-1; ; i--) {
       if(i==0) {
           destination.children[i].innerHTML = temp;
           break;
       }
       destination.children[i].innerHTML = destination.children[i-1].innerHTML;
   }
}