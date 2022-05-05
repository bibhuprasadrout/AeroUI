// mobile menu onclick event
const mobileNavMenu = document.querySelector('.navMenuMobile')
const mobileNavMenuicon = document.querySelector('.navMenuMobileIcon')
mobileNavMenuicon.addEventListener('click', () => {
  console.log('abc') 
mobileNavMenu.classList.remove('hidden')
mobileNavMenu.classList.add('visible')
})