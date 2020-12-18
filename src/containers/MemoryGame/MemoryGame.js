import { useCallback, useEffect, useState } from "react";

import Layout from "../../components/Layout";
import { generateRandomLists } from "../../utils/generateRandomLists";
import { modifiedArray } from "../../utils/modifiedArray";

import content from "../../data/data.json";
import { checkWin } from "../../utils/checkWin";

const MemoryGame = () => {
	const [itemLists, setItemLists] = useState([]);
	const [selected, setSelected] = useState(null);
	const [checking, setChecking] = useState(false);
	const [play, setPlay] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [win, setWin] = useState(false);
	const [inv, setInv] = useState(null);
	
	const generateTile = useCallback(() => {
		console.log(play)
		const items = generateRandomLists(content, 10);
		clearInterval(inv);
		setInv(null);
		setWin(false);
		setItemLists(items);
		setSeconds(0);
	}, [inv]);

	useEffect(() => {
		generateTile();
	}, [generateTile]);

	const playButton = () => {
		if (win) {
			generateTile();
		}
		setPlay(true);
		setWin(false);
		console.log("play");
		let i = seconds;
		if (win) i = 0;
		setInv(setInterval(() => {
			i++;
			setSeconds(seconds + 1);
		}, 1000))
	};

	const pauseButton = () => {
		setPlay(false);
		clearInterval(inv);
		setInv(null);
	};

	const clicked = (id, index) => {
		if (
			id.active === false &&
			id.selected === false &&
			checking === false
		) {
			const newLists = modifiedArray(itemLists, index, "selected", true);
			setItemLists(newLists);
			if (selected === null) {
				setSelected([id, index]);
			} else {
				setChecking(true);
				setTimeout(() => {
					if (selected[0].id === id.id) {
						const newLists = modifiedArray(
							itemLists,
							index,
							"active",
							true,
							selected[1],
							"active",
							true
						);
						const newLists2 = modifiedArray(
							newLists,
							index,
							"selected",
							false,
							selected[1],
							"selected",
							false
						);
						setItemLists(newLists2);
						setSelected(null);
						setChecking(false);
						if (checkWin(newLists2)) {
							setWin(true);
							setPlay(false);
							pauseButton();
						}
					} else {
						const newLists = modifiedArray(
							itemLists,
							index,
							"selected",
							false,
							selected[1],
							"selected",
							false
						);
						setItemLists(newLists);
						setSelected(null);
						setChecking(false);
					}
				}, 500);
			}
		}
	};

	return (
		<>
			<Layout
				content={itemLists}
				click={clicked}
				seconds={seconds}
				resetButton={generateTile}
				playButton={playButton}
				pauseButton={pauseButton}
				play={play}
				win={win}
			/>
		</>
	);
};

export default MemoryGame;
