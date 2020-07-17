import React from 'react'

export default function NavBar() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('intro')
                }}
              >
                Intro
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('work')
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('projects')
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('about')
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('contact')
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
}
