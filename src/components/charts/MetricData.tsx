import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Metrics } from "./data.ts";
import UpArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  grid-column: 1/5;
  grid-row: 1;

  section {
    padding: 1.5rem;
    border-radius: 1rem;

    div {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      align-items: center;
    }
  }

  section:nth-of-type(odd) {
    background-color: #e3f5ff;
  }
  section:nth-of-type(even) {
    background-color: #e5ecf6;
  }

  p {
    font-size: 12px;
    color: #1c1c1c;
  }
  .amount {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
  }

  @media screen and (max-width: 1150px) {
    display: flex;
    overflow-x: auto;

    section {
      flex-shrink: 0;
      flex-basis: 75%;
      min-height: 110px;
    }
  }

  .individual {
    display: inline-block;
    padding-inline: 1px;
  }

  /* .individual:hover {
    cursor: pointer;
  } */
`;

const AnimatedNumber = ({ num }: { num: string }) => {
  const [displayedNumber, setDisplayedNumber] = useState(num);
  const [isAnimating, setIsAnimating] = useState(false);
  const originalNumber = useRef(num);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    originalNumber.current = num;
    setDisplayedNumber(num);
  }, [num]);

  useEffect(() => {
    if (isAnimating) {
      let startTime: number | null = null;
      const duration = 300;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const startValue = parseInt(originalNumber.current, 10);
        const currentValue = Math.max(
          Math.floor(startValue * (1 - progress)),
          0
        );

        setDisplayedNumber(currentValue.toString());

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setDisplayedNumber(originalNumber.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating]);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
  };

  if (num === ",") {
    return <span className="individual">{num}</span>;
  }

  return (
    <span
      className="individual"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayedNumber}
    </span>
  );
};

export default function MetricData() {
  return (
    <MetricsContainer>
      {Metrics.map(({ id, amount, percentage, title }) => (
        <section key={id}>
          <p>{title}</p>
          <div>
            <span className="amount">
              {amount.split("").map((num, index) => (
                <AnimatedNumber key={index} num={num} />
              ))}
            </span>
            <span>
              {percentage}%{" "}
              <img
                src={percentage > 0 ? UpArrow : downArrow}
                alt={percentage > 0 ? "Up Arrow" : "Down Arrow"}
              />
            </span>
          </div>
        </section>
      ))}
    </MetricsContainer>
  );
}
