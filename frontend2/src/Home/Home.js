import React, { Component } from "react";
import "../App.css";
import "./home.css";
import dna from "./dna.png";
import hospital from "./hospital.png";
import unknown from "./marketing.png";
import doctor from "./doctor.png";
import arrow from "./arrow.png";
import sanitise from "./sanitise.jpg";

const puppeteer = require('puppeteer');

async function scrapeStatNum(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const name = await page.$x('//*[@id="widgetYfhJjRW"]/div[1]/h1');//*[@id="widgetYfhJjRW"]/div[1]/h1
  const src = await name.getProperty('src');
  const srcTxt = await src.jsonValue();

  console.log({srcTxt})
}

scrapeStatNum('https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers')

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
    <div class="header" style={{ marginTop: "10vh" }}>
      <h1>Today's NSW News</h1>
    </div>
    <div class="home-row">
      <div class="home-col">
      <img src={dna} height="50"></img>
      <p>20 Active Cases</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={hospital} height="50"></img>
      <p>3 New Cases</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={unknown} height="50"></img>
      <p>0 Unknown Sources</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={doctor} height="50"></img>
      <p>20,000 Cases</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
    </div>
    <div class="second">
      <div class="second-image">
      <img src={sanitise} height="500"></img>
      </div>
      <div class="second-text">
      <h3>HOW TO STAY SAFE IN PUBLIC</h3>
      <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>
      <p>Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</p>
      <p>Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COVID-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).</p>
      <p>WHO 2020</p>
      </div>
    </div>
    </div>
    )
  }
}

export default Home;
