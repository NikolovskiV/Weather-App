<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit039c6aa434c88cf52e3876b0bdcd59a1
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit039c6aa434c88cf52e3876b0bdcd59a1::$classMap;

        }, null, ClassLoader::class);
    }
}
