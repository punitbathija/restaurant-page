function home() {
  const home = document.createElement("div");
  home.setAttribute("id", "homepage");
  home.innerHTML = `<h1>Tootsie Roll's</h1>
                        <img src = "roll.jpg" alt = "tasty-roll-image" width = "500" height = "500">
                        <p>Now Best Rolls</p>
                        <p>Avalable in your city</p>
                        <p>Bandra West</p>
                        <p>Mumbai</p>
                        <p>Contact:- 8888888888</p>
                        `;
  content.appendChild(home);
}
export { home };
