const content = document.createElement("div");
document.body.appendChild(content);
content.setAttribute("id", "content");
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import { navbar } from "./navbar";
import "./style.css";
navbar();
const homebtn = document.querySelector("#homebtn");
const menubtn = document.querySelector("#menubtn");
const contactbtn = document.querySelector("#contactbtn");
onload = home();

function showHome() {
  if (content.children[1]) {
    content.removeChild(content.children[1]);
  }
  home();
}

function showMenu() {
  if (content.children[1]) {
    content.removeChild(content.children[1]);
  }
  menu();
}

function showContact() {
  if (content.children[1]) {
    content.removeChild(content.children[1]);
  }
  contact();
}

homebtn.addEventListener("click", showHome);
menubtn.addEventListener("click", showMenu);
contactbtn.addEventListener("click", showContact);
