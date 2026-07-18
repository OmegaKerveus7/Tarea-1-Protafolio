<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => 'C:/Users/tobia/Desktop/Programas/Programas VSC/DesarrolloWeb/Clase 1/Tarea 1/grav-admin/user/config/system.yaml',
    'modified' => 1784387718,
    'size' => 380,
    'data' => [
        'home' => [
            'alias' => '/home'
        ],
        'pages' => [
            'theme' => 'portfolio'
        ],
        'cache' => [
            'enabled' => true,
            'check' => [
                'method' => 'file'
            ]
        ],
        'assets' => [
            'css_pipeline' => false,
            'js_pipeline' => false,
            'enable_asset_timestamp' => false
        ],
        'errors' => [
            'display' => true,
            'log' => true
        ],
        'debugger' => [
            'enabled' => false,
            'provider' => 'clockwork'
        ],
        'gpm' => [
            'releases' => 'stable',
            'verify_peer' => true
        ],
        'updates' => [
            'safe_upgrade' => true,
            'safe_upgrade_snapshot_limit' => 5
        ]
    ]
];
