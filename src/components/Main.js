import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I'm a passionate young Entreprenur driven towards making an impact
            with data.
          </p>

          <p>
            <a href="#work">Checkout my work</a>.
          </p>

          <p>
            I'm interested in a variety of areas which leads to unique
            perspectives on developing pervastive techniology to change lives.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>I've worked as a Franchise Owner with CollegePro Painters.</p>

          <p>
            I was one of the leading student developers on the Washington State
            Univeristy Intelligent Chatbot Initiative to improve the student
            experience.
          </p>
          <p>
            I've held various roles throughout my college career as Challenge
            Course Facillitator, Climbing Wall Supervisor, and Building Manager.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I'm fundamentally a curious person. Specifically surrounding
            technology, artificial intellgience, and behavioral economics.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li onClick={() => window.open('https://twitter.com/TroyKirin')}>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li
              onClick={() => window.open('https://www.facebook.com/troy.kirin')}
            >
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li
              onClick={() =>
                window.open('https://www.instagram.com/troy.kirin/')
              }
            >
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li onClick={() => window.open('https://github.com/TroyKirin')}>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>

            <li
              onClick={() =>
                window.open('https://www.linkedin.com/in/troykirin/')
              }
            >
              <a href="#" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
