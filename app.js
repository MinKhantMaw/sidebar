const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem=document.querySelector(".list-item.active");

dark.addEventListener("click", () => {
    sidebar.classList = "sidebar";
    activeListItem="list-item active";
})
night.addEventListener("click", () => {
    sidebar.classList = "sidebar night";
    activeListItem = "list-item active night";
})
light.addEventListener("click", () => {
    sidebar.classList = "sidebar light";
    activeListItem = "list-item active light";
})