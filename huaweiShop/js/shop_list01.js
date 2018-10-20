var   shop_list01 = (function(){
    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            this.$Li01 = this.$ele.querySelector('.right-choice01_01');
            this.$Li02 = this.$ele.querySelector('.right-choice01_02');
            this.$Li03 = this.$ele.querySelector('.right-choice01_03');
            this.$Li04 = this.$ele.querySelector('.right-choice01_04');
            this.$Li05 = this.$ele.querySelector('.right-choice01_05');
            this.$rightul = this.$ele.querySelector('.right-choice01UL');
            this.$product_left_1 = document.querySelector('.product_left_1');
            this.$allLi = this.$rightul.children;
            this.$btn = this.$ele.querySelector('#choicebtn_a3');
            //点击购物车按钮后出现购物车弹窗，给body加上一层背景模板
            this.$back = document.querySelector('.backbox');
            this.$shopcar_box = document.querySelector('.shopcar_box');
            this.$shopcar_a1 = this.$shopcar_box.querySelector('.shopcar_a1');
            //点击加减改变input中的值，从而改变需要购买的数量
            this.$choicebtn_inp = document.querySelector('#choicebtn_inp');
            this.$choicebtn_a1 = document.querySelector('#choicebtn_a1');
            this.$choicebtn_a2 = document.querySelector('#choicebtn_a2');

            // 主页中的购物车获取DOM对象
            this.$shopCar = document.querySelector('.shopCar');
            this.$nav_a2_2_span = document.querySelector('#nav_a2_2_span');
             //点击注销进行注销
             this.$navBox = document.querySelector('.navBox');
             this.$nav_a1 = document.querySelector('#nav_a1');
             this.$nav_a1_1 = document.querySelector('#nav_a1_1');
            //调用函数
            this.userData();
            this.getShopListData();
            this.event();
            this.getShopListData1();
        },
        event: function() {
            var _this = this;

            //点击注销进行注销
            this.$navBox.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.innerHTML == "注销"){
                    localStorage.removeItem("username");
                    _this.$nav_a1.innerHTML = "请登录";
                    target.innerHTML = "注册";
                    _this.$nav_a1_1.href = "javascript:void(0)";
                }
                if(target.innerHTML == "注册"){
                    setTimeout(() => {
                        _this.$nav_a1_1.href = "register.html";
                    }, 1);
                }
            } 

            //点击加减改变input中的值，从而改变需要购买的数量
            this.$choicebtn_a1.onclick = function(e){
                e = e || window.event;
                var count = Number(_this.$choicebtn_inp.value);
                count++;
                _this.$choicebtn_inp.value = count;
                _this.$choicebtn_a2.style.cursor = "pointer";
                _this.$choicebtn_a2.onclick = function(e){
                    e = e || window.event;
                    if(count > 1){
                        count--;
                        _this.$choicebtn_inp.value = count;
                    }else{
                        _this.$choicebtn_a2.style.cursor = "not-allowed";
                        _this.$choicebtn_inp.value = 1;
                    }
                }
            }
                    
            // 点击每个不同的手机颜色，将加入购物车设置属性为所对应的coloerdedezhi 
            this.$Li01.onclick = function(e){
                e = e || window.event;
                _this.$btn.name = '1';
                _this.$allLi[1].id = 'none';
                _this.$allLi[2].id = 'none';
                _this.$allLi[3].id = 'none';
                _this.$allLi[4].id = 'none';
                _this.$Li01.id = 'active';
                _this.$product_left_1.style.backgroundImage = "url(images/big01.jpg)";
            }
            this.$Li02.onclick = function(e){
                e = e || window.event;
                _this.$btn.name = '2';
                _this.$allLi[0].id = 'none';
                _this.$allLi[2].id = 'none';
                _this.$allLi[3].id = 'none';
                _this.$allLi[4].id = 'none';
                _this.$Li02.id = 'active';
                _this.$product_left_1.style.backgroundImage = "url(images/big02_01.jpg)";
            }
            this.$Li03.onclick = function(e){
                e = e || window.event;
                _this.$btn.name = '3';
                _this.$allLi[0].id = 'none';
                _this.$allLi[1].id = 'none';
                _this.$allLi[3].id = 'none';
                _this.$allLi[4].id = 'none';
                _this.$Li03.id = 'active';
                _this.$product_left_1.style.backgroundImage = "url(images/big03_01.jpg)";
            }
            this.$Li04.onclick = function(e){
                e = e || window.event;
                _this.$btn.name = '4';
                _this.$allLi[0].id = 'none';
                _this.$allLi[1].id = 'none';
                _this.$allLi[2].id = 'none';
                _this.$allLi[4].id = 'none';
                _this.$Li04.id = 'active';
            }
            this.$Li05.onclick = function(e){
                e = e || window.event;
                _this.$btn.name = '5';
                _this.$allLi[0].id = 'none';
                _this.$allLi[1].id = 'none';
                _this.$allLi[2].id = 'none';
                _this.$allLi[3].id = 'none';
                _this.$Li05.id = 'active';
            }
            $('.right-choice01UL li').click(function(){
                if($(this).text() == '幻影紫'){
                    $('#product_left_lunbo div').children("img").each(function(i){
                        this.src = 'images/shop_detail02_0'+ (i+1) + '.jpg';
                        this.align = '02';
                    })
                }
                if($(this).text() == '幻影蓝'){
                    $('#product_left_lunbo div').children("img").each(function(i){
                        this.src = 'images/shop_detail_small0'+ i + '.jpg';
                        this.align = '01';
                    })
                }
                if($(this).text() == '幻夜黑'){
                    $('#product_left_lunbo div').children("img").each(function(i){
                        this.src = 'images/shop_detail03_0'+ (i+1) + '.jpg';
                        this.align = '03';
                    })
                }
            })
            this.$ele.addEventListener('click', function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'A' && target.id === 'choicebtn_a3') {
                    console.log('我是购物车按钮');
                    // 获取商品id,商品数量
                    var color = target.getAttribute('name');
                    var tongji = target.previousElementSibling;
                    //获取数量框里面的值
                    var count = tongji.firstElementChild.value;
                    console.log(count);
                    var userid = localStorage.username;
                    if(userid == undefined){
                        alert("请先登录！");
                    }else{
                        _this.addCar(color, count,userid);
                        _this.$back.style.display = 'block';
                        _this.$shopcar_box.style.display = 'block';
                    }
                }
            }, false);
            this.$shopcar_a1.onclick = function(e){
                e = e || window.event;
                _this.$shopcar_box.style.display = 'none';
                _this.$back.style.display = 'none';
            }          
        },
        // 获取商品数据
        getShopListData: function(){
            var _this = this;
            var params = {
                success: function(data) {
                   console.log(data);
                }
            }
            sendAjax('json/shop01.json', params);
        },
        // 添加商品
        addCar(color, count,userid) {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            console.log(shopList);
            for(var i = 0; i < shopList.length; i++) {
                if(shopList[i].color == color && shopList[i].userid == localStorage.username) {
                    // 商品已经存在
                    shopList[i].count = Number(shopList[i].count) + Number(count);
                    break;
                }
            }
            if(i === shopList.length) {
                // 商品不存在
                shopList.push({color:color, count: count, userid: userid});

            }
            localStorage.shopList = JSON.stringify(shopList);

        },
        // 商品详情页的购物车
        // （1）获取商品信息,从json对象中获取数据
        getShopListData1: function () {
            var _this = this;
            var params = {
                success: function (data) {
                    _this.shopList = data.data;
                    _this.getCarList();
                }
            }
            sendAjax('json/shop01.json', params);
        },
        // （2）获取本地存储，与json对象中传过来的数据进行比较
        getCarList: function () {
            var _this = this;
            if(localStorage.shopList != "" && localStorage.username != undefined && localStorage.shopList != undefined){
                this.carList = JSON.parse(localStorage.shopList);
                console.log(this.carList);
                for(var i = 0; i <  this.shopList.length; i++) {
                    for(var j = 0; j < this.carList.length; j++) {
                        if(localStorage.username == this.carList[j].userid && this.shopList[i].color == this.carList[j].color) {
                            // Object.assign() 对象的方法，用来合并对象的方法
                            Object.assign(this.carList[j], this.shopList[i]);  
                            break;
                        }
                    }
                }
                console.log(this.carList);
                this.countPrice(this.carList);
                this.insertCarList(this.carList);
            }
        },
        // (3)计算总价
        countPrice: function(arr) {
            arr = arr.map(x => {
                return x.countPrice = x.price * x.count;
            })
        },
        //将购物车的数据渲染到主页面上
        insertCarList:function(data){
            var arr = [];
            arr.push(`<div class="minshopCarbottom">
            <p>总计 :</p>
            <div class="minshopCarbottom_left">
                <span id="minshopCarbottom_left_span">￥0.00</span>
                <s id="minshopCarbottom_left_s">￥0.00</s>
            </div>
            <div class="minshopCarbottom_right">结算</div>
            </div>`)
            var count = 0;
            for(var i = 0; i<data.length; i++){
                if(data[i].userid == localStorage.username){
                   count++;
                    
                arr.unshift(`<div class="minshopCar">
                <div class="minshopCar_top">
                    <i></i>
                    <img src=${data[i].img} alt="">
                    <div class="shopcar_shop">
                        <a href="" id="shopcar_name1">${data[i].name}</a>
                        <p>
                            <s>￥2599</s>
                            <span id="shopcar_Span1">￥${data[i].price}</span>
                            <span id="shopcar_Span2">x${data[i].count}</span>
                        </p>
                    </div>
                </div>
                <div class="minshopCar_bottom">
                    <p id="minshopCar_bottomP1">配</p>
                    <div class="minshopCar_box">
                        <span>荣耀运动臂带（灰色）x1</span>
                        <span>荣耀畅玩 运动手环 A2 心率监测（魔法黑) x1</span>
                    </div>
                </div>
            </div>`)
            }
        }
            this.$nav_a2_2_span.innerHTML = count;
            this.$shopCar.innerHTML = arr.join('');
        },
        userData:function(){
            if(localStorage.username != undefined){
                this.$nav_a1.innerHTML = `<span id="nav_a1">欢迎${localStorage.username}</span>`;
                this.$nav_a1_1.innerHTML = `注销`;
            }else{
                this.$nav_a1.innerHTML = `<span id="nav_a1">请登录</span>`;
                this.$nav_a1_1.innerHTML = `注销`;
            }
        }
    }
}())