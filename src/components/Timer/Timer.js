import { useRef } from "react";
import "./Timer.css";

const Timer = ({
	playButton,
	pauseButton,
	play = false,
	seconds = 0,
	resetButton,
}) => {
	const resetTextRef = useRef();
	const reset = () => {
		resetTextRef.current.classList.remove("invisible");
		resetTextRef.current.classList.add("visible");
		resetTextRef.current.classList.add("upnone");
		setTimeout(() => {
			resetTextRef.current.classList.add("invisible");
			resetTextRef.current.classList.remove("visible");
			resetTextRef.current.classList.remove("upnone");
		}, 1300);
		resetButton();
	};
	return (
		<div>
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
					<button onClick={reset}>
						<i className="fa fa-repeat" aria-hidden="true"></i>
					</button>
				)}
				<div className="toasty row justify-content-center invisible">
					<p className="text-center my-0" ref={resetTextRef}>
						Reseted
					</p>
				</div>
			</div>
		</div>
	);
};
export default Timer;
