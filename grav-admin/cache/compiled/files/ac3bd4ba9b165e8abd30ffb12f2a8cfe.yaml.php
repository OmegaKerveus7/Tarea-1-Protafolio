<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => 'C:/Users/tobia/Desktop/Programas/Programas VSC/DesarrolloWeb/Clase 1/Tarea 1/grav-admin/system/blueprints/flex/configure/compat.yaml',
    'modified' => 1784090298,
    'size' => 434,
    'data' => [
        'form' => [
            'compatibility' => [
                'type' => 'tab',
                'title' => 'PLUGIN_ADMIN.COMPATIBILITY',
                'fields' => [
                    'object.compat.events' => [
                        'type' => 'toggle',
                        'toggleable' => true,
                        'label' => 'PLUGIN_ADMIN.FLEX_ADMIN_EVENT_COMPAT',
                        'help' => 'PLUGIN_ADMIN.FLEX_ADMIN_EVENT_COMPAT_HELP',
                        'highlight' => 1,
                        'default' => 1,
                        'options' => [
                            1 => 'PLUGIN_ADMIN.ENABLED',
                            0 => 'PLUGIN_ADMIN.DISABLED'
                        ],
                        'validate' => [
                            'type' => 'bool'
                        ]
                    ]
                ]
            ]
        ]
    ]
];
