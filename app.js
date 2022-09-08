//Colors-Swticher
//function to change background color once option is changed
function changeColor() {

    //Declaring a variable for ID mySelect
    const colors  = document.getElementById('mySelect');
    let x = colors.value;
    document.body.style.background = x;
}    
