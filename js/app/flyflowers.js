nie.define("flyflowers", function() {
    flyflowers('canvas','myImg1','myImg2');
    flyflowers('canvas1','myImg3','myImg4');
    function flyflowers(canvas, img1, img2) {
        var canvas = document.getElementById(canvas);
        var ctx = canvas.getContext("2d");

        var imgs = [{}, {}];
        imgs[0].img = new Image();
        imgs[0].img.src = $("#"+img1).attr('src');
        imgs[1].img = new Image();
        imgs[1].img.src = $("#"+img2).attr('src');

        //canvas dimensions
        var W = window.innerWidth;
        var H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        //snowflake particles
        var mp = 20; //max particles
        var particles = [];
        for (var i = 0; i < mp; i++) {
            particles.push({
                x: Math.random() * W, //x-coordinate
                y: Math.random() * H, //y-coordinate
                r: Math.random() * 4 + 1, //radius
                d: Math.random() * mp //density
            })
        }

        //Lets draw the flakes
        function draw() {

            ctx.clearRect(0, 0, W, H);

            ctx.fillStyle = "rgba(255, 153, 127, 0.8)";
            ctx.strokeStyle = 'rgba(255, 153, 127, 0.4)';
            ctx.lineWidth = '5';
            ctx.beginPath();
            for (var i = 0; i < mp; i++) {
                var p = particles[i];
                ctx.moveTo(p.x, p.y);
                // ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
                var _idx = Math.round(p.r + 1) % 2;
                var _img = imgs[_idx].img;
                var percent = (5 - _idx * 5);
                ctx.drawImage(_img, p.x, p.y, _img.width * p.r / percent, _img.height * p.r / percent);
                // ctx.rotate((Math.PI/180)*5);
            }
            ctx.fill();
            ctx.stroke();
            update();
        }

        //Function to move the snowflakes
        //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
        var angle = 0;

        function update() {
            angle += 0.01;
            for (var i = 0; i < mp; i++) {
                var p = particles[i];
                //Updating X and Y coordinates
                //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                //Every particle has its own density which can be used to make the downward movement different for each flake
                //Lets make it more random by adding in the radius
                p.y += Math.cos(90 + p.d) + 1 + p.r / 6;
                p.x += Math.sin(30) * 2;

                //Sending flakes back from the top when it exits
                //Lets make it a bit more organic and let flakes enter from the left and right also.
                if (p.x > W + 5 || p.x < -5 || p.y > H) {
                    if (i % 3 > 0) //66.67% of the flakes
                    {
                        particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
                    } else {
                        // If the flake is exitting from the right
                        if (Math.sin(angle) > 0) {
                            //Enter from the left
                            // particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                        } else {
                            //Enter from the right
                            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
                        }
                    }
                }
            }
        }
        //animation loop
        setInterval(draw, 36);
    }
})