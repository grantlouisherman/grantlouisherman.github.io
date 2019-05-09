
const contributions = [{
    "key": "Open Source",
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
  },
  {
    "key": "Notable Github Projects",
    "projects": [{
        "src": "Full Stack: Final Project",
        "type": "link",
        "link": "https://github.com/grantlouisherman/AmReady_XCode"
      },
      {
        "src": "gofundme Clone with Ethereum",
        "type": "link",
        "link": "https://github.com/grantlouisherman/Emergent-Fund-Me-With-Truffle"
      },
      {
        "src": "S3 bucket Continuous Integration",
        "type": "link",
        "link": "https://github.com/grantlouisherman/aws-continuous-integration"
      }
    ]
  }
]

const technicalContributionPanel = project => {
  const {
    src,
    type,
    link
  } = project
  // overall container
  const container = document.createElement('div')
  // setting panel class
  container.setAttribute('class', 'panel')
  // creating label and setting text
  const label = document.createElement('label')
  label.innerText = src
  // adding link, setting target
  const projectLink = document.createElement('a')
  projectLink.setAttribute('href', link)
  projectLink.setAttribute('target', '_blank')
  // adding icon for type
  const typeIconContainer = new Image()
  typeIconContainer.src = `./images/${type}.png`
  typeIconContainer.height = 50
  typeIconContainer.width = 50
  //appending everything to parent nodes
  projectLink.append(label)
  container.append(typeIconContainer)
  container.append(projectLink)
  return container
}
const technicalContributionComponent = (key, projects) => {
  const container = document.createElement('div')
  container.setAttribute('class', 'column')
  const header = document.createElement('header')
  const h3 = document.createElement('h3')
  h3.innerText = key
  header.append(h3)
  container.append(header)
  projects.forEach(project => {
    container.append(technicalContributionPanel(project))
  })
  return container

}

const technicalContributionComponentCreator = () => {
  const rootNode = document.getElementById('technicalContributions')
  contributions.forEach(contribution => {
    const {
      key,
      projects
    } = contribution
    rootNode.append(technicalContributionComponent(key, projects))
  })
  return rootNode
}

technicalContributionComponentCreator()
