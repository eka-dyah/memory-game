import Board from "./Board/Board";
import Header from "./Header/Header";
import ScreenPlay from "./ScreenPlay/ScreenPlay";
import ScreenWin from "./ScreenWin/ScreenWin";
import Timer from "./Timer/Timer";

const Layout = ({
	content = [],
	click,
	seconds,
	play,
	resetButton,
	playButton,
	pauseButton,
	win
}) => (
	<div className="container-lg">
		<div className="row">
			<div className="col-12">
				<Header title="Memory Game" />
			</div>
			<div className="col-12">
				<Timer
					play={play}
					seconds={seconds}
					playButton={playButton}
					pauseButton={pauseButton}
					resetButton={resetButton}
				/>
			</div>
			<div className="col-12 position-relative mt-3">
				<ScreenPlay play={play} playButton={playButton} />
				<ScreenWin win={win} seconds={seconds} />
				<Board content={content} click={click} />
			</div>
		</div>
	</div>
);

export default Layout;
