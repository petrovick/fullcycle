<?php
/**FORMA ERRADA DE FAZER */

/*TheLionKing
$movie = new TheLionMovie();
$movie->increasevolume();

$movie = new ModernTimesNoVolumeMovie();
$movie->increasevolume(); // ERRADO pois ele não pode ter increaseVolume
*/

interface Movie
{
    public function play();
    public function increaseVolume();
}

class TheLionKing extends Movie
{
    public function play() { }
    
    public function increaseVolume(){ }
}

class ModernTimesNoVolume extends Movie // ModernTimesNoVolume ão deveria extender de Movie
{
    public function play() { }
    
    public function increaseVolume()
    {
        // Esse método não será utilizado, porém terá de ser implementado
    }
}