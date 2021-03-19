import React, { useState, useEffect } from "react";

export function Home() {
	let [lista, setLista] = useState([]);

	fetch("https://assets.breatheco.de/apis/fake/todos/user/gsalazarp", {
		method: "POST",
		body: JSON.stringify(lista),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			console.log(error);
		});

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
			<button className="btn btn-info">
				<i className="fa fa-trash"></i> Clear List
			</button>
		</div>
	);
}
