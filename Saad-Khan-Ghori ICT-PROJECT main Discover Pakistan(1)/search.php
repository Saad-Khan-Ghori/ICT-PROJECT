<?php
if (isset($_GET['query'])) {
    $query = $_GET['query'];
    $db = new SQLite3('destinations.db');
    
    $stmt = $db->prepare('SELECT * FROM destinations WHERE name LIKE :query OR location LIKE :query');
    $stmt->bindValue(':query', '%' . $query . '%', SQLITE3_TEXT);
    
    $results = $stmt->execute();
    $output = [];
    
    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        $output[] = $row;
    }
    
    echo json_encode($output);
}
?>
