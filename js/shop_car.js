var shopCar = (function () {
    var $shopcar = $('.shop_car');
    return {
        init: function (ele) {
            this.$ele = document.querySelector(ele);       
            this.event();
            this.getShopListData();
        },
        event: function () {
            var _this = this;
            // 用jq获取按钮的最前面的父级，因为 shopcarCenter就是好多个，它时shop_car的子集
            // 所以需要给他们index,没点击删除按钮就获取一次他的index,这样同时将对应的本地存储的值给去除

            $shopcar.on('click','.removeshop',function(){
                this.carList = JSON.parse(localStorage.shopList);
                var shop01 = $('.removeshop').closest('.shopcarCenter');
                for(var i = 0; i < shop01.length; i++){
                    shop01[i].index = i;
                }
                this.index = 0;
                
            })
            // 点击删除按钮，获取shopcarCenter的index值
            this.$ele.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.innerHTML == "删除"){
                    // 获取target即按钮的父级的父级。。。最终找到shopcarCenter,然后找他的index
                    var a = target.parentNode.parentNode;
                    var b = a.parentNode.parentNode.parentNode.parentNode
                    console.log(b.index);
                    var c = b.index - 1;
                    this.shopList = JSON.parse(localStorage.shopList);
                    this.carList = JSON.parse(localStorage.shopList);
                    this.carList.splice(c,1);
                    console.log(this.carList);
                    localStorage.shopList = JSON.stringify(this.carList);
                    b.remove();
                    _this.showNone(); 
                }
            }
        },
        // 获取所有商品信息
        getShopListData: function () {
            var _this = this;
            var params = {
                success: function (data) {
                    _this.shopList = data.data;
                    _this.getCarList();
                }
            }
            sendAjax('json/shop01.json', params);
        },
        // 获取本地存储，与json对象中传过来的数据进行比较
        getCarList: function () {
            var _this = this;
            // [{id: 1, count:2}, {id: 2, count: 10}]
            this.carList = JSON.parse(localStorage.shopList);
            console.log(this.carList);
            for(var i = 0; i <  this.shopList.length; i++) {
                for(var j = 0; j < this.carList.length; j++) {
                    if(this.shopList[i].color == this.carList[j].color) {
                        _this.$ele.name = this.carList[j].color;
                        console.log(_this.$ele.name);
                        Object.assign(this.carList[j], this.shopList[i]);  // Object.assign() 对象的方法，用来合并对象的方法
                        break;
                    }
                }
            }
            console.log(this.carList);
            this.countPrice(this.carList);
            this.insertCarList(this.carList);
        },
        // 计算总价
        countPrice: function(arr) {
           arr = arr.map(x => {
               return x.countPrice = x.price * x.count;
           })
        },
        // 把购物车数据渲染到页面中
        insertCarList: function (data) {
            var arr = [];
            var shop;
            console.log(this.shopList)
            arr.push(`<div class="shopcarTop">
            <label for="checkbox_1" class="checkbox"><input type="checkbox" id="checkbox_1">全选</label>
                <ul class="shopcarTop_ul">
                    <li>商品</li>
                    <li>单价</li>
                    <li>数量</li>
                    <li>小计</li>
                    <li>操作</li>
                </ul>
            </div>`);
            for (var i = 0; i < data.length; i++) {
            arr.push(`
            <div class="shopcarCenter">
                <div class="shopCar_jiange"></div>
                <div class="shops01">
                    <label for="checkbox_2" class="checkbox1"><input type="checkbox" id="checkbox_2"></label>
                    <div class="shops01detail">
                            <div class="shops01box">
                                <a href="" id="shopcar_a1"><img src=${data[i].img} alt=""></a> 
                                <ul class="shopcarTop_ul1">
                                    <li><a href="" class="shopcarTop_ul1_a1">${data[i].name}</a></li>
                                    <li>
                                        <p>${data[i].price}</p>
                                        <s>￥2599</s>
                                    </li>
                                    <li>
                                        <div class="choicebtnLeft">
                                            <input type="text" id="choicebtn_inp" value="${data[i].count}">
                                            <p>
                                                <a href="javascript:void(0)"  id="choicebtn_a1">+</a>
                                                <a href="javascript:void(0)"  id="choicebtn_a2">-</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <b>￥${data[i].countPrice}</b>
                                        <p>省￥300.00<p>
                                    </li>
                                    <li>
                                        <button class = "removeshop">删除</button>
                                    </li>
                                </ul>
                            </div>
                        
                        <div class="shops01data">
                            <div class="shops01data_top">
                                <h3>服务</h3>
                                <ul class="shopcardata_ul">
                                    <li><span id="shopcardata_ul_span1">延长服务宝</span><span>延长服务宝1年</span></li>
                                    <li><span>￥158.00</span></li>
                                    <li>x<span>1</span></li>
                                    <li>￥158.00</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="shopCar_jiange01"></div>
                            <div class="shops01data_bottom">
                                <h3>配</h3>
                                <div class="shops01box2">
                                    <ul class="shopcardata_ul1">
                                        <li><img src="images/min-img02.jpg" alt=""><span id="shopcardata_ul1_span">荣耀运动臂带(灰色)灰色</span></li>
                                        <li><span id="shopcardata_ul1_span2">x1</span></li>
                                    </ul>
                                    <ul class="shopcardata_ul2">
                                        <li><img src="images/min-img01.jpg" alt=""><span id="shopcardata_ul1_span">荣耀畅玩 运动手环 A2 心率监测(魔法黑) 魔法黑</span></li>
                                        <li><span id="shopcardata_ul1_span2">x1</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>`);
            }
            this.$ele.innerHTML = arr.join('');
        },
        //当本地存储为 "[]" 时，触发
        showNone:function(){
            var _this = this;
            this.shopList = localStorage.shopList;
            console.log(this.shopList);
            if(this.shopList == "[]" || this.shopList == ''){
                localStorage.shopList = "";
                _this.$ele.innerHTML = `<span id = "shop_carSpan"></span>
                <p id="shop_carPP">您的购物车了什么也没有哦~</p>
                <a href="index1.html" id="shop_carAA">去逛逛</a>`;
            }
        }

    }

}())


