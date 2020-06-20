const pino = require('pino')

// TODO: Add file path to log info
/*
   const pathName =
      path.basename(__dirname) + '/' + path.basename(__filename, '.js')
*/
const formatters = {
  bindings(bindings) {
    return { pid: '', hostname: '' }
  },
}

exports.logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters,
  prettyPrint: {
    colorize: true,
    translateTime: 'yyyy-mm-dd HH:MM:ss',
  },
})
