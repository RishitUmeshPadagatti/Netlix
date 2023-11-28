function toggling(boxid,imgid) {
    if (boxid.style.display=='none'){
        boxid.style.display='block';
        imgid.style.transform = 'rotate(45deg)';
    }else{
        boxid.style.display='none';
        imgid.style.transform = 'rotate(0deg)';
    }
}

document.getElementById('box1dropdown').addEventListener('click', function(){toggling(document.getElementById('box1'),document.getElementById('box1img'))})
document.getElementById('box2dropdown').addEventListener('click', function(){toggling(document.getElementById('box2'),document.getElementById('box2img'))})
document.getElementById('box3dropdown').addEventListener('click', function(){toggling(document.getElementById('box3'),document.getElementById('box3img'))})
document.getElementById('box4dropdown').addEventListener('click', function(){toggling(document.getElementById('box4'),document.getElementById('box4img'))})
document.getElementById('box5dropdown').addEventListener('click', function(){toggling(document.getElementById('box5'),document.getElementById('box5img'))})
document.getElementById('box6dropdown').addEventListener('click', function(){toggling(document.getElementById('box6'),document.getElementById('box6img'))})