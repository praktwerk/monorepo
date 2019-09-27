import { storiesOf } from '@storybook/vue'
import TableRow from './TableRow'

storiesOf('TableRow', module)
  .add('normal', () => ({
    components: { TableRow },
    template:
    `
      <TableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'Row 1',
        'email@email.com'
      ]
    })
  }))