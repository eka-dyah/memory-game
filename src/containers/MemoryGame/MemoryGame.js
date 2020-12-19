import { Component } from "react";

import Layout from "../../components/Layout";
import { generateRandomLists } from "../../utils/generateRandomLists";
import { modifiedArray } from "../../utils/modifiedArray";

import content from "../../data/data.json";
import { checkWin } from "../../utils/checkWin";

class MemoryGame extends Component {
	state = {
		itemLists: [],
		selected: null,
		checking: false,
		play: false,
		seconds: 0,
		win: false,
	};

	componentDidMount() {
		this.generateTile();
	}

	generateTile = () => {
		if (!this.state.play) {
			const items = generateRandomLists(content, 48);
			this.setState({
				win: false,
				itemLists: items,
				seconds: 0,
			});
		}
	};

	resetButton = () => {
		this.generateTile();
	};

	playButton = () => {
		if (this.state.win) {
			this.generateTile();
		}
		this.setState({
			play: true,
			win: false,
		});

		this.interval = setInterval(() => {
			this.setState((state) => ({ seconds: state.seconds + 1 }));
		}, 1000);
	};

	pauseButton = () => {
		this.setState({
			play: false,
		});

		clearInterval(this.interval);
		this.interval = null;
	};

	clicked = (id, index) => {
		if (
			id.active === false &&
			id.selected === false &&
			this.state.checking === false
		) {
			const newLists = modifiedArray(
				this.state.itemLists,
				index,
				"selected",
				true
			);
			this.setState({ itemLists: newLists });

			if (this.state.selected === null) {
				this.setState({ selected: [id, index] });
			} else {
				this.setState({ checking: true });
				setTimeout(() => {
					if (this.state.selected[0].id === id.id) {
						const newLists = modifiedArray(
							this.state.itemLists,
							index,
							"active",
							true,
							this.state.selected[1],
							"active",
							true
						);
						const newLists2 = modifiedArray(
							newLists,
							index,
							"selected",
							false,
							this.state.selected[1],
							"selected",
							false
						);
						this.setState({
							itemLists: newLists2,
							selected: null,
							checking: false,
						});
						if (checkWin(newLists2)) {
							this.setState({
								win: true,
								play: false,
							});
							this.pauseButton();
						}
					} else {
						const newLists = modifiedArray(
							this.state.itemLists,
							index,
							"selected",
							false,
							this.state.selected[1],
							"selected",
							false
						);
						this.setState({
							itemLists: newLists,
							selected: null,
							checking: false,
						});
					}
				}, 500);
			}
		}
	};

	render() {
		return (
			<Layout
				content={this.state.itemLists}
				click={this.clicked}
				seconds={this.state.seconds}
				resetButton={this.generateTile}
				playButton={this.playButton}
				pauseButton={this.pauseButton}
				play={this.state.play}
				win={this.state.win}
			/>
		);
	}
}

export default MemoryGame;
