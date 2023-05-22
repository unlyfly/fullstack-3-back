const ProjectService = require("../services/projects");

module.exports = {
    getProject: async (req, res) => {
    try{
        let project = await ProjectService.getProject();
        res.json({
            project: project,
        });
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: "Projects not well recived!"
        });
    }}
}