import React, {useEffect, useRef} from "react";
import logo from "../../config/images/res-logo.png";
import { LinksNav } from "../../config/data";
import { Link, NavLink } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {cartUiActions} from "../../store/shopping-cart/cartSIdeUi";
const Header = () => {
  //hooks
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const dispatch = useDispatch()
  const totalQuantity= useSelector(state=>state.cart.totalQuantity)

  //function
  const toggleMenu = ()=> menuRef.current.classList.toggle('showMenu');
  const toggleCart  = () => {
    dispatch(cartUiActions.toggle())
  }
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__shrink')
      }else {
          headerRef.current.classList.remove('header__shrink')
      }
      return ()=>window.removeEventListener('scroll')
    })
  },[])
  return (
    <div className="header   bg-white px-2 py-1" ref={headerRef}>
      <div className="container flex items-center justify-between   lg:px-24 md:px-20  ">
        {/* logo and title  */}
        <div className="logo px-6 py-2 flex  items-center flex-col z-[1000000]">
          <img src={logo} alt="" className="w-16 h-16 object-contain" />
          <h5 className="font-semibold text-base text-[#212245]">
            Tasty Treat
          </h5>
        </div>
        {/* logo and title  */}

        {/* ======= menu ======= */}
        <nav className="navigation  transition ease-in-out delay-150 lg:block lg:h-0" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu sm:z-[50] menu-desktop"  >
            {LinksNav.map((item, id) => {
              return (
                <NavLink
                  to={item.path}

                  key={id}
                  className={navClass=>navClass.isActive?"text-red-600":'' + 'hover:text-red-600 font-base text-lg transition duration-100 '}
                >
                  {item.display}
                </NavLink>
              );
            })}
          </ul>

        </nav>
        {/* ======= menu ======= */}

        {/* ======== nav right icons ========= */}
        <div className="Nav-right flex items-center gap-6 justify-end lg:z-[100000]">
          {/* cart_icon */}
          <span className="cart_icon contaier-icons relative" onClick={toggleCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {/* badge front icons */}
            <span className={"cart__badge mt-1 font-normal text-white absolute top-[-0.625rem] -right-2.5 w-4 h-4 rounded-full bg-red-700  text-center  text-xs "}>{totalQuantity}</span>
          </span>

          {/* user icon */}
          <span className="user_icon contaier-icons">
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </span>
          {/* user icon */}

          {/* mobile icons */}
          <span className="mobile__icons contaier-icons " onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          {/* mobile icons */}
        </div>

        {/* ======== nav right icons ========= */}
      </div>
    </div>
  );
};

export default Header;
