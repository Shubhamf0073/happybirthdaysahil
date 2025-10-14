import styled, { keyframes } from 'styled-components';

const drift = keyframes`
0% { transform: translateY(0) translateX(0); opacity: 0.8; }
50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
100% { transform: translateY(0) translateX(0); opacity: 0.8; }
`;

const HeroSection = styled.section`
position: relative;
height: 100vh;
background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/bg-hero.jpg') center/cover no-repeat;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0 20px;
overflow: hidden;
color: #fff;
`;

const Heading = styled.h1`
font-size: 2.5rem;
color: #fff;
text-shadow: 1px 1px 6px rgba(0,0,0,0.6);
margin-bottom: 1rem;
`;

const SubHeading = styled.p`
font-size: 1.5rem;
color: #fff;
text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
`;

const Sparkle = styled.div`
position: absolute;
width: 6px;
height: 6px;
background: rgba(255,255,255,0.8);
border-radius: 50%;
top: ${props => props.$top}%;
left: ${props => props.$left}%;
animation: ${drift} ${props => props.$duration}s ease-in-out infinite;
`;

export default function Hero() {
return (
<HeroSection>
<Heading>Happy Birthday to the Ravenclaw who cast Accio Heart on mine</Heading>
<SubHeading>By Chandni, Duh!</SubHeading>
{[...Array(20)].map((_, i) => (
<Sparkle
key={i}
$top={Math.random() * 100}
$left={Math.random() * 100}
$duration={2 + Math.random() * 3}
/>
))}
</HeroSection>
);
}