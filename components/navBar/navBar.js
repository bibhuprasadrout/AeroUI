// mobile menu onclick event
const mobileNavMenuicon = document.querySelector('#navMenuMobileIcon')
mobileNavMenuicon.addEventListener('click', () => {
  mobileNavMenuicon.nextElementSibling.classList.toggle('hidden')
})