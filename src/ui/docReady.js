// Based on https://github.com/nickeljew/es6-docready

export default (callback) => {
  function completed() {
    document.removeEventListener('DOMContentLoaded', completed, false);
    window.removeEventListener('load', completed, false);
    callback();
  }

  // Events.on(document, 'DOMContentLoaded', completed)

  if (document.readyState === 'complete') {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    setTimeout(callback);
  } else {
    // Use the handy event callback
    document.addEventListener('DOMContentLoaded', completed, false);

    // A fallback to window.onload, that will always work
    window.addEventListener('load', completed, false);
  }
};
