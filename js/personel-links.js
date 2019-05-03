
const personelLinksLayout = {
  "github": {
    "link":"https://github.com/grantlouisherman",
    "icon":"./images/github.png"
  },
  "linkedin": {
    "link":"https://www.linkedin.com/in/grant-herman-3b34258a/",
    "icon": "./images/linkedin.png"
  },
  "stackoverflow": {
    "link": "https://stackoverflow.com/users/4732217/grant-herman",
    "icon": "./images/stackoverflow.png"
  }
}

const personalLinkComponent = (imgUrl, srcLink, linkName) => {
  const container = document.createElement('div')
  const icon = new Image();
  icon.src = imgUrl
  icon.class = 'linkIcon'
  const link = document.createElement('a')
  link.setAttribute('href', srcLink)
  link.append(icon)
  container.append(link)
  return container
}

const personalLinkComponentCreator = () => {
  const linksKeys = Object.keys(personelLinksLayout)
  const personelLinksContainer = document.getElementById('personelLinksContainer')
  linksKeys.forEach(linkKey => {
    const { link, icon } = personelLinksLayout[linkKey]
    personelLinksContainer.append(personalLinkComponent(icon, link, linkKey))
  })
  return personelLinksContainer
}

personalLinkComponentCreator()
