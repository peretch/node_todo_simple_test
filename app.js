const { argv } = require('./config/yargs');
const { create, getList } = require('./todo/todo');
const colors = require('colors');

const command = argv._[0];

switch(command){
    case 'create':
        let newTask = create(argv.description);
        console.log(newTask);
    break;
    case 'list':
        const tasksList = getList();
        const doneTasks = tasksList.filter( task => task.completed === true);
        const pendingTasks = tasksList.filter( task => task.completed === false);
        console.log('--PENDING--'.yellow);
        pendingTasks.forEach( task => console.log(task));
        console.log('--DONE--'.green);
        doneTasks.forEach( task => console.log(task));
    break;
    case 'update':
        console.log('update task');
    break;

    default:
        console.log('comman not found');
    break;
}