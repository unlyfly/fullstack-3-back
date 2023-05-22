const Project = require("../models/projects");

module.exports = {
    getProject: async () => {
        let projects = await Project.find().exec();
        return projects;
    }
}