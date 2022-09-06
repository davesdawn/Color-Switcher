//Colors-Swticher

//Declaring a variable for ID mySelect
const colors  = document.getElementById('mySelect');

//callback function
changeColor(colors);

//function to change background color once option is changed
function changeColor() {
    let x = colors.value;
    document.body.style.background = x;
}    
