//*********** */ Gallery Filter ***************///

const listItems = document.querySelectorAll(".main li");
const allimages = document.querySelectorAll(".main .container-fluid .images");

function toggleActiveClass(active) {
    listItems.forEach(item => {
        item.classList.remove("active");
    });
    active.classList.add("active");
}

function toggleimages(dataClass) {
    if (dataClass === "all") {
        for (let i = 0; i < allimages.length; i++) {
            allimages[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < allimages.length; i++)
            allimages[i].dataset.class === dataClass ?
            (allimages[i].style.display = "block") :
            (allimages[i].style.display = "none");
    }
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}

///********** */ Dispay caption ***********///

var caption = document.getElementsByClassName("caption");
var imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    ["mouseover", "mouseout"].forEach(evt => {
        imgs[i].addEventListener(evt, () => {
            if (caption[i].style.display == "block") {
                caption[i].style.display = "none";
            } else {
                caption[i].style.display = "block";
            }
        })
    });
}