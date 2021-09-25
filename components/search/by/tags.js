import useParam from 'hooks/useParam'

export default function Tags() {
	const [category] = useParam('category')
	const [subcategory] = useParam('subcategory')

	return (
		<div className='by tags'>
			<header>
				<h2 className='title'>{ subcategory }</h2>
				<p className='description'>
					Adipisci asperiores, consequuntur dignissimos fugiat magnam non, officiis,
					quisquam ratione repudiandae sapiente voluptatibus.
				</p>
			</header>
			<div className="tags">
				<div className="tag">
					<input
						type="checkbox"
						id="canada"
						name="tags"
						value="canda"
					/>
					<label htmlFor="canada">Canada</label>
				</div>
				<div className="tag">
					<input
						id="pensionnats"
						type="checkbox"
						name="tags"
						value="pensionats"
					/>
					<label htmlFor="pensionnats">
						Pensionnats autochtones
					</label>
				</div>
				<div className="tag">
					<input
						id="climat"
						type="checkbox"
						name="tags"
						value="justice"
					/>
					<label htmlFor="climat">
						Justice climatique
					</label>
				</div>
				<div className="tag">
					<input
						id="unsure"
						type="checkbox"
						name="tags"
						value="racisme"
					/>
					<label htmlFor="unsure">
						Racisme environnental
					</label>
				</div>
				<div className="tag">
					<input
						id="inclusivité"
						type="checkbox"
						name="tags"
						value="pratique inclusive"
					/>
					<label htmlFor="inclusivité">
						Pratique inclusive
					</label>
				</div>
				<div className="tag">
					<input
						type="checkbox"
						id="canada"
						name="tags"
						value="canda"
					/>
					<label htmlFor="canada">Canada</label>
				</div>
				<div className="tag">
					<input
						id="pensionnats"
						type="checkbox"
						name="tags"
						value="pensionats"
					/>
					<label htmlFor="pensionnats">
						Pensionnats autochtones
					</label>
				</div>
				<div className="tag">
					<input
						id="climat"
						type="checkbox"
						name="tags"
						value="justice"
					/>
					<label htmlFor="climat">
						Justice climatique
					</label>
				</div>
				<div className="tag">
					<input
						id="unsure"
						type="checkbox"
						name="tags"
						value="racisme"
					/>
					<label htmlFor="unsure">
						Racisme environnental
					</label>
				</div>
				<div className="tag">
					<input
						id="inclusivité"
						type="checkbox"
						name="tags"
						value="pratique inclusive"
					/>
					<label htmlFor="inclusivité">
						Pratique inclusive
					</label>
				</div>
				<div className="tag">
					<input
						type="checkbox"
						id="canada"
						name="tags"
						value="canda"
					/>
					<label htmlFor="canada">Canada</label>
				</div>
				<div className="tag">
					<input
						id="pensionnats"
						type="checkbox"
						name="tags"
						value="pensionats"
					/>
					<label htmlFor="pensionnats">
						Pensionnats autochtones
					</label>
				</div>
				<div className="tag">
					<input
						id="climat"
						type="checkbox"
						name="tags"
						value="justice"
					/>
					<label htmlFor="climat">
						Justice climatique
					</label>
				</div>
				<div className="tag">
					<input
						id="unsure"
						type="checkbox"
						name="tags"
						value="racisme"
					/>
					<label htmlFor="unsure">
						Racisme environnental
					</label>
				</div>
				<div className="tag">
					<input
						id="inclusivité"
						type="checkbox"
						name="tags"
						value="pratique inclusive"
					/>
					<label htmlFor="inclusivité">
						Pratique inclusive
					</label>
				</div>
			</div>
		</div>
	)
}
