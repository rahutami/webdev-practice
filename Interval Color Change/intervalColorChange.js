let body = document.querySelector("body");
body.style.color = 'pink';
body.style.backgroundColor = '#3299a8';
isPink = true;

    setInterval(function(){
        if (isPink){  
        body.style.color = '#3299a8';
        body.style.backgroundColor = 'pink';
        } else {
            body.style.color = 'pink';
            body.style.backgroundColor = '#3299a8';
        }
        isPink = !isPink;
    },
    1500);
