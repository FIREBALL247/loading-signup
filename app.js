window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainPage = document.getElementById('container');
    
    setTimeout(() => {
      loadingScreen.style.display = 'none'; 
      mainPage.style.display = 'block'; 
    }, 1000); 
  });


 
 