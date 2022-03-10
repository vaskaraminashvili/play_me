const Ziggy = { "url": "http:\/\/play_me.test", "port": null, "defaults": {}, "routes": { "ignition.healthCheck": { "uri": "_ignition\/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition\/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition\/update-config", "methods": ["POST"] }, "admin.admin": { "uri": "admin", "methods": ["GET", "HEAD"] }, "admin.users": { "uri": "admin\/users", "methods": ["GET", "HEAD"] } } };

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export default { Ziggy };
