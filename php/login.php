<?php
    //(1) get请求的方式
    // $username = $_GET['username'];
    // $password = $_GET['password'];
    //(2) post请求方式获取 username,password ，json格式获取
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    $username = $json -> username;
    $password = $json -> password;
    $coon = new mysqli("localhost", "root", "", "shop", "3306");
    $sql = "select password from shop_huawei where username = '$username'";
    $result = $coon -> query($sql);
    $rows = $result -> fetch_assoc();
    if($rows) {
        // 账号已存在
        if($rows["password"] === $password){
            $arr = array("msg" => 200);
        }else{
            $arr = array("msg" => 101);
        }
    } else {
        //在登录页面时就帮你默认帮你注册
        // $insertSql = "insert into shop_user (username, password,tel,sex,age) values ('$username', '$password','','','')";
        // $result3 = $coon -> query($insertSql);
        $arr = array("msg" => 300);
    }
    echo json_encode($arr);  
?>