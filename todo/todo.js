const fs = require('fs');

let tasksList = [];

const create = desc => {
    load();
    const task = {
        desc,
        completed: false
    }

    tasksList.push(task);

    save();

    return task;
}

const load = () => {
    tasksList = require('../db/data.json');
}

const save = () => {
    const data = JSON.stringify(tasksList);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err){
            throw new Error('Error saving', err);
        }
    });
}

module.exports = {
    create
};