<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application for file storage.
    |
    */

    'default' => env('FILESYSTEM_DISK', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Below you may configure as many filesystem disks as necessary, and you
    | may even configure multiple disks for the same driver. Examples for
    | most supported storage drivers are configured here for reference.
    |
    | Supported drivers: "local", "ftp", "sftp", "s3"
    |
    */

    /*
    |--------------------------------------------------------------------------
    | Active Storage Disk
    |--------------------------------------------------------------------------
    |
    | This determines which disk is used for file uploads (images, media, etc.)
    | Set to 'oci' in production to use Oracle Cloud Object Storage,
    | or 'public' for local storage during development.
    |
    */

    'uploads' => env('STORAGE_DISK', 'public'),

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app/private'),
            'serve' => true,
            'throw' => false,
            'report' => false,
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
            'throw' => false,
            'report' => false,
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
            'endpoint' => env('AWS_ENDPOINT'),
            'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
            'throw' => false,
            'report' => false,
        ],

        /*
        |--------------------------------------------------------------------------
        | Oracle Cloud Infrastructure Object Storage
        |--------------------------------------------------------------------------
        |
        | OCI Object Storage with S3-compatible API.
        | Endpoint format: https://{namespace}.compat.objectstorage.{region}.oraclecloud.com
        |
        */

        'oci' => [
            'driver' => 's3',
            'key' => env('OCI_ACCESS_KEY_ID'),
            'secret' => env('OCI_SECRET_ACCESS_KEY'),
            'region' => env('OCI_REGION', 'me-jeddah-1'),
            'bucket' => env('OCI_BUCKET', 'bucket-beyond-website'),
            'endpoint' => env('OCI_ENDPOINT', 'https://axirnwmffdrl.compat.objectstorage.me-jeddah-1.oraclecloud.com'),
            'url' => env('OCI_URL'), // Optional CDN URL
            'visibility' => 'public',
            'use_path_style_endpoint' => true,
            'throw' => false,
            'report' => false,
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Symbolic Links
    |--------------------------------------------------------------------------
    |
    | Here you may configure the symbolic links that will be created when the
    | `storage:link` Artisan command is executed. The array keys should be
    | the locations of the links and the values should be their targets.
    |
    */

    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],

];
