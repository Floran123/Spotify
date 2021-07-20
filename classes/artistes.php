<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/classes/Database.php');
    class Artistes extends Database {
        private $_table;

        public function __construct() {
            $this->connection();
            $this->_table = 'artists';
        }
    }

