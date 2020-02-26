const description = {
    demand: true,
    alias: 'd',
    description: 'Task content'
};

const completed = {
    default: true,
    alias: 'c',
    description: 'Task completed (default=true)'
};

const all = {
    default: false,
    alias: 's',
    description: 'Get all tasks (default=false)'
};

const argv = require('yargs')
    .command('create', 'Creates one task', { description })
    .command('update', 'Updates one task', { description, completed })
    .command('delete', 'Deletes one task', { description })
    .command('list', 'Returns all tasks unfinished', { all })
    .help()
    .argv;

module.exports = { argv };