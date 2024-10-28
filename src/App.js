import './App.css';
import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArticleCard from "./components/ArticleCard";

import background from "../src/images/background.png";
import car from "../src/images/car.png";
import monacobackground from "../src/images/monacobackground.png";
import middle from "../src/images/middle.png";
import gradient from "../src/images/gradient.png";
import reversedgradient from "../src/images/reversedgradient.png";
import cardimage1 from "../src/images/cardimage1.png";
import cardimage2 from "../src/images/cardimage2.png";
import cardimage3 from "../src/images/cardimage3.png";
import calendar from "../src/images/calendar.svg";
import flag from "../src/images/flag.svg";
import play from "../src/images/play.svg";
import graph from "../src/images/graph.svg";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, partialVisibilityGutter: 0 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, partialVisibilityGutter: 40 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 40 },
};

function App() {
  const [styles, setStyles] = useState(getInitialStyles());

  useEffect(() => {
    const handleResize = debounce(() => setStyles(getInitialStyles()), 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getInitialStyles() {
    return {
      fontSize: window.innerWidth < 900 ? 50 : 125,
      leftMarginSizeMonaco: window.innerWidth < 900 ? 40 : 140,
      topMarginSizeMonaco: window.innerWidth < 900 ? 50 : 0,
      leftMarginSizeOracle: window.innerWidth < 900 ? 20 : 50,
      renderDatePlaceInfo: window.innerWidth >= 430
    };
  }

  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  const monacoHeadingStyle = {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Steradian TRIAL, sans-serif', // Closest font to 'Bull' font
    textAlign: 'left',
    fontWeight: 800,
    marginLeft: `${styles.leftMarginSizeMonaco}px`,
    marginTop: `${styles.topMarginSizeMonaco}px`, 
    lineHeight: '0.8',
  };

  const oracleHeadingStyle = {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Steradian TRIAL, sans-serif', // Closest font to 'Bull' font
    textAlign: 'left',
    fontWeight: 800,
    marginLeft: `${styles.leftMarginSizeOracle}px`,
    lineHeight: '0.8',
  };

  return (
    <Parallax pages={2}>
      <div>
        <ParallaxLayer speed={0.1} offset={0.19} style={{ fontSize: `${styles.fontSize}px`, zIndex: '102', width: 'auto', maxWidth: '1200px' }}>
          <h2 style={monacoHeadingStyle}>Monaco Grand Prix</h2>
        </ParallaxLayer>

        {styles.renderDatePlaceInfo && (
          <ParallaxLayer speed={0.1} offset={0.75} style={{ fontSize: '24px', zIndex: '103' }}>
            <div style={{ textAlign: 'left', marginLeft: `${styles.leftMarginSizeMonaco}px`, fontFamily: 'Steradian TRIAL, sans-serif', color: 'rgb(255, 255, 255)', fontWeight: 500, lineHeight: '2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={calendar} alt="Calendar Icon" /><span>24 – 27 NOV 2023</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={flag} alt="Monaco Flag" /><span>Monaco</span>
              </div>
            </div>
          </ParallaxLayer>
        )}
      </div>

      <ParallaxLayer offset={0} speed={0.1} factor={1} style={{ backgroundImage: `url(${monacobackground})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", zIndex: "100" }}></ParallaxLayer>
      <ParallaxLayer speed={0} offset={0} style={{ backgroundImage: `url(${car})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", zIndex: "102" }}></ParallaxLayer>
      <ParallaxLayer speed={0} offset={0.76} style={{ backgroundImage: `url(${gradient})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", zIndex: "102", height: "13%" }}></ParallaxLayer>
      <ParallaxLayer offset={0} factor={2} speed={0} style={{ backgroundImage: `url(${middle})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}></ParallaxLayer>

      <ParallaxLayer speed={0.1} offset={1.05} style={{ fontSize: '40px', zIndex: '107', width: 'auto', maxWidth: '1200px' }}>
        <h2 style={oracleHeadingStyle}>Oracle In Practice</h2>
      </ParallaxLayer>

      <ParallaxLayer speed={0.1} offset={1} style={{ marginTop: '-5px', backgroundImage: `url(${reversedgradient})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", zIndex: "106", height: "10%" }}></ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1} style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", zIndex: "105" }}></ParallaxLayer>

      <ParallaxLayer offset={1.5} speed={0.5} style={{ zIndex: "110", marginLeft: `${styles.leftMarginSizeOracle}px` }}>
        <Carousel data-testid="carousel" additionalTransfrom={0} className="carousel" containerClass="container" removeArrowOnDeviceType={["mobile", "tablet", "desktop"]} draggable itemClass="" minimumTouchDrag={80} partialVisible={true} responsive={responsive} swipeable>
          <ArticleCard backgroundImage={cardimage1} title="Oracle Virtual Lap In Monza" tag="Virtual Lap" readTime="6 min read" playButtonSvg={play}/>
          <ArticleCard backgroundImage={cardimage2} title="Oracle Strategy Guide" tag="Oracle Strategy Guide" readTime="4 min" playButtonSvg={play}/>
          <ArticleCard backgroundImage={cardimage3} title="Oracle Cloud Telemetry Data Checo" tag="Data" readTime="3 min read" playButtonSvg={graph}/>
        </Carousel>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
