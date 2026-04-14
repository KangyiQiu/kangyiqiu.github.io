export default function LogoQ() {
    return (
      <div className="h-16 w-16">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          fill="none"
        >
          {/* 外框 Q */}
          <path
            d="M15 15 H75 V75 H15 Z"
            stroke="white"
            strokeWidth="10"
            strokeLinejoin="miter"
          />
  
          {/* 内部空心 */}
          <rect
            x="30"
            y="30"
            width="30"
            height="30"
            fill="#020617"
          />
  
          {/* Q 的斜腿 */}
          <path
            d="M55 55 L85 85"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="square"
          />
        </svg>
      </div>
    );
  }