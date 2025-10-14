// import styled from 'styled-components';

// const FooterSection = styled.footer`
//   padding: 60px 20px;
//   background: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/images/bg-footer.jpg') center/cover no-repeat;
//   text-align: center;
//   color: #000000;
// `;



// const Note = styled.p`
// font-size: 1.2rem;
// margin-bottom: 10px;
// `;

// export default function Footer() {
// return (
// <FooterSection>
// <Note>With all my love, Chandni ❤️</Note>
// <Note>To Sahil, may your day be as magical as you are.</Note>
// <Note>Thank you for being the light in my story.</Note>
// </FooterSection>
// );
// }

import styled from 'styled-components';

const FooterSection = styled.footer`
padding: 60px 20px;
background: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/images/bg-footer.jpg') center/cover no-repeat;
text-align: center;
color: #5a3e36;
`;

export default function Footer() {
return (
<FooterSection>
<p>To Sahil, may your day be as magical as you are.</p>
<p>Thank you for being the light in my story.</p>
<p>Forever yours, Chandni ❤️</p>
</FooterSection>
);
}