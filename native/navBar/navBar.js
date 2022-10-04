export function navBarMobileMenuToggle() {
  const mobileNavMenuIcon = document.querySelector("#navMenuMobileIcon");
  mobileNavMenuIcon.addEventListener("click", () => {
    mobileNavMenuIcon.nextElementSibling.classList.toggle("hidden");
  });
}

// export function setExternalHTMLTemplate(id, fileName) {
//   let xhttp;
//   let element = document.querySelector(`#${id}`);
//   let file = fileName;

//   if (file) {
//     xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4) {
//         if (this.status == 200) {
//           element.innerHTML = this.responseText;
//         }
//         if (this.status == 404) {
//           element.innerHTML = "<h5>Element not available<h5>";
//         }
//       }
//     };
//     xhttp.open("GET", `url/${file}`, true);
//     xhttp.send();
//     return;
//   }
// }
