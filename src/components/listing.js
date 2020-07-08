import React from "react"
import listingStyles from "./listing.module.css"

const Listing = ({ title, tags, remotes, applyUrl }) => {
  return (
    <div className={listingStyles.listingItem}>
      <h2 className={listingStyles.listingTitle}>
        {title}
        {remotes.length > 0 ? " 🏝️" : ""}
      </h2>
      <div className={listingStyles.listingTags}>
        {tags.map(tag => (
          <span className={listingStyles.listingTag}>{tag.name}</span>
        ))}
      </div>
      <a className={listingStyles.listingLink} href={applyUrl}>
        Apply
      </a>
    </div>
  )
}

export default Listing
