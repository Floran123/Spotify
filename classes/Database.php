<?php

class Database {
    protected $_db;

    public function __construct() {
        $this->connection();
    }

    public function connection() {
        try {
            $credentials = [];
            $fopen = fopen($_SERVER['DOCUMENT_ROOT'] . "/classes/credentials", 'r');
            while (true) {
                $line = fgets($fopen);
                array_push($credentials, trim($line));
                if (feof($fopen)) break;
            }
            fclose($fopen);

            $dbh = new PDO('mysql:host=localhost;dbname=spotify', $credentials[0], $credentials[1]);
            $dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $this->_db = $dbh;
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

   public function getAlbums(){
        $request = $this->_db->query("SELECT cover_small, name, release_date, id FROM albums");
        return $request->fetchAll();
   }

   public function getAlbum($id){

    $sql = <<<SQL
        SELECT 
            albums.*, 
            artists.name, 
            genres.name AS genre_name, 
            genres.id AS genre_id 
        FROM albums 
        INNER JOIN artists ON artists.id = albums.artist_id 
        INNER JOIN genres_albums ON genres_albums.album_id = albums.id 
        INNER JOIN genres ON genres_albums.genre_id = genres.id
        WHERE albums.id = $id
    SQL;

    $request = $this->_db->query($sql);
    $album = $request->fetch();

    $request->closeCursor();

    $request = $this->_db->query("SELECT name, mp3 FROM tracks WHERE album_id = " . $id);
    $album['tracks'] = $request->fetchAll();

    $request->closeCursor();

    $request = $this->_db->query("SELECT name FROM artists WHERE id = " . $album['artist_id']);
    $album['artist'] = $request->fetch();

    return $album;
   }

    

    public function getArtist($id){
        return $this->_db->query("SELECT name, photo FROM $this->_table WHERE artists.id = $id");

        

    }

    public function getArtists($id){
        return $this->_db->query("SELECT artists.*, albums.cover_small, albums.name, albums.release_date FROM $this->_table INNER JOIN albums ON artists.id = albums.artist_id WHERE albums.artist_id = $id");


    }
    

    public function getGenres(){
        return $this->_db->query("SELECT name FROM genre");
    }

    public function getGenre($id){
        return $this->_db->query("SELECT cover_small, albums.name, release_date FROM $this->_table INNER JOIN genres ON genres.id = albums.id WHERE genres.id = $id");
    }
}