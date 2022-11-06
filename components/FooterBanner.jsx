import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largetText1}</h3>
          <h3>{footerBanner.largetText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>

        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>

        <img src={urlFor(footerBanner.image)} alt="" className="footer-banner-image" width="500" height="500" />
      </div>
    </div>
  )
}

export default FooterBanner
