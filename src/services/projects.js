const Project = require("../models/projects");

module.exports = {
    getProjects: async () => {
        let projects = await Project.find().exec();
        return projects;
    },
    getProjectById: async (id) => {
        let project = await Project.findById(id).lean().exec();
        return project;
    },
      
    createProject: async (requestBody) => {
        const project = new Project({
            name: requestBody.name,
            projectLink: requestBody.projectLink,
            description: requestBody.description,
            overview: requestBody.overview,
            imageUrl: requestBody.imageUrl,
            tools: requestBody.tools,
        });
        return await project.save();
    },
    
    updateProject: async (id, projectData) => {
        return await Project.findByIdAndUpdate(id, projectData, {
            new: true,
        })
            .lean()
            .exec();
    },
    
    deleteProject: async (id) => {
        await Project.findByIdAndDelete(id).exec();
    },
}