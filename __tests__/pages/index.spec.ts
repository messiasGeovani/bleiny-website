import { createPage, get, setupTest } from '@nuxt/test-utils'
import { Nuxt, Builder } from 'nuxt'
import nuxtConfig from '../../nuxt.config'

let nuxt = null

beforeAll(async () => {
  nuxt = new Nuxt({
    ...nuxtConfig,
    server: { port: 3001 },
    buildDir: '.nuxt-build-jest',
  })

  await new Builder(nuxt).build()

  await nuxt.server.listen(3001, 'localhost')
}, 300000)

describe('ssr', () => {
  setupTest({ server: true })

  it('should renders the index page', async () => {
    const { body } = await get('/')

    expect(body).toContain('<h1>Bleiny</h1>')
  })
})

describe('browser', () => {
  setupTest({ browser: true })

  it('renders the index page', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    expect(html).toContain('<h1>Bleiny</h1>')
  })
})
