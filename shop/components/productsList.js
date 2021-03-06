import React from 'react'
import ProductsApi from '../productsApi'
import SearchBox from './searchBox'
import ProductListItem from './productListItem'

const filterBy = (searchTerm, products) => {
  return products.filter(
    product => product.name.indexOf(searchTerm) > -1 ||
      product.shortDescription.indexOf(searchTerm) > -1
  )
}

const ProductsList = React.createClass({
  getInitialState () {
    return {
      searchTerm: '',
      products: []
    }
  },

  componentDidMount () {
    ProductsApi.getAll((error, response) => {
      if (error) {
        window.alert(error)
        return
      }

      this.setState({products: response})
    })
  },

  search (searchTerm) {
    this.setState({searchTerm: searchTerm}, () => console.log('search term', this.state.searchTerm))
  },

  render () {
    return (
      <div>
        <SearchBox search={this.search} />
        {
          filterBy(this.state.searchTerm, this.state.products).map(product => (
            <ProductListItem key={product.id} product={product} />
          ))
        }
      </div>
    )
  }
})

export default ProductsList
