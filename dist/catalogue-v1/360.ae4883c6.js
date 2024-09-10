function init() {
    Papa.parse(public_spreadsheet_url, {
        download: !0,
        header: !0,
        orderby: "order",
        complete: showInfo
    });
}
function showInfo(e) {
    function s() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", Te.style.display = "flex", ee[0].style.display = "flex";
    }
    function n() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", ke.style.display = "flex", ee[1].style.display = "flex";
    }
    function t() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", He.style.display = "flex", ee[2].style.display = "flex";
    }
    function l() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", we.style.display = "flex", ee[3].style.display = "flex";
    }
    function a() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", Ie.style.display = "flex", ee[4].style.display = "flex";
    }
    function o() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", Ce.style.display = "flex", ee[5].style.display = "flex";
    }
    function d() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", ze.style.display = "flex", ee[6].style.display = "flex";
    }
    function c() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", Ne.style.display = "flex", ee[7].style.display = "flex";
    }
    function y() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", De.style.display = "flex", ee[8].style.display = "flex";
    }
    function m() {
        Me.style.display = "flex", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", Se.style.display = "flex", ee[9].style.display = "flex";
    }
    function r() {
        for(Me.style.display = "none", Te.style.display = "none", ke.style.display = "none", He.style.display = "none", we.style.display = "none", Ie.style.display = "none", Ce.style.display = "none", ze.style.display = "none", Ne.style.display = "none", De.style.display = "none", Se.style.display = "none", ee[0].style.display = "none", ee[1].style.display = "none", ee[2].style.display = "none", ee[3].style.display = "none", ee[4].style.display = "none", ee[5].style.display = "none", ee[6].style.display = "none", ee[7].style.display = "none", ee[8].style.display = "none", ee[9].style.display = "none", Ae.style.display = "none", je.innerHTML = "select size", i = 0; i < We.length; i++)We[i].classList.remove("active");
    }
    function g() {
        Ae.style.display = "flex";
    }
    function p(e) {
        for(e.preventDefault(), Ae.style.display = "none", je.innerHTML = "select size", i = 0; i < We.length; i++)We[i].classList.remove("active");
    }
    function u(e) {
        for(i = 0; i < We.length; i++)We[i].classList.remove("active"), this.classList.add("active"), je.innerHTML = "size " + e.target.innerHTML;
    }
    function L() {
        for(Ge.style.display = "block", Je.style.display = "block", Ae.style.display = "none", je.innerHTML = "select size", i = 0; i < We.length; i++)We[i].classList.remove("active");
        setTimeout(function() {
            Ge.style.display = "none";
        }, 2500), setTimeout(function() {
            Je.style.display = "none";
        }, 2500);
    }
    function f() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[0].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[0].styleimage1
        ] + " > ";
    }
    function E() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[0].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[0].styleimage2
        ] + " > ";
    }
    function h() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[0].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[0].styleimage3
        ] + " > ";
    }
    function v() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[1].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[1].styleimage1
        ] + " > ";
    }
    function B() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[1].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[1].styleimage2
        ] + " > ";
    }
    function x() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[1].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[1].styleimage3
        ] + " > ";
    }
    function M() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[2].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[2].styleimage1
        ] + " > ";
    }
    function T() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[2].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[2].styleimage2
        ] + " > ";
    }
    function k() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[2].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[2].styleimage3
        ] + " > ";
    }
    function H() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[3].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[3].styleimage1
        ] + " > ";
    }
    function w() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[3].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[3].styleimage2
        ] + " > ";
    }
    function I() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[3].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[3].styleimage3
        ] + " > ";
    }
    function C() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[4].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[4].styleimage1
        ] + " > ";
    }
    function z() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[4].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[4].styleimage2
        ] + " > ";
    }
    function N() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[4].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[4].styleimage3
        ] + " > ";
    }
    function D() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[5].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[5].styleimage1
        ] + " > ";
    }
    function S() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[5].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[5].styleimage2
        ] + " > ";
    }
    function b() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[5].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[5].styleimage3
        ] + " > ";
    }
    function A() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[6].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[6].styleimage1
        ] + " > ";
    }
    function W() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[6].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[6].styleimage2
        ] + " > ";
    }
    function j() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[6].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[6].styleimage3
        ] + " > ";
    }
    function _() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[7].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[7].styleimage1
        ] + " > ";
    }
    function G() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[7].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[7].styleimage2
        ] + " > ";
    }
    function J() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[7].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[7].styleimage3
        ] + " > ";
    }
    function O() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[8].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[8].styleimage1
        ] + " > ";
    }
    function P() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[8].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[8].styleimage2
        ] + " > ";
    }
    function Q() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[8].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[8].styleimage3
        ] + " > ";
    }
    function Z() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[9].styleimage1
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[9].styleimage1
        ] + " > ";
    }
    function K() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[9].styleimage2
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[9].styleimage2
        ] + " > ";
    }
    function U() {
        Pe.innerHTML = " <img class='style-with-image' src= " + [
            Y[9].styleimage3
        ] + " > ", Qe.innerHTML = " <img class='size-image' src= " + [
            Y[9].styleimage3
        ] + " > ";
    }
    var Y = e.data, q = document.getElementsByClassName("var-images");
    for(i = 0; i < q.length; i++)q[i].innerHTML += " <img class='images' src= " + [
        Y[i].spreadid
    ] + " > ";
    var R = document.getElementsByClassName("section"), V = document.getElementsByClassName("row-wrap")[0];
    for(i = 0; i < R.length; i++)"0" == [
        Y[i].stock
    ] && (R[i].style.display = "none"), "0" == [
        Y[7].stock
    ] && (V.style.flexWrap = "nowrap");
    var X = document.getElementsByClassName("images");
    for(i = 0; i < X.length; i++)"xxxl" == [
        Y[i].size
    ] && (R[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5"), R[i].classList.add("flex-5"), X[i].style.zIndex = "-1", X[i].style.maxWidth = "135%"), "xxl" == [
        Y[i].size
    ] && (R[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5"), R[i].classList.add("flex-5"), X[i].style.zIndex = "-1", X[i].style.maxWidth = "100%"), "xl" == [
        Y[i].size
    ] && (R[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5"), R[i].classList.add("flex-4"), X[i].style.zIndex = "0", X[i].style.maxWidth = "90%"), "x" == [
        Y[i].size
    ] && (R[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5"), R[i].classList.add("flex-3"), X[i].style.zIndex = "1", X[i].style.maxWidth = "80%"), "m" == [
        Y[i].size
    ] && (R[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5"), R[i].classList.add("flex-2"), X[i].style.zIndex = "2", X[i].style.maxWidth = "70%"), "s" == [
        Y[i].size
    ] && (R[i].classList.remove("flex-1", "flex-2", "flex-3", "flex-4", "flex-5"), R[i].classList.add("flex-1"), X[i].style.zIndex = "3", X[i].style.maxWidth = "60%");
    var F = document.getElementsByClassName("hotspot");
    for(i = 0; i < F.length; i++)"top-centre" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-top-cen"), "top-right" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-top-right"), "top-left" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-top-left"), "middle-centre" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-mid-cen"), "middle-right" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-mid-right"), "middle-left" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-mid-left"), "bottom-centre" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-bot-cen"), "bottom-right" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-bot-right"), "bottom-left" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-bot-left"), "lower-centre" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-low-cen"), "lower-right" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-low-right"), "lower-left" == [
        Y[i].hotspot
    ] && F[i].classList.add("pos-low-left");
    var ee = document.getElementsByClassName("modal-image"), se = document.getElementsByClassName("var-images-modal");
    for(i = 0; i < se.length; i++)se[i].innerHTML += " <img class='modal-image' src= " + [
        Y[i].spreadid
    ] + " > ";
    var ne = document.getElementsByClassName("style-image1");
    for(i = 0; i < ne.length; i++)ne[i].innerHTML = " <img class='style-with-image' src= " + [
        Y[i].styleimage1
    ] + " > ";
    var te = document.getElementsByClassName("style-title1");
    for(i = 0; i < te.length; i++)te[i].innerHTML = [
        Y[i].styletitle1
    ];
    var ie = document.getElementsByClassName("price1");
    for(i = 0; i < ie.length; i++)ie[i].innerHTML = [
        Y[i].styleprice1
    ];
    var le = document.getElementsByClassName("style-image2");
    for(i = 0; i < le.length; i++)le[i].innerHTML = " <img class='style-with-image' src= " + [
        Y[i].styleimage2
    ] + " > ";
    var ae = document.getElementsByClassName("style-title2");
    for(i = 0; i < ae.length; i++)ae[i].innerHTML = [
        Y[i].styletitle2
    ];
    var oe = document.getElementsByClassName("price2");
    for(i = 0; i < oe.length; i++)oe[i].innerHTML = [
        Y[i].styleprice2
    ];
    var de = document.getElementsByClassName("style-image3");
    for(i = 0; i < de.length; i++)de[i].innerHTML = " <img class='style-with-image' src= " + [
        Y[i].styleimage3
    ] + " > ";
    var ce = document.getElementsByClassName("style-title3");
    for(i = 0; i < ce.length; i++)ce[i].innerHTML = [
        Y[i].styletitle3
    ];
    var ye = document.getElementsByClassName("price3");
    for(i = 0; i < ye.length; i++)ye[i].innerHTML = [
        Y[i].styleprice3
    ];
    var me = document.getElementById("img1"), re = document.getElementById("img2"), ge = document.getElementById("img3"), pe = document.getElementById("img4"), ue = document.getElementById("img5"), Le = document.getElementById("img6"), fe = document.getElementById("img7"), Ee = document.getElementById("img8"), he = document.getElementById("img9"), ve = document.getElementById("img10"), Be = document.getElementById("close"), xe = document.getElementById("close2"), Me = document.getElementById("myModal"), Te = document.getElementsByClassName("modal-content")[0], ke = document.getElementsByClassName("modal-content")[1], He = document.getElementsByClassName("modal-content")[2], we = document.getElementsByClassName("modal-content")[3], Ie = document.getElementsByClassName("modal-content")[4], Ce = document.getElementsByClassName("modal-content")[5], ze = document.getElementsByClassName("modal-content")[6], Ne = document.getElementsByClassName("modal-content")[7], De = document.getElementsByClassName("modal-content")[8], Se = document.getElementsByClassName("modal-content")[9];
    me.addEventListener("click", s), re.addEventListener("click", n), ge.addEventListener("click", t), pe.addEventListener("click", l), ue.addEventListener("click", a), Le.addEventListener("click", o), fe.addEventListener("click", d), Ee.addEventListener("click", c), he.addEventListener("click", y), ve.addEventListener("click", m), Be.addEventListener("click", r), xe.addEventListener("click", r);
    var be = document.getElementsByClassName("add-to-basket");
    for(i = 0; i < be.length; i++)be[i].addEventListener("click", g);
    var Ae = document.getElementsByClassName("modal-content-size")[0];
    document.getElementsByClassName("down-arrow")[0].addEventListener("click", p);
    var We = document.getElementsByClassName("sizes"), je = document.getElementById("size-number");
    for(i = 0; i < We.length; i++)We[i].addEventListener("click", u);
    var _e = document.getElementById("add-to-bag"), Ge = document.getElementsByClassName("modal-content-added")[0], Je = document.getElementsByClassName("dark-transparency-added")[0];
    _e.addEventListener("click", L), document.getElementsByClassName("dark-transparency")[0].addEventListener("click", r);
    var Oe = document.getElementById("add1"), Pe = document.getElementById("update-image"), Qe = document.getElementById("size-image-cont");
    Oe.addEventListener("click", f), document.getElementById("add2").addEventListener("click", E), document.getElementById("add3").addEventListener("click", h), document.getElementById("add4").addEventListener("click", v), document.getElementById("add5").addEventListener("click", B), document.getElementById("add6").addEventListener("click", x), document.getElementById("add7").addEventListener("click", M), document.getElementById("add8").addEventListener("click", T), document.getElementById("add9").addEventListener("click", k), document.getElementById("add10").addEventListener("click", H), document.getElementById("add11").addEventListener("click", w), document.getElementById("add12").addEventListener("click", I), document.getElementById("add13").addEventListener("click", C), document.getElementById("add14").addEventListener("click", z), document.getElementById("add15").addEventListener("click", N), document.getElementById("add16").addEventListener("click", D), document.getElementById("add17").addEventListener("click", S), document.getElementById("add18").addEventListener("click", b), document.getElementById("add19").addEventListener("click", A), document.getElementById("add20").addEventListener("click", W), document.getElementById("add21").addEventListener("click", j), document.getElementById("add22").addEventListener("click", _), document.getElementById("add23").addEventListener("click", G), document.getElementById("add24").addEventListener("click", J), document.getElementById("add25").addEventListener("click", O), document.getElementById("add26").addEventListener("click", P), document.getElementById("add27").addEventListener("click", Q), document.getElementById("add28").addEventListener("click", Z), document.getElementById("add29").addEventListener("click", K), document.getElementById("add30").addEventListener("click", U);
}
function plusSlides(e) {
    showSlides(slideIndex += e);
}
function currentSlide(e) {
    showSlides(slideIndex = e);
}
function showSlides(e) {
    var s, n = document.getElementsByClassName("carousel-cell");
    for(e > n.length && (slideIndex = 1), e < 1 && (slideIndex = n.length), s = 0; s < n.length; s++)n[s].style.display = "none";
    n[slideIndex - 1].style.display = "flex";
}
function openBox() {
    openSelectModal.style.display = "flex";
}
function closeBox() {
    openSelectModal.style.display = "none", myDropDown.classList.remove("show"), mainMenuContainer.classList.remove("show");
}
function openTheDropDown() {
    myDropDown.classList.toggle("show"), mainMenuContainer.classList.remove("show");
}
function closeDropdown() {
    myDropDown.classList.remove("show");
}
function hideAllShowJeans(e) {
    for(i = 0; i < navCollection.length; i++)navCollection[i].style.display = "none";
    jeansContainer.style.display = "flex", myDropDown.classList.remove("show"), collectionButton.innerHTML = e.target.innerHTML;
}
function hideAllShowCasual(e) {
    for(i = 0; i < navCollection.length; i++)navCollection[i].style.display = "none";
    casualContainer.style.display = "flex", myDropDown.classList.remove("show"), collectionButton.innerHTML = e.target.innerHTML;
}
function hideAllShowSmart(e) {
    for(i = 0; i < navCollection.length; i++)navCollection[i].style.display = "none";
    smartLookContainer.style.display = "flex", myDropDown.classList.remove("show"), collectionButton.innerHTML = e.target.innerHTML;
}
function openMainMenu() {
    mainMenuContainer.classList.toggle("show"), collectionButton.classList.remove("show");
}
function zoomInThumb() {
    for(i = 0; i < zoomAnchors.length; i++)zoomAnchors[i].classList.toggle("zoom");
    zoomIcon.classList.toggle("zoom-out");
}
function displayHidden() {
    for(i = 0; i < removeHidden.length; i++)removeHidden[i].style.display = "flex";
}
var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS5VdUW0Zl_tWl9igEmTOkJTPRpU2pEraZA9kr4cuoGpr0AIbZOK177bz1nYitKiQ0lYq-koesjfuNh/pub?gid=1177250670&single=true&output=csv";
if (window.addEventListener("DOMContentLoaded", init), document.documentElement.clientWidth > 767) {
    var slideIndex = 1;
    showSlides(slideIndex);
}
var imageGroup = document.getElementById("image-group"), openSelectButton = document.getElementById("open-select-btn"), openSelectModal = document.getElementById("select-nav"), openSelectArea = document.getElementsByClassName("select-area")[0], openSelectBackground = document.getElementsByClassName("select-area-background")[0], closeQuickLinks = document.getElementById("close3");
openSelectButton.addEventListener("click", openBox), openSelectBackground.addEventListener("click", closeBox), closeQuickLinks.addEventListener("click", closeBox);
var collectionButton = document.getElementById("collection-dropdown"), myDropDown = document.getElementById("myDropDown");
collectionButton.addEventListener("click", openTheDropDown);
var anchorLinks = document.getElementById("collectionGroup").getElementsByTagName("a");
for(i = 0; i < anchorLinks.length; i++)document.documentElement.clientWidth < 769 && anchorLinks[i].addEventListener("click", closeBox);
for(i = 0; i < anchorLinks.length; i++)anchorLinks[i].addEventListener("click", closeDropdown);
var jeansCollection = document.getElementById("jeansCollection"), navCollection = document.getElementsByClassName("nav-collection"), jeansContainer = document.getElementById("jeans-collection");
jeansCollection.addEventListener("click", hideAllShowJeans);
var casualCollection = document.getElementById("casualCollection"), casualContainer = document.getElementById("casual-collection");
casualCollection.addEventListener("click", hideAllShowCasual);
var smartLook = document.getElementById("smartLook"), smartLookContainer = document.getElementById("smart-look-occasion");
smartLook.addEventListener("click", hideAllShowSmart);
var mainMenuContainer = document.getElementsByClassName("main-menu-container")[0], mainDropdown = document.getElementsByClassName("main-dropdown")[0];
mainDropdown.addEventListener("click", openMainMenu);
var zoomIcon = document.getElementById("zooming"), zoomAnchors = document.getElementById("collectionGroup").getElementsByTagName("a");
zoomIcon.addEventListener("click", zoomInThumb);
var removeHidden = document.getElementsByClassName("remove-hidden"), logo = document.getElementById("logo");
logo.addEventListener("click", displayHidden);

//# sourceMappingURL=360.ae4883c6.js.map
