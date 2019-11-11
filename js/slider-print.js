    var ar = ["images/print/1.jpg"];
    var curId = 1;
    var el = document.getElementsByClassName("gallery-slider")[0];

    for (var i = 2; i < 20; i++) {
        ar.push('images/print/' + i + '.jpg')
    }

    setTimeout(loadImage, 1000);

    function loadImage() {

        op = 0;
        el.style.opacity = 0;

        document.images["picture"].src = ar[curId];

        setTimeout(function funcUp() {
            if (op > 1)
                return;
            el.style.opacity = op;
            op += 0.05
            setTimeout(funcUp, 60);
        }, 60);

        curId++;

        if (ar.length > curId) {
            setTimeout(loadImage, 4000);
        } else if (ar.length == curId) {
            curId = 0;
            setTimeout(loadImage, 4000);

        };
    }
