//Color-Swticher
const colors  = document.querySelectorAll(".colorOptions");
const body = document.querySelector("body");
console.log(colors);
// console.log(body);

colors.forEach(function(color) {
    color.addEventListener('change', function(event) {
        console.log(event.target);
        if (event.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if (event.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if (event.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if (event.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if (event.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if (event.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
        }
        if (event.target.id === 'brown'){
            body.style.backgroundColor = e.target.id;
        }
        if (eventtarget.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
        if (event.target.id == 'organe'){
            body.style.backgroundColor = e.target.id;
        }
        
    })
})




