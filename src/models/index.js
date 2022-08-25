// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, PieFilling, TagsPieFilling } = initSchema(schema);

export {
  Tags,
  PieFilling,
  TagsPieFilling
};