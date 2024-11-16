import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductTypes } from '../store/actions/ActionTypes';
const { Meta } = Card;
const ProductCard = ({data}) => {
  const dispatch = useDispatch();
  const {id,title,description,image,price,category} = data;

  const cartData = useSelector((state)=>state);
  console.log(cartData);

  return (
    <div>
       <Card
       className='relative'
    hoverable
    cover={<img className='w-100 h-100 object-contain' alt="example" src={image} />}
  >

    <p>Cateogy : {category}</p>
    <Meta title={title} description={description.slice(0,50)} />
    <p>Price {price}</p>
    <ShoppingCartOutlined onClick={()=>dispatch({type:ProductTypes.CART_PRODUCT,payload:data})} className='my-2 absolute top-0 right-2 text-2xl font-bold' />
  </Card>
    </div>
  )
}

export default ProductCard
