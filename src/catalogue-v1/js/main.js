var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS5VdUW0Zl_tWl9igEmTOkJTPRpU2pEraZA9kr4cuoGpr0AIbZOK177bz1nYitKiQ0lYq-koesjfuNh/pub?gid=1177250670&single=true&output=csv';


        //   function init() {
        //     Tabletop.init( { key: publicSpreadsheetUrl,
        //                      callback: showInfo,
        //                      simpleSheet: true, 
        //                      orderby: 'order' } );
        //   }

        function init() {
            Papa.parse(public_spreadsheet_url, {
              download: true,
              header: true,
              orderby: 'order',
              complete: showInfo
            })
          }

          

          window.addEventListener('DOMContentLoaded', init)

          function showInfo(results) {
            var data = results.data

                
                // FOR DISPLAYING IMAGES FROM CDN INTO LANDING PAGE //  
                  
                var dynamic = document.getElementsByClassName("var-images");   
              
                for (i = 0; i < dynamic.length; i++) {
                    
                    dynamic[i].innerHTML += " <img class='images' src= " + [ data[i].spreadid ] + " > ";
                    
                }
                  
                  
                 // FOR HIDING AND SHOWING STOCK //
                  
                  var section = document.getElementsByClassName("section");
                  
                  var rowWrap = document.getElementsByClassName("row-wrap")[0];
                                  
                  for (i = 0; i < section.length; i++) {

                     if ( [ data[i].stock ] == "0" ) {
                         
                        section[i].style.display = "none";
                        
                      }
                      
                      if ( [ data[7].stock ] == "0" ) {
                         
                        rowWrap.style.flexWrap = "nowrap";
                      }
                      
                  }
               
                  
                  
                  
                         
                        
                         
                     
                  
                  
                  
                  
                  
                  // FOR RESIZING IMAGES //
                  
                  var resize = document.getElementsByClassName("images");
                  
                  
                  for (i = 0; i < resize.length; i++) {
                      
                      
                      if ( [ data[i].size ] == "xxxl" ) {
                         
                         section[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5");
                         
                         section[i].classList.add("flex-5");
                         resize[i].style.zIndex = "-1";
                         
//                         if (document.documentElement.clientWidth > 767) {
                                resize[i].style.maxWidth = "135%";
                                
//                             }
                        }
                      
                      

                     if ( [ data[i].size ] == "xxl" ) {
                         
                         section[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5");
                         
                         section[i].classList.add("flex-5");
                         resize[i].style.zIndex = "-1";
                         
//                         if (document.documentElement.clientWidth < 767) {
                                resize[i].style.maxWidth = "100%";
//                             }
                     }
                      
                     if ( [ data[i].size ] == "xl" ) {
                         
                         section[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5");
                         
                         section[i].classList.add("flex-4");
                         resize[i].style.zIndex = "0";
                         
//                         if (document.documentElement.clientWidth < 767) {
                            resize[i].style.maxWidth = "90%";
//                         }
                        }
                      
                      if ( [ data[i].size ] == "x" ) {
                         
                         section[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5");
                         
                         section[i].classList.add("flex-3");
                          resize[i].style.zIndex = "1";
                         
//                          if (document.documentElement.clientWidth < 767) {
                            resize[i].style.maxWidth = "80%";
//                          }
                        }
                      
                     if ( [ data[i].size ] == "m" ) {
                         
                         section[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5");
                         
                         section[i].classList.add("flex-2");
                         resize[i].style.zIndex = "2";
                         
//                         if (document.documentElement.clientWidth < 767) {
                            resize[i].style.maxWidth = "70%";
//                         }
                        }
                      
                      if ( [ data[i].size ] == "s" ) {
                         
                         section[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5");
                         
                         section[i].classList.add("flex-1");
                         resize[i].style.zIndex = "3";
                          
//                          if (document.documentElement.clientWidth < 767) {
                            resize[i].style.maxWidth = "60%";
//                          }
                        }
                      
                  }
                  
                  
                  
                  
                  // FOR HOTSPOTS //
                  
                  var hotspot = document.getElementsByClassName("hotspot");
                  
//                  var flex = document.getElementsByClassName("flex-1", "flex-2", "flex-3", "flex-4")
                  
                  for (i = 0; i < hotspot.length; i++) {

                     if ( [ data[i].hotspot ] == "top-centre" ) {
                         
                         hotspot[i].classList.add("pos-top-cen");
                      
                        }      
                      
                      if ( [ data[i].hotspot ] == "top-right" ) {
                         
                         hotspot[i].classList.add("pos-top-right");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "top-left" ) {
                         
                         hotspot[i].classList.add("pos-top-left");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "middle-centre" ) {
                         
                         hotspot[i].classList.add("pos-mid-cen");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "middle-right" ) {
                         
                         hotspot[i].classList.add("pos-mid-right");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "middle-left" ) {
                         
                         hotspot[i].classList.add("pos-mid-left");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "bottom-centre" ) {
                         
                         hotspot[i].classList.add("pos-bot-cen");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "bottom-right" ) {
                         
                         hotspot[i].classList.add("pos-bot-right");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "bottom-left" ) {
                         
                         hotspot[i].classList.add("pos-bot-left");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "lower-centre" ) {
                         
                         hotspot[i].classList.add("pos-low-cen");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "lower-right" ) {
                         
                         hotspot[i].classList.add("pos-low-right");
                      
                        } 
                      
                      if ( [ data[i].hotspot ] == "lower-left" ) {
                         
                         hotspot[i].classList.add("pos-low-left");
                      
                        } 
                      
                      
                  }
                  
                  
                  // FOR LOADING LARGE MODAL IMAGES //                  
                  
                  var eachModalImage = document.getElementsByClassName("modal-image");
                  
                  var imagesModal = document.getElementsByClassName("var-images-modal");
                
                  for (i = 0; i < imagesModal.length; i++) {
                    
                    imagesModal[i].innerHTML += " <img class='modal-image' src= " + [ data[i].spreadid ] + " > ";
                      
                  }
                  
                  
                    
                  // FOR LOADING 'STYLE WITH' MODAL IMAGE AND CONTENT 1 //
                  
                      var styleContainer = document.getElementsByClassName("style-image1");
                
                      for (i = 0; i < styleContainer.length; i++) {

                        styleContainer[i].innerHTML = " <img class='style-with-image' src= " + [ data[i].styleimage1 ] + " > ";
                      }
                  
                  
                  
                      var styleTitle = document.getElementsByClassName("style-title1");
                
                      for (i = 0; i < styleTitle.length; i++) {

                        styleTitle[i].innerHTML =  [ data[i].styletitle1 ];
                      }
                  
                  
                      var stylePrice = document.getElementsByClassName("price1");
                  
                      for (i = 0; i < stylePrice.length; i++) {

                        stylePrice[i].innerHTML =  [ data[i].styleprice1 ];
                          
                      }
                  
                  
                  
                  
                    // FOR LOADING 'STYLE WITH' MODAL IMAGE AND CONTENT 2 //
                  
                      var styleContainer2 = document.getElementsByClassName("style-image2");
                
                      for (i = 0; i < styleContainer2.length; i++) {

                        styleContainer2[i].innerHTML = " <img class='style-with-image' src= " + [ data[i].styleimage2 ] + " > ";
                      }
                  
                  
                  
                      var styleTitle2 = document.getElementsByClassName("style-title2");
                
                      for (i = 0; i < styleTitle2.length; i++) {

                        styleTitle2[i].innerHTML =  [ data[i].styletitle2 ];
                      }
                  
                  
                      var stylePrice2 = document.getElementsByClassName("price2");
                
                      for (i = 0; i < stylePrice2.length; i++) {

                        stylePrice2[i].innerHTML =  [ data[i].styleprice2 ];
                          
                      }
                  
                  
                  
                    // FOR LOADING 'STYLE WITH' MODAL IMAGE AND CONTENT 3 //
                  
                      var styleContainer3 = document.getElementsByClassName("style-image3");
                
                      for (i = 0; i < styleContainer3.length; i++) {

                        styleContainer3[i].innerHTML = " <img class='style-with-image' src= " + [ data[i].styleimage3 ] + " > ";
                      }
                  
                  
                  
                      var styleTitle3 = document.getElementsByClassName("style-title3");
                
                      for (i = 0; i < styleTitle3.length; i++) {

                        styleTitle3[i].innerHTML =  [ data[i].styletitle3 ];
                      }
                  
                  
                      var stylePrice3 = document.getElementsByClassName("price3");
                
                      for (i = 0; i < stylePrice3.length; i++) {

                        stylePrice3[i].innerHTML =  [ data[i].styleprice3 ];
                          
                      }
                  
                  
                  
                  
                  
                  
                  
                  // ADDING VARIABLES FOR THE BUTTONS //
                  
                  var button = document.getElementById("img1");
                  var button2 = document.getElementById("img2");
                  var button3 = document.getElementById("img3");
                  var button4 = document.getElementById("img4");
                  var button5 = document.getElementById("img5");
                  var button6 = document.getElementById("img6");
                  var button7 = document.getElementById("img7");
                  var button8 = document.getElementById("img8");
                  var button9 = document.getElementById("img9");
                  var button10 = document.getElementById("img10");
//                  var button11 = document.getElementById("img11");
                  
                  var closeIcon = document.getElementById("close");
                  
                  var closeIcon2 = document.getElementById("close2");
                  
                  
                  var modal = document.getElementById("myModal");
                  
                  
                  // ADDING VARIABLES FOR EACH MODAL CONTENT //
                  
                  var modalContent = document.getElementsByClassName("modal-content")[0];
                  var modalContent2 = document.getElementsByClassName("modal-content")[1];
                  var modalContent3 = document.getElementsByClassName("modal-content")[2];
                  var modalContent4 = document.getElementsByClassName("modal-content")[3];
                  var modalContent5 = document.getElementsByClassName("modal-content")[4];
                  var modalContent6 = document.getElementsByClassName("modal-content")[5];
                  var modalContent7 = document.getElementsByClassName("modal-content")[6];
                  var modalContent8 = document.getElementsByClassName("modal-content")[7];
                  var modalContent9 = document.getElementsByClassName("modal-content")[8];
                  var modalContent10 = document.getElementsByClassName("modal-content")[9];
//                  var modalContent11 = document.getElementsByClassName("modal-content")[10];

                  
                  // ADDING FUNCTIONS FOR THE BUTTONS //
                  
                  button.addEventListener("click", activateItem1);
                  
                  function activateItem1() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent.style.display = "flex";
                      eachModalImage[0].style.display = "flex";
                  }  
                  
                  
                  button2.addEventListener("click", activateItem2);
                  
                  function activateItem2() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent2.style.display = "flex";
                      eachModalImage[1].style.display = "flex";
                  }
                  
                  
                  button3.addEventListener("click", activateItem3);
                  
                  function activateItem3() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent3.style.display = "flex";
                      eachModalImage[2].style.display = "flex";
                  }
                  
                  
                  button4.addEventListener("click", activateItem4);
                  
                  function activateItem4() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent4.style.display = "flex";
                      eachModalImage[3].style.display = "flex";
                  }
                  
                  
                  button5.addEventListener("click", activateItem5);
                  
                  function activateItem5() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent5.style.display = "flex";
                      eachModalImage[4].style.display = "flex";
                  }
                  
                  
                  button6.addEventListener("click", activateItem6);
                  
                  function activateItem6() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent6.style.display = "flex";
                      eachModalImage[5].style.display = "flex";
                  }
                  
                  
                  button7.addEventListener("click", activateItem7);
                  
                  function activateItem7() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent7.style.display = "flex";
                      eachModalImage[6].style.display = "flex";
                  }
                  
                  
                  button8.addEventListener("click", activateItem8);
                  
                  function activateItem8() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent8.style.display = "flex";
                      eachModalImage[7].style.display = "flex";
                  }
                  
                  
                  button9.addEventListener("click", activateItem9);
                  
                  function activateItem9() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent9.style.display = "flex";
                      eachModalImage[8].style.display = "flex";
                  }
                  
                  
                  button10.addEventListener("click", activateItem10);
                  
                  function activateItem10() {
                      modal.style.display = "flex";
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
                      modalContent10.style.display = "flex";
                      eachModalImage[9].style.display = "flex";
                  }
                  
                  
