/**
 * Google Tag Manager tracking utilities
 * Centralized dataLayer.push() functions for all tracking events
 */

/**
 * Track reservation link clicks
 */
export const trackReservationClick = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'Clic_reservation' });
  }
};

/**
 * Track gift card link clicks
 */
export const trackGiftCardClick = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'clic_bon_cadeau' });
  }
};

/**
 * Track phone number clicks
 */
export const trackPhoneClick = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'Clic_telephone' });
  }
};

/**
 * Track Instagram clicks
 */
export const trackInstagramClick = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'clic_instagram' });
  }
};

/**
 * Track legal mentions page clicks
 */
export const trackLegalMentionsClick = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'clic_mentions_legales' });
  }
};
