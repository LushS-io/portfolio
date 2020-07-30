import React from 'react';
import Layout from '../components/Layout';


const moodai = () => (
  <Layout fullmenu>
    <section id="wrapper">
      <div className="container">
        <h1 align="center" style={{ padding: 90 }}>mood.ai</h1>

        <p align="center">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTESM3yZYjim0-2BieKUAwToRNfraPDLjGEsdfw5Us4w0LAaWGM3Ix-eo1wPkhgLWMA3dkDjkHsIQIt/embed?start=true&loop=false&delayms=3000"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            title="mood-ai-slides"
          ></iframe>
        </p>
      </div>
    </section>
  </Layout>
);

export default moodai;



