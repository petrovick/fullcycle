<?php
return [
    'api-tools-versioning' => [
        'default_version' => 1,
        'uri' => [
            0 => 'project.rest.users',
        ],
    ],
    'service_manager' => [
        'factories' => [
            \Project\V1\Rest\Users\UsersResource::class => \Project\V1\Rest\Users\UsersResourceFactory::class,
        ],
    ],
    'router' => [
        'routes' => [
            'project.rest.users' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/users[/:users_id]',
                    'defaults' => [
                        'controller' => 'Project\\V1\\Rest\\Users\\Controller',
                    ],
                ],
            ],
        ],
    ],
    'api-tools-rest' => [
        'Project\\V1\\Rest\\Users\\Controller' => [
            'listener' => \Project\V1\Rest\Users\UsersResource::class,
            'route_name' => 'project.rest.users',
            'route_identifier_name' => 'users_id',
            'collection_name' => 'users',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Project\V1\Rest\Users\UsersEntity::class,
            'collection_class' => \Project\V1\Rest\Users\UsersCollection::class,
            'service_name' => 'users',
        ],
    ],
    'api-tools-content-negotiation' => [
        'controllers' => [
            'Project\\V1\\Rest\\Users\\Controller' => 'HalJson',
        ],
        'accept_whitelist' => [
            'Project\\V1\\Rest\\Users\\Controller' => [
                0 => 'application/vnd.project.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
        ],
        'content_type_whitelist' => [
            'Project\\V1\\Rest\\Users\\Controller' => [
                0 => 'application/vnd.project.v1+json',
                1 => 'application/json',
            ],
        ],
    ],
    'api-tools-hal' => [
        'metadata_map' => [
            \Project\V1\Rest\Users\UsersEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'project.rest.users',
                'route_identifier_name' => 'users_id',
                'hydrator' => \Laminas\Hydrator\ArraySerializable::class,
            ],
            \Project\V1\Rest\Users\UsersCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'project.rest.users',
                'route_identifier_name' => 'users_id',
                'is_collection' => true,
            ],
        ],
    ],
];
