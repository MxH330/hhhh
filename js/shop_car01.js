var shopCar01 = (function(){
    var $shopcar = $('.shop_car');
    return{
        init:function(){
            //点击加减改变input中的值，从而改变需要购买的数量
            this.$choicebtn_inp = document.querySelector('#choicebtn_inp');
            this.$choicebtn_a1 = document.querySelector('#choicebtn_a1');
            this.$choicebtn_a2 = document.querySelector('#choicebtn_a2');
            console.log(this.$choicebtn_a2);
            this.event();
        },
        event:function(){
            var _this = this;
            //点击加减改变input中的值，从而改变需要购买的数量
           
        }
    }
}())