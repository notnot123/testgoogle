import './commands'
import './keywords/search'
import './keywords/translate'
import './keywords/openwebsite'
import './keywords/map'
import './keywords/calculator'
import './keywords/plus'
import './keywords/multiply'
import './keywords/divide'
import './keywords/Minus'
import './commands'
import addContext from 'mochawesome/addContext';

import addContext from 'mochawesome/addContext';

Cypress.on('uncaught:exception', () => {
    return false
  })
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'passed') {
        const videosFolder = '${runnable.parent.title} -- ${test.title}'
        addContext({ test }, 'assets/${Cypress.spec.name}/${videosFolder}')
        addContext({ test }, 'assets/${Cypress.spec.name}.mp4')
        
  }
});
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = '${runnable.parent.title} -- ${test.title} (failed).png'
        addContext({ test }, 'assets/${Cypress.spec.name}/${screenshotFileName}')
        

    }
});

