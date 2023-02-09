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


import 'bootstrap/dist/css/bootstrap.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  const [sliderRef, setSliderRef] = useState(null)

  const sampleData = [

    {

      title: 'Sample 1',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',

    },
    {

      title: 'Sample 2',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',

    },
    {

      title: 'Sample 2',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',

    },
    {

      title: 'Sample 2',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',

    },
    {

      title: 'Sample 2',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',

    },
    {

      title: 'Sample 2',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',

    },
  ]

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
      <Header />
      <div className='stay__landingPage'>

        <div className='video__container'>
          <video loop="true" autoplay="autoplay" controls={true} id="vid" muted width='100%' height="auto">
            <source src="STAY.mp4" type="video/mp4" />
            <source src="STAY.mp4" type="video/ogg" />
            Your browser does not support the video tag.

          </video>
          <div className='carousel__container'>

            <Slider ref={setSliderRef} {...sliderSettings}>
              {sampleData.map((card, index) => (
                <div key={index}>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>

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
                <h2 className='txt__title'>Beautifully designed and well-connected serviced apartments</h2>
                <p className='txt__content p pt-3'>Design-led and spacious, STAY serviced apartments are created to optimise sleep, productivity and play. Smart, connected and comfortable, each space has been created to work as hard as you. For the mobile workforce who want accommodation that feels like home.</p>
              </div>
            </div>
          </div>

        </div>
        <div className='section3'>
          <div className='row'>
            <div className='col-6 position-relative overflow-hidden order-1'>
              <div className='layout left__container'>
                <h1>STAY CAMDEN</h1>
                <p>Spacious serviced apartments in a central London neighbourhood, famed for its music, markets and alternative scene, also residing at the heart of new canal side development, Hawley Wharf.</p>
                <a className='btn__null'>SEE MORE</a>
              </div>
            </div>
            <div className='col-6 right__container order-2'>
              <Image src={HW} className='img' />
            </div>
          </div>
          <div className='row'>
            <div className='col-6 position-relative overflow-hidden order-2'>
              <div className='layout left__container '>
                <h1>BUSINESS STAYS</h1>
                <p>STAY offers the ideal solution for all your corporate housing needs. Learn more about our business accommodation in central locations.</p>
                <a className='btn__null'>DISCOVER</a>
              </div>
            </div>
            <div className='col-6 right__container order-1'>
              <Image src={tony} className='img' />
            </div>
          </div>
          <div className='row'>
            <div className='col-6 position-relative overflow-hidden order-1'>
              <div className='layout left__container'>
                <h1>ABOUT</h1>
                <p>All the comfort and convenience of home, combined with the luxuries of a boutique hotel: STAY offers a selection of serviced apartments in iconic locations. Smart, spacious and stylishly conceived, every space has been created to work as hard as its residents.</p>
                <a className='btn__null'>DISCOVER</a>
              </div>
            </div>
            <div className='col-6 right__container order-2'>
              <Image src={book} className='img' />
            </div>
          </div>

        </div>
        {/* <div className='section4'>
          <div className='row'>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
            <div className='image__item col-2'><Image src={guitar} /></div>
          </div>
          <div className='sbi__load'> <a href='https://www.instagram.com/stay_worldwide/'>Follow on Instagram</a> </div>
        </div> */}
        <div className='up mt-5'><Image src={up} /></div>


      </div>
      <Footer />

    </>
  )
}
