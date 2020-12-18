import "./Timer.css";

const Timer = ({
	playButton,
	pauseButton,
	play = false,
	seconds = 0,
	resetButton,
}) => (
	<div className="Timer row justify-content-center my-2">
		{play ? (
			<button onClick={pauseButton}>
				<i className="fa fa-pause" aria-hidden="true"></i>
			</button>
		) : (
			<button onClick={playButton}>
				<i className="fa fa-play" aria-hidden="true"></i>
			</button>
		)}
		<p>
			{Math.floor(seconds / 60)}:
			{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
		</p>
		{play ? null : (
			<button onClick={resetButton}>
				<i className="fa fa-repeat" aria-hidden="true"></i>
			</button>
		)}
	</div>
);

export default Timer;
