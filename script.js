var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

var deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener('click',function() {
    var child = list.lastElementChild;  
        while (child) {
            list.removeChild(child); 
            child = list.lastElementChild; 
        }
})

function handleClick() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if(inputValue === '') {
        alert("Please write something");
    }
    else {
        document.getElementById("myUL").appendChild(li);

        //send request at the server
        var request = new XMLHttpRequest();
        request.open("post", "/tasks");
        request.send(JSON.stringify(inputValue));
        
    }
    document.getElementById("input").value="";

    var cross = document.createElement("SPAN");
    cross.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    cross.className = "close";
    li.appendChild(cross);

    cross.addEventListener("click",removeItem);
    checkScroll();
}

function removeItem(event) {
    if(event.target.tagName=="I")
    {
        event.target.parentElement.parentElement.className = "removed-item";
        setTimeout(function(){document.getElementById("myUL").removeChild(event.target.parentElement.parentElement);}, 500);
        checkScroll();
    }
}

function checkScroll() {
    if(document.getElementById("ul_div").offsetHeight > 349)
        document.getElementById("ul_div").style.overflowY = "scroll";
    else
        document.getElementById("ul_div").style.overflowY = "hidden";
}

function handleEvent(event) {
    if(event.keyCode === 13)
        handleClick();
}
