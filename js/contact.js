let vargu = [] ;

function prek() {
    let valueUser = document.getElementById('user').value ;
    let valueText = document.getElementById('textarea').value ; 
    vargu.push({
        email : valueUser ,
        messenge : valueText
    })
    console.log(vargu)
}