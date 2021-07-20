<?php
    require_once("./classes/Database.php");
    header('Content-type:application/json;charset=utf-8');
    $db = new Database();
    $data = $db->getArtist(1);
    echo json_encode(["message" => 'hello world', "id" => 1]);