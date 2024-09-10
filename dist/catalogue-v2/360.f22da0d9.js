// FLOATING NAV //
var imageGroup = document.getElementById("image-group");
var openSelectButton = document.getElementById("open-select-btn");
var openSelectModal = document.getElementById("select-nav");
var openSelectArea = document.getElementsByClassName("select-area")[0];
var openSelectBackground = document.getElementsByClassName("select-area-background")[0];
var closeQuickLinks = document.getElementById("close3");
openSelectButton.addEventListener("click", openBox);
function openBox() {
    openSelectModal.style.display = "flex";
//        openSelectModal.classList.add("show");
}
openSelectBackground.addEventListener("click", closeBox);
closeQuickLinks.addEventListener("click", closeBox);
function closeBox() {
    openSelectModal.style.display = "none";
    myDropDown.classList.remove("show");
    mainMenuContainer.classList.remove("show");
}
var collectionButton = document.getElementById("collection-dropdown");
var myDropDown = document.getElementById("myDropDown");
collectionButton.addEventListener("click", openTheDropDown);
function openTheDropDown() {
    myDropDown.classList.toggle("show");
    mainMenuContainer.classList.remove("show");
}
function closeDropdown() {
    myDropDown.classList.remove("show");
}
var anchorLinks = document.getElementById("collectionGroup").getElementsByTagName("a");
for(i = 0; i < anchorLinks.length; i++)if (document.documentElement.clientWidth < 769) anchorLinks[i].addEventListener("click", closeBox);
for(i = 0; i < anchorLinks.length; i++)anchorLinks[i].addEventListener("click", closeDropdown);
//var subTitle = document.getElementById("collection-dropdown");
var jeansCollection = document.getElementById("jeansCollection");
var navCollection = document.getElementsByClassName("nav-collection");
var jeansContainer = document.getElementById("jeans-collection");
jeansCollection.addEventListener("click", hideAllShowJeans);
function hideAllShowJeans(e) {
    for(i = 0; i < navCollection.length; i++)navCollection[i].style.display = "none";
    jeansContainer.style.display = "flex";
    myDropDown.classList.remove("show");
    collectionButton.innerHTML = e.target.innerHTML;
}
var casualCollection = document.getElementById("casualCollection");
var casualContainer = document.getElementById("casual-collection");
casualCollection.addEventListener("click", hideAllShowCasual);
function hideAllShowCasual(e) {
    for(i = 0; i < navCollection.length; i++)navCollection[i].style.display = "none";
    casualContainer.style.display = "flex";
    myDropDown.classList.remove("show");
    collectionButton.innerHTML = e.target.innerHTML;
}
var smartLook = document.getElementById("smartLook");
var smartLookContainer = document.getElementById("smart-look-occasion");
smartLook.addEventListener("click", hideAllShowSmart);
function hideAllShowSmart(e) {
    for(i = 0; i < navCollection.length; i++)navCollection[i].style.display = "none";
    smartLookContainer.style.display = "flex";
    myDropDown.classList.remove("show");
    collectionButton.innerHTML = e.target.innerHTML;
}
var mainMenuContainer = document.getElementsByClassName("main-menu-container")[0];
var mainDropdown = document.getElementsByClassName("main-dropdown")[0];
mainDropdown.addEventListener("click", openMainMenu);
function openMainMenu() {
    mainMenuContainer.classList.toggle("show");
    collectionButton.classList.remove("show");
}
var zoomIcon = document.getElementById("zooming");
var zoomAnchors = document.getElementById("collectionGroup").getElementsByTagName("a");
zoomIcon.addEventListener("click", zoomInThumb);
function zoomInThumb() {
    for(i = 0; i < zoomAnchors.length; i++)zoomAnchors[i].classList.toggle("zoom");
    zoomIcon.classList.toggle("zoom-out");
}
///////////////////////////////////
var removeHidden = document.getElementsByClassName("remove-hidden");
var logo = document.getElementById("logo");
logo.addEventListener("click", displayHidden);
function displayHidden() {
    for(i = 0; i < removeHidden.length; i++)removeHidden[i].style.display = "flex";
} // MEGANAV //

//# sourceMappingURL=360.f22da0d9.js.map
