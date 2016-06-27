<?php



class Threads extends Api2Inbox {

  public function index() {

    if ( !$this->_isUserEmailVerified( $this->user ) ) {



      return $this->_json_output_error(
          ResponseCode::EXPECTATION_FAILED,
          'You need to have a verified email address to access this feature.'



      );

    } // if shouldCheckVerification and isUserEmailVerified
  }
}
