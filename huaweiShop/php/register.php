<?php
    // (1)这种情况时 为 post请求方式, 获取username的方法如下

    // 仅限于form表单形式， json形式无法获取 
    // $username = $_POST["username"];
    //json形式的获取
    // $json = file_get_contents("php://input");
    // echo $json;
    // $json = json_decode($json);

    // (2)这种情况时 为 get请求方式
    $username = $_GET['username'];
    $password = $_GET['password'];
    // var_dump($password);
    $coon = new mysqli("localhost", "root", "", "shop", "3306");
    $sql = "select * from shop_huawei where username = '$username'";
    $result = $coon -> query($sql);
    $rows = $result -> fetch_assoc();
    if($rows) {
        // 账号已存在
        $arr = array("msg" => 101);
    } else {
        $insertSql = "insert into shop_huawei (username, password) values ('$username', '$password')";
        $result3 = $coon -> query($insertSql);
        $arr = array("msg" => 200);

    }
    echo json_encode($arr);  // encode 将数据转为json对象
?>