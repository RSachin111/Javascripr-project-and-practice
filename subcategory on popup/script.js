const category = document.getElementById("category");
const subCategory = document.getElementById("sub-category");

category.addEventListener("click", () => {
    subCategory.style.display = "block";
});
