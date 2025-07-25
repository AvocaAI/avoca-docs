import React, { useEffect, useRef, useState } from 'react';

export const WistiaVideoTranscript = ({ mediaId }) => {
  const containerRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Check if scripts are already loaded
    const checkScripts = () => {
      return document.querySelector('script[src*="E-v1.js"]') && 
             document.querySelector('script[src*="transcript.js"]');
    };

    if (checkScripts()) {
      setScriptsLoaded(true);
    } else {
      // Load Wistia scripts
      const script1 = document.createElement('script');
      script1.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script1.async = true;
      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://fast.wistia.com/assets/external/transcript.js';
        script2.async = true;
        script2.onload = () => setScriptsLoaded(true);
        document.head.appendChild(script2);
      };
      document.head.appendChild(script1);
    }
  }, []);

  useEffect(() => {
    if (!scriptsLoaded || !containerRef.current) return;

    // Set up Wistia options to disable branding
    window._wq = window._wq || [];
    window._wq.push({
      id: mediaId,
      options: {
        controlsVisibleOnLoad: true,
        branding: false,
        seo: false,
        copyLinkAndThumbnailEnabled: false,
        plugin: {
          "share": false
        }
      }
    });

    // Create video embed
    const videoContainer = containerRef.current.querySelector('.video-container');
    if (videoContainer && !videoContainer.querySelector('.wistia_embed')) {
      const videoDiv = document.createElement('div');
      videoDiv.className = `wistia_embed wistia_async_${mediaId}`;
      videoDiv.style.height = '480px';
      videoDiv.style.width = '100%';
      videoContainer.appendChild(videoDiv);
    }

    // Create transcript element
    const transcriptContainer = containerRef.current.querySelector('.transcript-container');
    if (transcriptContainer && !transcriptContainer.querySelector('wistia-transcript')) {
      setTimeout(() => {
        const transcriptElement = document.createElement('wistia-transcript');
        transcriptElement.setAttribute('media-id', mediaId);
        transcriptContainer.appendChild(transcriptElement);
      }, 1500);
    }
  }, [scriptsLoaded, mediaId]);

  return (
    <div ref={containerRef} className="wistia-video-transcript-container">
      <div className="video-container" style={{ marginBottom: '20px' }}>
        {/* Video will be inserted here */}
      </div>
      
      <div className="transcript-section not-prose" style={{ 
        marginTop: '30px',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid var(--border, rgba(0, 0, 0, 0.1))',
        backgroundColor: 'var(--background-secondary, rgba(0, 0, 0, 0.02))'
      }}>
        <h3 className="font-semibold text-lg mb-4">Video Transcript</h3>
        <div className="transcript-container" style={{ minHeight: '50px' }}>
          {/* Transcript will be inserted here */}
        </div>
      </div>
    </div>
  );
};