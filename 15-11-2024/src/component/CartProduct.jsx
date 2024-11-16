import { DeleteOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductTypes } from '../store/actions/ActionTypes';

const CartProduct = ({data}) => {
  const {id,title,image,price} = data;

  const dispatch = useDispatch();




  return (
    <div>
       <Card
     hoverable
  >
    <div className='flex gap-2'>
    <div>
    <img className='w-100 h-100 object-contain' alt="example" src={image} />
    </div>
    <div>
        <p>{title}</p>
        <p>{price}</p>
        <div className='flex justify-end'><DeleteOutlined onClick={()=>dispatch({type:ProductTypes.REMOVE_CART_PRODUCT,payload:{id:id}})}  className='text-2xl text-red-600' /></div>
    </div>
    </div>
   
  </Card>
    </div>
  )
}

export default CartProduct
