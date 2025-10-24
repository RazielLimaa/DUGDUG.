export function DecorativeBlobs() {
  return (
    <>
      {/* Blob esquerda - círculo com blur */}
      <svg
        className="absolute -left-32 top-20 w-full max-w-md h-auto -z-10"
        viewBox="0 0 665 996"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_10_629)">
          <ellipse cx="165" cy="498" rx="248" ry="246" fill="#9FFF8C" opacity="0.8" />
        </g>
        <defs>
          <filter
            id="filter0_f_10_629"
            x="-335"
            y="0"
            width="1000"
            height="996"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="126" result="effect1_foregroundBlur_10_629" />
          </filter>
        </defs>
      </svg>

      {/* Blob direita - curva orgânica grande */}
      <svg
        className="absolute -right-20 top-0 w-96 h-full -z-10"
        viewBox="0 0 500 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 500 0 Q 450 100 400 200 Q 350 300 300 400 Q 250 500 200 600 Q 150 700 100 800 L 500 800 Z"
          fill="#1FD655"
          opacity="0.25"
        />
      </svg>

      {/* Círculo decorativo pequeno */}
      <div className="absolute right-32 top-24 w-6 h-6 bg-green-400 rounded-full -z-10 shadow-lg"></div>

      {/* Linha curva decorativa */}
      <svg
        className="absolute right-10 bottom-32 w-40 h-96 -z-10"
        viewBox="0 0 100 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 50 0 Q 80 100 70 200 Q 60 300 50 400" stroke="#1FD655" strokeWidth="4" opacity="0.5" />
      </svg>
    </>
  )
}
