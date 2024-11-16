import { ShoppingOutlined } from '@ant-design/icons';
import { Badge, Button, Drawer, Empty } from 'antd';
import React, { useEffect, useState } from 'react'
import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartData = useSelector((state)=>state?.cart);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };


    useEffect(()=>{
        setOpen(false);
    },[cartData.length==0])

    
    const totalAMout = cartData.reduce((acc,current)=>{
        return acc + current.price;
    },0)
  return (
    <div className=' bg-slate-300 py-4'>
        <div className='max-w-[800px] m-auto flex justify-between'>
      <h1 className='text-3xl font-bold'>Product Store</h1>
      <div>
      <Badge count={cartData?.length}>
      <ShoppingOutlined className='text-3xl' onClick={showDrawer}/>
    </Badge>
      
      <Drawer title="Products" onClose={onClose} open={open}>
       <div className='h-[500px] overflow-y-auto'>
       {cartData.length>0 ? 
        <>
          {cartData.map((item)=>{
        return(
            <CartProduct key={item.id} data={item}/>
        )
       })}
        </> : <Empty description="NO Products Found" />}
       </div>
       

       <p>TOtal Ammount : {totalAMout} </p>
       <Button>PLace Order</Button>

      </Drawer>
      </div>
    </div>
    </div>
  )
}

export default Header