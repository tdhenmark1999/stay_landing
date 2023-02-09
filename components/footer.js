
import Image from 'next/image'
import Logo1 from 'public/logo1.webp'
import Logo2 from 'public/logo2.webp'
import Logo3 from 'public/logo3.webp'
import Logo4 from 'public/logo4.webp'
import Logo5 from 'public/logo5.webp'
import IconFB from 'public/ico_fb.svg'
import IcoLink from 'public/ico_linkedin.svg'
import IcoYT from 'public/ico_youtube.webp'


export default function Footer() {

  return (
    <>
      <footer className='site__footer'>
        <div className='wrapper'>
          <div className='row'>
            <div className='col-md-3 py-2 p-0 column01'>
              <p>STAY Worldwide Limited
                <br></br>
                LABS Dockray Place, 1-7 Dockray Place, London, NW1 8QH
                <br></br>
                +44 (0)20 3781 7999
                <br></br>
                For reservations, please email us at reservations@stay.com</p>
              <p>
                Copyright 2019 © STAY Worldwide
              </p>
            </div>
            <div className='col-md-6 py-2 p-0 column02'>
              <ul>
                <li>COVID-19</li>
                <li>Privacy Notice</li>
                <li>Cookie Notice</li>
                <li>Terms and Conditions</li>
                <li>Stay Green</li>
              </ul>
              <div className="logo__container">
                <Image src={Logo1} />
                <Image src={Logo2} />
                <Image src={Logo3} />
                <Image src={Logo4} />
                <Image src={Logo5} />
              </div>
            </div>
            <div className='col-md-3 py-2 p-0 column03'>
              <iframe className="frame optanon-category-002 optanon-category-003 optanon-category-004 optanon-category-005" src="https://tcgms.net/app/new/MzIzNTQ0ODE5Nw?languageCode=df" data-src="https://tcgms.net/app/new/MzIzNTQ0ODE5Nw?languageCode=df" width="100%" height="120px" frameBorder="0" scrolling="no"></iframe>

              <div className="ico__container">
                <Image src={IconFB} />
                <Image src={IcoLink} />
                <Image src={IcoYT} />
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
