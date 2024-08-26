import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'

export default function product_detail({ data }) {
  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <div className='container'>
          <div className='col-md-12'>
              <h1>{data.name}</h1>
              <img src={data?.image}></img>
              <div>{data.price}</div>
          </div>
          <div className='col-md-12'>
              <Link className='btn btn-secondary btn-sm' href="/">Quay lại</Link>
          </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.params;
  let data = await axios(`http://nginx:3000/api/product/${id}`);
  data = await data.data.data;

  return { props: { data } }
}