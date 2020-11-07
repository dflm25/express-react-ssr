
/**
 * Put here all files with routes
 */

import admin  from './admin';
import auth  from './auth';
import web  from './web';

export default (app) => {
    // app.use(web);
    app.use('/admin', admin);
    app.use('/auth', auth);
}