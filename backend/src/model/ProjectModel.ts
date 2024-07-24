import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  srcPicture: {
    type: String,
    require: true,
  },
  hightlights: {
    type: Boolean,
    require: true,
    default: false,
  },
});

const ProjectModel = mongoose.model('project', ProjectSchema);

export default ProjectModel;
