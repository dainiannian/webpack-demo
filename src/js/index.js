'use strict';
$(document).ready(function(){
   for(var i=0;i<3;i++){
       var ctx=$('.canvasPic').get(i).getContext("2d");
       var ctx1=$('.canvasPic1').get(i).getContext("2d");
       var ctx2=$('.canvasPic2').get(i).getContext("2d");
       drawShape(ctx,0,0);
       drawShape(ctx1,0,0);
       drawShapeOut(ctx2,0,0);

       var radialGradient = ctx1.createRadialGradient (200, 200, 10, 200, 190, 260);
       radialGradient.addColorStop(0, 'rgba(10, 52, 114, 0)');
       radialGradient.addColorStop(0.3, 'rgba(9, 56, 121, 0.6)');
       radialGradient.addColorStop(0.7, 'rgba(3, 88, 161, 1)');
       radialGradient.addColorStop(1, 'rgba(4, 81, 155, 1)');

       ctx1.fillStyle = radialGradient;//渐变
       ctx1.fill();
   }


    function drawShape(ctx, xoff, yoff) {
        ctx.strokeStyle = "#59d9f9";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo( 130, 20 );
        ctx.lineTo( 265, 20 );
        ctx.lineTo( 255, 30 );
        ctx.lineTo( 255, 30 );
        ctx.lineTo( 145, 30 );
        ctx.lineTo( 130, 20 );
        ctx.stroke();
        ctx.fillStyle = '#59d9f9';       //设置填充颜色
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(20 + xoff, 400 + yoff);

        ctx.moveTo( 33, 57 );
        ctx.lineTo( 60, 30 );//上斜线

        ctx.moveTo( 365, 317 ); //下斜线
        ctx.lineTo( 338, 344 );

        ctx.moveTo( 20, 50 );
        ctx.lineTo( 50, 20 );
        ctx.lineTo( 130, 20 );
        ctx.lineTo( 130, 20 );
        ctx.lineTo( 265, 20 );
        ctx.lineTo( 345, 20 );
        ctx.lineTo( 375, 50 );
        ctx.lineTo( 375, 140 );
        ctx.lineTo( 365, 150 );
        ctx.lineTo( 365, 225 );
        ctx.lineTo( 375, 235 );
        ctx.lineTo( 375, 325 );

        ctx.lineTo( 345, 355 );

        ctx.lineTo( 245, 355 );
        ctx.lineTo( 235, 345 );
        ctx.lineTo( 160, 345 );
        ctx.lineTo( 150, 355 );
        ctx.lineTo( 50, 355 );
        ctx.lineTo( 20, 325 );
        ctx.lineTo( 20, 235 );
        ctx.lineTo( 30, 225 );
        ctx.lineTo( 30, 150 );
        ctx.lineTo( 20, 140 );
        ctx.lineTo( 20, 50 );
        ctx.stroke();
        ////////////////////
    }
    function drawShapeOut(ctx, xoff, yoff) {
        ctx.strokeStyle = "#105689";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(20 + xoff, 400 + yoff);
        ctx.moveTo( 17, 47 );
        ctx.lineTo( 47, 15 );
        ctx.lineTo( 268, 15 );
        ctx.lineTo( 348, 15 );
        ctx.lineTo( 378, 48 );
        ctx.lineTo( 378, 143 );
        ctx.lineTo( 368, 152 );
        ctx.lineTo( 368, 222 );
        ctx.lineTo( 378, 232 );
        ctx.lineTo( 378, 328 );

        ctx.lineTo( 348, 363 );

        ctx.lineTo( 245, 363 );
        ctx.lineTo( 235, 353 );
        ctx.lineTo( 160, 353 );
        ctx.lineTo( 152, 362 );
        ctx.lineTo( 50, 362 );
        ctx.lineTo( 17, 328 );
        ctx.lineTo( 17, 232 );
        ctx.lineTo( 27, 222 );
        ctx.lineTo( 27, 153 );
        ctx.lineTo( 17, 143 );
        ctx.lineTo( 17, 47 );
        ctx.stroke();
        ctx.fillStyle = 'rgba(19, 52, 110, 0.8)';       //设置填充颜色
        ctx.shadowColor = "#1b3862";//阴影
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 50;
        ctx.fill();
    }

    //轮播效果
    $('.arrowRightBtn').off('click').click(function(){

    });
});
