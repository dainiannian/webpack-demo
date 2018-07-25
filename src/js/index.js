'use strict';
window.onload = function(){
    var canvas=document.getElementById("canvasPic");
    var canvasPic1=document.getElementById("canvasPic1");
    var ctx=canvas.getContext("2d");
    var ctx1=canvasPic1.getContext("2d");

    drawShape(ctx,0,0);
    drawShape(ctx1,0,0);

    var radialGradient = ctx1.createRadialGradient (200, 200, 10, 200, 190, 260);
    radialGradient.addColorStop(0, 'rgba(10, 52, 114, 0)');
    radialGradient.addColorStop(0.3, 'rgba(9, 56, 121, 0.6)');
    radialGradient.addColorStop(0.7, 'rgba(3, 88, 161, 1)');
    radialGradient.addColorStop(1, 'rgba(4, 81, 155, 1)');

    ctx1.fillStyle = radialGradient;
    ctx1.fill();

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
    }
};
