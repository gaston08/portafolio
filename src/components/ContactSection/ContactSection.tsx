import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function EmailSended() {
	return (
		<div className="flex justify-center">
			<div role="alert" className="alert alert-success ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>Email enviado con éxito!</span>
			</div>
		</div>
	);
}

export default function ContactForm() {
	const [state, handleSubmit] = useForm("mvoedzjv");

	if (state.succeeded) {
		return <EmailSended />;
	}

	return (
		<div className="m-auto text-neutral-content">
			<form onSubmit={handleSubmit}>
				<div className="mb-8">
					<label className="input input-bordered flex items-center gap-2 text-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input
							type="email"
							className="grow"
							placeholder="Email"
							name="email"
							id="email"
						/>
					</label>
				</div>
				<textarea
					className="textarea textarea-accent text-black"
					placeholder="Deja un mensaje."
					id="message"
					name="message"
					rows="5"
					cols="30"
				></textarea>
				<div className="mt-8">
					{state.errors &&
						state.errors.formErrors.map((err) => {
							return (
								<div
									key={err.message}
									role="alert"
									className="alert alert-error"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="stroke-current shrink-0 h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span>{err.message}</span>
								</div>
							);
						})}
				</div>
				<div className="mt-8">
					<button
						type="submit"
						disabled={state.submitting}
						className="btn btn-accent"
					>
						Enviar email
					</button>
				</div>
			</form>
		</div>
	);
}
