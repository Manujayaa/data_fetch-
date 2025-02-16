function getData() {
    console.log("getting data");

    let xhttp = new XMLHttpRequest(); // Create XMLHttpRequest object
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}

// Move fetchData() outside of getData()
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(function(response){
             return response.json()
        })
        .then(function(data){
             console.log(data);
             document.getElementById("output").innerHTML = data.title;
             
        })
}
