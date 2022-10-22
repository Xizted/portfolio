import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface MetaProps {
  title: string;
  description: string;
}

const Meta = ({ title, description }: MetaProps) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' key='charset' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Tyche</title>
        <link rel='shortcut icon' type='image/png' href='favicon.ico' />
      </Head>
      <NextSeo title={title} description={description} />
    </>
  );
};

export default Meta;
