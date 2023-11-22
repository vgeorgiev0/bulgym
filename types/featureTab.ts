export enum FeatureTabEnum {
  SINGLE = "single",
  MULTIPLE = "multiple",
}

export type FeatureTab = {
  id: string;
  title: string;
  documents?: any;
  multipleDocuments?: boolean;
  image: string;
  type: FeatureTabEnum;
};
