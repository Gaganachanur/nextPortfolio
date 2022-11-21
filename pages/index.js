import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from "react";
import Portfolio from '../Components/portfolio'

export default function Home() {
  return (<Fragment>
     <Head>
          <title>Gagan Protfolio</title>
          <meta name="application-name" content="Beautiful application name"/>
          <link rel="icon" href="https://www.google.com/favicon.ico" type="image/x-icon" />


          </Head>
<Portfolio/>
</Fragment>
  )
}
