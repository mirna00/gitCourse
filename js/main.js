function welcome(){
    let word = document.getElementById('hello_world');
    setInterval(function(){
        word.style.visibility = word.style.visibility === 'visible' ? 'hidden' : 'visible' ;
    },400);
    let button = document.getElementById('click_me_button');
    button.hidden = true;
}