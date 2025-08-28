// Regex for validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
// requires at least 1 lowercase, 1 uppercase, 1 digit, and min length 6

// Get form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form refresh

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let validEmail = emailRegex.test(email.value);
  let validPassword = passwordRegex.test(password.value);

  // Reset validation states
  email.classList.remove("is-invalid");
  password.classList.remove("is-invalid");

  if (validEmail && validPassword) {
    // If valid → simulate login success
    alert("✅ Login successful! Redirecting...");
    // Example: redirect to dashboard.html
    window.location.href = "dashboard.html";
  } else {
    // Show invalid feedback
    if (!validEmail) email.classList.add("is-invalid");
    if (!validPassword) password.classList.add("is-invalid");

    alert("⚠️ Please enter a valid email and password.");
  }
});

// --- Shopping Cart ---
let cart = [];
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".product-card");
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    // Add product to cart array
    cart.push({ name, price });
    cartCount.textContent = cart.length;

    alert(`${name} added to cart!`);
  });
});

// --- Filtering by category ---
document
  .getElementById("filterCategory")
  .addEventListener("change", function () {
    const value = this.value;
    document.querySelectorAll(".product-card").forEach((card) => {
      if (value === "all" || card.dataset.category === value) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

// --- Sorting products ---
document.getElementById("sortProducts").addEventListener("change", function () {
  const value = this.value;
  let products = Array.from(document.querySelectorAll(".product-card"));
  const parent = products[0].parentNode;

  products.sort((a, b) => {
    let priceA = parseFloat(a.dataset.price);
    let priceB = parseFloat(b.dataset.price);
    let nameA = a.dataset.name.toLowerCase();
    let nameB = b.dataset.name.toLowerCase();

    if (value === "priceLowHigh") return priceA - priceB;
    if (value === "priceHighLow") return priceB - priceA;
    if (value === "nameAZ") return nameA.localeCompare(nameB);
    if (value === "nameZA") return nameB.localeCompare(nameA);
    return 0;
  });

  // Re-append sorted
  products.forEach((p) => parent.appendChild(p));
});
