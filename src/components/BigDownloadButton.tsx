import React, { useCallback } from 'react';
import { DownloadButton } from 'decentraland-ui2';

interface BigDownloadButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, options: {
    type: string;
    track_uuid?: string;
    url: string; 
  }) => void;
  label?: string;
  trackingId?: string;
}

const BigDownloadButton: React.FC<BigDownloadButtonProps> = ({ 
  onClick, 
  label = "Download Decentraland", 
  trackingId 
}) => {
  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>, trackingData: any) => {
    if (onClick) {
      onClick(event, trackingData);
    }
  }, [onClick]);

  return (
    <div style={{
      transform: 'scale(1.3)',
      transformOrigin: 'center',
      display: 'inline-block'
    }}>
      <DownloadButton
        onClick={handleClick}
        label={label}
        trackingId={trackingId}
      />
    </div>
  );
};

export default BigDownloadButton; 