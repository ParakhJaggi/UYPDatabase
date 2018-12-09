import React from 'react';
import ReactDelayRender from 'react-delay-render';

const SmallRow = () => (
	<div className="row">
	</div>
);

export default ReactDelayRender({ delay: 1000 })(SmallRow);