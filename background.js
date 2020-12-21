document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#osInfo').innerHTML = window.navigator.platform;
    document.querySelector('#userCPUClocks').innerHTML = `machine has ${navigator.hardwareConcurrency} CPU's cores`;
    let userBrowser, userInfo = navigator.userAgent;
    if(userInfo.indexOf("Chrome") > -1) {
        userBrowser = "Google Chrome";
    } else if (userInfo.indexOf("Safari") > -1) {
        userBrowser = "Apple Safari";
    } else if (userInfo.indexOf("Opera") > -1) {
        userBrowser = "Opera";
    } else if (userInfo.indexOf("Firefox") > -1) {
        userBrowser = "Mozilla Firefox";
    } else if (userInfo.indexOf("MSIE") > -1) {
        userBrowser = "Microsoft Internet Explorer";
    }
    document.querySelector('#userNavigator').innerHTML = `navigator ${userBrowser}`;
    document.querySelector('#vendorInfo').innerHTML = navigator.vendor;
    document.querySelector('#navigatorInfo').innerHTML = navigator.userAgent;
    function screenSize(){
        document.getElementById('windowSize').innerHTML = `display resolution ${screen.width} x ${screen.height}`;
        document.getElementById('contentSize').innerHTML = `display usage ${window.innerWidth} x ${window.innerHeight}`;
    };
    window.addEventListener('resize', function(){
        screenSize();
    });
    screenSize();
    var clicksCount = 1;
    window.addEventListener('click', function(click) {
        document.getElementById('mouseClick').innerHTML = `clicked at ( x: ${click.clientX} y: ${click.clientY} )`;
        document.getElementById('mouseClicksCount').innerHTML = `have clicked ${clicksCount} times`;
        clicksCount++;
    });
    window.addEventListener('mousemove', function(position) {
        const mouse = {
            page: {
                x: position.pageX,
                y: position.pageY
            },
            client: {
                x: position.clientX,
                y: position.clientY
            }
        };
        document.getElementById('mouseMovePage').innerHTML = ['page'].map(function(type) {
            return [`${type} ( x: ${mouse[type].x} y: ${mouse[type].y} )`];
        });
        document.getElementById('mouseMoveClient').innerHTML = ['client'].map(function(type) {
            return [`${type} ( x: ${mouse[type].x} y: ${mouse[type].y} )`];
        });
    });
    document.querySelector('#acessData').innerHTML = Date();
    document.querySelector('#leftThePage').innerHTML = '';
    document.querySelector('#pageShowed').innerHTML = '';
});
let pageLeftCount = 1;
function leftThePage(){
    document.querySelector('#leftThePage').innerHTML = `navigates away from the page ${pageLeftCount} times`;
    pageLeftCount++;
};
let pageShowedCount = 1;
function pageShowed(){
    document.querySelector('#pageShowed').innerHTML = `page showed ${pageShowedCount} time(s)`;
    pageShowedCount ++;
};
let keysPressedCount = 1;
function keysPressed(){
    document.getElementById('keysPressed').innerHTML = `keyboard keys pressed ${keysPressedCount} times`;
    keysPressedCount++;
};
const zeroFill = n => {
    return ('0' + n).slice(-2);
}
setInterval(() => {
    const actualDate = new Date();
    const dateAndHour = ` ${zeroFill(actualDate.getUTCDate())}/${zeroFill((actualDate.getMonth() + 1))}/${actualDate.getFullYear()} ${zeroFill(actualDate.getHours())}:${zeroFill(actualDate.getMinutes())}:${zeroFill(actualDate.getSeconds())}`;
    document.getElementById('actualDate').innerHTML = dateAndHour;
}, 1000);