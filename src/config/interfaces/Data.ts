import { DataItems } from './DataItems';

export interface Data {
  loading: Boolean;
  data: Array<DataItems>;
  error: String;
}
