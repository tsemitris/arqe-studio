import type { Params } from "react-router-dom";
import { projects } from "../data/projects";

interface IInteriorLoader {
  params: Params<string>;
}

export const interiorLoader = async ({ params }: IInteriorLoader) => {
  const data = projects.find((p) => p.id === Number(params.id));
  return data;
};
