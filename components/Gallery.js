import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const images = ['/images/her1.jpg','/images/her2.jpg','/images/her3.jpg','/images/her4.jpg'];

const GallerySection = styled.section`
padding: 50px 0;
display: flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
`;

const Img = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
cursor: pointer;
border-radius: 15px;
transition: transform 0.4s, box-shadow 0.4s;
&:hover {
transform: scale(1.08);
box-shadow: 0 0 20px rgba(255,192,203,0.5);
}
`;

const Overlay = styled.div`
display: ${props => props.show ? 'flex' : 'none'};
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.7);
justify-content: center;
align-items: center;
z-index: 100;
`;

const fadeIn = keyframes`
0% { opacity: 0; transform: translateY(10px); }
100% { opacity: 1; transform: translateY(0); }
`;

const Popup = styled.div`
position: relative;
background: url(${props => props.bg}) center/cover no-repeat;
width: 80%;
height: 80%;
display: flex;
justify-content: center;
align-items: flex-end;
border-radius: 20px;
padding: 20px;
color: #fff;
font-size: 1.5rem;
text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
animation: ${fadeIn} 0.8s ease forwards;
`;

const WhisperText = styled.div`
font-size: 1.5rem;
text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
animation: ${fadeIn} 1s ease forwards;
`;

const CloseBtn = styled.button`
position: absolute;
top: 20px;
right: 20px;
background: rgba(255,255,255,0.8);
border: none;
font-size: 1.5rem;
padding: 5px 10px;
cursor: pointer;
border-radius: 5px;
`;

export default function Gallery() {
const [selected, setSelected] = useState(null);
return (
<>
<GallerySection>
{images.map((img, idx) => (
<Img key={idx} src={img} alt={`photo-${idx}`} onClick={() => setSelected(img)} />
))}
</GallerySection>
<Overlay show={selected}>
{selected && (
<Popup bg={selected}>
<WhisperText>Whisper...</WhisperText>
<CloseBtn onClick={() => setSelected(null)}>×</CloseBtn>
</Popup>
)}
</Overlay>
</>
);
}