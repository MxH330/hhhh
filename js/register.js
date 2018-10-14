var registerData = (function(){
    return{
        init:function(){
            this.$content = document.querySelector('.content');
            this.$contentCenter = document.querySelector('.contentCenter');
            // 注册页面的手机号码注册与电子邮箱注册的交换
            this.$contentCenter1 = this.$contentCenter.querySelector('.contentCenter1');
            this.$contentCenter2 = this.$contentCenter.querySelector('.contentCenter2');
            this.$tel = this.$content.querySelector('.tel');
            this.$email = this.$content.querySelector('.email');

            // (1)手机号注册页面的国家的效果获取DOM对象
            //第一个
            this.$first_span = this.$contentCenter.querySelector('#first_span');
            this.$first_rightarea = this.$contentCenter.querySelector('.first-rightarea');
            this.$first_right = this.$contentCenter.querySelector('.first-right');
            this.$sec_span = this.$contentCenter.querySelector('#sec_span');
            this.$sec_leftSpan = this.$contentCenter.querySelector('#sec-leftSpan');
            this.$first_rightSpan = this.$contentCenter.querySelector('#first-rightSpan');
            this.$first_right_ul = this.$contentCenter.querySelector('.first-right_ul');
            this.$first_right_li = this.$first_right_ul.children;
            // 第二个
            this.$sec_left = this.$contentCenter.querySelector('.sec-left');
            this.$sec_leftarea = this.$contentCenter.querySelector('.sec_leftarea');
            this.$sec_left_ul = this.$contentCenter.querySelector('.sec_left_ul');
            this.$sec_left_li = this.$sec_left_ul.children;
            // 图形验证码
            this.$picYanzheng = this.$contentCenter.querySelector('.yanzhengma');
            this.$picYanzhengSpan = this.$contentCenter.querySelector('#yanzhengma_span1');
            // 验证手机号用户名规则
            this.$contentInp_span1 = this.$contentCenter.querySelector('#contentInp_span1');
            this.$contentInp_span2 = this.$contentCenter.querySelector('#contentInp_span2');
            this.$contentInp_span3 = this.$contentCenter.querySelector('#contentInp_span3');
            this.$contentInp_span4 = this.$contentCenter.querySelector('#contentInp_span4');
            this.$usernameInp = this.$content.querySelector('.usernameInp');
            this.$passwordInp = this.$content.querySelector('.passwordInp');
            this.$passwordInpTrue = this.$content.querySelector('.passwordInp_true');
            this.$pic_yanzhengValue = this.$content.querySelector('.pic_yanzhengValue');
            this.$btn1 = this.$content.querySelector('.contentCenter_btn');
            
            // (2)email注册页面的国家的效果获取DOM对象
            // 第一个
            this.$first_span1 = this.$contentCenter.querySelector('#first_span1');
            this.$first_rightarea1 = this.$contentCenter.querySelector('.first-rightarea1');
            this.$first_right1 = this.$contentCenter.querySelector('.first-right1');
            this.$sec_span1 = this.$contentCenter.querySelector('#sec_span1');
            this.$sec_leftSpan1 = this.$contentCenter.querySelector('#sec-leftSpan1');
            this.$first_rightSpan1 = this.$contentCenter.querySelector('#first-rightSpan1');
            this.$first_right_ul1 = this.$contentCenter.querySelector('.first-right_ul1');
            this.$first_right_li1 = this.$first_right_ul1.children;
            // 第二个
            this.$sec_left1 = this.$contentCenter.querySelector('.sec-left1');
            // 图形验证码
            this.$picYanzheng1 = this.$contentCenter.querySelector('.yanzhengma1');
            this.$picYanzhengSpan2 = this.$contentCenter.querySelector('#yanzhengma_span2');
            // 验证email用户名规则
            this.$email_span1 = this.$contentCenter.querySelector('#email_span1');
            this.$email_span2 = this.$contentCenter.querySelector('#email_span2');
            this.$email_span3 = this.$contentCenter.querySelector('#email_span3');
            this.$email_span4 = this.$contentCenter.querySelector('#email_span4');
            this.$email_span5 = this.$contentCenter.querySelector('#email_span5');
            this.$usernameInp1 = this.$content.querySelector('.usernameInp1');
            this.$passwordInp1 = this.$content.querySelector('.passwordInp1');
            this.$passwordInpTrue1 = this.$content.querySelector('.passwordInp_true1');
            this.$pic_yanzhengValue1 = this.$content.querySelector('.pic_yanzhengValue1');
            this.$btn2 = this.$content.querySelector('.contentCenter_btn1');
            this.$tellphoneInp = this.$content.querySelector('.tellphoneInp');

            // 调用函数
            this.count = 0;
            this.count1 = 0;
            this.picYanzheng();
            this.picYanzheng1();
            this.event();
        },
        event:function(){
            var _this = this;

            //手机号与email注册的切换
            this.$email.onclick = function(e){
                e = e || window.event;
                _this.$contentCenter1.style.display = 'none';
                _this.$contentCenter2.style.display = 'block';
                _this.$email.style.background = '#B40707';
                _this.$tel.style.background = '#ccc';
            }
            this.$tel.onclick = function(e){
                window.location.reload();
                e = e || window.event;
                _this.$contentCenter1.style.display = 'block';
                _this.$contentCenter2.style.display = 'none';
                _this.$email.style.background = '#ccc';
                _this.$tel.style.background = '#B40707';
            }


            // 一、手机号注册的js代码
            document.onclick = function(e){
                ++_this.count;
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.id == "first-rightSpan"){
                    if(_this.count % 2 != 0){
                        _this.$first_rightarea.style.display = 'block';
                        console.log(_this.count);
                    }else{
                        _this.$first_rightarea.style.display = 'none';
                    }
                }else if(target.class == "first-rightarea"){
                    _this.$first_rightarea.style.display = 'block';
                }else{
                    _this.$first_rightarea.style.display = 'none';
                }
            }
            this.$first_right_ul.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == "LI"){
                    _this.$first_span.innerHTML = target.innerHTML;
                    _this.$sec_span.innerHTML = '+'+ _this.getRandom() + '('+ target.innerHTML +')';
                    if(_this.$sec_span.innerHTML != '+86(中国)'){
                        _this.$sec_leftSpan.style.backgroundImage = 'url(images/regiSpan3.png)';
                        _this.$sec_leftSpan.className = 'sec_otherSpan';
                    }
                }
            }
            this.$sec_left.onclick = function(e){
                ++_this.count1;
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.className == 'sec_otherSpan'){
                    if(_this.count1 % 2 != 0){
                        _this.$sec_leftarea.style.display = 'block';                       
                    }else{
                        _this.$sec_leftarea.style.display = 'none';  
                    }
                }
                else{
                    _this.$sec_leftarea.style.display = 'none';  
                }
            }
            this.$sec_left_ul.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == "LI"){
                    _this.$sec_span.innerHTML =  target.innerHTML;
                    _this.$sec_leftarea.style.display = 'none';                      
                }
            }
            this.$picYanzheng.onclick = function(e){
                e = e || window.event;
                e.preventDefault();
                _this.picYanzheng();
            }

            //手机号中判断手机号用户名是否已经存在和是否符合正则
            //判断手机号用户名
            this.$usernameInp.addEventListener('change',function(e){
                var flag = true;
                _this.val = _this.$usernameInp.value;
                e = e || window.event;
                var reg1 =/^1[34578]\d{9}$/;
                if (reg1.test(_this.val)) {
                    flag = true;
                } else if (reg1.test(_this.val) == false) {
                    _this.$contentInp_span1.style.color = 'red';
                    _this.$contentInp_span1.innerHTML = '*用户名必须是手机号格式';
                    flag = false;
                }
                if(flag){
                    _this.getGO();
                }
            },false)
            this.$usernameInp.addEventListener('focus',function(){
                _this.$contentInp_span1.innerHTML = '';
            },false)
            //判断手机号用户密码
            this.$passwordInp.addEventListener('change',function(e){
                _this.val1 = _this.$passwordInp.value;
                e = e || window.event;
                var reg2 = /^[a-zA-Z0-9]{6,20}$/;
                if (reg2.test(_this.val1)) {
                    _this.$contentInp_span2.innerHTML = '*密码格式正确';
                    _this.$contentInp_span2.style.marginLeft = 18 + 'px';
                    _this.$contentInp_span2.style.color = 'green';
                } else if (reg2.test(_this.val1) == false) {
                    _this.$contentInp_span2.innerHTML = '*密码必须是6~20位的字母或数字';
                    _this.$contentInp_span2.style.color = 'red';
                    _this.$contentInp_span2.style.marginLeft = 18 + 'px';
                }
                
            },false)
            this.$passwordInp.addEventListener('focus',function(){
                _this.$contentInp_span2.innerHTML = '';
            },false)

            //确认手机号用户密码
            this.$passwordInpTrue.addEventListener('blur',function(e){
                _this.val1 = _this.$passwordInp.value;
                _this.val2 = _this.$passwordInpTrue.value;
                if(_this.val1 != ''&& _this.val1 != _this.val2){
                    _this.$contentInp_span3.innerHTML = '*两次密码不一致';
                    _this.$contentInp_span3.style.marginLeft = 18 + 'px';
                }else{
                    _this.$contentInp_span3.innerHTML = '';
                }

            },false)
            this.$btn1.addEventListener('click',function(e){
                // 获取文本值
                var val = _this.$usernameInp.value;
                var _val = _this.$passwordInp.value;
                var _val1 = _this.$passwordInpTrue.value;
                var yanzheng = _this.$picYanzhengSpan.innerHTML;
                var yanzhengvalue =  _this.$pic_yanzhengValue.value;
                yanzhengvalue = yanzhengvalue.toUpperCase();
                if (val == '') {
                    _this.$contentInp_span1.innerHTML = "*用户名不能为空,请输入用户名";
                }
                else if (_val == ''){
                    _this.$contentInp_span2.innerHTML = "*密码不能为空,请输入密码";
                    _this.$contentInp_span2.style.marginLeft = 18 + 'px';
                }
                else if(_val1 == ''){
                    _this.$contentInp_span3.innerHTML = "*不能为空,请再输入一次密码";
                    _this.$contentInp_span3.style.marginLeft = 18 + 'px';
                }
                else if(yanzheng != yanzhengvalue){
                    _this.$contentInp_span4.innerHTML = "*验证码输入错误";
                    _this.$contentInp_span4.style.marginLeft = 18 + 'px';
                }
                else{
                    var params = {
                        method: "get",
                        data: {
                            username: val,
                            password: _val
                        },
                        success: function (data) {
                            console.log(1111111);
                            alert('注册成功');
                            location.href = "login.html";
                        }
                    }
                    // 当其他地方引用时需注意改变url 的地址或者不要将php文件放入一个文件夹，直接跟html同级，这样不用这样写，直接  xxx.php就行
                    sendAjax('http://localhost/huaweiStore/php/register.php', params);
                }   
            },false)
            document.addEventListener('keydown',function(e){
                e = e || window.event;
                var keyCode = e.keyCode || e.which;
                if(keyCode == 13){
                    _this.$btn1.click();
                }
            },false)
            

            // 二、 Email注册的代码
            this.$contentCenter2.onclick = function(e){
                ++_this.count;
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.id == "first-rightSpan1"){
                    if(_this.count % 2 != 0){
                        _this.$first_rightarea1.style.display = 'block';
                        console.log(_this.count);
                    }else{
                        _this.$first_rightarea1.style.display = 'none';
                    }
                }else if(target.class == "first-rightarea1"){
                    _this.$first_rightarea1.style.display = 'block';
                }else{
                    _this.$first_rightarea1.style.display = 'none';
                }
            }
            this.$first_right_ul1.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == "LI"){
                    _this.$first_span1.innerHTML = target.innerHTML;
                    _this.$sec_span1.innerHTML = '+'+ _this.getRandom() + '('+ target.innerHTML +')';
                    if(_this.$sec_span1.innerHTML != '+86(中国)'){
                        _this.$sec_leftSpan1.style.backgroundImage = 'url(images/regiSpan3.png)';
                        _this.$sec_leftSpan1.className = 'sec_otherSpan1';
                    }
                }
            }
            this.$sec_left1.onclick = function(e){
                ++_this.count1;
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.className == 'sec_otherSpan1'){
                    if(_this.count1 % 2 != 0){
                        _this.$sec_leftarea1.style.display = 'block';                       
                    }else{
                        _this.$sec_leftarea1.style.display = 'none';  
                    }
                }
                else{
                    _this.$sec_leftarea1.style.display = 'none';  
                }
            }
            this.$picYanzheng1.onclick = function(e){
                e = e || window.event;
                e.preventDefault();
                _this.picYanzheng1();
            }
            
            

            //Email中判断手机号用户名是否已经存在和是否符合正则
            //判断Email用户名
            this.$usernameInp1.addEventListener('change',function(e){
                var flag = true;
                _this.val = _this.$usernameInp1.value;
                e = e || window.event;
                var reg1 =/^[1-9a-zA-Z_]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
                if (reg1.test(_this.val)) {
                    _this.$email_span1.style.color = 'green';
                    _this.$email_span1.innerHTML = '*用户名格式正确';
                    flag = true;
                } else if (reg1.test(_this.val) == false) {
                    _this.$email_span1.style.color = 'red';
                    _this.$email_span1.innerHTML = '*用户名需为邮箱地址格式';
                    flag = false;
                }
                if(flag){
                    _this.getGO1();
                }
            },false)
            this.$usernameInp1.addEventListener('focus',function(){
                _this.$email_span1.innerHTML = '';
            },false)
            //判断手机号用户密码
            this.$passwordInp1.addEventListener('change',function(e){
                _this.val1 = _this.$passwordInp1.value;
                e = e || window.event;
                var reg2 = /^[a-zA-Z0-9]{6,20}$/;
                if (reg2.test(_this.val1)) {
                    _this.$email_span2.innerHTML = '*密码格式正确';
                    _this.$email_span2.style.marginLeft = 18 + 'px';
                    _this.$email_span2.style.color = 'green';
                } else if (reg2.test(_this.val1) == false) {
                    _this.$email_span2.innerHTML = '*密码必须是6~20位的字母或数字';
                    _this.$email_span2.style.color = 'red';
                    _this.$email_span2.style.marginLeft = 18 + 'px';
                }
                
            },false)
            this.$passwordInp1.addEventListener('focus',function(){
                _this.$email_span2.innerHTML = '';
            },false)

            //确认手机号用户密码
            this.$passwordInpTrue1.addEventListener('blur',function(e){
                _this.val1 = _this.$passwordInp1.value;
                _this.val2 = _this.$passwordInpTrue1.value;
                if(_this.val1 != ''&& _this.val1 != _this.val2){
                    _this.$email_span3.innerHTML = '*两次密码不一致';
                }else{
                    _this.$email_span3.innerHTML = '';
                }

            },false)
            this.$btn2.onclick = function () {
                // 获取文本值
                var val = _this.$usernameInp1.value;
                var _val = _this.$passwordInp1.value;
                var _val1 = _this.$passwordInpTrue1.value;
                var yanzheng1 = _this.$picYanzhengSpan2.innerHTML;
                console.log(yanzheng1);
                var yanzhengvalue1 =  _this.$pic_yanzhengValue1.value;
                console.log(yanzhengvalue1);
                yanzhengvalue1 = yanzhengvalue1.toUpperCase();
                // var val = this.value;
                if (val == '') {
                    _this.$email_span1.innerHTML = "*不能为空，请输入邮箱地址";
                }else if(_val == ''){
                    _this.$email_span2.innerHTML = "*不能为空，请输入密码";
                    _this.$email_span2.style.marginLeft = 18 + 'px';
                }
                else if(_val1 == ''){
                    _this.$email_span3.innerHTML = "*不能为空,请再输入一次密码";
                    _this.$email_span3.style.marginLeft = 18 + 'px';
                }else if(yanzheng1 != yanzhengvalue1){
                    _this.$email_span4.innerHTML = "*验证码输入错误";
                    _this.$email_span4.style.marginLeft = 18 + 'px';
                }else{
                    var params = {
                        method: "get",
                        data: {
                            username: val,
                            password: _val
                        },
                        success: function (data) {
                            alert('注册成功');
                            location.href = "login.html";
                        }
                    }
                    // 当其他地方引用时需注意改变url 的地址或者不要将php文件放入一个文件夹，直接跟html同级，这样不用这样写，直接  xxx.php就行
                    sendAjax('http://localhost/huaweiStore/php/register.php', params);
                }   
            }
            document.addEventListener('keydown',function(e){
                e = e || window.event;
                var keyCode = e.keyCode || e.which;
                if(e.ctrlKey) {
                    if(keyCode == 13) {
                        _this.$btn2.click();
                    }
                }
            },false)
            //验证Email注册中的手机号
            this.$tellphoneInp.addEventListener('change',function(e){
                var flag = true;
                _this.val = _this.$tellphoneInp.value;
                e = e || window.event;
                var reg1 =/^1[34578]\d{9}$/;
                //利用flag可以先判断完正则然后在区判断后台的验证
                if (reg1.test(_this.val)) {
                    flag = true;
                } else if (reg1.test(_this.val) == false) {
                    _this.$email_span5.style.color = 'red';
                    _this.$email_span5.innerHTML = '*用户名必须是手机号格式';
                    _this.$email_span5.style.marginLeft = 18 + 'px';
                    flag = false;
                }
                if(flag){
                    _this.getGO();
                }
            },false)
            this.$tellphoneInp.addEventListener('focus',function(){
                _this.$email_span5.innerHTML = '';
            },false)
        },
        //因为国家号码前缀太复杂，所以用随机数
        getRandom:function(){
            var str = '';
            for(var i = 0; i < 3; i++){
                var random = Math.floor(Math.random() * 10);
                str += random;
            }
            return str;
        },
        //获取随机大写字母和数字的验证码
        getNum:function(){
            var str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var str2 = '';
            for(var i = 0; i < 4;i++){
                var random = Math.floor(Math.random() * str1.length);
                str2 += str1[random];
            }
            return str2;
        },
        //获取随机颜色
        getColor:function(){
            var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
            var str = '#';
            for (var i = 0; i < 6; i++) {
                str += arr[Math.floor(Math.random() * 16)];
            }
            return str;
        },
        //生成图形验证码
        picYanzheng:function(){
            var _this = this;
            _this.$picYanzhengSpan.innerHTML = this.getNum();
            _this.$picYanzheng.style.background = this.getColor();
            _this.$picYanzhengSpan.style.color = this.getColor();
        },
        picYanzheng1:function(){
            var _this = this;
            _this.$picYanzhengSpan2.innerHTML = this.getNum();
            _this.$picYanzheng1.style.background = this.getColor();
            _this.$picYanzhengSpan2.style.color = this.getColor();
        },
        // 手机号注册时后台验证用户是否存在
        getGO: function () {
            var _this = this;
            var val = _this.$usernameInp.value;
            if (val == '') {
                this.$contentInp_span1.innerHTML = "*请输入手机号";
            } else {
                var params = {
                    method: "get",
                    data: {
                        username: val,
                    },
                    success: function (data) {
                        if (data.msg == 101) {
                            _this.$contentInp_span1.style.color = 'red';
                            _this.$contentInp_span1.innerHTML = "*用户名已存在";
                        }
                        if (data.msg == 200) {
                            _this.$contentInp_span1.innerHTML = "*用户名可用";
                            _this.$contentInp_span1.style.color = 'green';
                        }
                    }
                }
                // 当其他地方引用时需注意改变url 的地址或者不要将php文件放入一个文件夹，直接跟html同级，这样不用这样写，直接  xxx.php就行
                sendAjax('http://localhost/huaweiStore/php/register1.php', params);
            }
        },
        // Email注册时后台验证用户是否存在
        getGO1: function () {
            var _this = this;
            var val = _this.$usernameInp1.value;
            if (val == '') {
                this.$email_span1.innerHTML = "*请输入邮箱地址";
            } else {
                var params = {
                    method: "get",
                    data: {
                        username: val,
                    },
                    success: function (data) {
                        if (data.msg == 101) {
                            _this.$email_span1.style.color = 'red';
                            _this.$email_span1.innerHTML = "*用户名已存在";
                        }
                        if (data.msg == 200) {
                            _this.$email_span1.innerHTML = "*用户名可用";
                            _this.$email_span1.style.color = 'green';
                        }
                    }
                }
                // 当其他地方引用时需注意改变url 的地址或者不要将php文件放入一个文件夹，直接跟html同级，这样不用这样写，直接  xxx.php就行
                sendAjax('http://localhost/huaweiStore/php/register1.php', params);
            }
        }
        
    }
}())