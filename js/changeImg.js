// var curIndex = 0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有3张图片放在img文件夹下
// var timeInterval = 1000;
var currentImg = Math.floor(Math.random() * 3);
//定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "C:/Users/zahui/Desktop/Java%20web/login/img/hhh.jpg";
arr[1] = "C:/Users/zahui/Desktop/Java%20web/login/img/sss.jpg";
arr[2] = "C:/Users/zahui/Desktop/Java%20web/login/img/718412.jpg";
changeImg();
// setInterval(changeImg, timeInterval);
function changeImg() {
    //     // if (curIndex > arr.length - 2) {
    //     //     curIndex = 0;
    //     // } else {
    //     //     curIndex += 1;
    //     // }
    document.body.style.backgroundImage = "url(" + arr[currentImg] + ")";  //显示对应的图片
}

function forget() {
    alert("请联系管理员重置")
}

// function changeImg2() {

//     var img = document.getElementById("myDiv");

//     img.style.backgroundImage = "url(img/" + img[currentImg] + ")"; //这里特别要注意引号的使用，因为img[curentImg]是个变量，所以用"+变量+"

// }

var clickuser = document.getElementById("user");
var click = document.getElementById("phone");
var tabuser = document.getElementById("tabuser");
var tabphone = document.getElementById("tabphone");
var fontuser = document.getElementById("fontuser");
var fontphone = document.getElementById("fontphone");
function changeLogin() {
    if (click.style.display == "block") {
        tabuser.style.display = "none";
        tabphone.style.display = "block";
        click.style.display = "none";
        clickuser.style.display = "block";
        fontuser.style.display = "block";
        fontphone.style.display = "none";
    } else {
        fontuser.style.display = "none";
        fontphone.style.display = "block";
        tabphone.style.display = "none";
        tabuser.style.display = "block";
        click.style.display = "block";
        clickuser.style.display = "none";
    }
}

