import React, { useEffect, useState } from "react";
import "../components/PromotionBanner.css";

function PromotionBanner({
  mainHeading,
  subHeading,
  promotionValidity,
  buttonText,
  buttonLink,
}) {
  const [duration, setduration] = useState(promotionValidity);

  const [coundown, setCoundown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setduration(duration - 1000);
      const total_seconds = parseInt(Math.floor(duration / 1000));
      const total_minutes = parseInt(Math.floor(total_seconds / 60));
      const total_hours = parseInt(Math.floor(total_minutes / 60));

      const seconds = parseInt(total_seconds % 60);
      const minutes = parseInt(total_minutes % 60);
      const hours = parseInt(total_hours % 24);
      const days = parseInt(Math.floor(total_hours / 24));

      setCoundown({ days, hours, minutes, seconds });
    }, 1000);
  }, [duration]);

  return (
    <div className=" bg-primary">
      <div className="discount-container">
        <div className="info">
          <div className="discount-heading">{mainHeading}</div>
          <div className="discount-subheading">{subHeading}</div>
        </div>

        <div className="countdown-timer">
          <div className="group">
            <div className="value days">
              {String(coundown.days).padStart(2, "0")}
            </div>
            <div className="unit">Days</div>
          </div>

          <div className="group">
            <div className="value hours">
              {String(coundown.hours).padStart(2, "0")}
            </div>
            <div className="unit">Hrs</div>
          </div>

          <div className="group">
            <div className="value minutes">
              {String(coundown.minutes).padStart(2, "0")}
            </div>
            <div className="unit">Min</div>
          </div>

          <div className="group">
            <div className="value seconds">
              {String(coundown.seconds).padStart(2, "0")}
            </div>
            <div className="unit">Sec</div>
          </div>
        </div>

        <a href={buttonLink} className="discount-btn">
          {buttonText}
        </a>

        <a href="#" className="learnmore-btn">
          ** T&C
        </a>
      </div>
    </div>
  );
}

export default PromotionBanner;
