var modal = document.getElementById("myModal");

var btn = document.getElementById("formBtn");

var span = document.getElementById("close");

btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display="block";
}

span.onclick = function() {
    modal.style.display="none";
}