const menuItems = [
  { name: "Crunchem Chat Masala", price: "₹50" },
  { name: "Masala Masti", price: "₹60" },
  { name: "Veggie Stix - Chilli Chataka", price: "₹70" },
  { name: "Sour Cream Onion", price: "₹80" }
];

const menuContainer = document.getElementById("menu-items");

menuItems.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("menu-item");
  div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
  menuContainer.appendChild(div);
});
