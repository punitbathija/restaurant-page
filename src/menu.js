function menu() {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.innerHTML = `<h1>Menu</h1>
                    <p>Veg Frankie</p>
                    <p>Veg & Cheese Frankie</p>
                    <p>Veg Shezwan Frankie</p>
                    <p>Veg Masala Frankie</p>
                    <p>Veg Masala & Cheese Frankie</p>
                    <p>Veg Paneer Frankie</p>
                    <p>Veg Paneer & Cheese Frankie</p>
                    <p>Chicken Frankie</p>
                    <p>Chicken & Shezwan Frankie</p>
                    <p>Chicken & Cheese Frankie</p>
                    <p>Chicken & Shezwan Cheese Frankie</p>
                    <p>Chicken Masala Frankie</p>
                    <p>Chicken Masala & Cheese Frankie</p>
                    `;
  content.appendChild(menu);
}
export { menu };
