var loginData1 = (function(){
    return{
        init:function(){
            // 扫码登录方式和账号登录方式的切换 获取DOM对象
            this.$login = document.querySelector('.login');
            this.$loginCenter_span1 = this.$login.querySelector('.loginCenter_span1');
            this.$loginCenter_span2 = this.$login.querySelector('.loginCenter_span2');
            this.$loginCenter_center1 = this.$login.querySelector('.loginCenter_center1');
            this.$loginCenter_center2 = this.$login.querySelector('.loginCenter_center2');
            this.$loginCenter2 = this.$login.querySelector('.loginCenter2');
            this.$loginCenter2_help = this.$login.querySelector('.loginCenter2_help');

            // 登录正则验证及后台验证
            this.$form = document.querySelector('.loginForm');
            this.$inp1 = this.$form.querySelector('.inp1');
            this.$inp2 = this.$form.querySelector('.inp2'); 
            this.$span1 = this.$form.querySelector('.span1');
            this.$span2 = this.$form.querySelector('.span2');
            this.$btn = this.$form.querySelector('.btn');
            // 调用函数
            this.event();
        },
        event:function(){
            var _this = this;
            // 扫码登录方式和账号登录方式的切换的事件
            this.$loginCenter_span2.onclick = function(){
                _this.$loginCenter_center1.style.display = 'none';
                _this.$loginCenter_span1.style.color = '#333';
                _this.$loginCenter_span2.style.color = '#ca151d';
                _this.$loginCenter_center2.style.display = 'block';
            }
            this.$loginCenter_span1.onclick = function(){
                _this.$loginCenter_center1.style.display = 'block';
                _this.$loginCenter_span1.style.color = '#ca151d';
                _this.$loginCenter_span2.style.color = '#333';
                _this.$loginCenter_center2.style.display = 'none';
            }
            this.$loginCenter2.onmouseenter = function(){
                _this.$loginCenter2.style.left = 40 + 'px';
                _this.$loginCenter2_help.style.opacity = '1';
            }
            this.$loginCenter2.onmouseleave = function(){
                _this.$loginCenter2.style.left = 115 + 'px';
                _this.$loginCenter2_help.style.opacity = '0';
            }
            //登录注册的事件
            this.$inp1.onchange = function(e){
                _this.val = _this.$inp1.value;
                e = e || window.event;
                console.log(_this.val);
                var reg1 = /^1[34578]\d{9}$/;
                var reg2 = /^[1-9a-zA-Z_]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/
                if(reg1.test(_this.val) == true || reg2.test(_this.val) == true){
                    _this.$span1.style.color = 'green';
                    _this.$span1.innerHTML = '*用户名格式正确';
                    // _this.$span1.innerHTML =  '';
                }else if(reg1.test(_this.val) == false || reg2.test(_this.val) == false){
                    _this.$span1.style.color = 'red';                    
                    _this.$span1.innerHTML = '*用户名格式错误';
                }
                if(_this.val == ''){
                    _this.$span1.innerHTML = '*用户名不能为空';                    
                }
            }
            this.$inp2.onchange = function(e){
                _this.val1 = _this.$inp2.value;
                e = e || window.event;
                var reg3 = /^[a-zA-Z0-9]{6,13}$/;
                if(reg3.test(_this.val1)){
                    // _this.$span2.innerHTML = '*密码格式正确';
                    // _this.$span2.style.color = 'green';
                    _this.$span2.innerHTML = '';
                }else if(reg3.test(_this.val1) == false){
                    _this.$span2.innerHTML = '*密码格式错误';
                }
                if(_this.val1 == ''){
                    _this.$span2.innerHTML = '*密码不能为空';
                }
            }
            this.$btn.onclick = function(e){
                e = e || window.event;
                var val = _this.$inp1.value;
                var _val = _this.$inp2.value;
                var params = {
                    method: "post",
                    data: {
                        username: val,
                        password: _val
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.msg == 200) {
                            alert('登录成功');
                            location.href = 'index1.html';
                        }
                        if (data.msg == 101) {
                        _this.$span2.style.color = 'red';
                        _this.$span2.innerHTML = '*密码错误';                            
                        _this.$span1.innerHTML = '';
                        }
                        if (data.msg == 300) {
                            alert('用户不存在,请注册！')
                            location.href = 'register.html';
                        }

                    }
                }
                // 当其他地方引用时需注意改变url 的地址或者不要将php文件放入一个文件夹，直接跟html同级，这样不用这样写，直接  xxx.php就行
                sendAjax('http://localhost/huaweiStore/php/login.php', params);
                }
            
        },
        //获取非行内样式
        getStyle:function(obj,attr){
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj, null)[attr];
            }
            return obj.currentStyle[attr];
        }
    }
}())