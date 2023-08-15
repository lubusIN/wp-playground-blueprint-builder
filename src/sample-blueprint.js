let blueprint = {
    $schema: "https://playground.wordpress.net/blueprint-schema.json",
    landingPage: "/wp-admin/",
    preferredVersions: {
        "php": "8.0",
        "wp": "latest"
    },
    landingPage: '/wp-admin/',
    preferredVersions: {
        php: '8.0',
        wp: 'latest',
    },
    steps: [
        {
            step: 'login',
            username: 'admin',
            password: 'password',
        },
        {
            step: "installPlugin",
            pluginZipFile: {
                resource: "wordpress.org/plugins",
                slug: "gutenberg"
            },
            options: {
                activate: true
            }
        },
        {
            step: "installTheme",
            pluginZipFile: {
                resource: "wordpress.org/themes",
                slug: "pendant"
            },
            options: {
                activate: true
            }
        },
    ],
};

export default blueprint;