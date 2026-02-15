
import React, { useEffect, useState } from 'react';
import { AdPlacement, SiteSettings } from '../types';
import { INITIAL_SITE_SETTINGS } from '../constants';

interface AdSlotProps {
  placement: 'header' | 'footer' | 'blogContent' | 'toolDirectory';
  className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ placement, className = "" }) => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('site_settings');
    return saved ? JSON.parse(saved) : INITIAL_SITE_SETTINGS;
  });

  const config = settings.ads.placements[placement];

  if (!config.isEnabled) return null;

  return (
    <div 
      className={`ad-slot-container flex justify-center w-full overflow-hidden transition-all ${className}`}
      dangerouslySetInnerHTML={{ __html: config.code }}
    />
  );
};

export default AdSlot;
