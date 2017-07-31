/* @flow */
/* eslint-disable import/prefer-default-export */
export type Action = {|
	type: string;
	payload?: Object;
	error?: Object | Error;
|};
