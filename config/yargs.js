const create_options = {
    description: {
        demand: true,
        alias: 'd',
        description: 'Task content'
    }
}

const update_options = {
    description: {
        demand: true,
        alias: 'd',
        description: 'Task content'
    },
    completed: {
        default: true,
        alias: 's',
        description: 'Task completed (default=true)'
    }
}

const list_options = {
    all: {
        default: false,
        alias: 's',
        description: 'Get all tasks (default=false)'
    }
}

const argv = require('yargs')
    .command('create', 'Creates one task', create_options)
    .command('update', 'Updates one task', update_options)
    .command('list', 'Returns all tasks unfinished', list_options)
    .help()
    .argv;

module.exports = { argv };