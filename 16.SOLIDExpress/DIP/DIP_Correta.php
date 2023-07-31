<?php
/**FORMA ERRADA DE FAZER */

interface Category { }
class DramaCategory extends Category { }
class XCategory extends Category { }

class Movie
{
    private $name;
    private $category;

    /**Passa a não depender de DramaCategory e sim quem chamar é que deve falar qual category quem implementar quer */
    /**SEMPRE dependa da abstração */
    /**UTILIZAR injeção de dependência ajuda nessa questão */
    public function _construct($name, Category $category)
    {
        $this->name = $name;
        $this->category = $category;
    }

    public function getName() {
        return $this->name;
    }

    public function getCategory() {
        return $this->category;
    }
}