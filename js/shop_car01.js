var shopCar01 = (function(){
    var count = 0;
    return{
        init:function(){
            // 购物车中的加减按钮
            this.$shopcar = document.querySelector('.shop_car');

            // 购物车中的全选按钮和单选按钮
            this.$checkbox_1 = document.querySelector('#checkbox_1');
            this.$checkbox_2 = document.querySelectorAll('#checkbox_2');
            console.log(this.$checkbox_2);
            //调用函数
            this.event();
        },
        event:function(){
            var _this = this;
            //点击加减改变input中的值，从而改变需要购买的数量
            this.$shopcar.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                // 获取加号
                if(target.id == "choicebtn_a1"){
                    //获取target对应的input的value值
                   var a = target.parentNode.previousElementSibling;
                   var count = Number(a.value);
                   count++;
                   a.value = count;
                    //获取减号
                   var jianhao = target.nextElementSibling;
                   jianhao.style.cursor = "pointer";
                   // 获取单价和总价
                   var zongjia = target.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild;
                   var danjia = target.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML;
                   jianhao.onclick = function(e){
                       e = e || window.event;
                       if(count > 1){
                        count--;
                        a.value = count;
                        var num1 = Number(danjia) * Number(a.value);
                        zongjia.innerHTML = "￥" + num1;
                        }else{
                            jianhao.style.cursor = "not-allowed";
                            a.value = 1;
                        }
                   }
                   var num = Number(danjia) * Number(a.value);
                   zongjia.innerHTML = "￥" + num;
               }
           }

           // 全选按钮和单选按钮事件
           this.$checkbox_1.onclick = function(){
               count += 1;
               if(count % 2 != 0){
                    _this.$checkbox_1.style.backgroundImage = "url(images/icon-header.png)";
                    _this.$checkbox_1.style.backgroundPosition = "0 -129px";
                    for(var i = 0;i < _this.$checkbox_2.length;i++){
                       _this.$checkbox_2[i].style.backgroundImage = "url(images/icon-header.png)"; 
                       _this.$checkbox_2[i].style.backgroundPosition =  "0 -129px";
                   }
               }else{
                    _this.$checkbox_1.style.backgroundImage = "url(images/icon-header.png)";
                    _this.$checkbox_1.style.backgroundPosition = "-18px -129px";
                    for(var i = 0;i < _this.$checkbox_2.length;i++){
                        _this.$checkbox_2[i].style.backgroundImage = "url(images/icon-header.png)"; 
                        _this.$checkbox_2[i].style.backgroundPosition =  "-18px -129px";
                }
               }
               
           }
        }
    }
}())