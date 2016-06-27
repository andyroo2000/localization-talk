'use strict';

define(['be/cookie'], function (cookie) {
  'use strict';

  return {
    _showThirdPartyCookiePopup: function _showThirdPartyCookiePopup() {
      this._lazyload(['be/modal/simple'], function (modalSimple) {
        modalSimple({
          title: 'Enable Third Party Cookies'
        }).then(reload, reload);
      }, function () {});
    }
  };
});