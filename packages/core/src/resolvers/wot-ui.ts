import type { ComponentResolver } from '../types'

import { kebabCase } from '../utils'

export function WotUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^Wd[A-Z]/)) {
        const compName = kebabCase(name)
        return {
          name,
          from: `@wot-ui/ui/components/${compName}/${compName}.vue`,
        }
      }
    },
  }
}
