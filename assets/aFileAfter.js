'use strict';

define(['be/cookie', 'be/localization'], function (cookie, localization) {
  'use strict';

  return {
    _showThirdPartyCookiePopup: function _showThirdPartyCookiePopup() {
      this._lazyload(['be/modal/simple'], function (modalSimple) {
        modalSimple({
          title: localization.translate('enable_third_party_cookies', 'Enable Third Party Cookies')
        }).then(reload, reload);
      }, function () {});
    }
  };
});