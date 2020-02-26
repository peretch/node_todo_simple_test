const fs = require('fs');

let tasksData = [];

const create = description => {
    load();

    const task = {
        description,
        completed: false
    }

    tasksData.push(task);

    save();

    return task;
}

const update = (description, completed = true) => {
    load();

    let index = tasksData.findIndex( task => task.description === description );
    tasksData[index].completed = completed;

    save();
    return tasksData[index];
}

const getList = () => {
    load();
    return tasksData;
}

const load = () => {
    try{
        tasksData = require('../db/data.json');
    }catch (err) {
        tasksData = [];
    }
}

const save = () => {
    const data = JSON.stringify(tasksData);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err){
            throw new Error('Error saving', err);
        }
    });
}

const deleteTask = description => {
    load();
    const originalSize = tasksData.length;
    tasksData = tasksData.filter( task => task.description !== description );
    save();
    return originalSize > tasksData.length;
}

module.exports = {
    create,
    getList,
    update,
    deleteTask
};