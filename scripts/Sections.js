
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
        "link": "https://www.youtube.com/embed/cumCXcnWs_g"
      },
      {
        "src": "Web Assembly Talk",
        "type": "video",
        "link": "https://www.youtube.com/embed/I9eW9JkJiJk"
      },
      {
        "src": "Hackathon",
        "type": "video",
        "link": "https://www.youtube.com/embed/xvFsOmzMDXQ"
      }
    ]
  }, {
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
