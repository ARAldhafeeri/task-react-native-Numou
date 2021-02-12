# task-react-native-Numou
## task for Numou Junior position interview.


The UI mostly in DailyMeals, The monthly Meals just to implement react navigation v5. 

for redux, I have used global state and fetched data from https://randomuser.me/ . can be outputed, but I still need more work.
### I Have scuessfuly setup redux store. Global state can be acesses in any component with extra setup:
After setting up redux store at ./store folder: 
1) first imports:
``` import { connect } from "react-redux"; ```
``` import * as actions from '../store/actions/action' ```

2) map state to props , and dispatch to props, export component and connect mapStateProps, mapDispatchToProps to it:

const mapStateToProps = state => {
  return {
    data:  state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(actions.fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyMeals); 


#### Testing was very challenging but I learned a lot:

- I had to setup jest as there was a bug after running

yarn add jest 

Bug: 

FAIL  __tests__/App.js
  ● Test suite failed to run

    TypeError: Cannot read property 'Direction' of undefined

      at Object.<anonymous> (node_modules/react-native-gesture-handler/Directions.js:3:39)
      at Object.<anonymous> (node_modules/react-native-gesture-handler/GestureHandler.js:2:1)
      
      
fixed the issue by doing this:
created new file in root dir called ( jestSetup.js )
added the setup to package.json:

  "jest": {
    "preset": "react-native",
    "setupFiles": [
        "./jestSetup.js"
    ]
  },
 
 
 after test failed again:
 
 C:\Projects\interview_tasks\task-react-native-Numou\numou-task>yarn test
yarn run v1.22.10
$ jest
 FAIL  __tests__/App.js
  ● Test suite failed to run

    C:\Projects\interview_tasks\task-react-native-Numou\numou-task\node_modules\@react-navigation\stack\lib\commonjs\views\assets\back-icon.png:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){�PNG


    SyntaxError: Invalid or unexpected token

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)
      at Object.<anonymous> (node_modules/@react-navigation/stack/lib/commonjs/index.tsx:13:3)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        7.335 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


I had to do this:
1- Created assetsTransformer.js and transformed the assests.
2- added more configurations to jest:
```"jest": { "moduleNameMapper": { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js" } },```


### final jest setup in package.json
```
  "jest": {
    "preset": "react-native",
    "moduleNameMapper": { 
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js",
       "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
       },
    "transform": {
      "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
    },
    "transformIgnorePatterns": [
      "/node_modules/(?!react-native|native-base-shoutem-theme|react-navigation-stack|@react-navigation|react-navigation-fluid-transitions)"
    ],
    "testPathIgnorePatterns": [
      "/node_modules/"
    ],
    "setupFiles": [
        "./jestSetup.js"
    ]
  },
  "private": true
}
```


  
I hit a road block with this test error, i do not know how to fix it, I have tried.

```
C:\Projects\interview_tasks\task-react-native-Numou\numou-task>yarn test
yarn run v1.22.10
$ jest
 FAIL  __tests__/App.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    C:\Projects\interview_tasks\task-react-native-Numou\numou-task\node_modules\@expo\vector-icons\FontAwesome.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import FontAwesome from './build/FontAwesome';
                                                                                             ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      1 | import React, {Component} from 'react';
      2 | import {ImageBackground, TouchableOpacity, Text, Image, View } from 'react-native';
    > 3 | import Icon from 'react-native-vector-icons/FontAwesome';
        |                                           ^
      4 | import { styles} from './Styles';
      5 | import {days, meals_data} from '../data/data'
      6 | import { connect } from "react-redux";

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)
      at Object.<anonymous> (Containers/DailyMeals.js:3:43)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        3.125 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


```


