import "./Piece.css";

const Piece = ({
	onClick,
	image,
	name,
	active = false,
	selected = false,
	ref,
}) => {
	return (
		<div className="col-2 col-md-1" onClick={onClick} ref={ref}>
			<div className="row align-items-center justify-content-center">
				<div
					className={`Piece col-11 mt-1 py-2 text-center ${
						active ? "active" : null
					} ${selected ? "selected" : null}`}
				>
					<img
						height="100%"
						width="100%"
						style={{maxHeight: 50, maxWidth: 50, minHeight: 35, minWidth: 35}}
						src={process.env.PUBLIC_URL + image}
						alt={name}
					/>
				</div>
			</div>
		</div>
	);
};

export default Piece;
