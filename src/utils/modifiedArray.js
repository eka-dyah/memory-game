export const modifiedArray = (
	array = [],
	index1,
	property1,
	value1,
	index2 = null,
	property2,
	value2
) => {
    const newLists = [...array];
    newLists[index1] = {...newLists[index1], [property1]: value1}

	if (index2 !== null) {
		newLists[index2] = {...newLists[index2], [property2]: value2}
	}
	return newLists;
};
