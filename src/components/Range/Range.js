import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './Range.css';

function Range() {

const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);

useEffect(() => {
	document.title = 'Real Estate | Range ';
},[])

const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};

return (
	<div className="app">
		<MultiRangeSlider
			min={0}
			max={100}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ margin: '10px' }}>${minValue}</div>
					<div style={{ margin: '10px' }}>to</div>
					<div style={{ margin: '10px' }}>${maxValue}</div>
				</div>
	</div>
	);
}

export default Range;