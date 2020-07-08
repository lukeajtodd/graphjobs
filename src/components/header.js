import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div>
      <h1 className={headerStyles.headerTitle}>{siteTitle}</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
