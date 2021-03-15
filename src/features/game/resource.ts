export type ResourceUrl = string;

export enum ResourceType {
  People = "people",
  Starship = "starships",
}

export default interface Resource {
  url: ResourceUrl;
  id: string;
  created: string;
  edited: string;
}
