const ScreenWin = ({ win, seconds }) => {
	const time = `${Math.floor(seconds / 60)}:${
		seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
	}`;
	return (
		<>
			{win ? (
				<div
					className="position-absolute d-flex align-items-center justify-content-center"
					style={{
						top: 0,
						bottom: -5,
						left: 0,
						right: 0,
						zIndex: 1,
						backgroundColor: "rgb(230 230 230)",
					}}
				>
					<h2>YOU WIN</h2>
					<p>
						Your time: <b>{time}</b>
					</p>
				</div>
			) : null}
		</>
	);
};

export default ScreenWin;
