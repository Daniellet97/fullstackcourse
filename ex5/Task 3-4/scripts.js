let menuBurger = document.getElementsByClassName("menu")[0];
menuBurger.addEventListener('click', openMenu);
function openMenu (){
    let contentDetails = document.getElementsByClassName("content")[0];
    if (contentDetails.style.display === 'block'){
        contentDetails.style.display = 'none'
    } else (contentDetails.style.display = 'block')
}
let previousState = 0;
window.addEventListener('scroll', pageScroll);
function pageScroll(){
    let scrollData = window.scrollY
    let scrollText = document.getElementsByClassName('scroll_text')[0];
        if(scrollData > 500 && scrollData > previousState ){
            scrollText.innerHTML = "we are going down"
        } else if (previousState > scrollData){
            scrollText.innerHTML = "we are going up"
        } else scrollText.innerHTML = ""
        console.log ('previousState: ' + previousState + 'corentState: ' + scrollData);
        previousState = scrollData;
}

