<?php

/*CORRETO Caso haja um novo interesse as classe existentes não saão alteradas, dá apenas para criar uma nova classe, além de evitar o uso de Ifs, e o código fica mais limpo

        Tips:
            Ajuda a evitar ifs
*/

abstract class Video
{
    abstract public function calculaInteresse();
}

class Movie extends Video
{
    public function calculaInteresse()
    {
        // Calcula
    }
}

class TVShow extends Video
{
    public function calculaInteresse()
    {
        // Calcula
    }
}