//                  button11.addEventListener("click", activateItem11);
//                  
//                  function activateItem11() {
//                      modal.style.display = "flex";
//                      modalContent11.style.display = "flex";
//                      eachModalImage[10].style.display = "flex";
//                  }
                  
                  
                  // ADDING A FUNCTION FOR THE CLOSE BUTTON //
                  
                  
                  closeIcon.addEventListener("click", closeModal);
                  
                  closeIcon2.addEventListener("click", closeModal);
                  
                 
                  function closeModal() {
                            
                      modal.style.display = "none";
                      
                      modalContent.style.display = "none";
                      modalContent2.style.display = "none";
                      modalContent3.style.display = "none";
                      modalContent4.style.display = "none";
                      modalContent5.style.display = "none";
                      modalContent6.style.display = "none";
                      modalContent7.style.display = "none";
                      modalContent8.style.display = "none";
                      modalContent9.style.display = "none";
                      modalContent10.style.display = "none";
//                      modalContent11.style.display = "none";
                      
                      eachModalImage[0].style.display = "none";
                      eachModalImage[1].style.display = "none";
                      eachModalImage[2].style.display = "none";
                      eachModalImage[3].style.display = "none";
                      eachModalImage[4].style.display = "none";
                      eachModalImage[5].style.display = "none";
                      eachModalImage[6].style.display = "none";
                      eachModalImage[7].style.display = "none";
                      eachModalImage[8].style.display = "none";
                      eachModalImage[9].style.display = "none";
//                      eachModalImage[10].style.display = "none";
                      
                      
                      modalContentSize.style.display = "none";
                                            
                      sizeNumber.innerHTML = "select size";
                      
                      for (i = 0; i < sizeTabs.length; i++) {
                            sizeTabs[i].classList.remove("active");
                            
                        }
                      
                      
                 }
                  
                  
                  // ADDING A FUNCTION FOR THE SMALL ADD TO BAG BUTTONS //
                  
                  var addToBasket = document.getElementsByClassName("add-to-basket");
                  
                  
                  for (i = 0; i < addToBasket.length; i++) {

                       addToBasket[i].addEventListener("click", closeContent);
                  }
                 
                  function closeContent() {
                            
//                     modalContent.style.display = "flex";
                    
                     modalContentSize.style.display = "flex";
                      
                 }
                  
                  
                  // ADDING A FUNCTION FOR THE DOWN CHEVRON //
                  
                  var modalContentSize = document.getElementsByClassName("modal-content-size")[0];
                  
                  
                  var downArrow = document.getElementsByClassName("down-arrow")[0];

                  downArrow.addEventListener("click", closeSize);
                  
                  function closeSize(e) {
                      
                      e.preventDefault();
                      
                      modalContentSize.style.display = "none";
                      
                      sizeNumber.innerHTML = "select size";
                      
                      for (i = 0; i < sizeTabs.length; i++) {
                         sizeTabs[i].classList.remove("active");
                            
                        }
                      
                  } 
                  
                  
                  
                  
                  // ADDING A FUNCTION FOR THE SIZE NUMBER BUTTONS //
                  
                  var sizeTabs = document.getElementsByClassName("sizes");
                    var sizeNumber = document.getElementById("size-number");


                    for (i = 0; i < sizeTabs.length; i++) {
                            sizeTabs[i].addEventListener("click", activeTab);
                        }


                    function activeTab(e) {
                        for (i = 0; i < sizeTabs.length; i++) {
                            sizeTabs[i].classList.remove("active");
                            this.classList.add("active");
                            sizeNumber.innerHTML = "size " + e.target.innerHTML;
                        }

                    }
                  
                  
                  // ADDING A FUNCTION FOR THE MAIN ADD TO BAG BUTTON //
                  
                  var addToBag = document.getElementById("add-to-bag");
                  
                  var addedModal = document.getElementsByClassName("modal-content-added")[0];
                  
                  var darkTransAdded = document.getElementsByClassName("dark-transparency-added")[0];
                  
               
                  
                  addToBag.addEventListener("click", showAddedModal);
                  
                  function showAddedModal() {
                      addedModal.style.display = "block";
                      darkTransAdded.style.display = "block";
                      modalContentSize.style.display = "none";
                      
                      sizeNumber.innerHTML = "select size";
                      
                      for (i = 0; i < sizeTabs.length; i++) {
                            sizeTabs[i].classList.remove("active");
                            
                        }
                      
                      setTimeout(function(){
                            addedModal.style.display = "none";
                        }, 2500);
                      
                      setTimeout(function(){
                            darkTransAdded.style.display = "none";
                        }, 2500);
                      
                  }
                  
                  
                  // ADDING A FUNCTION FOR THE TRANSPARENT MODAL BACKGROUND. WHEN CLICKED CLOSES MODALS  //
                  
                  var transparency = document.getElementsByClassName("dark-transparency")[0];
                  
                  transparency.addEventListener("click", closeModal);
                  
                  
                  
                  
                  
                  // ADDING ADDITIONAL FUNCTION FOR THE SMALL ADD TO BAG BUTTONS TO CHANGE THE IMAGE ON THE LAST MODEL THAT SLIDES IN FROM THE TOP //
                  
                  var add1 = document.getElementById("add1");
                  
                  var updateImage = document.getElementById("update-image");
                  
                  var sizeImageCont = document.getElementById("size-image-cont")
                  
                  
                  add1.addEventListener("click", updateAddedImage);
                  
                  function updateAddedImage () {
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[0].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[0].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add2 = document.getElementById("add2");
                  
                  add2.addEventListener("click", updateAddedImage2);
                  
                  function updateAddedImage2 () {

                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[0].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[0].styleimage2 ] + " > ";
                  }
                  
                  
                  
                  var add3 = document.getElementById("add3");
                  
                  add3.addEventListener("click", updateAddedImage3);
                  
                  function updateAddedImage3 () {

                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[0].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[0].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  
                  
                  
                  var add4 = document.getElementById("add4");
                  
                  add4.addEventListener("click", updateAddedImage4);
                  
                  function updateAddedImage4 () {

                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[1].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[1].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add5 = document.getElementById("add5");
                  
                  add5.addEventListener("click", updateAddedImage5);
                  
                  function updateAddedImage5 () {

                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[1].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[1].styleimage2 ] + " > ";
                  }
                  
                  
                  var add6 = document.getElementById("add6");
                  
                  add6.addEventListener("click", updateAddedImage6);
                  
                  function updateAddedImage6 () {
  
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[1].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[1].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  
                  
                  
                  var add7 = document.getElementById("add7");
                  
                  add7.addEventListener("click", updateAddedImage7);
                  
                  function updateAddedImage7 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[2].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[2].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add8 = document.getElementById("add8");
                  
                  add8.addEventListener("click", updateAddedImage8);
                  
                  function updateAddedImage8 () {
  
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[2].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[2].styleimage2 ] + " > ";
                  }
                  
                  
                  var add9 = document.getElementById("add9");
                  
                  add9.addEventListener("click", updateAddedImage9);
                  
                  function updateAddedImage9 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[2].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[2].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  
                  
                  var add10 = document.getElementById("add10");
                  
                  add10.addEventListener("click", updateAddedImage10);
                  
                  function updateAddedImage10 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[3].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[3].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add11 = document.getElementById("add11");
                  
                  add11.addEventListener("click", updateAddedImage11);
                  
                  function updateAddedImage11 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[3].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[3].styleimage2 ] + " > ";
                  }
                  
                  
                  var add12 = document.getElementById("add12");
                  
                  add12.addEventListener("click", updateAddedImage12);
                  
                  function updateAddedImage12 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[3].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[3].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  
                  
                  var add13 = document.getElementById("add13");
                  
                  add13.addEventListener("click", updateAddedImage13);
                  
                  function updateAddedImage13 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[4].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[4].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add14 = document.getElementById("add14");
                  
                  add14.addEventListener("click", updateAddedImage14);
                  
                  function updateAddedImage14 () {
    
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[4].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[4].styleimage2 ] + " > ";
                  }
                  
                  
                  var add15 = document.getElementById("add15");
                  
                  add15.addEventListener("click", updateAddedImage15);
                  
                  function updateAddedImage15 () {
   
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[4].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[4].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  var add16 = document.getElementById("add16");
                  
                  add16.addEventListener("click", updateAddedImage16);
                  
                  function updateAddedImage16 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[5].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[5].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add17 = document.getElementById("add17");
                  
                  add17.addEventListener("click", updateAddedImage17);
                  
                  function updateAddedImage17 () {
    
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[5].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[5].styleimage2 ] + " > ";
                  }
                  
                  
                  var add18 = document.getElementById("add18");
                  
                  add18.addEventListener("click", updateAddedImage18);
                  
                  function updateAddedImage18 () {
   
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[5].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[5].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  
                  
                  var add19 = document.getElementById("add19");
                  
                  add19.addEventListener("click", updateAddedImage19);
                  
                  function updateAddedImage19 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[6].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[6].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add20 = document.getElementById("add20");
                  
                  add20.addEventListener("click", updateAddedImage20);
                  
                  function updateAddedImage20 () {
    
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[6].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[6].styleimage2 ] + " > ";
                  }
                  
                  
                  var add21 = document.getElementById("add21");
                  
                  add21.addEventListener("click", updateAddedImage21);
                  
                  function updateAddedImage21 () {
   
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[6].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[6].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  
                  
                  var add22 = document.getElementById("add22");
                  
                  add22.addEventListener("click", updateAddedImage22);
                  
                  function updateAddedImage22 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[7].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[7].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add23 = document.getElementById("add23");
                  
                  add23.addEventListener("click", updateAddedImage23);
                  
                  function updateAddedImage23 () {
    
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[7].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[7].styleimage2 ] + " > ";
                  }
                  
                  
                  var add24 = document.getElementById("add24");
                  
                  add24.addEventListener("click", updateAddedImage24);
                  
                  function updateAddedImage24 () {
   
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[7].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[7].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  var add25 = document.getElementById("add25");
                  
                  add25.addEventListener("click", updateAddedImage25);
                  
                  function updateAddedImage25 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[8].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[8].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add26 = document.getElementById("add26");
                  
                  add26.addEventListener("click", updateAddedImage26);
                  
                  function updateAddedImage26 () {
    
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[8].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[8].styleimage2 ] + " > ";
                  }
                  
                  
                  var add27 = document.getElementById("add27");
                  
                  add27.addEventListener("click", updateAddedImage27);
                  
                  function updateAddedImage27 () {
   
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[8].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[8].styleimage3 ] + " > ";
                  }
                  
                  
                  
                  
                  
                  var add28 = document.getElementById("add28");
                  
                  add28.addEventListener("click", updateAddedImage28);
                  
                  function updateAddedImage28 () {
 
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[9].styleimage1 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[9].styleimage1 ] + " > ";
                  }
                  
                  
                  
                  var add29 = document.getElementById("add29");
                  
                  add29.addEventListener("click", updateAddedImage29);
                  
                  function updateAddedImage29 () {
    
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[9].styleimage2 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[9].styleimage2 ] + " > ";
                  }
                  
                  
                  var add30 = document.getElementById("add30");
                  
                  add30.addEventListener("click", updateAddedImage30);
                  
                  function updateAddedImage30 () {
   
                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[9].styleimage3 ] + " > ";
                      sizeImageCont.innerHTML = " <img class='size-image' src= " + [ data[9].styleimage3 ] + " > ";
                  }
                  
                  
  
                  
