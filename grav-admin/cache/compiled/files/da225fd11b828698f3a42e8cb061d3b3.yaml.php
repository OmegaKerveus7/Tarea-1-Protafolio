<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => 'C:/Users/tobia/Desktop/Programas/Programas VSC/DesarrolloWeb/Clase 1/Tarea 1/grav-admin/user/plugins/api/blueprints/user/account.yaml',
    'modified' => 1784090298,
    'size' => 439,
    'data' => [
        'extends@' => [
            'type' => 'user/account',
            'context' => 'system://blueprints'
        ],
        'form' => [
            'fields' => [
                'api_check' => [
                    'type' => 'conditional',
                    'condition' => 'config.plugins.api.enabled',
                    'fields' => [
                        'api_section' => [
                            'title' => 'API Keys',
                            'type' => 'section',
                            'underline' => true
                        ],
                        'api_keys_display' => [
                            'type' => 'api_keys',
                            'label' => false
                        ]
                    ]
                ]
            ]
        ]
    ]
];
