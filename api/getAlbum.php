<?php
    require_once("../classes/Database.php");
    header('Content-type:application/json;charset=utf-8');
    $db = new Database();
    $data = $db->getAlbum($_GET['id']);
    echo json_encode($data);