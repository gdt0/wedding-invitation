import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fefccf',
          backgroundImage: 'radial-gradient(circle at center, #735c00 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.1,
        }}
      >
        {/* Ganesha Motif */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtsvA32itpWchK6o3NoqcjjXWmu-E7HJLQd7xXvWdkFdIWgypQdq-G4pNiuic6ZYNli4JxuBwyQL0dSsQqPVyRs8ejy_jT1PcN-hJWjgacK3rPMqjqWl8g7EPXRJ3JD9DmvCUlLYowbwDB9zpPEyYRi1xwlSyc17waod2IZiAL0OR4SCM9WVbu1gCJ_qrDCoI0tar8i52JBUxGvDhhvy6C6CKccci7pGOOSElIBUUQO_kFRO3zhB_kL2FQpKrvsYZtQrf_QBtOqMY"
          style={{
            width: 120,
            height: 120,
            marginBottom: 20,
          }}
        />

        {/* Couple Names */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: '#600016',
              fontFamily: 'serif',
            }}
          >
            Ayushi
          </span>
          <span
            style={{
              fontSize: 36,
              color: '#735c00',
              margin: '10px 0',
            }}
          >
            weds
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: '#600016',
              fontFamily: 'serif',
            }}
          >
            Kuldeep
          </span>
        </div>

        {/* Date */}
        <span
          style={{
            fontSize: 28,
            color: '#735c00',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          20 April 2026
        </span>

        {/* Decorative line */}
        <div
          style={{
            width: 200,
            height: 2,
            backgroundColor: '#735c00',
            margin: '30px 0',
            opacity: 0.5,
          }}
        />

        {/* Venue hint */}
        <span
          style={{
            fontSize: 18,
            color: '#5a403c',
            fontStyle: 'italic',
          }}
        >
          Klavati Marriage Lawn, Bangarmau
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
