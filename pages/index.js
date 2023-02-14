import { useEffect, useState } from "react";

import Head from 'next/head'
import Image from 'next/image'
import logoV from 'public/path_down.svg'
import HW from 'public/HW-We.jpg'
import book from 'public/book.jpg'
import tony from 'public/tony.webp'
import guitar from 'public/guitar.jpg'
import up from 'public/Path_up.svg'
import IcoArrowLeft from 'public/arrow-left.png'
import IcoArrowRight from 'public/arrow-right.png'
import axios from "axios";
import imageUrlBuilder from '@sanity/image-url'

import 'bootstrap/dist/css/bootstrap.css'
import HeaderNav from "components/header"
import Footer from "components/footer"
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  const [sliderRef, setSliderRef] = useState(null)
  const [banners, setBanners] = useState([]);
  const [services, setServices] = useState([]);
  const [section2, setSection2] = useState([]);

 
  useEffect(() => {
    async function fetchDataBanner() {
      const result = await axios.get("http://localhost:1337/api/homepage?fields=*&populate[BannerComponent][populate]=*");
      setBanners(result.data.data)  
    }
    fetchDataBanner();
    console.log('banners',banners) 


    async function fetchDataServices() {
      const result = await axios.get("http://localhost:1337/api/homepage?fields=*&populate[ServiceComponent][populate]=*");
      setServices(result.data.data)  
    }
    fetchDataServices();
    console.log('services',services) 


    async function fetchDataSection2() {
      const result = await axios.get("http://localhost:1337/api/homepage?fields=*&populate[Section2Component][populate]=*");
      setSection2(result.data.data)  
    }
    fetchDataSection2();
    console.log('section2',section2) 

  }, []);

 
 
  const sliderSettings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    gap: '30px',
    infinite: true,
    prevArrow: <div className="arrow__leftContainer"><Image src={IcoArrowLeft} className='img' /></div>,
    nextArrow: <div className="arrow__rightContainer"><Image src={IcoArrowRight} className='img' /></div>
  }
  return (
    <>
      <HeaderNav />
      <div className='stay__landingPage'>

        <div className='video__container'>
          <video loop="true" autoplay="autoplay" controls={true} id="vid" muted width='100%' height="auto">
            <source src="STAY.mp4" type="video/mp4" />
            <source src="STAY.mp4" type="video/ogg" />
            Your browser does not support the video tag.

          </video>
          <div className='carousel__container'>

            <Slider ref={setSliderRef} {...sliderSettings}>
              {banners?.attributes?.BannerComponent.map((banner, index) => (
                    <div key={index}>
                      <h2>{banner.title}</h2> 
                      <p>{banner.content}</p>
                </div>
              ))}
            </Slider>

          </div>
        </div>
        <div className='section2'>
          <div className='wrapper'>
            <div className='container__02'>
              <div className='logoV'><Image src={logoV} /></div>
              <div className='text__container'>
                <h2 className='txt__title'>{section2?.attributes?.Section2Component[0].title}</h2>
                <p className='txt__content p pt-3'>{section2?.attributes?.Section2Component[0].content}</p>
              </div>
            </div>
          </div>

        </div>
        <div className='section3'>
        {services?.attributes?.ServiceComponent.map((service, index) => (
          <div className='row' key={index}>
            <div className={`col-6 position-relative overflow-hidden order-${service.order_text}`}>
              <div className='layout left__container'>
                <h1>{service.title}</h1>
                <p>{service.content}</p>
                <a className='btn__null'>{service.button_label}</a>
              </div>
            </div>
            <div className={`col-6 right__container order-${service.order_img}`}>
              <img alt={service.image?.data?.attributes?.alternativeText} src={`http://localhost:1337${service.image?.data.attributes.url}`}  />
            </div>
          </div>
          ))}
        </div>
        <div className='section4'>
          <div className='row'>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
          </div>
          <div className='sbi__load'> <a href='https://www.instagram.com/stay_worldwide/'>Follow on Instagram</a> </div>
        </div>
        <div className='up mt-5'><Image src={up} /></div>

      </div>
      <Footer />

    </>
  )
}
