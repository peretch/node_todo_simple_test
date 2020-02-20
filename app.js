const { argv } = require('./config/yargs');
const { create, list } = require('./todo/todo');

const command = argv._[0];

switch(command){
    case 'create':
        let newTask = create(argv.description);
        console.log(newTask);
    break;
    case 'list':
        const tasksList = list();
        const doneTasks = tasksList.filter( task => task.completed === true);
        const pendingTasks = tasksList.filter( task => task.completed === false);
        console.log('--PENDING--');
        pendingTasks.forEach( task => console.log(task));
        console.log('--DONE--');
        doneTasks.forEach( task => console.log(task));
    break;
    case 'update':
        console.log('update task');
    break;

    default:
        console.log('comman not found');
    break;
}