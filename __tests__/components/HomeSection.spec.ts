import { get, setupTest } from '@nuxt/test-utils'

describe('App', () => {
  setupTest({ server: true, waitFor: 1000 })

  it('renders the home section page', async () => {
    const { body } = await get('/')

    expect(body).toContain('<a>A Link</a>')
  })
})
