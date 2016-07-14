<?php

use Behance\Network\Components\Localization\Constants\Translations;

$apple  = $intl->translate( Translations::APPLE_CONSTANT, "Are you sure you want an apple?" );
$banana = $intl->translate( Translations::BANANA_CONSTANT, "Are you sure you want a banana?" );

$my_string = ( $is_apple ) ? $apple : $banana;