import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PieFillingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagsPieFillingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tags {
  readonly id: string;
  readonly name?: string | null;
  readonly PieFillings?: (TagsPieFilling | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tags, TagsMetaData>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags, TagsMetaData>) => MutableModel<Tags, TagsMetaData> | void): Tags;
}

export declare class PieFilling {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly longdescription?: string | null;
  readonly tagss?: (TagsPieFilling | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PieFilling, PieFillingMetaData>);
  static copyOf(source: PieFilling, mutator: (draft: MutableModel<PieFilling, PieFillingMetaData>) => MutableModel<PieFilling, PieFillingMetaData> | void): PieFilling;
}

export declare class TagsPieFilling {
  readonly id: string;
  readonly tags: Tags;
  readonly pieFilling: PieFilling;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TagsPieFilling, TagsPieFillingMetaData>);
  static copyOf(source: TagsPieFilling, mutator: (draft: MutableModel<TagsPieFilling, TagsPieFillingMetaData>) => MutableModel<TagsPieFilling, TagsPieFillingMetaData> | void): TagsPieFilling;
}