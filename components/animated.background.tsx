interface Props {
  id: string;
}

export const AnimatedBackground = ({ id }: Props) => {
  if (!id) throw new Error("AnimatedBackground: id is required");
  return (
    <div className="rounded-t-2xl gradient-bg absolute top-0 after:z-0 after:block after:absolute after:bottom-0 after:sm:bottom-0 after:left-0 after:w-[100vw] after:h-[400px] after:bg-gradient-to-t after:from-[rgb(26,26,26),rgba(26,26,26,0.5)]">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className={`interactive-${id}`}></div>
      </div>
    </div>
  );
};
