const mobileNavBtn = document.querySelector('.mobile-nav-button');
const mobileNavBtnIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
mobileNavBtn.addEventListener('click', function ()
{
    mobileNavBtnIcon.classList.toggle('active')
    mobileNav.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
});

