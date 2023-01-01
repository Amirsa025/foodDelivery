import React, { useState, useEffect } from 'react';
import Helmet from '../components/Hemlets/Hemlet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { useSelector } from 'react-redux';

const CheckOuts = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shoppingCast = 30;
  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterPhone, setEnterPhone] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterPostCode, setEnterPostCode] = useState('');
  const [enterCity, setEnterCity] = useState('');
  let shopingInfo = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    const userShoppingAddress = {
      name: enterName,
      email: enterEmail,
      city: enterCity,
      country: enterCountry,
      phone: enterPhone,
      postCode: enterPostCode,
    };
    shopingInfo.push(userShoppingAddress);
    console.log(shopingInfo);
  };
  return (
    <Helmet title="پرداخت نهایی">
      <div className={'h-full'}>
        <CommonSection title={'پرداخت نهایی'} />
        <div className="container mx-auto px-12 py-6">
          <div className="grid grid-col-12 lg:grid-cols-2 flex px-12 outline-0 ">
            <div>
              <h6 className="mb-4">آدرس خرید</h6>
              <form action="" onSubmit={handleSubmit}>
                <div className="">
                  <input
                    required
                    value={enterName}
                    onChange={(event) => setEnterName(event.target.value)}
                    type="text"
                    placeholder={'Enter your name'}
                    className={'w-full outline-0 py-2 px-2  border-b-2'}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder={'Enter your Email'}
                    value={enterEmail}
                    onChange={(event) => setEnterEmail(event.target.value)}
                    className={'w-full outline-0 py-2 px-2  border-b-2'}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder={'Enter your Country'}
                    value={enterCountry}
                    onChange={(event) => setEnterCountry(event.target.value)}
                    className={'w-full outline-0 py-2 px-2  border-b-2'}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder={'Enter your Phone Number'}
                    value={enterPhone}
                    onChange={(event) => setEnterPhone(event.target.value)}
                    className={'w-full outline-0 py-2 px-2  border-b-2'}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder={'Enter your city'}
                    value={enterCity}
                    onChange={(event) => setEnterCity(event.target.value)}
                    className={'w-full outline-0 py-2 px-2  border-b-2'}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder={'Enter your Post Code'}
                    value={enterPostCode}
                    onChange={(event) => setEnterPostCode(event.target.value)}
                    className={'w-full outline-0 py-2 px-2  border-b-2'}
                  />
                </div>
                <div className="mt-4 text-center">
                  <button
                    className={
                      'border bg-red-600 text-white px-6 rounded-lg py-2 '
                    }
                  >
                    خرید
                  </button>
                </div>
              </form>
            </div>
            <div className="px-12 py-2 bg-red-200  h-40 w-96 text-right">
              <div className={'py-2 flex justify-between flex-row-reverse'}>
                <span>:زیر مجموع </span>
                <span>{totalAmount}</span>
              </div>

              <div className={'py-2 flex justify-between flex-row-reverse'}>
                <span> :زیر مجموع</span>
                <span>{shoppingCast}</span>
              </div>
              <div className={'py-2 flex justify-between flex-row-reverse'}>
                <strong>:زیر مجموع</strong>
                <strong>{totalAmount}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default CheckOuts;
