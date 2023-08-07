<?php
/**FORMA ERRADA DE FAZER */

class DramaCategory
{

}

class Movie{
    private $name;
    private $category;

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getCategory() {
        /** Aqui tem um laço de dependencia para DramaCategory, depende da implementação do DramaCategory*/
        /**ALTO ACOPLAMENTO, onde MOVIE depende da classe DramaCategory */
        return new DramaCategory();
    }
}