import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/',
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home'});
});
router.get('/home',
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET About Me page. */
router.get('/about', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About Me', page: 'about'});
});

/* GET Projects page. */
router.get('/projects', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'My projects', page: 'projects'});
});

/* GET Services page. */
router.get('/services', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'My Services', page: 'services'});
});

//Router contact page with another view.
router.get('/contact', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('view2', { title: 'Contact Me', page: 'contact'});
});

export default router;