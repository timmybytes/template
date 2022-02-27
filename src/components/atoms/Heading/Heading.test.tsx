import { render } from '@test/test-utils'
import tw from 'twin.macro'
import { Heading } from './Heading'

describe('Heading', () => {
  it('should render', () => {
    render(
      <Heading as='h3' customCss={tw`text-red-600`}>
        A Heading
      </Heading>
    )
  })
})
