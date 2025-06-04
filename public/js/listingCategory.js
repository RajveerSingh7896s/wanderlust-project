let categories = document.querySelectorAll(".filter");

for (let category of categories) {
  category.addEventListener("click", () => {
    let text = category.querySelector("p").innerText;
    window.location.href = `/listings/listingCategory?category=${encodeURIComponent(
      text
    )}`;
  });
}
