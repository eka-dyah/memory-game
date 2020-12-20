import Board from "./Board/Board";
import Footer from "./Footer/Footer";
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
	win,
}) => (
	<div className="container-lg d-flex flex-column h-100">
		<div
			className="d-flex flex-wrap align-content-start"
			style={{ flexGrow: 1 }}
		>
			<div
				className="col-12"
				style={{
					paddingBottom: 15,
					margin: "3rem 0px 1.5rem 0px",
					borderBottom: "1px solid #ddd",
				}}
			>
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
			<div className="col-12 position-relative mt-3 px-0">
				<ScreenPlay play={play} playButton={playButton} />
				<ScreenWin win={win} seconds={seconds} />
				<Board content={content} click={click} />
			</div>
		</div>
		<Footer />
	</div>
);

export default Layout;
