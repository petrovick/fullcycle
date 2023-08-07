<?php
/**FORMA ERRADA DE FAZER */

/*TheLionKing
$movie = new TheLionMovie();
$movie->increasevolume();

$movie = new ModernTimesNoVolumeMovie();
$movie->increasevolume(); // ERRADO pois ele não pode ter increaseVolume
*/

class Movie
{
    public function play()
    {

    }

    public function increaseVolume()
    {

    }
}

class TheLionKing extends Movie
{
    
}

class ModernTimesNoVolume extends Movie
{

    public function increaseVolume()
    {
        // ERRADO tipo de filme não tem volume
    }
}