//                  var add31 = document.getElementById("add31");
//                  
//                  add31.addEventListener("click", updateAddedImage31);
//                  
//                  function updateAddedImage31 () {
// 
//                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[10].styleimage1 ] + " > ";
//                  }
//                  
//                  
//                  
//                  var add32 = document.getElementById("add32");
//                  
//                  add32.addEventListener("click", updateAddedImage32);
//                  
//                  function updateAddedImage32 () {
//    
//                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[10].styleimage2 ] + " > ";
//                  }
//                  
//                  
//                  var add33 = document.getElementById("add33");
//                  
//                  add33.addEventListener("click", updateAddedImage33);
//                  
//                  function updateAddedImage33 () {
//   
//                      updateImage.innerHTML = " <img class='style-with-image' src= " + [ data[10].styleimage3 ] + " > ";
//                  }
                  
                  
                  
              }





            


// CAROUSEL //

if (document.documentElement.clientWidth > 767) {

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("carousel-cell");
    
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }

      slides[slideIndex-1].style.display = "flex"; 
    
    }
	
} 



// FLOATING NAV //

var imageGroup = document.getElementById("image-group");

var openSelectButton = document.getElementById("open-select-btn");

var openSelectModal = document.getElementById("select-nav");

var openSelectArea = document.getElementsByClassName("select-area")[0];

