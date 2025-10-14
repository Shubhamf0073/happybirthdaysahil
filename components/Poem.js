import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  background: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/images/bg-poem.jpg') center/cover no-repeat;
  color: #000000;
`;



const Heading = styled.h2`
font-size: 2rem;
margin-bottom: 30px;
color: #5a3e36;
`;

const PoemText = styled.p`
font-size: 1.2rem;
white-space: pre-line;
`;

export default function Poem() {
const text = `I’ll see you when I see you\n\nIf love had form, I’d trace your name,\nQuiet, steady, beyond the flame.\nYou slipped from jokes to heartbeat’s pace,\nNow every breath recalls your face.\n\nYou’re far in skies where cold winds bloom,\nWhile I burn books in Karachi’s gloom.\nYet through the miles that scream and bend,\nYour name arrives - my softest end.\n\nI don’t say love the way they do,\nI say I’ll see you - meaning you’re home too.\nIn every plan my future weaves,\nYour shadow stays, it never leaves.\n\nThey say a Patronus guards your soul,\nYours is a stag - fierce, in control.\nCharging through night like you always knew,\nThat light was stubborn - just like you.\n\nSo take this page - a quiet plea,\nA piece of heart I set on free.`;
return (
<Section>
<Heading>A Poem for You</Heading>
<PoemText>{text}</PoemText>
</Section>
);
}