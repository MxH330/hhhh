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
    $sql = "select * from shop_huawei WHERE username='$username' and  password='$password'";
    $result = $coon -> query($sql);
    $rows = $result -> fetch_assoc();
    if($rows) {
        // 用户输入正确
        $arr = array("msg"=>"200", "data"=>array("id"=>$rows["id"], "token"=>"1234567899", "atavar"=> "http://www.aaa.com/path/a.png"));
      } else {
        // 输入错误
        $arr = array("msg" => "101");
      }
    echo json_encode($arr);  
?>