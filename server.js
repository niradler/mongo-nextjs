require('dotenv').config()
const express = require('express')
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Home = require('./server/controllers/Home');

const main = async () => {
try {
    await app.prepare();
    const server = express();

      server.get('*', async  (req, res) => {
        const parsedUrl = parse(req.url, true);
        const collections = await Home.getTags();
        console.log({collections})
        return app.render(req, res, parsedUrl.pathname, {collections}) //handle(req, res,'/',{test:"test"})
      })

      server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
      })
} catch (error) {
    console.error(error)
    process.exit(1)
}
}

main();