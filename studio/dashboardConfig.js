export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fd0f7d81146c836a11d2649',
                  title: 'Sanity Studio',
                  name: 'pjs-nextjs-demo-studio',
                  apiId: '4ba6d5e8-77d4-4747-a492-e754f3273322'
                },
                {
                  buildHookId: '5fd0f7d8b5a336263d8e7a39',
                  title: 'Landing pages Website',
                  name: 'pjs-nextjs-demo',
                  apiId: '3aad72c7-72ba-48d6-ad29-6d2a610a666b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoeSpencer/pjs-nextjs-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pjs-nextjs-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
