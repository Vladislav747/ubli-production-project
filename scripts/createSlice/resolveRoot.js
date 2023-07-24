const path = require('path');
/**
 * Перейти в корень
 * @param segments
 * @returns {string}
 */
module.exports = (...segments) => path.resolve(__dirname, '..', '..', ...segments);
