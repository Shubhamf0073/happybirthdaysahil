import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/bg-letter.jpg') center/cover no-repeat;
  color: #000000;
`;



const Heading = styled.h2`
font-size: 2rem;
margin-bottom: 30px;
color: #5a3e36;
`;

const LetterText = styled.p`
font-size: 1.2rem;
white-space: pre-line;
`;

export default function Letter() {
const text = `My dearest Sahil,\n\nIf love had a shape, I think mine would look a lot like you - quiet, steady, always there even\nwhen distance pretends it’s winning. I don’t know when it happened, when childhood jokes\nturned into heartbeats that refuse to calm down whenever your name shows up on my\nscreen, but it did… and now everything feels a little empty without you in it.\n\nI know I don’t say I love you the way people expect. I say “I’ll see you when I see you,”\nand I hope you hear everything in between those words - I miss you, I’m proud of you, I’m\nwaiting for you, I’m choosing you even from oceans away.\n\nYou’re in Canada chasing your dreams, and I’m here in Karachi buried in books and tired\nnights - but somehow, in all that chaos, you’re still the softest part of my day. Every plan I\nmake, every version of my future, your name keeps showing up like it belongs there. Maybe\nit does.\n\nThey say a Patronus takes the shape of what protects your soul. Yours would be a stag,\nwouldn’t it? Stubborn, strong, running straight through darkness like it knows where home\nis. Maybe… maybe that’s what you are to me. A reminder that light exists - even far, far\naway.\n\nIf this page feels like a gift, it’s because it is. A piece of me, quietly waiting here for you to\nvisit.\n\nUntil then - I’ll see you when I see you.\n\nForever yours,\nChandni`;
return (
<Section>
<Heading>A Letter for You</Heading>
<LetterText>{text}</LetterText>
</Section>
);
}