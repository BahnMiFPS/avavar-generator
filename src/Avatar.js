import React from "react"

function Avatar({
	bodyUrl,
	neckwearUrl,
	mouthsUrl,
	earUrl,
	eyeBrowsUrl,
	eyesUrl,
	glassesUrl,
	hairUrl,
	beardUrl,
	hatUrl,
	layer_1_Url,
	layer_2_Url,
	layer_3_Url,
}) {
	return (
		<div className="showcase-wrapper">
			<div className="showcase">
				<img src={bodyUrl} alt="" style={{ zIndex: "0" }} />

				<img src={neckwearUrl} alt="" style={{ zIndex: "5" }} />
				<img src={mouthsUrl} alt="" style={{ zIndex: "6" }} />

				<img src={earUrl} alt="" style={{ zIndex: "7" }} />

				<img src={eyeBrowsUrl} alt="" style={{ zIndex: "4" }} />

				<img src={eyesUrl} alt="" style={{ zIndex: "3" }} />

				<img src={glassesUrl} alt="" style={{ zIndex: "5" }} />

				<img src={hairUrl} alt="" style={{ zIndex: "7" }} />

				<img src={beardUrl} alt="" style={{ zIndex: "7" }} />

				<img src={hatUrl} alt="" style={{ zIndex: "8" }} />

				<img src={layer_1_Url} alt="" style={{ zIndex: "4" }} />
				<img src={layer_2_Url} alt="" style={{ zIndex: "5" }} />
				<img src={layer_3_Url} alt="" style={{ zIndex: "6" }} />
			</div>
		</div>
	)
}

export default Avatar
