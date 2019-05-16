
const personelLinksLayout = [{
    "key": "github",
    "link": "https://github.com/grantlouisherman",
    "icon": "./images/github.png"
  },
  {
    "key": "linkedin",
    "link": "https://www.linkedin.com/in/grant-herman-3b34258a/",
    "icon": "./images/linkedin.png"
  },
  {
    "key": "stackoverflow",
    "link": "https://stackoverflow.com/users/4732217/grant-herman",
    "icon": "./images/stackoverflow.png"
  },
  {
    "key": "resume",
    "link": "./additionalContent/resume.pdf",
    "icon": "./images/resume.png",
    "download": true
  }
]

const createToolTip = name => {
  const toolTipContainer = document.createElement('span')
  toolTipContainer.setAttribute('class', 'tooltiptext')
  toolTipContainer.innerText = name
  return toolTipContainer
}

const createExternalLink = (link, linkIcon, key) => {
  const externalLink = document.createElement('a')
  externalLink.setAttribute('class', 'tooltip')
  externalLink.setAttribute('href', link)
  externalLink.setAttribute('target', '_blank')
  externalLink.append(linkIcon)
  externalLink.append(createToolTip(key))
  return externalLink
}

const createImage = (download, icon, link) => {
  const linkIcon = new Image()
  if (download) {
    linkIcon.download = link;
  }
  linkIcon.src = icon
  linkIcon.setAttribute('class','linkIcon')
  return linkIcon
}

const personalLinkComponent = (key, link, icon, download) => {
  let container = document.createElement('div')
  container.setAttribute('id', key)
  const iconImage = createImage(download, icon, link)
  const externalLinkContainer = createExternalLink(link, iconImage, key)
  container.append(externalLinkContainer)
  return container
}

const personalLinkComponentCreator = () => {
  const personelLinksContainer = document.getElementById('personelLinksContainer')
  personelLinksLayout.forEach(links => {
    const {
      key,
      link,
      icon
    } = links
    personelLinksContainer.append(personalLinkComponent(key, link, icon, links.download))
  })
  return personelLinksContainer
}

personalLinkComponentCreator()
