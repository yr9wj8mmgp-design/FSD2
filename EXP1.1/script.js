const products = [
  {
    name: "Wireless Headphones",
    price: 1999,
    image: "https://via.placeholder.com/150",
    inStock: true
  },
  {
    name: "Smart Watch",
    price: 3499,
    image: "https://via.placeholder.com/150",
    inStock: false
  }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-body">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="${product.inStock ? "in-stock" : "out-stock"}">
        ${product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  `;

  container.appendChild(card);
});
