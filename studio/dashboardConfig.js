export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f656b9f85c5b58991e6ef7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sfbu4ksv',
                  apiId: '46d3bc0f-9a98-4eb3-94ff-e1ec9f418548'
                },
                {
                  buildHookId: '60f656b9c5ed535a9dec5472',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h4io7ovx',
                  apiId: 'c6511f05-6039-4407-b61f-ede48accb645'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theomt02/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h4io7ovx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
