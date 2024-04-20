document.addEventListener('DOMContentLoaded', function() {
    const screens = document.querySelectorAll('.screens .screen');
    let index = 0;

    function playAnimation() {
        const currentScreen = screens[index];
        currentScreen.classList.add('opacityAnimation');

        currentScreen.addEventListener('animationend', function animationEndHandler() {
            currentScreen.classList.remove('opacityAnimation');
            index = (index + 1) % screens.length;
            setTimeout(() => {
                playAnimation();
            }, 100); // Aguarda 100ms antes de iniciar a próxima animação
            currentScreen.removeEventListener('animationend', animationEndHandler);
        });
    }

    playAnimation();
});

function redirectWhatsapp(whatsapp){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
        window.open('https://api.whatsapp.com/send?phone='+whatsapp+'&text=Olá, gostaria de desenvolver meu Web Site personalizado!', '_blank');
  
    } 
    else {
        window.open('https://web.whatsapp.com/send?phone='+whatsapp+'&text=Olá, gostaria de desenvolver meu Web Site personalizado!', '_blank');
        
    }
  
  }


