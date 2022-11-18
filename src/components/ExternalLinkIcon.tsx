import React from 'react'

interface Props {
  link: any
  icon: any
}

const ExternalLinkIcon: React.FC<Props> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon