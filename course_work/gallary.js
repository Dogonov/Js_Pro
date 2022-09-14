//  1 создание разметки
//  2 функция выбора scr
//  3 функция переключения кнопок 1 и 2 
//  4 функция закрытия и открытия окна
var create = function () {
    e.preventDefault();
    console.log("EFERGEGERG");
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    var imgsWrapper = document.createElement('div');
    imgsWrapper.className = 'imgsWrapper';
    var img0 = document.createElement("img")
    imgsWrapper.appendChild(img0);
    var img1 = document.createElement("img")
    imgsWrapper.appendChild(img1);
    var img2 = document.createElement("img")
    imgsWrapper.appendChild(img2);
    var img3 = document.createElement("img")
    imgsWrapper.appendChild(img3);
    var buttonLeft = document.createElement('button');
    buttonLeft.className = "button";
    wrapper.appendChild(buttonLeft);
    var buttonRight = document.createElement('button');
    buttonRight.className = "button";
    wrapper.appendChild(buttonRight);
    document.body.appendChild(wrapper);

    var addSrcImg = () => {
        var imgArr = ["./img/gorod_sakura_yaponiya_vesna_84467_1920x1080.jpg", "./img/kanal_sakura_ogni_vecher_cvetenie_balkony_voda_60719_1920x1080.jpg", "./img/sakura-v-gorah.jpg", "./img/yaponiya_hokkaydo_most_sakura_59610_1920x1080.jpg"];
        var pictures = document.querySelectorAll("img");
        for (j = 0; j < imgArr.length; j++) {
            pictures[j].setAttribute("src", imgArr[j]);
        }
        console.log(pictures);
        return pictures;
    }
    addSrcImg;
};

window.addEventListener("load", create);

