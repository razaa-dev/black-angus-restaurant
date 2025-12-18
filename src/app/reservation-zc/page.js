'use client';

import { useEffect } from 'react';
import ZenchefIframe from '../../components/ZenchefIframe';

export default function ReservationZC() {
  useEffect(() => {
    // Remove any default body margins/padding and set overflow
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      // Reset on unmount
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#2c3037',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <ZenchefIframe />
    </div>
  );
}
