import React, { memo } from "react"

const InputPreview = ({ label, value = `-` }) => (
	<div>
		<label>{label}</label>
		<p>{value}</p>
	</div>
)

export default memo(InputPreview)
