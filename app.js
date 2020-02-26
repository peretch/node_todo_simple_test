const { argv } = require('./config/yargs');
const { create, getList, update, deleteTask } = require('./todo/todo');
const colors = require('colors');

const command = argv._[0];

switch(command){
    case 'create':
        let newTask = create(argv.description);
        console.log(newTask);
    break;

    case 'list':
        const tasksList = getList();
        const doneTasks = tasksList.filter( task => task.completed === 'true');
        const pendingTasks = tasksList.filter( task => task.completed === 'false');
        console.log('--PENDING--'.yellow);
        pendingTasks.forEach( task => console.log(task));
        console.log('--DONE--'.green);
        doneTasks.forEach( task => console.log(task));
    break;

    case 'update':
        const updatedTask = update(argv.description, argv.completed);
        console.log(updatedTask);
    break;

    case 'delete':
        const deleted = deleteTask(argv.description);
        console.log(deleted);
    break;

    default:
        console.log('comman not found');
    break;
}