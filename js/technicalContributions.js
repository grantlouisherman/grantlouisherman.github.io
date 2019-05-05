
const contributions = [
  {
    "key": "Open Source",
    "projects": [
      {
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
    "key": "Full Stack Academy",
    "projects": [{
      "src": "Final Project",
      "type": "video",
      "link": "https://www.youtube.com/watch?v=cumCXcnWs_g"
    }]
  }
]

const technicalContributionPanel = project => {
  const { src, type, link } = project
  const container = document.createElement('div')
  const label = document.createElement('label')
  label.innerText = src
  const projectLink = document.createElement('a')
  projectLink.setAttribute('href', link)
  projectLink.setAttribute('target', '_blank')
  projectLink.append(label)
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
    const { key, projects } = contribution
    rootNode.append(technicalContributionComponent(key, projects))
  })
  return rootNode
}

technicalContributionComponentCreator()
