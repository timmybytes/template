import { render } from '@test/test-utils'
import { Parallax } from './Parallax'

describe('Parallax', () => {
  it('should render', () => {
    render(
      <Parallax>
        {' '}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
        reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
        quibusdam non exercitationem quo repellendus dignissimos odit fuga
        suscipit ea dolorum?
      </Parallax>
    )
  })
})
