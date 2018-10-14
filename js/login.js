var loginData = (function(){
    return{
        init:function(){
            // 主页头部点击事件
            this.$header = document.querySelector('.header');
            this.$nav_a1 = this.$header.querySelector('#nav_a1');
            this.$backbox = document.querySelector('.backbox');
            this.$login = document.querySelector('.login');
            this.$login_headerSpan = document.querySelector('.login_headerSpan');
            
            //  第一个在body里面的登录页面获取DOM对象
            this.$login_header = this.$login.querySelector('.login_header');

            // 扫码登录方式和账号登录方式的切换 获取DOM对象
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
            // 登录页面的密码
            this.$login_box_i = this.$form.querySelector('#login_box_i');
            console.log(this.$login_box_i);
            // 调用函数
            this.count = 0;
            this.event();
        },
        event:function(){
            var _this = this;
            this.$nav_a1.onclick = function(){
                _this.$backbox.style.display = 'block';
                _this.$login.style.display = 'block';
                _this.$login.style.position = 'fixed';
                _this.$login.style.top = '50%';
                _this.$login.style.left = '50%';
                _this.$login.style.margin = '-317px,0,0,-250px'
            }
            this.$login_headerSpan.onclick = function(){
                _this.$backbox.style.display = 'none';
                _this.$login.style.display = 'none';
            }
            // 第一个在body里面的登录页面的窗口拖动事件
            this.$login_header.onmousedown = function(e){
                //计算偏移量
                var _x = e.offsetX,
                    _y = e.offsetY;
                    document.onmousemove = function(e){
                        var x = e.pageX - _x,
                            y = e.pageY - _y;
                            var maxX = window.innerWidth - _this.$login.offsetWidth - 17;
                            var maxY = window.innerHeight - _this.$login.offsetHeight + 550;
                        if (x <= 0 ) {
                            x = 0;
                        }
                        if (x >= maxX) {
                            x = maxX;
                        }
                        if (y <= 0) {
                            y = 0;
                        }
                        if (y > maxY){
                            y = maxY;
                        }
                        _this.$login.style.left = x - parseInt(_this.getStyle(_this.$login, 'margin-left')) + 'px';
                        _this.$login.style.top = y - parseInt(_this.getStyle(_this.$login, 'margin-top')) + 'px';
                    }
            }
            document.onmouseup = function(){
                document.onmousemove = null;
            }

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
                _this.$loginCenter2.style.left = 108 + 'px';
                _this.$loginCenter2_help.style.opacity = '1';
            }
            this.$loginCenter2.onmouseleave = function(){
                _this.$loginCenter2.style.left = 175 + 'px';
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
                    _this.$span1.style.fontSize = 12 + 'px';
                    _this.$span1.innerHTML = '*用户名格式正确';
                    // _this.$span1.innerHTML =  '';
                }else if(reg1.test(_this.val) == false || reg2.test(_this.val) == false){
                    _this.$span1.style.color = 'red';    
                    _this.$span1.style.fontSize = 12 + 'px';
                    _this.$span1.innerHTML = '*用户名格式错误';
                }
                if(_this.val == ''){
                    _this.$span1.style.color = 'red';    
                    _this.$span1.style.fontSize = 12 + 'px';
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

                // 登录页面中的记住密码的勾
                this.$login_box_i.onclick = function(e){
                    e = e || window.event;
                    ++_this.count;
                    if(_this.count % 2 != 0){
                        _this.$login_box_i.style.backgroundImage= 'url(images/remeber.png)';
                        _this.$login_box_i.style.backgroundSize = '100%,100%';
                    }else{
                        _this.$login_box_i.style.backgroundImage= 'url(images/offbutton.png)';
                        _this.$login_box_i.style.backgroundSize = 'cover';
                    }  
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