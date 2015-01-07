<?php

if (!defined('DEBUG_MODE')) { die(); }

require APP_PATH.'lib/modules.php';
require APP_PATH.'lib/config.php';
require APP_PATH.'lib/auth.php';
require APP_PATH.'lib/session.php';
require APP_PATH.'lib/format.php';
require APP_PATH.'lib/router.php';
require APP_PATH.'lib/request.php';
require APP_PATH.'lib/cache.php';
require APP_PATH.'lib/output.php';
require APP_PATH.'lib/crypt.php';
require APP_PATH.'lib/db.php';
require APP_PATH.'lib/servers.php';

if (!class_exists('Hm_Functions')) {
    class Hm_Functions {
        public static function setcookie($name, $value, $lifetime=0, $path='', $domain='', $secure=false, $html_only='') {
            return setcookie($name, $value, $lifetime, $path, $domain, $secure, $html_only);
        }
        public static function header($header) {
            return header($header);
        }
        public static function cease() {
            die();
        }
    }
}
?>
