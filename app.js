//Colors-Swticher
//function to change background color once option is changed
function changeColor() {

    //Declaring a variable for ID mySelect
    const colors = document.getElementById('mySelect');
    
    document.body.style.background = colors.value;;
}    