var openSelectBackground = document.getElementsByClassName("select-area-background")[0];

var closeQuickLinks = document.getElementById("close3");



openSelectButton.addEventListener("click", openBox);


function openBox () {
    openSelectModal.style.display = "flex";
//        openSelectModal.classList.add("show");
}


openSelectBackground.addEventListener("click", closeBox);

closeQuickLinks.addEventListener("click", closeBox);


function closeBox () {
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


function closeDropdown () {
    myDropDown.classList.remove("show");
}


var anchorLinks = document.getElementById("collectionGroup").getElementsByTagName("a");

    for (i = 0; i < anchorLinks.length; i++) {
        
        if (document.documentElement.clientWidth < 769) {       

            anchorLinks[i].addEventListener("click", closeBox);
            
        }
        

    }


for (i = 0; i < anchorLinks.length; i++) {
    
    anchorLinks[i].addEventListener("click", closeDropdown);
    
}



//var subTitle = document.getElementById("collection-dropdown");



var jeansCollection = document.getElementById("jeansCollection");

var navCollection = document.getElementsByClassName("nav-collection");

var jeansContainer = document.getElementById("jeans-collection");

jeansCollection.addEventListener("click", hideAllShowJeans);


function hideAllShowJeans(e) {
    
    for (i = 0; i < navCollection.length; i++) {

           navCollection[i].style.display = "none";
      }
    
    jeansContainer.style.display = "flex";
    myDropDown.classList.remove("show");
    collectionButton.innerHTML = e.target.innerHTML;
}


var casualCollection = document.getElementById("casualCollection");

var casualContainer = document.getElementById("casual-collection");

casualCollection.addEventListener("click", hideAllShowCasual);

function hideAllShowCasual(e) {
    
    for (i = 0; i < navCollection.length; i++) {

           navCollection[i].style.display = "none";
      }
    
    casualContainer.style.display = "flex";
    myDropDown.classList.remove("show");
    collectionButton.innerHTML = e.target.innerHTML;
}




var smartLook = document.getElementById("smartLook");

var smartLookContainer = document.getElementById("smart-look-occasion");

smartLook.addEventListener("click", hideAllShowSmart);

function hideAllShowSmart(e) {
    
    for (i = 0; i < navCollection.length; i++) {

           navCollection[i].style.display = "none";
      }
    
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


function zoomInThumb () {
    
    for (i = 0; i < zoomAnchors.length; i++) {

           zoomAnchors[i].classList.toggle("zoom");

    }
    
    zoomIcon.classList.toggle("zoom-out");
    
}


///////////////////////////////////


var removeHidden = document.getElementsByClassName("remove-hidden");

var logo = document.getElementById("logo");


logo.addEventListener("click", displayHidden);


function displayHidden() {
    
    for (i = 0; i < removeHidden.length; i++) {
        
        removeHidden[i].style.display = "flex";
        
    }
}

// MEGANAV //






