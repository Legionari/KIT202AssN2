const form = document.forms['postForm'];

if (form) {
    form.addEventListener('submit', postForm);
}

function postForm(event) {
    event.preventDefault();

    let title = document.getElementById("tpost").value;
    let text = document.getElementById("pcontent").value;
    

    if (title == "") {
        alert("Please enter a title");
        document.getElementById("tpost").style.borderColor = "red"
        document.getElementById("tpost").style.borderBlockWidth = "5px"
    } 
    else if (title.length > 70){
        alert("Title must be less than 70 characters long")
        document.getElementById("tpost").style.borderColor = "red"
        document.getElementById("tpost").style.borderBlockWidth = "5px"
    }
    else if (text == "") {
        alert("Please enter content into your post")
        document.getElementById("pcontent").style.borderColor = "red"
        document.getElementById("tpost").style.borderColor = "lightgreen"
        document.getElementById("tpost").style.borderBlockWidth = "1px"
    } else {
        form.submit();
    }

}