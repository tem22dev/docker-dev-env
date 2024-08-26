import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let [products, setProducts] = useState([]);

  function renderProducts() {
    if (products.length == 0) {
      return <div className='col-md-12'>Đang tải ...</div>
    }
    return products.map(function (val, index) {
      return <div className='col-md-3'>
        <div className="card">
          <img className="card-img-top" src={val.image}/>
          <div className="card-body">
            <h5 className="card-title">{val.name}</h5>
            <p className="card-text">
              Giá: {val.price}
            </p>
            <Link href={`/${val.id}`} className="btn btn-primary">
              Xem
            </Link>
          </div>
        </div>
      </div>

    });
  }

  useEffect(function () {
    axios({
      method: 'get',
      url: 'http://localhost:9000/api/products'
    })
      .then(function (res) {
        setProducts(res.data.data);
      });

  }, []);

  return (
    <div className='container'>
      <h2>Chợ Nông Sản</h2>
      <Head>
        <title>{products.length !=0 ? products[0].name : "undefine"}</title>
      </Head>
      <div className='row'>
        {renderProducts()}
      </div>
    </div>
  )
}
