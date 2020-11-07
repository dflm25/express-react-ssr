
/**
 * Manejo de errores
 */

const sessionChecker = (req, res, next) => {
  if (req.originalUrl !== '/auth/login' && !req.session.user && !req.cookies.user_sid) {
    res.redirect('/auth/login');
  } else {
    next();
  }    
};

export default sessionChecker;