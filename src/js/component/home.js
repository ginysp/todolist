import React, { useState, useEffect } from "react";

export function Home() {
	let [lista, setLista] = useState([]);

	const addTarea = tarea => {
		if (tarea.key === "Enter") {
			setLista([...lista, tarea.target.value]);
			tarea.target.value = "";
		}
	};

	function delTarea(pos) {
		const tempList = [...lista];
		tempList.splice(pos, 1);
		setLista(tempList);

		console.log(lista);
	}

	const newList = lista.map((value, index) => (
		<li className="list-group-item" key={index}>
			{value}
			<button
				onClick={() => delTarea(index)}
				className="btn btn-default btn-xs pull-right remove-item">
				<i className="fas fa-trash-alt text-danger mx-2"></i>
			</button>
		</li>
	));

	return (
		<div className="text-center mt-5">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<h6 className="text-muted">To Do List</h6>
						<input
							onKeyDown={addTarea}
							className="form-control"
							type="text"
							placeholder="Add a thing"></input>
						<br />
						<ul className="list-group">{newList}</ul>
					</div>
				</div>
			</div>
			<p>Total Items: {lista.length}</p>
		</div>
	);
}
