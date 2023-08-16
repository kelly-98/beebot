import { useEffect, useState } from "react";
import AOS from "aos";

import imgLogo from "./assets/images/img-logo.png";
import imgIntro from "./assets/images/img-intro.svg";
import icon1 from "./assets/images/icon-1.svg";
import icon2 from "./assets/images/icon-2.svg";

import iconDexTool from "./assets/images/icon-dextools.svg";
import bnb from "./assets/images/logo-dark.png";
import iconCoinMarket from "./assets/images/icon-coinmarket.svg";
import iconDexScreener from "./assets/images/icon-dexscreener.svg";
import imgLine from "./assets/images/img-line.svg";
import imgSniperBot from "./assets/images/SniperBot.png";
import imgTokenTracker from "./assets/images/TokenTracker.png";
import imgWalletTracker from "./assets/images/WalletAnalyser.png";
import imgTradingMonitor from "./assets/images/Trading Monitor.png";
import imgAlphaDetector from "./assets/images/Alpha Detector.png";

import "aos/dist/aos.css";
import "./App.scss";

const getIsMobile = () => window.innerWidth <= 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
};

function App() {
  const [active, setActive] = useState(0);

  const isMobile = useIsMobile();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <header className="page-header">
        <div className="container">
          <img className="logo-app" src={imgLogo} alt="logo" />
          <nav>
            <ul className="header-menu">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="#ecosystem">
                <li>Ecosystem</li>
              </a>
              <a href="#tokenomics">
                <li>Tokenomics</li>
              </a>
              <a href="#roadmap">
                <li>Roadmap</li>
              </a>
            </ul>
            <div className="dropdown-list">
              <div className="btn-app">MENU</div>
              <ul className="drop-menu">
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="#ecosystem">
                  <li>Ecosystem</li>
                </a>
                <a href="tokenomics">
                  <li>Tokenomics</li>
                </a>
                <a href="roadmap">
                  <li>Roadmap</li>
                </a>
              </ul>
            </div>
          </nav>
          <div className="header-right">
            <div className="btn-contact-us">Contact Us</div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-open-app">
              OPEN APP
            </a>
          </div>
        </div>
      </header>
      <main className="page-main">
        <section className="section-intro">
          <div data-aos="fade-up" className="container">
            <div className="content-left">
              <h3>New Approach To Blockchain Through Smart BOT</h3>
              <p className="content">
                A groundbreaking project in the realm of automated trading in
                the crypto market. We believe in the power of artificial
                intelligence and cutting-edge technology.
              </p>
              <div className="actions">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-open-app">
                  OPEN APP
                </a>
                <div className="social">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/BeeBotopBNB">
                    <img src={icon1} alt="" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/BeeBotopBNB">
                    <img src={icon2} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content-right">
              <img src={imgIntro} alt="" />
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          className="section-ecosystem"
          id="ecosystem">
          <div className="container">
            <div className="header-title">
              <div className="tag">
                <p>$BeeBot</p>
              </div>
              <h3>Ecosystem</h3>
            </div>
            <div className="wrapper">
              <ul className="tab-actions">
                {[
                  "Sniper Bot",
                  "Wallet Analyser",
                  "Token Tracker",
                  "Trading Monitor",
                  "Alpha Detector",
                ].map((item, index) => (
                  <li
                    onClick={() => setActive(index)}
                    className={active === index ? "active" : ""}>
                    {item}
                  </li>
                ))}
              </ul>
              {active === 0 && (
                <div className="main-content">
                  <div className="content-left">
                    <h3>Sniper Bot</h3>
                    <p>
                      The ultimate tool for lightning-fast automated trading.
                      With cutting-edge algorithms, BeeBot swiftly identifies
                      and seizes trading opportunities, executing buy orders
                      with max speed.
                    </p>
                    <div className="btn-interact">Smart Interface BOT</div>
                  </div>
                  <div className="content-right">
                    <div className="box">
                      <div className="content-box">
                        <img src={imgSniperBot} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {active === 1 && (
                <div className="main-content">
                  <div className="content-left">
                    <h3>Wallet Analyser</h3>
                    <p>
                      While collecting simplified data, our users will be able
                      to get a detailed report on a wallet's balance, last token
                      purchases and sales, TX's volume, profits, losses, etc.
                    </p>
                    <div className="btn-interact">Wallet Analysis Tool</div>
                  </div>
                  <div className="content-right">
                    <div className="box">
                      <div className="content-box">
                        <img src={imgWalletTracker} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {active === 2 && (
                <div className="main-content">
                  <div className="content-left">
                    <h3>Token Tracker</h3>
                    <p>
                      Offers an easy-to-understand summary of the contract's
                      functions, events, and parameters to provide a
                      comprehensive overview of the token's capabilities, users
                      can better assess its potential risks and benefits before
                      engaging in any transactions
                    </p>
                    <div className="btn-interact">Intuitive Tracking Tools</div>
                  </div>
                  <div className="content-right">
                    <div className="box">
                      <div className="content-box">
                        <img src={imgTokenTracker} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {active === 3 && (
                <div className="main-content">
                  <div className="content-left">
                    <h3>Trading Monitor</h3>
                    <p>
                      Users can professionally and reliably track the movements
                      of their favorite tokens, thereby helping them make smart
                      trading decisions and optimize profits.
                    </p>
                    <div className="btn-interact">New Way To View Charts</div>
                  </div>
                  <div className="content-right">
                    <div className="box">
                      <div className="content-box">
                        <img src={imgTradingMonitor} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {active === 4 && (
                <div className="main-content">
                  <div className="content-left">
                    <h3>Alpha Detector</h3>
                    <p>
                      Real-time tracking of the number of active and willing
                      snipers to trade the specified token. Allows users to
                      better assess the possibility of price volatility when
                      trading.
                    </p>
                    <div className="btn-interact">Intelligent Index</div>
                  </div>
                  <div className="content-right">
                    <div className="box">
                      <div className="content-box">
                        <img src={imgAlphaDetector} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section data-aos="fade-up" className="section-support-by">
          <div className="container">
            <p>Support by</p>
            <ul className="list-support">
              {/* <li>
                <img src={iconUniswap} alt="" />
              </li> */}
              <li>
                <img src={iconDexTool} alt="" />
              </li>
              <li>
                <img src={bnb} alt="" />
              </li>
              <li>
                <img src={iconCoinMarket} alt="" />
              </li>
              <li>
                <img src={iconDexScreener} alt="" />
              </li>
            </ul>
          </div>
        </section>
        <section
          data-aos="fade-up"
          className="section-tokenomics"
          id="tokenomics">
          <div className="container">
            <div className="header-title">
              <div className="tag">
                <p>$BeeB</p>
              </div>
              <h3>Tokenomics</h3>
            </div>
            <div className="main-content">
              <div className="box" data-aos="fade-right">
                <p className="title">Total Supply</p>
                <p className="content">100,000,000</p>
              </div>
              <div className="box" data-aos="fade-left">
                <p className="title">Tax</p>
                <p className="content fz-16">
                  5/5 Marketing, Development, Buybacks and Burns
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="page-footer">
          <div data-aos="fade-up" className="container">
            <img src={imgLine} alt="" />
            <div className="footer-left">
              <div className="img-logo">
                <img className="logo-app" src={imgLogo} alt="" />
              </div>
              <div className="wrapper">
                <ul>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <li>Home</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <li>Ecosystem</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <li>Tokenomics</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <li>Contact Us</li>
                  </a>
                </ul>
                <div className="footer-right">
                  <div className="social">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://t.me/BeeBotopBNB">
                      <img src={icon1} alt="" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/BeeBotopBNB">
                      <img src={icon2} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>2023 ® 0xBeebot.vip. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
