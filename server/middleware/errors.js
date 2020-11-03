
/**
 * Manejo de errores
 */
import createError from 'http-errors';

export default app => {
  // catch 404 and forward to error handler
  app.use(function (err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        return res.status(403).send({
          success: false,
          message: 'No token provided.'
        });
      }
  });
}