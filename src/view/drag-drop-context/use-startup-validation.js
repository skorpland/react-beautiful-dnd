// @flow
import React from 'react';
 
import checkReactVersion from './check-react-version';
import checkDoctype from './check-doctype';
import useDevSetupWarning from '../use-dev-setup-warning';

export default function useStartupValidation() {
  useDevSetupWarning(() => {
 
    checkDoctype(document);
  }, []);
}
