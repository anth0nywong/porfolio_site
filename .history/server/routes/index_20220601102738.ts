import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', // <- when we get this one
//controller
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render/*generate*/('index', { title: 'Home' /*object*/, page: 'home'});
});


router.get('/home',
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home' /*object*/, page: 'home'});
});


router.get('/about', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About Me' /*object*/, page: 'about'});
});


router.get('/projects', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'My projects' /*object*/, page: 'projects'});
});


router.get('/services', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'My Services' /*object*/, page: 'services'});
});


router.get('/contact', 
function(req : express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact Me' /*object*/, page: 'contact'});
});

export default router;