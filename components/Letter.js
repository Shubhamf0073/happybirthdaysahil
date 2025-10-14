// import styled from 'styled-components';

// const Section = styled.section`
//   padding: 80px 20px;
//   max-width: 800px;
//   margin: auto;
//   text-align: center;
//   background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/bg-letter.jpg') center/cover no-repeat;
//   color: #000000;
// `;



// const Heading = styled.h2`
// font-size: 2rem;
// margin-bottom: 30px;
// color: #5a3e36;
// `;

// const LetterText = styled.p`
// font-size: 1.2rem;
// white-space: pre-line;
// `;

// export default function Letter() {
// const text = ``;
// return (
// <Section>
// <Heading>A Letter for You</Heading>
// <LetterText>{text}</LetterText>
// </Section>
// );
// }

import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
0% { opacity: 0; transform: translateY(20px); }
100% { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
padding: 80px 20px;
max-width: 800px;
margin: auto;
text-align: center;
background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/bg-letter.jpg') center/cover no-repeat;
color: #5a3e36;
animation: ${fadeUp} 0.8s ease forwards;
`;

export default function Letter() {
  return (
    <Section>
      <h2>My Dearest Sahil 💌</h2>
      
      <p>
        If love had a shape, I think mine would look a lot like <strong>you</strong> - quiet, steady, always there even when distance pretends it’s winning. I don’t know when it happened, when childhood jokes turned into <em>heartbeats that refuse to calm down</em> whenever your name shows up on my screen, but it did… and now everything feels a little empty without you in it.
      </p>

      <p>
        I know I don’t say I love you the way people expect. I say <strong>“I’ll see you when I see you,”</strong> and I hope you hear everything in between those words - <em>I miss you, I’m proud of you, I’m waiting for you, I’m choosing you even from oceans away.</em>
      </p>

      <p>
        You’re in Canada chasing your dreams, and I’m here in Karachi buried in books and tired nights - but somehow, in all that chaos, you’re still <strong>the softest part of my day</strong>. Every plan I make, every version of my future, your name keeps showing up like it belongs there. Maybe it does.
      </p>

      <p>
        They say a Patronus takes the shape of what protects your soul. <strong>Yours would be a stag, wouldn’t it?</strong> Stubborn, strong, running straight through darkness like it knows where home is. Maybe… maybe that’s what you are to me. <em>A reminder that light exists - even far, far away.</em>
      </p>

      <p>
        If this page feels like a gift, it’s because it is. A piece of me, quietly waiting here for you to visit.
      </p>

      <p>
        Until then - <strong>I’ll see you when I see you.</strong>
      </p>

      <p><em>Forever yours,<br/>Chandni</em></p>
    </Section>
  );
}
