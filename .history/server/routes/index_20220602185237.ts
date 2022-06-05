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


router.get('/about', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About Me', page: 'about'});
});


router.get('/projects', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'My projects', page: 'projects'});
});


router.get('/services', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'My Services', page: 'services'});
});


router.get('/contact', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact Me', page: 'contact'});
});

export default router;