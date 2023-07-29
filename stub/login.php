<?php

$data = array(
  "head" => array(
    "result" => 0,
    "message" => "",
  ),
  "body" => array(
    "id" => @$_REQUEST["id"],
    "password" => @$_REQUEST["password"],
  ),
);

header("Content-Type: application/json; charset=utf-8");
echo json_encode($data);
