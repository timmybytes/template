/**
 * Plopfile must be at root of project.
 *
 * Plop automates code/file creation based on templates.
 *
 * Run plop either directly from CLI as `yarn plop`
 * or define custom commands for plop in package.json scripts.
 */

// Define location of your template files (relative to this file)
const TEMPLATE_DIR = './templates'

/*
 * Template files to generate from
 */

// Define the template files that will be used for each generator
const PLOP_COMPONENT = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
  templateFile: `${TEMPLATE_DIR}/Component/Component.tsx.hbs`,
}

// Create a single .tsx component
const PLOP_COMPONENT_TSX = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
  templateFile: `${TEMPLATE_DIR}/Component/ComponentSingle.tsx.hbs`,
}

// Create a single Jest test file
const PLOP_COMPONENT_TEST = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
  templateFile: `${TEMPLATE_DIR}/Component/Component.test.tsx.hbs`,
}

// Create a default index file
const PLOP_COMPONENT_INDEX = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/index.ts',
  templateFile: `${TEMPLATE_DIR}/Component/index.ts.hbs`,
}

// Create an atomic component
const PLOP_ATOMIC_COMPONENT_INDEX = {
  type: 'add',
  path: 'src/components/{{heirarchy}}/{{pascalCase name}}/index.ts',
  templateFile: `${TEMPLATE_DIR}/Component/atomicIndex.ts.hbs`,
}
const PLOP_ATOMIC_COMPONENT_TSX = {
  type: 'add',
  path: 'src/components/{{heirarchy}}/{{pascalCase name}}/{{pascalCase name}}.ts',
  templateFile: `${TEMPLATE_DIR}/Component/AtomicComponent.tsx.hbs`,
}
const PLOP_ATOMIC_COMPONENT_TEST = {
  type: 'add',
  path: 'src/components/{{heirarchy}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
  templateFile: `${TEMPLATE_DIR}/Component/Component.test.tsx.hbs`,
}

// Create a new Next.js page
const PLOP_PAGE = {
  type: 'add',
  path: 'src/pages/{{lowerCase name}}.tsx',
  templateFile: `${TEMPLATE_DIR}/Page/Page.tsx.hbs`,
}

/**
 * Main plop config and options
 * @param {*} plop
 */

// Define the files that can be generated (CLI menu)
module.exports = plop => {
  plop.setWelcomeMessage('Choose from the menu options below:')

  // Component generator
  plop.setGenerator('Atomic Component', {
    description: 'Create a new component',
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
        type: 'list',
        name: 'type',
        message: 'Select a type:',
        // Create single or multiple files from a template
        choices: [
          {
            name: 'TSX Component in own folder with test and index file',
            value: 'multi',
          },
          {
            name: 'TSX Component only',
            value: 'single',
          },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the component:',
      },
    ],

    actions: function (data) {
      // Fallback name for the component if one isn't provided - randomized to avoid duplicates
      if (!data.name) {
        data.name = `${data.heirarchy}__${Math.random()
          .toString(36)
          .substr(2, 5)}`
      }

      var actions = []

      if (data.type === 'multi') {
        actions.push(
          PLOP_ATOMIC_COMPONENT_TSX,
          PLOP_ATOMIC_COMPONENT_TEST,
          PLOP_ATOMIC_COMPONENT_INDEX
        )
      } else if (data.type === 'single') {
        actions.push(PLOP_ATOMIC_COMPONENT_TSX)
      }
      return actions
    },
  })

  // Component generator
  plop.setGenerator('Component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the component:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select a type:',

        // Create single or multiple files from a template
        choices: [
          {
            name: 'TSX Component in own folder with test and index file',
            value: 'multi',
          },
          {
            name: 'TSX Component only',
            value: 'single',
          },
        ],
      },
    ],

    actions: function (data) {
      // Fallback name for the component if one isn't provided - randomized to avoid duplicates
      if (!data.name) {
        data.name = `Component__${Math.random().toString(36).substr(2, 5)}`
      }

      var actions = []

      if (data.type === 'multi') {
        actions.push(
          PLOP_COMPONENT_TSX,
          PLOP_COMPONENT_TEST,
          PLOP_COMPONENT_INDEX
        )
      } else if (data.type === 'single') {
        actions.push(PLOP_COMPONENT_TSX)
      }
      return actions
    },
  }),
    // Page generator
    plop.setGenerator('Page', {
      description: 'Create a new page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Enter a name for the page:',
        },
      ],
      actions: function (data) {
        // Fallback name for the page if one isn't provided - randomized to avoid duplicates
        if (!data.name) {
          data.name = `Page__${Math.random().toString(36).substr(2, 5)}`
        }
        var actions = []
        actions.push(PLOP_PAGE)
        return actions
      },
    })
}
