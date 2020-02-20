const { argv } = require('./config/yargs');
const { create } = require('./todo/todo');

const command = argv._[0];

switch(command){
    case 'create':
        let newTask = create(argv.description);
        console.log(newTask);
    break;
    case 'list':
        console.log('list task');
    break;
    case 'update':
        console.log('update task');
    break;

    default:
        console.log('comman not found');
    break;
}