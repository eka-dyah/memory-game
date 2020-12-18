export const generateRandomLists = (itemList = [], number = 2) => {
	let itemLists = [];
	if (number % 2 === 0) {
		itemLists = Array(number).fill(null);
	} else {
		itemLists = Array(number - (number % 2)).fill(null);
	}

	const trackIndex = [];
	for (let i = 0; i < itemLists.length; i++) {
		if (itemLists[i] !== null) {
			continue;
		}

		trackIndex.push(i);

		const itemIndex = Math.floor(Math.random() * itemList.length);
		itemLists[i] = itemList[itemIndex];

		let randomNum = Math.floor(Math.random() * itemLists.length);
		while (trackIndex.indexOf(randomNum) !== -1 && trackIndex.length < itemLists.length) {
			randomNum = Math.floor(Math.random() * itemLists.length);
		}

		trackIndex.push(randomNum);
		itemLists[randomNum] = itemList[itemIndex];
	}

	return itemLists;
};
