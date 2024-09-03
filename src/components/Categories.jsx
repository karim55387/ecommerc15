import React, { useEffect, useState } from 'react'
import { getCategories } from '../Apis/getCatrgories'
import Slider from 'react-slick';

export default function Categories() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    autoplay:true,
    autoplayspeed:1200,
  };








  let [msg, setMsg] = useState('')
  let [loading, setloading] = useState(false)
  let [categoriesArr, setcategoriesArr] = useState([])

  async function getCategoriesApi()
   {
    setloading(true)
    let data = await getCategories()
    

    if (data?.data) {
      setcategoriesArr(data?.data)
      setMsg('')
      setloading(false)
      console.log('test');

    }


    else {
      setMsg(data?.message)
      setloading(false)
    }
  }

  useEffect(()=>{
    getCategoriesApi()
  },[])

  useEffect(()=>{
    console.log(categoriesArr);
    
  },[categoriesArr])




  return (
    <div className='my-5 md:block  hidden'style={{overflow:"hidden"}}>
      <Slider {...settings}>

        {categoriesArr.map(ele=><img className='h-[200px]'style={{objectFit:'cover'}} key={ele._id} src={ele?.image} ></img>)}


      </Slider>
    </div>
  )
}
