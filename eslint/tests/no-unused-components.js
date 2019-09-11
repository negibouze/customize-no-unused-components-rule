'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../rules/no-unused-components')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
})

tester.run('no-unused-components', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <TheButton />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <svg>
          <TheCircle />
        </svg>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheCircle
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <circle cx="0" cy="0" :d="radius" />
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component :is="'TheButton'" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component is="TheButton" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <theButton />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component is="theButton" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <the-button />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <the-button />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          theButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component is="the-button" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <The-button />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component is="The-button" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <The-Button />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component is="The-Button" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <the-Button />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component is="the-Button" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <the-button />
          <next_Button />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          'the-button': TheButton,
          'next_Button': NextButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <component is="the-button" />
          <component is="next_Button" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          'the-button': TheButton,
          'next_Button': NextButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div>
          <h2>Lorem ipsum</h2>
          <component is="TheButton" />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `<template>
        <div id="app">
          <Header></Header>
          <div class="content">
            <router-view></router-view>
          </div>
          <Footer />
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';
      import Header from 'components/Layout/Header';
      import Footer from 'components/Layout/Footer';

      @Component({
        components: {
          Header,
          Footer,
       }
      })
      export default class App extends Vue { }
      </script>`
    },

    {
      filename: 'test.vue',
      code: `
      <template>
        <div>
          <component :is="dynamicComponent"></component>
        </div>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';
      import Foo from 'components/Foo';
      import Bar from 'components/Bar';

      @Component({
        components: {
          Foo,
          Bar
        }
      })
      export default class App extends Vue {
        get dynamicComponent() {
          return '...'
        }
      }
      </script>`,
      options: [{ ignoreWhenBindingPresent: true }]
    },
    {
      filename: 'test.vue',
      code: `
      <template src="./test.html" />
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `
      <template src="./test.html"></template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          TheButton
        }
      })
      export default class App extends Vue { }
      </script>`
    },

    // computed properties
    {
      filename: 'test.vue',
      code: `
      <template>
        <div />
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          [foo.bar]: baz
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `
      <template>
        <div />
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          [foo]: Bar
        }
      })
      export default class App extends Vue { }
      </script>`
    },
    {
      filename: 'test.vue',
      code: `
      <template>
        <foo />
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          ['foo']: Foo
        }
      })
      export default class App extends Vue { }
      </script>`
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `
        <template>
          <div>
            <h2>Lorem ipsum</h2>
          </div>
        </template>
        <script lang="ts">
        import { Component, Vue } from 'vue-property-decorator';

        @Component({
          components: {
            TheButton
          }
        })
        export default class App extends Vue { }
        </script>
      `,
      errors: [
        {
          message:
            'The "TheButton" component has been registered but not used.',
          line: 12
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `
        <template>
          <div>
            <h2>Lorem ipsum</h2>
            <the_button />
          </div>
        </template>
        <script lang="ts">
        import { Component, Vue } from 'vue-property-decorator';

        @Component({
          components: {
            TheButton
          }
        })
        export default class App extends Vue { }
        </script>
      `,
      errors: [
        {
          message:
            'The "TheButton" component has been registered but not used.',
          line: 13
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `
        <template>
          <div>
            <h2>Lorem ipsum</h2>
            <TheButton />
          </div>
        </template>
        <script lang="ts">
        import { Component, Vue } from 'vue-property-decorator';

        @Component({
          components: {
            'the-button': TheButton
          }
        })
        export default class App extends Vue { }
        </script>
      `,
      errors: [
        {
          message:
            'The "the-button" component has been registered but not used.',
          line: 13
        }
      ]
    },
    // Setting: ignoreWhenBindingPresent
    {
      filename: 'test.vue',
      code: `
      <template>
        <div>
          <component :is="dynamicComponent"></component>
        </div>
      </template>
      <script lang="ts">
      import Foo from 'components/Foo';
      import Bar from 'components/Bar';

      @Component({
        components: {
          Foo,
          Bar
        }
      })
      export default class App extends Vue {
        get dynamicComponent() {
          return '...'
        }
      }
      </script>`,
      options: [{ ignoreWhenBindingPresent: false }],
      errors: [
        {
          message: 'The "Foo" component has been registered but not used.',
          line: 13
        },
        {
          message: 'The "Bar" component has been registered but not used.',
          line: 14
        }
      ]
    },

    // empty `:is`
    {
      filename: 'test.vue',
      code: `
      <template>
        <component :is=""></component>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          Foo
        }
      })
      export default class App extends Vue { }
      </script>`,
      errors: [
        {
          message: 'The "Foo" component has been registered but not used.',
          line: 10
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `
      <template>
        <component :is></component>
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          Foo
        }
      })
      export default class App extends Vue { }
      </script>`,
      errors: [
        {
          message: 'The "Foo" component has been registered but not used.',
          line: 10
        }
      ]
    },

    // computed properties
    {
      filename: 'test.vue',
      code: `
      <template>
        <div />
      </template>
      <script lang="ts">
      import { Component, Vue } from 'vue-property-decorator';

      @Component({
        components: {
          ['foo']: Foo,
          [\`bar\`]: Bar,
          ['baz']: Baz,
          [qux]: Qux,
          ...components,
          quux,
        }
      })
      export default class App extends Vue { }
      </script>`,
      errors: [
        {
          message: 'The "foo" component has been registered but not used.',
          line: 10
        },
        {
          message: 'The "bar" component has been registered but not used.',
          line: 11
        },
        {
          message: 'The "baz" component has been registered but not used.',
          line: 12
        },
        {
          message: 'The "quux" component has been registered but not used.',
          line: 15
        }
      ]
    }
  ]
})
