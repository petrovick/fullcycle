<?php

/*TheLionKing
$movie = new TheLionMovie();
$movie->increasevolume();

$movie = new ModernTimesNoVolumeMovie();
$movie->play();
*/

interface Movie
{
    public function play();
}

interface AudioControl
{
    public function increaseVolume();
}

class TheLionKing extends Movie, AudioControl
{
    public function play() { }
    
    public function increaseVolume(){ }
}

class ModernTimesNoVolume extends Movie
{
    public function play() { }
}