const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    // Show the button when scrolling down
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const hamMenu = document.querySelector('hamburgar');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
})


function openTab(event, tabId) {
  
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}