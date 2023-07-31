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
        return $this->category;
    }
                                /** Aqui tem um laço de dependencia para DramaCategory, depende da implementação do DramaCategory */
                                /** Aqui tem um laço de dependencia para DramaCategory, depende da implementação do DramaCategory*/
                                /**ALTO ACOPLAMENTO, onde MOVIE depende da classe DramaCategory */
    public function setCategory(DramaCategory $category) {
        $this->category = $category;
    }
}