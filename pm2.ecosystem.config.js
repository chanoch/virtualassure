module.exports = {
    apps: [
        {
            name: "virtualassure",
            script: "./dist/server/index.js",
            watch: true,
            env: {
                "NODE_ENV": "development",
            },
            env_production: {
                "NODE_ENV": "production"
            }
        }
    ]
}

