import React from 'react';
import { CallOut, Title } from 'components/Common';
import { Container } from 'components/Layout/Container';

export default function Blogs() {
  return (
    <>
      <Container className="">
        <Title icon="📝" text="Blogs" />
        <CallOut>
          Sharing a Little think I learned along my web development journey in
          🇰🇭 Khmer & 🇬🇧 English
        </CallOut>
      </Container>
    </>
  );
}
