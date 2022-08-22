var laber_l = document.getElementById('laber_l').querySelectorAll('li');
var laber_l_b = document.querySelectorAll('#labl_l_b');
for (var i = 0; i < laber_l.length; i++) {
    laber_l[i].onclick = function() {
        for (var i = 0; i < laber_l.length; i++) {
            laber_l[i].className = '';
        }
        this.className = 'label_hid';
        var index = this.getAttribute('index');
        for (var i = 0; i < laber_l_b.length; i++) {
            if (i == index) {
                laber_l_b[i].style.display = 'block';
            } else {
                laber_l_b[i].style.display = 'none';
            }
        }
    }
}
var laber_r = document.getElementById('laber_r').querySelectorAll('li');
var laber_r_b = document.querySelectorAll('#labl_r_b');
for (var i = 0; i < laber_r.length; i++) {
    laber_r[i].onclick = function() {
        for (var i = 0; i < laber_r.length; i++) {
            laber_r[i].className = '';
        }
        var index = this.getAttribute('index');
        this.className = 'label_hid';
        for (var i = 0; i < laber_r_b.length; i++) {
            if (index == i) {
                laber_r_b[i].style.display = 'block';
            } else {
                laber_r_b[i].style.display = 'none';
            }
        }
    }
}
//鼠标移进盒子显示放大镜
document.querySelector('.phone_img').addEventListener('mouseover', function() {
        document.querySelector('.mask').style.display = 'block';
        document.querySelector('.big').style.display = 'block';
    })
    //鼠标移出盒子取消放大镜
document.querySelector('.phone_img').addEventListener('mouseout', function() {
    document.querySelector('.mask').style.display = 'none';
    document.querySelector('.big').style.display = 'none';
})
var box = document.querySelector('.phone_img');
var mask = document.querySelector('.mask');
document.querySelector('.phone_img').addEventListener('mousemove', function(e) {
    var x = e.pageX - this.offsetLeft;
    if (x <= 100) { //防止遮挡层移出大盒子，判断x
        x = 100;
    } else if (x >= 420) {
        x = 420; //遮挡层移动以左边框为准，所以计算距离时要用大盒子宽度减去遮挡层款宽度再加上鼠标所在的位置

    }
    var y = e.pageY - this.offsetTop;
    //防止遮挡层移出大盒子，判断y
    if (y <= 98) { 
        y = 98;
    } else if (y >= 418) {
        y = 418;
    }
    var big = document.querySelector('.big');
    var bigimg = document.querySelector('.bigimg');
    mask.style.top = y + 'px';
    mask.style.left = x + 'px';
    //大盒子中图片移动距离，和遮挡栏移动方向相反
    var movex = -(x - 100);
    var movey = -(y - 98);
    bigimg.style.top = movey + 'px';
    bigimg.style.left = movex + 'px';

})