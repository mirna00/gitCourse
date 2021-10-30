function welcome(){
    let button = document.getElementById('click_me_button');
    // button.hidden = true;

        setInterval(function(){
            let word = document.getElementById('hello_world');
            word.style.visibility = word.style.visibility === 'visible' ? 'hidden' : 'visible' ;
        },400);


}