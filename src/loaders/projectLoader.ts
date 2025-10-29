import { projects } from "../data/projects";

export const projectLoader = async () => {
  const data = projects;

  const updatedData = {
    length: data.length,
    projects: data,
  };

  return updatedData;
};
