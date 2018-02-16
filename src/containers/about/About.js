import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: left;
	color: palevioletred;
`;

export default function About() {
	return (
		<div>
			<Title>About Container.</Title>
		</div>
	);
}