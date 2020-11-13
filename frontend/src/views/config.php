<?php

$host = "proof-of-concept-2.cg5oknnxxjpg.us-east-1.rds.amazonaws.com";
$user = "root";
$password = "admin";
$dbname = "proof-of-concept-2";

$con = mysqli_connect($host,$user,$password,$dbname);

if(!$con){
    die("Connection failed : ".mysqli_connect_error());
}
