import React from "react";
import Link from "next/link";
import Image from "next/image";
import { trackPhoneClick } from "../utils/tracking";

const Header = ({ language, handleLanguageChange, t }) => {

  return (
    <>
      <div className="breakdance">
        <header
          className="bde-header-builder-130-100 bde-header-builder bde-header-builder--sticky bde-header-builder--sticky-scroll-fade"
          data-sticky-reveal-on-scroll-up="yes"
        >
          <div className="bde-header-builder__container">
            <div className="bde-div-130-101 bde-div">
              <div className="bde-div-130-102 bde-div">
                <div className="bde-div-130-103 bde-div">
                  <div className="bde-text-130-104 bde-text">{t.tel}</div>
                  <div className="bde-button-130-105 bde-button">
                    <a
                      className="breakdance-link button-atom button-atom--text bde-button__button"
                      href="tel:+33180980359"
                      onClick={trackPhoneClick}
                    >
                      <span className="button-atom__text">01 80 98 03 59</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bde-div-130-106 bde-div">
                <div className="bde-div-130-119 bde-div">
                  <div className="bde-icon-130-113 bde-icon">
                    <a
                      className="breakdance-link bde-icon-icon breakdance-icon-atom"
                      href="tel:+33180980359"
                      onClick={trackPhoneClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="icon-phone"
                        viewBox="0 0 32 32"
                      >
                        <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bde-div-130-114 bde-div">
                  <div className="bde-image-130-108 bde-image">
                    <figure className="breakdance-image breakdance-image--52">
                      <div className="breakdance-image-container">
                        <div className="breakdance-image-clip">
                          <Link
                            className="breakdance-image-link breakdance-image-link--url"
                            href="/"
                          >
                            <Image
                              className="breakdance-image-object"
                              src="/wp-content/uploads/2025/01/black-angus-logo-sans-infos.png"
                              width={1871}
                              height={567}
                              alt="Black Angus Logo Sans Infos"
                              priority
                              sizes="(max-width: 1871px) 100vw, 1871px"
                            />
                          </Link>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="bde-div-130-112 bde-div">
                  <div className="bde-image-130-109 bde-image">
                    <figure className="breakdance-image breakdance-image--52">
                      <div className="breakdance-image-container">
                        <div className="breakdance-image-clip">
                          <Link
                            className="breakdance-image-link breakdance-image-link--url"
                            href="/"
                          >
                            <Image
                              className="breakdance-image-object"
                              src="/wp-content/uploads/2025/01/black-angus-logo-sans-infos.png"
                              width={251}
                              height={27}
                              alt="Black Angus Logo Sans Inf"
                              priority
                            />
                          </Link>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="bde-div-130-110 bde-div">
                <div className="bde-button-130-111 bde-button booking-link">
                  <Link
                    className="breakdance-link button-atom button-atom--custom bde-button__button"
                    href="/reservation"
                  >
                    <span className="button-atom__text">{t.book}</span>
                  </Link>
                </div>

                <div className="bde-div-130-121 bde-div">
                  <div className="bde-shortcode-130-120 bde-shortcode">
                    {/* Language Switcher */}
                    <aside
                      role="button"
                      data-wg-notranslate=""
                      className="country-selector weglot-dropdown close_outside_click closed weglot-shortcode wg-"
                      tabIndex="0"
                      aria-expanded="false"
                      aria-label={t.languageLabel}
                    >
                      <input
                        id="wg69124504653d66.800835371762804996119"
                        className="weglot_choice"
                        type="checkbox"
                        name="menu"
                      />
                      <label
                        data-l="fr"
                        tabIndex="-1"
                        htmlFor="wg69124504653d66.800835371762804996119"
                        className={`wgcurrent wg-li weglot-lang weglot-language weglot-flags flag-0 ${
                          language === "fr" ? "wg-fr" : "wg-en"
                        }`}
                        data-code-language={`wg-${language}`}
                        data-name-language=""
                      >
                        <span className="wglanguage-name"></span>
                      </label>
                      <ul role="none">
                        <li
                          data-l={language === "fr" ? "en" : "fr"}
                          className={`wg-li weglot-lang weglot-language weglot-flags flag-0 ${
                            language === "fr" ? "wg-en" : "wg-fr"
                          }`}
                          data-code-language={language === "fr" ? "en" : "fr"}
                          role="option"
                          aria-selected="false"
                        >
                          <a
                            title={`Language switcher : ${
                              language === "fr" ? "English" : "French"
                            }`}
                            className={`weglot-language-${
                              language === "fr" ? "en" : "fr"
                            }`}
                            data-wg-notranslate=""
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleLanguageChange(
                                language === "fr" ? "en" : "fr"
                              );
                            }}
                          ></a>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bde-header-builder__header-builder-border-bottom"></div>
        </header>

        <header className="bde-header-builder-130-115 bde-header-builder bde-header-builder--sticky bde-header-builder--sticky-scroll-slide bde-header-builder--sticky-bottom bde-header-builder--overlay">
          <div className="bde-header-builder__container">
            <div className="bde-button-130-116 bde-button booking-link">
              <Link
                className="breakdance-link button-atom button-atom--custom bde-button__button"
                href="/reservation"
              >
                <span className="button-atom__text">{t.bookYourBlackAngus}</span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
