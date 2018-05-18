exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://demo:password@ds229290.mlab.com:29290/habit-tracker';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
    'mongodb://demo:password@ds229290.mlab.com:29290/habit-tracker';
exports.PORT = process.env.PORT || 8080;
