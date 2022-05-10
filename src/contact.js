function contact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.innerHTML = `<h1>Tootsie Roll's</h1>
                        <p>Order Online at :- Zomato/Swiggy</p>
                        <p>Visit us at :- Bandra West Mumbai</p>
                        <p>Contact Us at Email :- tootsie@rolls.com</p>
                        <p>Mobile:- 8888888888</p>
                        <p>Address:- Unknown Streeet,Bandra West,Mumbai - 400052</p>
                        `;
  content.appendChild(contact);
}

export { contact };
