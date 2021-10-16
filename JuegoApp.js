let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600); 
       frameRate(300);
     // A partir de esta linea podemos codificar nuestros dibujos

        let puntos=0;
        let colorFondo = color (220,220,100);

        let x=500;
        direccion = 0;

        let y=0;
        let xAleatorio = 500;
        let dhr=1 //Direccion horizontal
        let dvr=1 //Direccion vertical

        draw = function (){
            background(colorFondo);

            textSize(30);
            fill (30,60,90);
            text ("PUNTOS: "+puntos ,380,100);
            
            //ellipse
            fill(220,220,220);
            ellipse(xAleatorio,y,30,30);
            y=y+dvr;
            xAleatorio=xAleatorio+dhr;

            if(xAleatorio >= 1000){
                dhr=-1;
            }
            if(y>=600){
                dvr=0;
                textSize(100);
                fill(220,220,220);
                text("GAME OVER" ,200,300);
            }
            if( y==0 ){
                dvr = +1;
            }
            if(xAleatorio==0){
                dhr=+1;
            }
            
            if(xAleatorio <= x+50 && xAleatorio >= x-50 && y >= 450 && y <=550){
                textSize (60);
                fill(220,220,220,)
                text ("CHOQUE" ,200,200);
                dvr = -1;
                puntos = puntos +1;
            }
            //PLATAFORMA
            fill (220,30,10);
            rect(x,500,100,30);

            x=x+ direccion;
            if (x==0){
                direccion=direccion+2;
            }
            if (x==930){
                direccion=direccion-2;
            }

            //DIRECCION DE LA PLATAFORMA
            keyPressed=function(){
                if (key.code==97){
                    direccion=-2;
                }
                if (key.code==100){
                    direccion=+2;
                }
            }

            mousePressed=function(){
                if(mouseX <500){
                    direccion = -2;
                }
                if(mouseX >500){
                    direccion = +2;
                }
            }
        }
        





 //------------------------------------------------------

   }};
   let canvas = document.getElementById("mycanvas"); 
   let processingInstance = new Processing(canvas, sketchProc);