
const contributions = [{
    "key": "Open Source PRs",
    "projects": [{
        "src": "js-ipfs",
        "type": "link",
        "link": "https://github.com/grantlouisherman/js-ipfs/commit/4ad104d85d813c2016f4abcafb46dfb5f0bba23b"
      },
      {
        "src": "script-8",
        "type": "link",
        "link": "https://github.com/script-8/script-8.github.io/pull/163"
      },
      {
        "src": "script-8",
        "type": "link",
        "link": "https://github.com/script-8/script-8.github.io/pull/197/commits"
      }
    ]
  },
  {
    "key": "Tech Talks",
    "projects": [{
        "src": "Final Project",
        "type": "video",
        "link": "https://www.youtube.com/watch?v=cumCXcnWs_g"
      },
      {
        "src": "Web Assembly Talk",
        "type": "video",
        "link": "https://youtu.be/I9eW9JkJiJk"
      },
      {
        "src": "Hackathon",
        "type": "video",
        "link": "https://www.youtube.com/watch?v=xvFsOmzMDXQ&feature=youtu.be"
      }
    ]
  },{
    "key": "Biography",
    "content": `
            Entry - Mid level software developer and former technical management consultant with
            strong financial services and government contracting background.
            Experienced in JavaScript, Node.js, React, React-Redux, and GraphQl.
            Professional with a Bachelor's degree focused in Political Science and Government from Fordham University.<br>
            <br>
            I currently work at American Express on the Benefits Dashboard team as a software developer.  `
  }
]

const settingMultipleAttributes = (elem, attributes) => {
  const attriKeys = Object.keys(attributes)
  attriKeys.forEach(attriKey => {
    elem.setAttribute(attriKey, attributes[attriKey])
  })
}
const createCarouselContainer = () => {
  const outerCarouselcontainer = document.createElement('div')
  settingMultipleAttributes(outerCarouselcontainer, {
    'class': 'carousel',
    'class': 'slide',
    'data-ride': 'carousel'
  })
  const innerCarouselContainer = document.createElement('div')
  innerCarouselContainer.setAttribute('class', 'carousel-inner')
  outerCarouselcontainer.append(innerCarouselContainer)
  return outerCarouselcontainer
}

const createCarouselItem = (content) => {
  const itemContainer = document.createElement('div')
  itemContainer.setAttribute('class', 'carousel-item')
  const contentContainer = document.createElement('div')
  settingMultipleAttributes(itemContainer, {
    'class': 'd-block',
    'class': 'w-100'
  })
  contentContainer.innerText =content
  itemContainer.append(contentContainer)
  return contentContainer
}

const createCarouselButton = buttonText => {
  const buttonContainer = document.createElement('a')
  const createIcon = document.createElement('span')
  const createText = document.createElement('span')
  settingMultipleAttributes(createIcon, {
    'class': 'carousel-control-prev-icon',
    'aria-hidden': true
  })
  createText.innerText = buttonText
  createText.setAttribute('class', 'sr-only')
  buttonContainer.append(createIcon)
  buttonContainer.append(createText)
  return buttonContainer
}

const createTechTalkChildComponent = (project) => {


}


const createOpenSourceChildComponent = () => {

}

const createbiographyChildComponent = () => {

}

const createSectionChildrenComponents = () => {

}
