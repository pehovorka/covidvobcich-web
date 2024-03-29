<?php 

/**
 *
 * Get corresponding municipality name from DB
 * 
 *
 */
function getMunicipalityNameFromDB($municipalityCode)
{

    if (is_numeric($municipalityCode)){
    try {
        $pdo = new PDO('sqlite:obec_kod_nazev.db');
        $stmt = $pdo->prepare('SELECT obec_nazev FROM obec_kod_nazev WHERE obec_kod = :obec_kod');
        $stmt->execute(array('obec_kod' => $municipalityCode));

        $result = $stmt->fetch();

        if ($result !== false ) {
            return $result[0];
        } else {
            return false;
        }
    } catch (PDOException $e) {
        //echo 'ERROR: ' . $e->getMessage();
        return false;
    }
}
return false;
}

function isSharePage(){
    $uri = $_SERVER["REQUEST_URI"];
    if (substr( $uri, 0, 6 ) === "/obec/"){
        return true;
    }
    return false;
}

function getTitle() {
    if (isSharePage()){
        $uri = $_SERVER["REQUEST_URI"];
        $municipalityCode = substr( $uri, 6, 12 );
        $municipalityName = getMunicipalityNameFromDB($municipalityCode);
        if ($municipalityName){
            return $municipalityName. " – COVID v obcích";
        }
        return "COVID v obcích";
    }
    return "COVID v obcích";
  }

function getUrl() {
    if (isSharePage()){
        $uri = $_SERVER["REQUEST_URI"];
        return "https://covidvobcich.cz" . $uri;
    }
    return "https://covidvobcich.cz/";
}

ob_start(); // Start output buffering
include "index.html";
$replacementString = ob_get_clean(); // Store output in variable, and stop output-buffering
$replacementString = str_replace("___TITLE___", getTitle(), $replacementString);
$replacementString = str_replace("___URL___", getUrl(), $replacementString);
echo $replacementString;

?>