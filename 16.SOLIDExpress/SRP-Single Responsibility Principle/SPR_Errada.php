<?php
/**FORMA ERRADA DE FAZER */

class Course
{
    private $name;
    private $categoria;
    private $descricao;

    public function connection()
    {
        /*ERRADO Criando uma conexão no banco de dados na classe de modelo/entidade*/
        $pdo = new PDO();
        return $pdo;
    }

    public function createCategoria()
    {
        /*ERRADO Criando categoria no domínio de Curso */
        $this->connection()->insert($this->categoria);
    }

    public function createCourse()
    {
        $this->connection()->insert($this->name);
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getCategoria()
    {
        return $this->categoria;
    }

    public function setCategoria($categoria)
    {
        $this->categoria = $categoria;
    }
}