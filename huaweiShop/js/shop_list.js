var shop_list = (function(){
    var timer1;
    return{
        init:function(){
            //返回顶部下面的盒子的鼠标移进去的效果
            this.$pageRight_top = document.querySelector('.pageRight_top');  
            this.$pageRight_bottom = document.querySelector('.pageRight_bottom');
            this.$pageRight_p1 = document.querySelector('.pageRight_p1');
            this.$pageRight_p2 = document.querySelector('.pageRight_p2');
            this.$pageRight_p3 = document.querySelector('.pageRight_p3');
            this.$pageRight_a1 = document.querySelector('.pageRight_a1');
            this.$pageRight_a2 = document.querySelector('.pageRight_a2');
            this.$pageRight_a3 = document.querySelector('.pageRight_a3');
            // logo部分点击事件
            this.$section = document.querySelector('.section');
            this.$searchBox_inp = this.$section.querySelector('.searchBox_inp');
            this.$placeholderBox = this.$section.querySelector('.placeholderBox');
            //放大镜中的获取DOM对象
            this.$product_left_lunbo = document.querySelector('#product_left_lunbo');
            this.$smallImg =  this.$product_left_lunbo.querySelectorAll('img');
            console.log(this.$smallImg);
            //获取展示图片的盒子
            this.$product_left_1 = document.querySelector('.product_left_1');
            this.$product_left_2 = document.querySelector('#product_left_2');
            this.$swiper_wrapper = document.querySelector('.swiper-wrapper');
            for(var i = 0; i < this.$smallImg.length;i++){
                this.$smallImg[i].index = i;
            }
            // 获取最大的盒子
            this.$product_left = document.querySelector('.product_left');
            // 获取放大图片的盒子
            this.$showBigImage =  document.querySelector('.show-big-image');
            // 获取移动的小黑块(放大镜)
            this.$filter =  document.querySelector('.filter');

            this.index = 0;
            //调用函数  
            this.event();
        },
        event:function(){
            var _this = this;
             // 页面的滚动距离出先导航栏和返回顶部按钮
             this.$pageRight_top.onclick = function(e){
                timer1 = setInterval(function() {
                    var _top = document.documentElement.scrollTop - 200;
                    console.log(_top);
                    if(_top <= 0) {
                       _top = 0;
                       clearInterval(timer1);
                    }
                    document.documentElement.scrollTop = _top;
                }, 10);
            }
            window.onscroll = function() {
                // 获取滚动距离
               var top = document.documentElement.scrollTop;
               if(top >= 1600) {
                _this.$pageRight_top.style.display = 'block';
               } else {
                _this.$pageRight_top.style.display = 'none';
               }
            }
             // 返回顶部下盒子的鼠标一进去的效果
            this.$pageRight_bottom.onmouseover = function(e){
                _this.$pageRight_p1.style.display = 'block';
                _this.$pageRight_a1.style.display = 'block';
                _this.$pageRight_p2.style.display = 'block';
                _this.$pageRight_a2.style.display = 'block';
                _this.$pageRight_p3.style.display = 'block'; 
           }
            this.$pageRight_bottom.onmouseout = function(e){
                _this.$pageRight_p1.style.display = 'none';
                _this.$pageRight_a1.style.display = 'none';
                _this.$pageRight_p2.style.display = 'none';
                _this.$pageRight_a2.style.display = 'none';
                _this.$pageRight_p3.style.display = 'none';
           }

            //搜索框的input事件
            this.$searchBox_inp.onfocus = function(){
            _this.$placeholderBox.style.display = 'none';
            }
            this.$searchBox_inp.onblur = function(){
                _this.$placeholderBox.style.display = 'block';
            }
            //放大镜中的各种事件
            
            this.$product_left_2.onmouseover = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.align == '01'){
                    console.log(111111);
                    _this.showImage1(target.index);

                }
            }
            this.$product_left_lunbo.onmouseover = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.align == '02'){
                    _this.showImage2(target.index);

                }
            }
            this.$swiper_wrapper.onmouseover = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.align == '03'){
                    _this.showImage3(target.index);

                }
            }
            // 这里用onmouseenter： 子元素不触发事件
            this.$product_left_1.onmouseenter = function() {
            // 放大镜显示
            _this.$filter.style.display = 'block';
            // 展示大图片显示
            _this.$showBigImage.style.display = 'block';
            }
            this.$product_left_1.onmouseleave = function() {
            _this.$filter.style.display = 'none';
            _this.$showBigImage.style.display = 'none';
            }
            this.$product_left_1.onmousemove = function(ev) {
            ev = ev || window.event;
            // 计算小方块定点坐标
            var x = ev.pageX - this.offsetLeft - _this.$filter.offsetWidth -_this.$filter.offsetWidth/2;
            var y = ev.pageY - this.offsetTop - _this.$filter.offsetHeight - _this.$filter.offsetHeight/2;
            // 获取小方块移动的最大坐标
            var maxL = this.clientWidth -  _this.$filter.offsetWidth,
            maxT = this.clientHeight - _this.$filter.offsetHeight;
            if(x >= maxL) {
                x = maxL
            } else if(x <=0 ) {
                x = 0;
            }
            if(y >= maxT) {
                y = maxT;
            } else if( y <= 0 ) {
                y = 0;
            }
            _this.$filter.style.left = x + 'px';
            _this.$filter.style.top = y + 'px';

            // 移动大图片的位置， 放大三倍
            var img = _this.$showBigImage.querySelector('img'); 
            img.style.left = -3 * x + 'px';
            img.style.top = -3 * y + 'px';
            }
        },
        showImage1:function(index){
            console.log(index);
            var _this = this;
            var src = this.$showBigImage.querySelector('img').getAttribute('src');
            if(index == 0){
                this.$product_left_1.style.backgroundImage = "url(images/big01.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big01.jpg";
            }
            if(index == 1){
                this.$product_left_1.style.backgroundImage = "url(images/big02.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02.jpg";
            }
            if(index == 2){
                this.$product_left_1.style.backgroundImage = "url(images/big04.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big04.jpg";
            }
            if(index == 3){
                this.$product_left_1.style.backgroundImage = "url(images/big05.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big05.jpg";
            }
            if(index == 4){
                this.$product_left_1.style.backgroundImage = "url(images/big04.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big04.jpg";
            }
            if(index == 5){
                this.$product_left_1.style.backgroundImage = "url(images/big01.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big01.jpg";
            }
            if(index == 6){
                this.$product_left_1.style.backgroundImage = "url(images/big02.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02.jpg";
            }
        },
        showImage2:function(index){
            var _this = this;
            var src = this.$showBigImage.querySelector('img').getAttribute('src');
            if(index == 0){
                this.$product_left_1.style.backgroundImage = "url(images/big02_01.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02_01.jpg";
            }
            if(index == 1){
                this.$product_left_1.style.backgroundImage = "url(images/big02_02.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02_02.jpg";
            }
            if(index == 2){
                this.$product_left_1.style.backgroundImage = "url(images/big02_08.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02_08.jpg";
            }
            if(index == 3){
                this.$product_left_1.style.backgroundImage = "url(images/big02_02.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02_02.jpg";
            }
            if(index == 4){
                this.$product_left_1.style.backgroundImage = "url(images/big02_03.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02_03.jpg";
            }
            if(index == 5){
                this.$product_left_1.style.backgroundImage = "url(images/big02_01.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02_01.jpg";
            }
            if(index == 6){
                this.$product_left_1.style.backgroundImage = "url(images/big02_09.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big02_09.jpg";
            }
        },
        showImage3:function(index){
            var _this = this;
            var src = this.$showBigImage.querySelector('img').getAttribute('src');
            if(index == 0){
                this.$product_left_1.style.backgroundImage = "url(images/big03_01.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big03_01.jpg";
            }
            if(index == 1){
                this.$product_left_1.style.backgroundImage = "url(images/big03_02.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big03_02.jpg";
            }
            if(index == 2){
                this.$product_left_1.style.backgroundImage = "url(images/big03_03.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big03_03.jpg";
            }
            if(index == 3){
                this.$product_left_1.style.backgroundImage = "url(images/big03_04.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big03_04.jpg";
            }
            if(index == 4){
                this.$product_left_1.style.backgroundImage = "url(images/big03_05.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big03_05.jpg";
            }
            if(index == 5){
                this.$product_left_1.style.backgroundImage = "url(images/big03_06.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big03_06.jpg";
            }
            if(index == 6){
                this.$product_left_1.style.backgroundImage = "url(images/big03_07.jpg)";
                this.$showBigImage.querySelector('img').src = "images/big03_07.jpg";
            }
        }
    }
}())
var swiper = new Swiper('.swiper-container',{
    slidesPerView :5,
    spaceBetween : 5, // 距离
    allowTouchMove:false,
    loopedSlides: 1,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
});
