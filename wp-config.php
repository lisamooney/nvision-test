<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nvision-test' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_7?}kBil~PpKXGm kk]`!wUe#1%P?@3z.?I)4a/Z_G(>f>?~I/ wO]6M2o]z}VwM' );
define( 'SECURE_AUTH_KEY',  'toO3=0/jes-d(j7K6HYfvL_E~9.BZd~kk.@8Y)`QN?Nxzsr+:ZA;7QloJq-jn{!0' );
define( 'LOGGED_IN_KEY',    'JvW9RAPLUv&{0Cgc^cKujBg Bw{IY4YCKs->noz^f3&5lp1E8Hdz*Zh^(Q%~#,aK' );
define( 'NONCE_KEY',        'b}GyxDP2*o?nbU;@j*S0~Z~:AR7mc@$sQkA*ap@Y<!2yz=!5rfLR9^#ud!~j30*@' );
define( 'AUTH_SALT',        'P3fAHjMSZKht|H.[pU+w h uxF_lTqie#{Cu`o@;!J@fw@U?q`:yB6:ta/pr I-j' );
define( 'SECURE_AUTH_SALT', 'O&aVR3t[dL.!Gm?!/(rEl%-K.-!RqK:6V1)VMnEDqBdp?M1g&-ra#W{ThoakJ+[P' );
define( 'LOGGED_IN_SALT',   'pA95q6g~4-Y6SJXc^EreA`AL4K`#dmT1zF%rG-|^NrI>NV9%Z5C`v/$su]o-lhPT' );
define( 'NONCE_SALT',       '{oCz[|a8Fd#&$(#=?r3~WX4gry>6xVcS3ZF9Z%8<(M<t~G$#Jb *`yx;Fm5.O~?<' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
