<?php

use Behance\Network\Components\Localization\Constants\Translations;

class Threads extends Api2Inbox {

  public function index() {

    if ( !$this->_isUserEmailVerified( $this->user ) ) {

      $intl = $this->services[ 'intl' ];

      return $this->_json_output_error(
          ResponseCode::EXPECTATION_FAILED,
          $intl->translate(
              Translations::UNVERIFIED_MESSAGES_ACCESS,
              'You need to have a verified email address to access this feature.'
          )
      );

    } // if shouldCheckVerification and isUserEmailVerified
  }
}
