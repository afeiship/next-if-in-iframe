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
