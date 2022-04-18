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
        tg.style.display = 'block';
    } else {
        tg.style.display = 'none';     
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

function device() {
    if (device.mobile() == true) {
        console.log('мабила')
    }
    else {
        console.log('кампьютер!')
    }
}