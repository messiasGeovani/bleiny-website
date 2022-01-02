import { get, setupTest } from '@nuxt/test-utils'
import config from '../../nuxt.config'

describe('App', () => {
  setupTest({ server: true, config, build: true })

  it('renders the index page', async () => {
    const { body } = await get('/')

    expect(body).toContain('<a>A Link</a>')
  })
})
