import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { trackPhoneClick, trackInstagramClick, trackLegalMentionsClick } from '../utils/tracking';

const Footer = ({ t }) => {

  return (
    <>
      <div className="breakdance">
        <section className="bde-section-42-102 bde-section">
          <div className="section-shape-divider-wrapper section-shape-divider-wrapper--1">
            <span className="section-shape-divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                  fill="currentColor"
                  d="M0,192L720,0L1440,160L1440,320L720,320L0,320Z"
                ></path>
              </svg>
            </span>
          </div>

          <div className="section-container">

            {/* Logo */}
            <div className="bde-image-42-103 bde-image">
              <figure className="breakdance-image breakdance-image--52">
                <div className="breakdance-image-container">
                  <div className="breakdance-image-clip">
                    <Link href="/">
                      <Image
                        src="/wp-content/uploads/2025/01/black-angus-logo-sans-infos.png"
                        alt="Black Angus Logo Sans Infos"
                        width={1871}
                        height={567}
                        className="breakdance-image-object"
                      />
                    </Link>
                  </div>
                </div>
              </figure>
            </div>

            <div className="bde-div-42-104 bde-div">
              <div className="bde-text-42-105 bde-text">
                8 Place de la République,<br />75011 Paris
              </div>

              <div className="bde-text-42-106 bde-text">
                8 Place de la République, 75011 Paris
              </div>

              {/* PHONE (tracking added) */}
              <div className="bde-div-42-107 bde-div">
                <div className="bde-text-42-108 bde-text">{t.tel}</div>
                <div className="bde-button-42-109 bde-button">
                  <a
                    className="breakdance-link button-atom button-atom--text bde-button__button"
                    href="tel:+33180980359"
                    onClick={trackPhoneClick}
                  >
                    <span className="button-atom__text">01 80 98 03 59</span>
                  </a>
                </div>
              </div>

              <div className="bde-div-42-110 bde-div">
                <div className="bde-text-42-111 bde-text">{t.openEveryDay}</div>
                <div className="bde-text-42-112 bde-text">{t.continuousService}</div>
              </div>

              {/* INSTAGRAM (tracking added) */}
              <div className="bde-social-icons-42-113 bde-social-icons">
                <a
                  className="breakdance-link bde-social-icons__icon-wrapper bde-social-icons__icon-instagram"
                  href="https://www.instagram.com/black.angus.restaurant/"
                  target="_self"
                  onClick={trackInstagramClick}
                  aria-label="instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>

              {/* RESERVATION */}
              <div className="bde-button-42-114 bde-button booking-link">
                <Link
                  className="breakdance-link button-atom button-atom--custom bde-button__button"
                  href="/reservation"
                >
                  <span className="button-atom__text">{t.reservation}</span>
                </Link>
              </div>
            </div>

            {/* LEGAL MENTIONS (tracking added) */}
            <div className="bde-div-42-115 bde-div">
              <div className="bde-button-42-116 bde-button">
                <Link
                  className="breakdance-link button-atom button-atom--text bde-button__button"
                  href="/mentions-legales"
                  onClick={trackLegalMentionsClick}
                >
                  <span className="button-atom__text">{t.legalMentions}</span>
                </Link>
              </div>

              <div className="bde-text-42-117 bde-text">
                {t.copyright}
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
