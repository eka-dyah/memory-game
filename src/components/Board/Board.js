import Piece from "../Piece/Piece";

const Board = ({ content = [], click }) => {
	const renderContent = content.map((con, id) => (
		<Piece
			key={id}
			image={con.png}
			onClick={() => click(con, id)}
			active={con.active}
			selected={con.selected}
			name={con.name}
		/>
	));
	return (
		<div className="row justify-content-center align-items-center">
			{renderContent}
		</div>
	);
};

export default Board;
