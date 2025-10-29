import type { IRoomData } from "./IRoomData";
import type { IProject } from "./IProject";

export interface IProjectExt extends IProject {
  interior: IRoomData[];
  decorDesigner: string;
  client: string;
}
