import { Document } from "./doc";

export type FeatureTab = {
  id: string;
  title: string;
  documents?: Document[];
  image: string;
};
