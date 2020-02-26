const createOptions = {
    description: {
        demand: true,
        alias: 'd',
        description: 'Task content'
    }
}

const updateOptions = {
    description: {
        demand: true,
        alias: 'd',
        description: 'Task content'
    },
    completed: {
        default: true,
        alias: 'c',
        description: 'Task completed (default=true)'
    }
}

const deleteOptions = {
    description: {
        demand: true,
        alias: 'd',
        description: 'Task content'
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
    .command('create', 'Creates one task', createOptions)
    .command('update', 'Updates one task', updateOptions)
    .command('delete', 'Deletes one task', deleteOptions)
    .command('list', 'Returns all tasks unfinished', list_options)
    .help()
    .argv;

module.exports = { argv };