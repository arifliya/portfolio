var imageGroup=document.getElementById("image-group"),openSelectButton=document.getElementById("open-select-btn"),openSelectModal=document.getElementById("select-nav"),openSelectArea=document.getElementsByClassName("select-area")[0],openSelectBackground=document.getElementsByClassName("select-area-background")[0],closeQuickLinks=document.getElementById("close3");function openBox(){openSelectModal.style.display="flex"}function closeBox(){openSelectModal.style.display="none",myDropDown.classList.remove("show"),mainMenuContainer.classList.remove("show")}openSelectButton.addEventListener("click",openBox),openSelectBackground.addEventListener("click",closeBox),closeQuickLinks.addEventListener("click",closeBox);var collectionButton=document.getElementById("collection-dropdown"),myDropDown=document.getElementById("myDropDown");function openTheDropDown(){myDropDown.classList.toggle("show"),mainMenuContainer.classList.remove("show")}function closeDropdown(){myDropDown.classList.remove("show")}collectionButton.addEventListener("click",openTheDropDown);var anchorLinks=document.getElementById("collectionGroup").getElementsByTagName("a");for(i=0;i<anchorLinks.length;i++)document.documentElement.clientWidth<769&&anchorLinks[i].addEventListener("click",closeBox);for(i=0;i<anchorLinks.length;i++)anchorLinks[i].addEventListener("click",closeDropdown);var jeansCollection=document.getElementById("jeansCollection"),navCollection=document.getElementsByClassName("nav-collection"),jeansContainer=document.getElementById("jeans-collection");function hideAllShowJeans(e){for(i=0;i<navCollection.length;i++)navCollection[i].style.display="none";jeansContainer.style.display="flex",myDropDown.classList.remove("show"),collectionButton.innerHTML=e.target.innerHTML}jeansCollection.addEventListener("click",hideAllShowJeans);var casualCollection=document.getElementById("casualCollection"),casualContainer=document.getElementById("casual-collection");function hideAllShowCasual(e){for(i=0;i<navCollection.length;i++)navCollection[i].style.display="none";casualContainer.style.display="flex",myDropDown.classList.remove("show"),collectionButton.innerHTML=e.target.innerHTML}casualCollection.addEventListener("click",hideAllShowCasual);var smartLook=document.getElementById("smartLook"),smartLookContainer=document.getElementById("smart-look-occasion");function hideAllShowSmart(e){for(i=0;i<navCollection.length;i++)navCollection[i].style.display="none";smartLookContainer.style.display="flex",myDropDown.classList.remove("show"),collectionButton.innerHTML=e.target.innerHTML}smartLook.addEventListener("click",hideAllShowSmart);var mainMenuContainer=document.getElementsByClassName("main-menu-container")[0],mainDropdown=document.getElementsByClassName("main-dropdown")[0];function openMainMenu(){mainMenuContainer.classList.toggle("show"),collectionButton.classList.remove("show")}mainDropdown.addEventListener("click",openMainMenu);var zoomIcon=document.getElementById("zooming"),zoomAnchors=document.getElementById("collectionGroup").getElementsByTagName("a");function zoomInThumb(){for(i=0;i<zoomAnchors.length;i++)zoomAnchors[i].classList.toggle("zoom");zoomIcon.classList.toggle("zoom-out")}zoomIcon.addEventListener("click",zoomInThumb);var removeHidden=document.getElementsByClassName("remove-hidden"),logo=document.getElementById("logo");function displayHidden(){for(i=0;i<removeHidden.length;i++)removeHidden[i].style.display="flex"}logo.addEventListener("click",displayHidden);
//# sourceMappingURL=360.c704bbdf.js.map
