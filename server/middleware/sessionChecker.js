
/**
 * Manejo de errores
 */

const sessionChecker = (req, res, next) => {
  if (req.originalUrl !== '/admin/login' && !req.session.user && !req.cookies.user_sid) {
    res.redirect('/admin/login');
  } else {
    next();
  }    
};

export default sessionChecker;