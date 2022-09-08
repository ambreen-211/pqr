<?php
$xml= newDOMDocument;
$xml->load('index.xml');
if($xml->validation()){
    echo "its a valid XML document!!";

}
else{
    echo "error: its an invalid XML document!!";
    
}