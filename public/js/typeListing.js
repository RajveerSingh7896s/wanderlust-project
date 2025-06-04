let categories = document.querySelectorAll(".filter");

for (let category of categories) {
  category.addEventListener("click", () => {
    let text = category.querySelector("p").innerText;

    // Redirect to a route and pass category as query
    window.location.href = `/listings/listingCategory?category=${encodeURIComponent(
      text
    )}`;
  });
}
