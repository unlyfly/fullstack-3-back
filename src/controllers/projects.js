const ProjectService = require("../services/projects");

module.exports = {
    getProjects: async (req, res) => {
        try{
            let projects = await ProjectService.getProjects();
            res.json({
                projects: projects,
            });
        } catch(err){
            console.log(err);
            res.status(500).json({
                message: "Projects not well recived!"
            });
        }
    },
    
    getProjectById: async (req, res) => {
        try {
            let project = await ProjectService.getProjectById(req.params.id);
            res.json({
                project: project,
            });
        } catch (err) {
            console.error("err", err);
            res.status(404).json({
                message: "Project was not found",
            });
        }
    },
      
    createProject: async (req, res) => {
        try {
            let projectSaved = await ProjectService.createProject(req.body);
            res.status(201).json({
            message: "Project created",
            projectSaved: projectSaved,
            });
        } catch (err) {
            console.error("err", err);
            res.status(400).json({
            message: "Was not able to create the project",
            });
        }
    },
    
    updateProject: async (req, res) => {
        try {
            const { id } = req.params;
            const projectData = req.body;
        
            const updatedProject = await ProjectService.updateProject(id, projectData);
        
            res.status(200).json(updatedProject);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal error" });
        }
    },
    
    deleteProject: async (req, res) => {
        try {
            const { id } = req.params;
        
            await ProjectService.deleteProject(id);
        
            res.status(204).json();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal error" });
        }
    },
};