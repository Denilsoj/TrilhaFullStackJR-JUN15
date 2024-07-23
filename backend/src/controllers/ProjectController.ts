import { Request, Response } from 'express';
import ProjectModel from '../model/ProjectModel';

class ProjectController {
  async store(req: Request, res: Response) {
    const { title, description, hightlights = true } = req.body;
    const path = req.file?.path;
    try {
      const newProject = await ProjectModel.create({
        title,
        description,
        hightlights,
        srcPicture: path,
      });

      res.status(200).json({ newProject });
    } catch (error) {
      res.status(400).json({ errors: error });
    }
  }
  async index(req: Request, res: Response) {
    try {
      const projects = await ProjectModel.find({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(400).json({ errors: error });
    }
  }
  async update(req: Request, res: Response) {
    const path = req.file?.path;
    const validated = () => {
      if (path) {
        return {
          ...req.body,
          srcPicture: path,
        };
      }
      return {
        ...req.body,
      };
    };
    const { id } = req.params;
    try {
      const updateProject = await ProjectModel.findByIdAndUpdate(
        `${id}`,
        validated(),
      );

      res.status(200).json({ updateProject });
    } catch (error) {
      res.status(400).json({ errors: error });
    }
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const projectDected = await ProjectModel.findByIdAndDelete({ _id: id });

      res.status(200).json({ projectDected });
    } catch (error) {
      res.status(400).json({ errors: error });
    }
  }
}

export default new ProjectController();
