import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Rekayasa Studio — Desain Elevasi Bisnis Anda';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: '#f5f4f0',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative Grid Pattern Influence */}
        <div 
            style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.1,
                backgroundImage: 'radial-gradient(#0d0d0c 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />

        {/* Brand Accent Bar */}
        <div style={{
            width: 80,
            height: 8,
            backgroundColor: '#c8a96e',
            marginBottom: 40,
            borderRadius: 4
        }} />

        {/* Main Title */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: '#0d0d0c',
            fontFamily: 'serif',
            letterSpacing: '-0.05em',
            marginBottom: 20
          }}
        >
          Rekayasa Studio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: 'rgba(13, 13, 12, 0.6)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          Desain Elevasi Bisnis Anda.
        </div>

        {/* Domain Label */}
        <div style={{
            position: 'absolute',
            bottom: 60,
            fontSize: 24,
            fontWeight: 700,
            background: '#0d0d0c',
            color: '#f5f4f0',
            padding: '12px 24px',
            borderRadius: 4,
            letterSpacing: '0.1em'
        }}>
            REKAYASASTUDIO.MY.ID
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
