function handleClick() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if(inputValue == '') {
        alert("Please write something");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("input").value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function(){
        document.getElementById("myUL").removeChild(span.parentElement);
    }
}
