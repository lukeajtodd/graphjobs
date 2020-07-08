import React from "react"
import footerStyles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a className={footerStyles.footerLink} href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
