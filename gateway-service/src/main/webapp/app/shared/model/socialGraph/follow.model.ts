import { IUser } from 'app/shared/model/user.model';
import { Status } from 'app/shared/model/enumerations/status.model';

export interface IFollow {
  id?: number;
  status?: Status | null;
  follow?: IUser | null;
}

export const defaultValue: Readonly<IFollow> = {};
