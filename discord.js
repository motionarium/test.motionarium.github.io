async function copydiscord() {
        try {
            await navigator.clipboard.writeText('lje#5295');
            ds.style.display='block';
            setTimeout("ds.style.display='none'", 2000);
        }
        catch (err) {
            console.error('Ошибка: ', err);
        }
}

function telegram(){
    if (tg.style.display == 'none') {
       tg.style.display='block';
    } else {
       tg.style.display='none';
    }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    overlay.style.display='block'
} else {
    overlay.style.display='none'
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
