import React from 'react';
import { IBreadCrumb } from '.';

export default interface IRoute {
  path?: string;
  exact?: boolean;
  layout?: React.FC<any>;
  component?: any;
  guard?: React.FC;
  breadcrumb?: IBreadCrumb[];
}
