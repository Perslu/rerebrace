//const recursivePrompt =

module.exports = function (plop) {
  plop.addPrompt('recursive', require('inquirer-recursive'))
  plop.addHelper('getInitialState', (type) => {
    switch(type){
      case 'object': return '{}'
      case 'array': return '[]'
      case 'string': return '\'\''
      case 'number': return '0'
    }
        
  })
  
  plop.addHelper('is_cond', function (v1, operator, v2) {
    switch (operator) {
      case '==':
        return (v1 == v2)
      case '===':
        return (v1 === v2)
      case '!=':
        return (v1 != v2)
      case '!==':
        return (v1 !== v2)
      case '<':
        return (v1 < v2)
      case '<=':
        return (v1 <= v2)
      case '>':
        return (v1 > v2)
      case '>=':
        return (v1 >= v2)
      case '&&':
        return (v1 && v2)
      case '||':
        return (v1 || v2)
      default:
        return true
    }
  })
  
  
  plop.setGenerator('data', {
    description: 'Creates new redux module',
    prompts: [
      {
        type: 'list',
        name: 'dest_folder',
        message: 'Choose application:',
        choices: [
          {name: 'Chat', value: 'src/apps/chat/frontend/web/data/', checked: true},
          {name: 'Perslu.com', value: 'perslu_com'},
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is module\'s name?',
        validate: value => ((/.+/).test(value)) ? true : 'name is required',
      },
      {
        type: 'input',
        name: 'system',
        message: 'What is system\'s name?',
        validate: value => ((/.+/).test(value)) ? true : 'system name is required',
      },
      {
        type: 'list',
        name: 'value',
        message: 'What type of value module manipulates?',
        choices: [
          {name: 'Object', value: 'object', checked: true},
          {name: 'Array', value: 'array'},
          {name: 'String', value: 'string'},
          {name: 'Number', value: 'number'},
        ]
      },
      {
        type: 'confirm',
        name: 'is_rest',
        message: 'Do you want to generate REST actions?',
        default: false
      },
      {
        type: 'recursive',
        name: 'actions',
        message: "Do you want to generate an action?",
        prompts: [
          {
            type: 'input',
            name: 'actionType',
            message: 'What is action\'s type?',
          },
          {
            type: 'input',
            name: 'actionName',
            message: 'What is action\'s name?',
          }
        ]
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{dest_folder}}{{camelCase name}}/{{camelCase name}}ActionTypes.js',
        templateFile: 'plopTemplates/data/actionTypes.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '{{dest_folder}}{{camelCase name}}/{{camelCase name}}Actions.js',
        templateFile: 'plopTemplates/data/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '{{dest_folder}}{{camelCase name}}/{{camelCase name}}Reducers.js',
        templateFile: 'plopTemplates/data/reducers.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '{{dest_folder}}{{camelCase name}}/{{camelCase name}}Selectors.js',
        templateFile: 'plopTemplates/data/selectors.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '{{dest_folder}}{{camelCase name}}/{{camelCase name}}Epics.js',
        templateFile: 'plopTemplates/data/epics.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '{{dest_folder}}{{camelCase name}}/test/{{camelCase name}}.test-data.js',
        templateFile: 'plopTemplates/data/tests/test.test-data.js.hbs',
        abortOnFail: true,
      },
    ],
  })
  plop.setGenerator('component', {
    description: 'TODO - Creates new stateless component',
    prompts: [],
    actions: [],
  })
  plop.setGenerator('container', {
    description: 'TODO - Creates new container component',
    prompts: [],
    actions: [],
  })
  plop.setGenerator('screen', {
    description: 'TODO - Creates new screen',
    prompts: [],
    actions: [],
  })
}
