import React from 'react';
import { seo } from 'types/interface/seo';
import { Container } from 'components/Layout/Container';
import { Title, Quote, CallOut } from 'components/Commons';

export default function Home() {
  return (
    <Container>
      <Title icon="👾" text="About Me" />
      <Quote className="text-2xl border-dark-blue">
        <p>Pronounce: MR</p>
        <p>Career: Web developer</p>
        <p>Hobby: 📷🍿🏀🧑🏻‍💻</p>
      </Quote>
      <CallOut icon="👉🏼">
        Hi I’m Sambath, Currently a 3 year student major in Software
        Engineering, Campus based in Kirirom, Cambodia. Originally a
        Battambanger moved to the city to pursue better education after
        high-school.{' '}
      </CallOut>
      <ol className="space-y-8">
        <li className="space-y-4">
          <p className="text-3xl font-semibold">1. What is your full name ?</p>
          <Quote>Doung Ratanaksambat</Quote>
        </li>
        <li className="space-y-4">
          <p className="text-3xl font-semibold">
            2. Why did you choose software engineering ?
          </p>
          <Quote>
            I was lost in knowing my own preference, so I decided to go for
            whichever school give me the full scholarship 🤡
          </Quote>
        </li>
        <li className="space-y-4">
          <p className="text-3xl font-semibold">
            3. How do you develop your passion in tech ?
          </p>
          <Quote>
            Same as every uni student, University is tough there was a lot of
            lost and found during the 1st & 2nd year, So I decided explore as
            much as I can until I catch interest in Web development
          </Quote>
        </li>
      </ol>
    </Container>
  );
}

export async function getStaticProps() {
  const homeSeo: seo = {
    title: 'About me',
    description:
      'Same as every uni student, University is tough there was a lot of lost and found during the 1st & 2nd year, So I decided explore as much as I can until I catch interest in Web development',
    images: [],
  };
  return {
    props: {
      seo: homeSeo,
      linkTo: '/',
    },
  };
}
