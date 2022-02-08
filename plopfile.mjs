/**
 * Plop configuration for automating code/files
 * @param {*} plop
 */

// Templates
const TEMPLATES_DIR = './templates'
const COMPONENT = `${TEMPLATES_DIR}/Component/Component.tsx.hbs`
const COMPONENT_TEST = `${TEMPLATES_DIR}/Component/Component.test.tsx.hbs`
const COMPONENT_STORIES = `${TEMPLATES_DIR}/Component/Component.stories.tsx.hbs`
const COMPONENT_INDEX = `${TEMPLATES_DIR}/Component/index.ts.hbs`

// Generator Template
// plop.setGenerator('Generator name', {
//   description: 'Generator description',
//   prompts: [],
//   actions: data => {
//     // Do stuff
//     let actions = []
//     return actions
//   },
// })

export default plop => {
  plop.setWelcomeMessage('Choose from the options below:')

  // Atomic Component generator
  plop.setGenerator('Atomic Component', {
    description: 'Create a new atomic component',
    prompts: [
      {
        type: 'list',
        name: 'heirarchy',
        message: 'Select a type:',
        choices: [
          {
            name: 'Atom',
            value: 'atoms',
          },
          {
            name: 'Molecule',
            value: 'molecules',
          },
          {
            name: 'Organism',
            value: 'organisms',
          },
          {
            name: 'Template',
            value: 'templates',
          },
          {
            name: 'Wrappers',
            value: 'wrappers',
          },
        ],
      },
      {
        type: 'checkbox',
        name: 'types',
        message: 'Select preferred files to generate',
        // Create single or multiple files from a template
        choices: [
          {
            name: 'TSX Component',
            value: 'component',
            checked: true,
          },
          {
            name: 'Default index file (index.ts)',
            value: 'index',
            checked: true,
          },
          {
            name: 'Storybook file (Component.stories.tsx)',
            value: 'story',
            checked: true,
          },
          {
            name: 'Test file (Component.test.tsx)',
            value: 'test',
            checked: true,
          },
        ],
        default: [
          {
            name: 'TSX Component',
            value: 'component',
            checked: true,
          },
          {
            name: 'Default index file (index.ts)',
            value: 'index',
            checked: true,
          },
          {
            name: 'Storybook file (Component.stories.tsx)',
            value: 'story',
            checked: true,
          },
          {
            name: 'Test file (Component.test.tsx)',
            value: 'test',
            checked: true,
          },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the component:',
      },
    ],
    actions: data => {
      // Fallback name for the component
      if (!data.name) {
        data.name = `${data.heirarchy}__${Math.random()
          .toString(36)
          .substr(2, 5)}`
      }

      let actions = []

      data.types.map(d => {
        if (d === 'component') {
          actions.push({
            type: 'add',
            path: 'src/components/{{heirarchy}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: COMPONENT,
          })
        }
        if (d === 'story') {
          actions.push({
            type: 'add',
            path: 'src/components/{{heirarchy}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: COMPONENT_STORIES,
          })
        }
        if (d === 'test') {
          actions.push({
            type: 'add',
            path: 'src/components/{{heirarchy}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
            templateFile: COMPONENT_TEST,
          })
        }
        if (d === 'index') {
          actions.push({
            type: 'add',
            path: 'src/components/{{heirarchy}}/{{pascalCase name}}/index.ts',
            templateFile: COMPONENT_INDEX,
          })
        }
      })
      return actions
    },
  })
}
