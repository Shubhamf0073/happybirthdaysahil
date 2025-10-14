import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
0% { opacity: 0; transform: translateY(20px); }
100% { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
padding: 60px 20px;
max-width: 800px;
margin: auto;
text-align: center;
animation: ${fadeUp} 0.8s ease forwards;
transition: transform 0.3s;
&:hover { transform: translateY(-5px); }
`;

export default function ExtraSection({ title, content }) {
return (
<Section>
<h2>{title}</h2>
<p>{content}</p>
</Section>
);
}