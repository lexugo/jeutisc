function Home() {
	return (
		<>
			<header>
				<h1>
					<a href="/">Jeutisc</a>
				</h1>
			</header>
			<form action="#" className="search">
				<div className="by query">
					<h2>I have a question about</h2>
					<input
						name="q"
						type="search"
						placeholder="I have a question about..."
						autoComplete="off"
					/>
				</div>
				<div className="by media">
					<h2>I prefer to see</h2>
					<div className="media types">
						<div className="media type">
							{/* Todo: Only visible with scripts */}
							<input
								checked
								type="checkbox"
								id="all"
								name="medias"
								value="all"
							/>
							<label htmlFor="all">All</label>
						</div>
						<div className="media type">
							<input
								type="checkbox"
								name="medias"
								id="videos"
								value="videos"
							/>
							<label htmlFor="videos">Videos</label>
						</div>
						<div className="media type">
							<input
								type="checkbox"
								name="medias"
								id="podcasts"
								value="podcasts"
							/>
							<label htmlFor="podcasts">Podcasts</label>
						</div>
						<div className="media type">
							<input
								type="checkbox"
								name="medias"
								id="test"
								value="test"
							/>
							<label htmlFor="test">Balado</label>
						</div>
						<div className="media type">
							<input
								type="checkbox"
								name="medias"
								id="text"
								value="text"
							/>
							<label htmlFor="text">Two words!</label>
						</div>
					</div>
				</div>
				<div className="by categories">
					<div className="categories">
						<div className="selected category">
							<header>
								<h3 className="title">Réalités Autochtones</h3>
								<p className="description">
									Le terme <i>Autochtone</i> désigne une diversité
									de nations et de peuples.
								</p>
							</header>
							<div className="subcategories">
								<div className="subcategory">
									<h3 className="title">Fin du monde</h3>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
								<div className="subcategory">
									<h3 className="title">Fin du monde</h3>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
								<div className="subcategory">
									<h3 className="title">Fin du monde</h3>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
								<div className="subcategory">
									<h3 className="title">Fin du monde</h3>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
								<div className="subcategory">
									<h3 className="title">Fin du monde</h3>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
						</div>
						<div className="category">
							<h3 className="title">Réalités Autochtones</h3>
							<p className="description">
								Le terme <i>Autochtone</i> désigne une diversité
								de nations et de peuples.
							</p>
						</div>
						<div className="category">
							<h3 className="title">Réalités Autochtones</h3>
							<p className="description">
								Le terme <i>Autochtone</i> désigne une diversité
								de nations et de peuples.
							</p>
						</div>
						<div className="category">
							<h3 className="title">Réalités Autochtones</h3>
							<p className="description">
								Le terme <i>Autochtone</i> désigne une diversité
								de nations et de peuples.
							</p>
						</div>
						<div className="category">
							<h3 className="title">Réalités Autochtones</h3>
							<p className="description">
								Le terme <i>Autochtone</i> désigne une diversité
								de nations et de peuples.
							</p>
						</div>
					</div>
				</div>
				<div className="by subcategories">
					<header>
						<h2 className="title">Réealité Autochtones</h2>
						<p className="description">
							Le terme <i>Autochtone</i> désigne une diversité de
							nations et de peuples.
						</p>
					</header>
					<div className="subcategories">
						<div className="subcategory">
							<h3 className="title">Fin du monde</h3>
							<p className="description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
						<div className="subcategory">
							<h3 className="title">Fin du monde</h3>
							<p className="description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
						<div className="subcategory">
							<h3 className="title">Fin du monde</h3>
							<p className="description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
						<div className="subcategory">
							<h3 className="title">Fin du monde</h3>
							<p className="description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
						<div className="subcategory">
							<h3 className="title">Fin du monde</h3>
							<p className="description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
				</div>
				<div className="by tags">
					<header>
						<h2 className="title">Fin du monde</h2>
						<p className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
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
							<label htmlFor="climat">Justice climatique</label>
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
							<label htmlFor="climat">Justice climatique</label>
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
							<label htmlFor="climat">Justice climatique</label>
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
			</form>
			<nav className="ressources">
				<div className="ressource">
					<span className="media">
						<span className="type">Lexique</span>
						<a href="#">osensenparler.ca/covid-19+testing</a>
					</span>
					<h4 className="title">
						<a href="#">Premières nations, Inuit et Métis</a>
					</h4>
					<span className="source">
						Mikana et Amnistie Internationale
					</span>
					<p className="description">
						Le terme Autochtone désigne une diversité de nations et
						de peuples ancrés dans les territoires qu'ils occupent
						depuis des millénaires. Leur histoires se rejoingne...
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Balado</span>
						<a href="#">osensenparler.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Oser s'en parler</a>
					</h4>
					<span className="source">Charlotte Côté</span>
					<p className="description">
						Balado pour allochtones sur la réalité des peuples
						autochtones vivant au soit-disant Canada.
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Site</span>
						<a href="#">mikanna.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Mikana</a>
					</h4>
					<p className="description">
						Site oeuvrant à la sensibilisation sur les enjeux
						autochtones.
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Lexique</span>
						<a href="#">osensenparler.ca/covid-19+testing</a>
					</span>
					<h4 className="title">
						<a href="#">Premières nations, Inuit et Métis</a>
					</h4>
					<span className="source">
						Mikana et Amnistie Internationale
					</span>
					<p className="description">
						Le terme Autochtone désigne une diversité de nations et
						de peuples ancrés dans les territoires qu'ils occupent
						depuis des millénaires. Leur histoires se rejoingne...
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Balado</span>
						<a href="#">osensenparler.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Oser s'en parler</a>
					</h4>
					<span className="source">Charlotte Côté</span>
					<p className="description">
						Balado pour allochtones sur la réalité des peuples
						autochtones vivant au soit-disant Canada.
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Site</span>
						<a href="#">mikanna.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Mikana</a>
					</h4>
					<p className="description">
						Site oeuvrant à la sensibilisation sur les enjeux
						autochtones.
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Lexique</span>
						<a href="#">osensenparler.ca/covid-19+testing</a>
					</span>
					<h4 className="title">
						<a href="#">Premières nations, Inuit et Métis</a>
					</h4>
					<span className="source">
						Mikana et Amnistie Internationale
					</span>
					<p className="description">
						Le terme Autochtone désigne une diversité de nations et
						de peuples ancrés dans les territoires qu'ils occupent
						depuis des millénaires. Leur histoires se rejoingne...
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Balado</span>
						<a href="#">osensenparler.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Oser s'en parler</a>
					</h4>
					<span className="source">Charlotte Côté</span>
					<p className="description">
						Balado pour allochtones sur la réalité des peuples
						autochtones vivant au soit-disant Canada.
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Site</span>
						<a href="#">mikanna.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Mikana</a>
					</h4>
					<p className="description">
						Site oeuvrant à la sensibilisation sur les enjeux
						autochtones.
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Lexique</span>
						<a href="#">osensenparler.ca/covid-19+testing</a>
					</span>
					<h4 className="title">
						<a href="#">Premières nations, Inuit et Métis</a>
					</h4>
					<span className="source">
						Mikana et Amnistie Internationale
					</span>
					<p className="description">
						Le terme Autochtone désigne une diversité de nations et
						de peuples ancrés dans les territoires qu'ils occupent
						depuis des millénaires. Leur histoires se rejoingne...
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Balado</span>
						<a href="#">osensenparler.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Oser s'en parler</a>
					</h4>
					<span className="source">Charlotte Côté</span>
					<p className="description">
						Balado pour allochtones sur la réalité des peuples
						autochtones vivant au soit-disant Canada.
					</p>
				</div>
				<div className="ressource">
					<span className="media">
						<span className="type">Site</span>
						<a href="#">mikanna.ca</a>
					</span>
					<h4 className="title">
						<a href="#">Mikana</a>
					</h4>
					<p className="description">
						Site oeuvrant à la sensibilisation sur les enjeux
						autochtones.
					</p>
				</div>
			</nav>
			<main>
				<header>
					<nav>
						<a href="#" className="focused">
							search
						</a>
						<a href="#">ressources</a>
					</nav>
				</header>
				<form className="search">
					<div className="by query">
						<h2>I have a question about</h2>
						<input
							name="q"
							type="search"
							placeholder="Racism"
							autoComplete="off"
						/>
					</div>
					<div className="by categories">
						<h2>I want to understand more about</h2>
						<div className="categories">
							<a href="#" className="category">
								<input
									type="radio"
									id="1"
									name="category"
									value="Réalités Autochtones"
								/>
								<label htmlFor="1">Réalités Autochtones</label>
							</a>
							<a href="#" className="category">
								<input
									type="radio"
									id="2"
									name="category"
									value="Environement"
								/>
								<label htmlFor="2">Environement</label>
							</a>
							<a href="#" className="category">
								<input
									type="radio"
									id="3"
									name="category"
									value="Immigration"
								/>
								<label htmlFor="3">Immigration</label>
							</a>
							<a href="#" className="category">
								<input
									type="radio"
									id="4"
									name="category"
									value="Environement"
								/>
								<label htmlFor="4">Environement</label>
							</a>
							<a href="#" className="category">
								<input
									type="radio"
									id="5"
									name="category"
									value="Racism"
								/>
								<label htmlFor="5">Racism</label>
								<div className="subcategories">
									<a href="#" className="subcategory">
										<input
											type="radio"
											id="11"
											name="subcategory"
											value="Test"
										/>
										<label htmlFor="11">Test</label>
									</a>
									<a href="#" className="subcategory">
										<input
											type="radio"
											id="22"
											name="subcategory"
											value="Crise Climatique"
										/>
										<label htmlFor="22">
											Crise Climatique
										</label>
									</a>
									<a href="#" className="subcategory">
										<input
											type="radio"
											id="33"
											name="subcategory"
											value="Fin du monde"
										/>
										<label htmlFor="33">Fin du monde</label>
									</a>
									<a href="#" className="subcategory">
										<input
											type="radio"
											id="44"
											name="subcategory"
											value="Sexualité"
										/>
										<label htmlFor="44">Sexualité</label>
									</a>
									<a href="#" className="subcategory">
										<input
											type="radio"
											id="55"
											name="subcategory"
											value="Réalités Autochtones"
										/>
										<label htmlFor="55">
											Réalités Autochtones
										</label>
									</a>
								</div>
							</a>
							<a href="#" className="category">
								<input
									type="radio"
									id="6"
									name="category"
									value="Feminisme"
								/>
								<label htmlFor="6">Feminisme</label>
							</a>
							<a href="#" className="category">
								<input
									type="radio"
									id="7"
									name="category"
									value="Réalités Autochtones"
								/>
								<label htmlFor="7">Réalités Autochtones</label>
							</a>
						</div>
					</div>
					<div className="by media">
						<h2>I prefer to see</h2>
						<div className="media types">
							<div className="media type">
								{/* Todo: Only visible with scripts */}
								<input
									checked
									type="checkbox"
									id="all"
									name="medias"
									value="all"
								/>
								<label htmlFor="all">All</label>
							</div>
							<div className="media type">
								<input
									type="checkbox"
									name="medias"
									id="videos"
									value="videos"
								/>
								<label htmlFor="videos">Videos</label>
							</div>
							<div className="media type">
								<input
									type="checkbox"
									name="medias"
									id="podcasts"
									value="podcasts"
								/>
								<label htmlFor="podcasts">Podcasts</label>
							</div>
							<div className="media type">
								<input
									type="checkbox"
									name="medias"
									id="test"
									value="test"
								/>
								<label htmlFor="test">Test</label>
							</div>
							<div className="media type">
								<input
									type="checkbox"
									name="medias"
									id="text"
									value="text"
								/>
								<label htmlFor="text">Text</label>
							</div>
						</div>
					</div>
					<div className="by tags">
						<h2>I'm interested in</h2>
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
					<footer>
						<button id="submit" type="submit">
							Search
						</button>
						<button id="reset" type="reset">
							x
						</button>
					</footer>
				</form>
			</main>
		</>
	)
}

export default Home
