import { model, Schema, Types } from 'mongoose';

import { Actions } from '../interfaces/enums';
import DatabaseCollectionNames from '../constants/databaseCollectionNames';
import Names from '../constants/databaseCollectionNames';

const logSchema = new Schema({
  actor: {
    type: Types.ObjectId,
    ref: Names.USER,
    required: true,
  },
  action: {
    type: String,
    enum: Actions,
    required: true,
  },
  victim: {
    type: String,
    enum: DatabaseCollectionNames,
    required: true,
  },
  description: String,
});

const Log = model(Names.LOG, logSchema);
export default Log;
