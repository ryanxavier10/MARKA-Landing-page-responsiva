function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/close.svg";
    } 
}
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i)
        });
    }
    
    const título = document.querySelector('.digitando');
    ativaLetra(título);
}