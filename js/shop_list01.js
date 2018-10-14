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

            //调用函数
            this.getShopListData();
            this.event();
        },
        event: function() {
            var _this = this;
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
            }
            this.$Li02.onclick = function(e){
                e = e || window.event;
                _this.$btn.name = '2';
                _this.$allLi[0].id = 'none';
                _this.$allLi[2].id = 'none';
                _this.$allLi[3].id = 'none';
                _this.$allLi[4].id = 'none';
                _this.$Li02.id = 'active';
            }
            this.$Li03.onclick = function(e){
                e = e || window.event;
                _this.$btn.name = '3';
                _this.$allLi[0].id = 'none';
                _this.$allLi[1].id = 'none';
                _this.$allLi[3].id = 'none';
                _this.$allLi[4].id = 'none';
                _this.$Li03.id = 'active';
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
                    _this.addCar(color, count);
                    _this.$back.style.display = 'block';
                    _this.$shopcar_box.style.display = 'block';
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
        addCar(color, count) {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            for(var i = 0; i < shopList.length; i++) {
                if(shopList[i].color === color) {
                    // 商品已经存在
                    shopList[i].count = Number(shopList[i].count) + Number(count);
                    break;
                }
            }
            if(i === shopList.length) {
                // 商品不存在
                shopList.push({color:color, count: count});

            }
            localStorage.shopList = JSON.stringify(shopList);

        }
    }
}())