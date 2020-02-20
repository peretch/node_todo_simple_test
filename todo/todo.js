const fs = require('fs');

let tasksData = [];

const create = desc => {
    load();

    const task = {
        desc,
        completed: false
    }

    tasksData.push(task);

    save();

    return task;
}

const list = () => {
    load();
    return tasksData;
}

const load = () => {
    try{
        tasksData = require('../db/data.json');
    }catch (err) {
        tasksData = [];
    }
};

const save = () => {
    const data = JSON.stringify(tasksData);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err){
            throw new Error('Error saving', err);
        }
    });
}

module.exports = {
    create,
    list
};