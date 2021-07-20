<?php
    require_once("./classes/Database.php");
    header('Content-type:application/json;charset=utf-8');
    $db = new Database();
    $data = $db->getAlbums();
    echo json_encode(["message" => 'hello world', "id" => 1]);