<?php
/**FORMA ERRADA DE FAZER */

class Video
{
    private $type
    
    /*ERRADO essa classe está engessada, sempre que há uma nova catergoria vc tem que modificar a classe  */
    public function calculaInteresse()
    {
        if ($this->type == "Movie") {
            // Calcula Interesse baseado em filme
        } elseif ($this->type === "TVShow") {
            // Calcula interesse baseado em serie
        }
    }
}