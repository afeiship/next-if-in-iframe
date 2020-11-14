/*!
 * name: @jswork/next-is-in-iframe
 * description: Identify if a webpage is being loaded inside an iframe or directly into the browser window.
 * homepage: https://github.com/afeiship/next-is-in-iframe
 * version: 1.0.0
 * date: 2020-11-14T01:42:35.101Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.isInIframe = function () {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isInIframe;
  }
})();
