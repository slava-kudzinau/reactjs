import * as Constants from 'app/feed/constants';

let create = (text) => {
	return {
		type: Constants.ADD_FEED_ITEM,
		text
	};
};

let remove = (id) => {
	return {
		type: Constants.REMOVE_FEED_ITEM,
		id
	};
};

let update = (data) => {
	return {
		type: Constants.UPDATE_FEED_ITEM,
		...data
	};
};

export {create, remove, update};