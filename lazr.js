let l = document.createElement('div');//1st line of laser
//l.style.backgroundColor = 'red';//don't need this
l.style.height = '10px';
l.style.width = '10px';
l.style.borderRadius = '5px';//the reason it's round
l.style.position = 'fixed';//ut cann moev nowe!
l.style.pointerEvents = 'none';//so you can click through it
l.style.top = 0;//this is so it starts at the
l.style.left = 0;//         top left of the screen
l.style.zIndex = 99999;//not hiding anymorr
let y, x, oldY, oldX, dist, oldY2, oldX2;//variables
let ls = l.cloneNode();//2nd line of laser
ls.style.height = '8px';//smaller
ls.style.opacity = '.5';//transparent-er
document.addEventListener('mousemove', function(e){//when you move
    y = e.clientY;//get the
    x = e.clientX;//mouse coords
});//crying face w/ ugly shirt
let s = 32;//speeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed
setInterval(()=>{//loooooooooooooooop
    l.style.top = y - 5 + 'px';//y on center of mouse
    l.style.rotate = Math.atan2(y-oldY, x-oldX) + 'rad';//rotation
    dist = Math.hypot(x-oldX, y-oldY);//distance calc
    l.style.width = dist+10+'px';//distance show
    l.style.left = x - dist/2 - 5 + 'px';//x-coord mathing
    l.style.transform = `translate(${-dist/2}px,0px)`;//more maths
    oldY = y;//for the
    oldX = x;//2nd line
    setTimeout(()=>{//wait...
        //same as above but even more maths
        ls.style.top = oldY - 5 + 'px';
        ls.style.rotate = Math.atan2(oldY-oldY2, oldX-oldX2) + 'rad';
        dist = Math.hypot(oldX-oldX2, oldY-oldY2);
        ls.style.width = dist+10+'px';
        ls.style.left = oldX - dist/2 - 5 + 'px';
        ls.style.transform = `translate(${-dist/2}px,0px)`;
        oldY2 = oldY;
        oldX2 = oldX;
    }, s/2);//how long to wait
}, s);//crying face w/ double chin
function lazr(on, color){//turn laser on & off + coloroooooooo
    color = color || 'red';//no input = red
    if(on){//if on
        l.style.backgroundColor = ls.style.backgroundColor = color;
        document.body.appendChild(l);//put laser on the thing
        document.body.appendChild(ls);//oh yea the 2nd line too
        for(i of document.getElementsByTagName('*')){//everything!
            i.style.cursor = 'none';//no mouse cursor no more
        }
    }else{//if not on
        document.body.removeChild(l);//bye bye laser
        document.body.removeChild(ls);//don't not remove 2nd line
        for(i of document.getElementsByTagName('*')){//everything!
            i.style.cursor = 'default';//fine you can have it back
        }
    }
}
