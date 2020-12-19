const ScreenPlay = ({play, playButton}) => {
	return (
		<>
			{play ? null : (
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
					<button
						onClick={playButton}
						className="bg-transparent border-0"
					>
						<i
							className="fa fa-play-circle-o"
							aria-hidden="true"
							style={{ fontSize: "5em" }}
						></i>
					</button>
				</div>
			)}
		</>
	);
}

export default ScreenPlay;
