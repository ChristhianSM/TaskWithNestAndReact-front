import { ChangeEvent, FormEvent, useState } from 'react';
import { createTaskRequest } from '../services/task';

export const TaskForm = () => {
	const [task, setTask] = useState({
		title: '',
		description: '',
		done: false,
	});

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setTask({
			...task,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = await createTaskRequest(task);
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
					placeholder="Write a title"
					onChange={handleChange}
				/>
				<textarea
					name="description"
					rows={3}
					className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
					placeholder="Write a Descirption"
					onChange={handleChange}
				></textarea>
				<label
					htmlFor=""
					className="inline-flex items-center gap-x-2"
				>
					<input
						type="checkbox"
						className="h-5 w-5 text-indigo-600"
						onChange={(event) =>
							setTask({
								...task,
								done: event.target.checked,
							})
						}
					/>
					<span>Done</span>
				</label>

				<button className="w-full bg-indigo-600 rounded-lg px-3">SAVE</button>
			</form>
		</div>
	);
};
