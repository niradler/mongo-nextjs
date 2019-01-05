require('dotenv').config()
const compression = require('compression')
const express = require('express')
const next = require('next')
const {parse} = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler();
const render = app.render.bind(app);
const views = (req, res, path,render, handle) => ({
  handle: (params) => handle(req, res, path, params),
  render: (params) => render(req, res, path, params)
})
const Home = require('./server/controllers/Home');

const main = async() => {
  try {
    await app.prepare();
    const server = express();
    server.use((req, res, next) => {
      const parsedUrl = parse(req.url, true);
      req.parsedUrl = parsedUrl;
      res.views = views(req, res, parsedUrl.pathname, render, handle);
      next();
    });
    server.use(compression());

    server.get('/tags-server', async(req, res) => {   
      const tags = await Home.getTags();
      return res.views.render(tags)
    })

    server.get('/tags-client', async(req, res) => {   
      return res.views.handle()
    })

    server.get('/api/get-tags', async(req, res) => {   
      const tags = await Home.getTags();
      return res.json(tags)
    })

    server.get('*', async(req, res) => {     
      return res.views.render();
    })

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
      if (err) 
        throw err
      console.log('> Ready on http://localhost:3000')
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main();