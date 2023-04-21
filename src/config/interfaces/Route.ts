import { ReactElement } from 'react';

export interface Route {
  path: String;
  name: String;
  element: ReactElement;
  icon: ReactElement;
}
