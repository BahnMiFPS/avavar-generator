import React, { useState, useEffect } from "react"

import "./App.css"
// src url. images/body/1.png

import back from "./svg/back.svg"
import face from "./svg/face.svg"
import eye from "./svg/eye.svg"
import hair from "./svg/hair.svg"
import hat from "./svg/hat.svg"
import clothes from "./svg/clothes.svg"
import background from "./svg/background.svg"
import random from "./svg/random.svg"
import reset from "./svg/reset.svg"
import download from "./svg/download.svg"

import mouth from "./svg/mouth.svg"

import ear from "./svg/ear.svg"

import eyebrows from "./svg/eyebrows.svg"
import beard from "./svg/beard.svg"
import glasses from "./svg/glasses.svg"

import layer_1 from "./svg/layer_1.svg"
import layer_2 from "./svg/layer_2.svg"
import layer_3 from "./svg/layer_3.svg"
import Header from "./Header"
import Avatar from "./Avatar"

// import random from "./svg/random.svg"

function App() {
	const total = {
		body: 17,
		eyes: 17,
		eyebrows: 15,
		hair: 73,
		mouth: 24,
		beard: 17,
		hat: 28,
		glasses: 17,
		layer_1: 5,
		layer_2: 5,
		layer_3: 9,
		ear: 32,
		neckwear: 18,
	}
	const [selectedArea, setSelectedArea] = useState("")
	const [areaItemRendering, setAreaItemRendering] = useState([])

	const [renderPart, setRenderPart] = useState(null)

	// render item onto avatar
	const [selectedSmallArea, setSelectedSmallArea] = useState("")

	//face
	const [neckwearUrl, setNeckwearUrl] = useState("")
	const [mouthsUrl, setMouthsUrl] = useState("")

	const [earUrl, setEarUrl] = useState("")

	//eye
	const [eyesUrl, setEyesUrl] = useState("")
	const [eyeBrowsUrl, setEyeBrowsUrl] = useState("")
	const [glassesUrl, setGlassesUrl] = useState("")
	//hair
	const [hairUrl, setHairUrl] = useState("")
	const [beardUrl, setBeardUrl] = useState("")
	const [hatUrl, setHatUrl] = useState("")
	//

	const [layer_1_Url, setLayer_1_Url] = useState("")
	const [layer_2_Url, setLayer_2_Url] = useState("")
	const [layer_3_Url, setLayer_3_Url] = useState("")
	//body
	const [bodyUrl, setBodyUrl] = useState("")

	const init = () => {
		const mathRandom = (itemName) => {
			let random = Number
			random = Math.ceil(Math.random() * total[itemName])
			return random
		}

		setBodyUrl(`/images/character/body/${mathRandom("body")}.png`)
		setNeckwearUrl(
			`/images/character/face/accessories/neckwear/${mathRandom(
				"neckwear"
			)}.png`
		)
		setMouthsUrl(`/images/character/face/mouths/${mathRandom("mouth")}.png`)

		setEarUrl(
			`/images/character/face/accessories/earrings/${mathRandom("ear")}.png`
		)
		setEyeBrowsUrl(
			`/images/character/eye/eyebrows/${mathRandom("eyebrows")}.png`
		)
		setEyesUrl(`/images/character/eye/eyes/${mathRandom("eyes")}.png`)
		setGlassesUrl(
			`/images/character/face/accessories/glasses/${mathRandom("glasses")}.png`
		)

		setHairUrl(`/images/character/hair/hair_styles/${mathRandom("hair")}.png`)
		setBeardUrl(`/images/character/hair/facial_hair/${mathRandom("beard")}.png`)
		setHatUrl(
			`/images/character/face/accessories/hats/${mathRandom("hat")}.png`
		)

		setLayer_1_Url(
			`/images/character/clothes/layer_1/${mathRandom("layer_1")}.png`
		)
		setLayer_2_Url(
			`/images/character/clothes/layer_2/${mathRandom("layer_2")}.png`
		)
		setLayer_3_Url(
			`/images/character/clothes/layer_3/${mathRandom("layer_3")}.png`
		)
	}
	useEffect(() => {
		init()
	}, [])

	const handleResetButton = (e) => {
		e.preventDefault()
		setBodyUrl(`/images/character/body/1.png`)
		setNeckwearUrl("")
		setMouthsUrl("")
		setEarUrl("")
		setEyeBrowsUrl("")
		setEyesUrl("")
		setGlassesUrl("")

		setHairUrl("")
		setBeardUrl("")
		setHatUrl("")

		setLayer_1_Url("")
		setLayer_2_Url("")
		setLayer_3_Url("")
	}
	const handlePartClick = (item) => {
		console.log(selectedSmallArea)
		console.log(item)
		switch (selectedSmallArea) {
			case "body":
				setBodyUrl(item)
				break
			//face
			case "neckwear":
				setNeckwearUrl(item)
				break
			case "mouth":
				setMouthsUrl(item)
				break

			case "ear":
				setEarUrl(item)
				break
			//eye
			case "eyebrows":
				setEyeBrowsUrl(item)
				break
			case "eyes":
				setEyesUrl(item)
				break
			case "glasses":
				setGlassesUrl(item)
				break
			// hair
			case "hair":
				setHairUrl(item)
				break
			case "beard":
				setBeardUrl(item)
				break
			case "hat":
				setHatUrl(item)
				break
			// clothes
			case "layer_1":
				setLayer_1_Url(item)
				break
			case "layer_2":
				setLayer_2_Url(item)
				break
			case "layer_3":
				setLayer_3_Url(item)
				break
			default:
				break
		}
	}
	//

	let toRender = []
	const looping = (filteredItem) => {
		//hair
		let query
		if (filteredItem === "body") {
			query = `/images/character/body/`
		}
		if (filteredItem === "eyes") {
			query = `/images/character/eye/eyes/`
		}
		if (filteredItem === "eyebrows") {
			query = `/images/character/eye/eyebrows/`
		}
		if (filteredItem === "hair") {
			query = `/images/character/hair/hair_styles/`
		}
		if (filteredItem === "beard") {
			query = `/images/character/hair/facial_hair/`
		}
		if (filteredItem === "body") {
			query = `/images/character/body/`
		}
		if (filteredItem === "mouth") {
			query = `/images/character/face/mouths/`
		}

		if (filteredItem === "ear") {
			query = `/images/character/face/accessories/earrings/`
		}
		if (filteredItem === "hat") {
			query = `/images/character/face/accessories/hats/`
		}
		if (filteredItem === "glasses") {
			query = `/images/character/face/accessories/glasses/`
		}
		if (filteredItem === "neckwear") {
			query = `/images/character/face/accessories/neckwear/`
		}
		if (filteredItem === "layer_1") {
			query = `/images/character/clothes/layer_1/`
		}
		if (filteredItem === "layer_2") {
			query = `/images/character/clothes/layer_2/`
		}
		if (filteredItem === "layer_3") {
			query = `/images/character/clothes/layer_3/`
		}

		for (let index = 1; index <= total[`${filteredItem}`]; index++) {
			let finalQuery
			finalQuery = `${query}${index}.png`
			toRender.push(finalQuery)
		}
	}
	const [btnState, setBtnState] = useState(false)
	const [isActive, setIsActive] = useState(null)

	const handleRenderItemClick = (title) => {
		console.log(title)
		looping(title)
		setSelectedSmallArea(title)
		setRenderPart(toRender)
		setBtnState((btnState) => !btnState)
		setIsActive(title)
	}

	let toggleClassCheck = btnState ? "active" : ""

	const items = [
		{ id: 1, title: "face", image: face },
		{ id: 2, title: "eyes", image: eye },
		{ id: 3, title: "hair", image: hair },
		{ id: 4, title: "clothes", image: clothes },
		{ id: 5, title: "body", image: background },
	]

	const faceItems = [
		{ id: 1, title: "neckwear", image: face, active: true },
		{ id: 2, title: "mouth", image: mouth, active: false },

		{ id: 4, title: "ear", image: ear, active: false },
	]

	const bodyItems = [{ id: 1, title: "body", image: background, active: true }]

	const clothesItems = [
		{ id: 1, title: "layer_1", image: layer_1, active: true },
		{ id: 2, title: "layer_2", image: layer_2, active: false },
		{ id: 3, title: "layer_3", image: layer_3, active: false },
	]

	const eyeItems = [
		{ id: 1, title: "eyebrows", image: eyebrows, active: true },
		{ id: 2, title: "eyes", image: eye, active: false },
		{ id: 3, title: "glasses", image: glasses, active: false },
	]

	const hairItems = [
		{ id: 1, title: "hair", image: hair, active: true },
		{ id: 2, title: "beard", image: beard, active: false },
		{ id: 3, title: "hat", image: hat, active: false },
	]

	const renderWhich = (area) => {
		if (area === "face") {
			setAreaItemRendering(faceItems)
		}
		if (area === "eyes") {
			setAreaItemRendering(eyeItems)
		}
		if (area === "hair") {
			setAreaItemRendering(hairItems)
		}
		if (area === "body") {
			setAreaItemRendering(bodyItems)
		}
		if (area === "clothes") {
			setAreaItemRendering(clothesItems)
		}
	}

	//**important */
	const handleAreaClick = (area) => {
		setSelectedArea(area)
		renderWhich(area)
		console.log(area)
		if (area === "face") handleRenderItemClick("neckwear")
		if (area === "eyes") handleRenderItemClick("eyes")
		if (area === "hair") handleRenderItemClick("hair")
		if (area === "clothes") handleRenderItemClick("layer_1")
		if (area === "body") handleRenderItemClick("body")
	}

	const handleBackButton = () => {
		setSelectedArea("")
		setSelectedSmallArea("")
		toRender = []
		setRenderPart([])
	}

	return (
		<div className="App">
			<Header />
			<div className="main">
				<Avatar
					bodyUrl={bodyUrl}
					neckwearUrl={neckwearUrl}
					earUrl={earUrl}
					eyeBrowsUrl={eyeBrowsUrl}
					eyesUrl={eyesUrl}
					glassesUrl={glassesUrl}
					hairUrl={hairUrl}
					beardUrl={beardUrl}
					hatUrl={hatUrl}
					layer_1_Url={layer_1_Url}
					layer_2_Url={layer_2_Url}
					layer_3={layer_3_Url}
				/>
				{selectedArea ? (
					<div className="content-container">
						<div className="content-top">
							<button
								className="back-btn cat-button"
								onClick={handleBackButton}
							>
								<img src={back} />
							</button>

							{areaItemRendering.map((smallArea, index) => {
								return (
									<div className={`btn-options`} key={index}>
										<button
											className={`cat-button item-button  ${
												smallArea.title === selectedSmallArea
													? "active-area"
													: ""
											}`}
											onClick={() => handleRenderItemClick(smallArea.title)}
										>
											<img src={smallArea.image} ClassName="cat-button__icon" />
										</button>
									</div>
								)
							})}
						</div>

						{renderPart ? (
							<div className="content-bottom">
								{renderPart.map((image) => {
									return (
										<button
											className="part-item"
											onClick={() => handlePartClick(image)}
										>
											<img src={image} className="button--img" />
										</button>
									)
								})}
							</div>
						) : (
							<div>Choose A Part</div>
						)}
					</div>
				) : (
					<div className="content-container">
						<h2>CREATE</h2>
						<p>Select the editing area of your avatar</p>
						<ul className="list-item">
							{items.map((item) => {
								return (
									<li
										className="item"
										key={item.id}
										onClick={() => handleAreaClick(item.title)}
									>
										<button className="item-button">
											<img src={item.image} className="item-img" />
											<span>{item.title}</span>
										</button>
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</div>
			<div className="footer">
				<div className="left">
					<button className="footer-btn random " onClick={init}>
						<img src={random} />
						<span>Random</span>
					</button>
					<button className="footer-btn reset" onClick={handleResetButton}>
						<img src={reset} />
						<span>Reset</span>
					</button>
				</div>
				<div className="right">
					<button className="download footer-btn">
						<img src={download} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
