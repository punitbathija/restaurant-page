function navbar() {
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "nav-bar");
  navbar.innerHTML = `
  <button id="homebtn">Home</button>
  <button id="menubtn">Menu</button>
  <button id="contactbtn">Contact</button>
  `;
  content.append(navbar);
}

export { navbar };
