package db

import (
	"database/sql"

	"github.com/codeedu/go-hexagonal/application"
	_ "github.com/mattn/go-sqlite3"
)

)
type ProductDb struct {
	db *sql.DB
}

func (p *ProductDb) Get(id string) (application ProductInterface, error) {
	var product application.Product
	stmt, err := p.db.Prepare("select id, name, price from products where id=?")

	if err != nil {
		return nil, err
	}

	err = stmt.QueryRow(id).Scan(&product.ID, &product.Name, &product.Price, &product.status)

	if err != nil {
		return nil, err
	}

	return &product, nil
}

Get(id string) (ProductInterface, error)
Create(name string, price float64) (ProductInterface, error)
Enable(product ProductInterface) (ProductInterface, error)
Disable(product ProductInterface) (ProductInterface, error)