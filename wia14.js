
var Player;
var blobs = [];
    // var height = window.screen.availHeight;
    // var width = window.screen.availWidth;
function setup(){
        //funkcja z frameworka p5 wywolywana w momencie zaldowania strony
        //windowWidth,windowsHeight,mouseX,mouseY to stałe frameworku p5
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    background(0);
    player = new Player(width/2,height/2,64);
    for(var i=0;i<10;i++){
        blobs[i] = new blob(random(width), random(height), 16)
    }
}
    
function draw(){
    //funkcja z frameworka p5 wywolywana caly czas
    player.show();
    for (var i =0; i<blobs.length;i++){
        blobs[i].show();
    }
    
    
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}
// document.onmousemove = function (e) {
        
// }



//  function katToRad(kat) { return kat * Math.PI / 180; }


            // var kierunekPoziomo /*+1 w prawo, -1 w lewo*/, kierunekPionowo /* +1 w dol, -1 w gore*/;
            // var ballx, bally;// pozycja pilki
            // var mouseX, mouseY; //x i y myszki
            // var bgWidth = 500;
            // var bgHeight = 400;
            // var bgColor = "rgb(255,255,255)";
            // function draw() {
            //     var canvas = document.getElementById('canvas');
            //     if (canvas.getContext) {
            //         var c = canvas.getContext('2d');

            //         var image = new Image(1, 1);
            //         image.src = 'pobrane.png';
            //         c.fillStyle = bgColor;
            //         c.fillRect(0, 0, bgWidth, bgHeight);//biale tlo
            //         c.strokeRect(0, 0, bgWidth, bgHeight);//obramowanie
            //         c.fillStyle = "rgb(0,0,0)";
            //         c.fillRect(mouseX, 370, 100, 10);//rysowanie paletki w miejscu myszki (x,y)

            //         c.beginPath();
            //         //c.arc(ballx,bally,5,katToRad(0),katToRad(360),false); //rysowanie pilki w miejscu (i,j)
            //         c.drawImage(image, ballx, bally);
            //         c.fillStyle = "rgb(0,0,0)";

            //         if (bally >= 370 && ballx >= mouseX && ballx <= mouseX + 100) {
            //             kierunekPionowo = -1;
            //             bgColor = "rgb(" + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + ")";
            //         }
            //         if (bally <= -1) {
            //             kierunekPionowo = 1;
            //             bgColor = "rgb(" + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + ")";
            //         }

            //         if (bally == 400) {
            //             ballx = Math.floor((Math.random() * bgWidth) + 0);
            //             //losowanie pozycji startowej przy przegranej
            //             bally = 0;
            //         }


            //         if (ballx >= 500) {
            //             kierunekPoziomo = -1;
            //             bgColor = "rgb(" + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + ")";
            //         }
            //         if (ballx <= 0) {
            //             kierunekPoziomo = 1;
            //             bgColor = "rgb(" + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + "," + Math.floor((Math.random() * 255) + 0) + ")";
            //         }





            //         //if (bally>=390) kierunekPionowo=-1;//zmiana kierunku poruszania sie pilki po odbiciu od sciany dolnej
            //         if (kierunekPionowo == 1) {
            //             bally++;
            //         }
            //         else {
            //             bally--;
            //         }

            //         if (kierunekPoziomo == 1) {
            //             ballx++;
            //         }
            //         else {
            //             ballx--;
            //         }


            //         c.fill();
            //         c.closePath();
            //         /*Koniec*/
            //         //   if () {
            //         // 	clearInterval(play);
            //         // 	c.fillStyle="rgb(30, 200, 30)";
            //         // 	c.font = "italic bold 30px Arial";
            //         // 	c.fillText("Koniec", 200, 250);
            //         // };

            //     }
            // }

            // function pong() {
            //     ballx = Math.floor((Math.random() * bgWidth) + 0);
            //     bally = 0;
            //     kierunekPionowo = 1;
            //     kierunekPoziomo = 1;
            //     play = setInterval('draw()', 1);


            // }


            // function pozycjaMyszki(e) {

            //     if (!e) var e = window.event;
            //     if (e.pageX || e.pageY) {
            //         pozX = e.pageX;
            //         pozY = e.pageY;
            //     } else if (e.clientX || e.clientY) {
            //         pozX = e.clientX + document.body.scrollLeft;
            //         pozY = e.clientY + document.body.scrollTop;
            //     }
            //     pozX = pozX - ((screen.width - 500) / 2);

            //     mouseX = pozX;
            //     mouseY = pozY;

            //     return { pozX, pozY }
            // }


            // document.onmousemove = function (e) {
            //     pozycjaMyszki(e);
            // }