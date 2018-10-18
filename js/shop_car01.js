var shopCar01 = (function(){
    var count = 0;
    var count1 = 0;
    return{
        init:function(){
            // 购物车中的加减按钮
            this.$contentbox = document.querySelector('.contentbox');
            this.$contentbox1 = document.querySelector('.contentbox1');
            this.$shopcar = document.querySelector('.shop_car');
            this.$shops01 = document.querySelector('.shops01');
            // 购物车中的全选按钮和单选按钮
            this.$shopcarTop = document.querySelector('.shopcarTop');
            this.$checkbox_1 = document.querySelector('#checkbox_1');
            this.$checkbox_1_1 = document.querySelector('#checkbox_1_1');
            this.$checkbox_1_2 = document.querySelector('#checkbox_1_2');
            console.log(this.$checkbox_1_1);
            this.$checkbox_2 = document.querySelectorAll('#checkbox_2');
            console.log(this.$checkbox_2);
            // 当登录后隐藏没登录提示得div
            this.$login_prompt = document.querySelector('.login-prompt');
            // 获取下面结算框中得对象
            this.$priceAllsum_span2 = document.querySelector('#priceAllsum_span2');
            this.$priceAllsum_span4 = document.querySelector('#priceAllsum_span4');
            this.$priceAllsum_span1 = document.querySelector('#priceAllsum_span1');
            this.$priceAllsum_span3 = document.querySelector('#priceAllsum_span3');
            this.$priceAllsumbox = document.querySelector('#priceAllsum_box');
            console.log(this.$priceAllsumbox);
            //调用函数
            this.showNone01();
            this.event();
        },
        event:function(){
            var _this = this;
            //点击加减改变input中的值，从而改变需要购买的数量
            // 注： 需要用它来当事件委托的父级，不然会影响删除，因为删除时this.$shopcar ,所以用this.$contentbox
            this.$contentbox.onclick = function(e){
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
           this.$checkbox_1_1.onclick = function(){
                 _this.btnAll();
                 var b = document.querySelectorAll('.backStyle');
                 console.log(b);
                 _this.$priceAllsum_span2.innerHTML = b.length;
            
           }
           this.$checkbox_1.onclick = function(){
               _this.btnAll();
               var b = document.querySelectorAll('.backStyle');
               _this.$priceAllsum_span2.innerHTML = b.length;
               
           }
           this.$checkbox_1_2.onclick = function(){
               _this.btnAll();
               var b = document.querySelectorAll('.backStyle');
               _this.$priceAllsum_span2.innerHTML = b.length;
           }
           this.$contentbox1.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.id == "checkbox_2" && target.className == ''){
                    target.style.backgroundImage = "url(images/icon-header.png)"; 
                    target.style.backgroundPosition =  "0 -129px";
                    target.setAttribute('class','backStyle');  
                }else if(target.id == "checkbox_2" && target.className == 'backStyle'){
                    target.style.backgroundImage = "url(images/icon-header.png)"; 
                    target.style.backgroundPosition =  "-18px -129px";
                    target.removeAttribute('class');
                }
                var arr = [];
                var a = document.querySelectorAll('.backStyle');
                for(var i = 0; i < a.length; i++){
                    var num = a[i].parentNode.nextElementSibling.firstElementChild.lastElementChild.children[3].firstElementChild.innerHTML.replace("￥",'');
                    arr.push(num);
                    _this.arr = arr;
                }
                            
                var sum = 0;
                for(var j = 0; j < _this.arr.length; j++){
                    if(arr[j] == undefined){
                        sum = "0.00";
                    }
                    else{
                        sum += parseInt(arr[j]);
                    }

                }
                _this.sum1 = sum;
                console.log(_this.sum1);
                _this.$priceAllsum_span2.innerHTML = a.length;
                _this.$priceAllsum_span4.innerHTML = a.length;
                _this.$priceAllsum_span1.innerHTML = "￥" + sum;
                _this.$priceAllsum_span3.innerHTML = "￥" + sum;
           }
           //结算框到一个高度隐藏
           window.onscroll = function(){
            var top = document.documentElement.scrollTop;
            var height = Number(_this.$shopcar.offsetHeight) * 0.8;
            console.log(top);
                if(top > height){
                _this.$priceAllsumbox.style.display = 'none';
                }else if(top <= height){
                _this.$priceAllsumbox.style.display = 'block';
                }
            }
        },
        // 全选按钮和单选按钮事件函数
        btnAll:function(){
            count += 1;
            if(count % 2 != 0){
                this.$checkbox_1_1.style.backgroundImage = "url(images/icon-header.png)";
                this.$checkbox_1_1.style.backgroundPosition = "0 -129px";
                this.$checkbox_1.style.backgroundImage = "url(images/icon-header.png)";
                this.$checkbox_1.style.backgroundPosition = "0 -129px";
                this.$checkbox_1_2.style.backgroundImage = "url(images/icon-header.png)";
                this.$checkbox_1_2.style.backgroundPosition = "0 -129px";
                for(var i = 0;i < this.$checkbox_2.length;i++){
                    this.$checkbox_2[i].style.backgroundImage = "url(images/icon-header.png)"; 
                    this.$checkbox_2[i].style.backgroundPosition =  "0 -129px";
                    this.$checkbox_2[i].setAttribute('class','backStyle');   
                    
                }
            }else{
                this.$checkbox_1_1.style.backgroundImage = "url(images/icon-header.png)";
                this.$checkbox_1_1.style.backgroundPosition = "-18px -129px";
                this.$checkbox_1.style.backgroundImage = "url(images/icon-header.png)";
                this.$checkbox_1.style.backgroundPosition = "-18px -129px";
                this.$checkbox_1_2.style.backgroundImage = "url(images/icon-header.png)";
                this.$checkbox_1_2.style.backgroundPosition = "-18px -129px";
                for(var i = 0;i < this.$checkbox_2.length;i++){
                    this.$checkbox_2[i].style.backgroundImage = "url(images/icon-header.png)"; 
                    this.$checkbox_2[i].style.backgroundPosition =  "-18px -129px";
                    this.$checkbox_2[i].removeAttribute('class');  
                }
            }
            
        },

        //当本地存储为空时shop_car得页面
        // 当用户登录后没登录得提示去除
        showNone01:function(){
            if(localStorage.username == undefined){
                this.$shopcar.innerHTML = '';
                this.$shopcar.innerHTML = `<span id = "shop_carSpan"></span>
                <p id="shop_carPP">您的购物车了什么也没有哦~</p>
                <a href="index1.html" id="shop_carAA">去逛逛</a>`;
            }else if(localStorage.username != undefined){
                this.$login_prompt.innerHTML = `欢迎${localStorage.username}！  祝您购物愉快！`;
            }
        }
    }
}())