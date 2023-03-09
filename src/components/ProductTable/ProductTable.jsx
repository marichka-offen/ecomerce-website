import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ProductTableItem from '../ProductTableItem/ProductTableItem'
import ProductTableHeader from '../ProductTableHeader/ProductTableHeader'
import './ProductTable.css'

function ProductTable() {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='product-table'>
      <ProductTableHeader />

      {cartItems.length === 0 ? (
        <div className='product-table__empty'>Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map((cartItem) => (
            <ProductTableItem cartItem={cartItem} key={cartItem.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductTable
