const modal = document.querySelector(".container");
const openmodal = document.getElementById("taptoopen");
const closebtn = document.querySelector(".closebtn");

openmodal.addEventListener('click' , function() {
modal.style.display = 'block';
});

closebtn.addEventListener('click' , function(){
    modal.style.display = 'none';
});
window.addEventListener('click' , function(event){
    if(event.target==modal){
        modal.style.display = 'none';
    }
})