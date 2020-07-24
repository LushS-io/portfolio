import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/bot-icon.jpg';
import pic2 from '../assets/images/react-icon.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-superpowers"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Chatbot Development</h2>
            <p>
              Experience with various Chatbot tools such as IBM Cloud's Watson
              Intelligent Assistant, Azure BotFramework, Rasa.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">React Develoment</h2>
            <p>
              Project based learning for React as a frontend technology. Along
              the path, learned the following stack Javascript, NodeJS, Express,
              SocketIO.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Data Science</h2>
            <p>
              Passion for data lead me into the world of Data Science working
              with Statistical Modeling, Machine Learning, and Data
              Visualization. Work with Python, R, Pandas, Dplyr.
            </p>
            <p>Data cleansing, data wrangling, exploratory data analysis.</p>
            <a href="/#" className="special">
              Learn more
            </a>
            <a href="/#" className="special">
              Checkout Kaggle
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          
          <h2 className="major">Hackathon Projects</h2>
          <p>Projects I was inspired to pitch and build.</p>
          
          <section className="features">
            
            <article>
              <a href="https://polispaceapp.webflow.io/" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">PoliSpace</h3>
              <p>Discuss Real World Issues.</p>
              <a href="/polispace" className="special">
                Learn more
              </a>
              <a href="https://polispaceapp.webflow.io/" className="special">
                Visit Site
              </a>
            </article>

            <article>
              <a href="https://geostorm.webflow.io/" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">GeoStream</h3>
              <p>Wearables for Wayfinding in Natural Disaster involving IoT</p>
              <p>
                Apply predictive analytics to improve emergency response
                readiness.
              </p>
              <a href="/geostream" className="special">
                Learn More
              </a>
              <a href="https://geostorm.webflow.io/" className="special">
                Visit site
              </a>
            </article>

            <article>
              <a href="https://geostorm.webflow.io/" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">BarHop</h3>
              <p>Rideshare app to get you home safely!</p>
              <p>CrimsonCode Hackathon at WSU</p>
              <a href="https://geostorm.webflow.io/" className="special">
                Learn more
              </a>
            </article>

            <article>
              <a href="https://geostorm.webflow.io/" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">mood.ai</h3>
              <p>Employee mood tracking for the Enterprise</p>
              <p>Hack Washington 2019</p>
              <a href="https://geostorm.webflow.io/" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </section>

      <section id="five" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">What Lies Ahead</h2>
          <p>As I charge ahead, these are plans that lie ahead.</p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Data Engineering</h3>
              <p>
                Build infastructure for big data environment. Work with
                ElasticSearch for a noSQL approach
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">DevOps</h3>
              <p>Build on Azure DevOps working on building a CI/CD Pipeline</p>
              <p>Familarize myself with CircleCI</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
