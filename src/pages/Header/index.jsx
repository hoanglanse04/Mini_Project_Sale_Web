import "./index.css";
import "../../base.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import  logoImg from '../../assets/images/logo.png';

export default function Header(){

    var cartNumber=0;
    const handleClickNavi = () =>{
      const navigationTablet  = document.querySelector('.navigation-tablet__content');
      navigationTablet.style.display='none';
    }

    const listItemSelect = document.querySelectorAll('.navigation ul li a');
    listItemSelect.forEach(a =>{
      a.addEventListener('click',function(){
        listItemSelect.forEach(item =>{
          item.classList.remove('selected');
          console.log("ok");
        })
        this.classList.add('selected');
      })
    })

    const [categoryData,setcategoryData] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:3001/category")
      .then(res=>res.json())
      .then(data=>{
        setcategoryData(data);
      })
    },[]);

    
   

    return(

        <>
        <div className="topHead">

            <div className="container">
                  <div className="topHead__login">
                    <h4>SIGN UP</h4>
                    <span>|</span>
                    <h4>SIGN IN</h4>
                  </div>

                  <div className="topHead__infor">
                    <div className="topHead__infor--mail">
                      <div className="topHead__infor--mail--icon">
                      <i class="bi bi-envelope"></i>
                      </div>
                      <span>support@sapo.vn</span>
                    </div>
                    <div className="topHead__infor--phone">
                      <div className="topHead__infor--phone--icon">
                       <i class="bi bi-telephone"></i>
                      </div>
                      <span>1900 6750</span>

                    </div>
                  </div> 
            </div>

        </div>
        <div className="midHead">
          <div className="container">
            <div className="midHead__logo">
              <img src={logoImg} alt=""></img>
            </div>
            <div className="midHead__fSearch">
              <form>
                <input type="text" placeholder="Search" ></input>
                <button type="submit">
                <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
            <div className="midHead__cart">
              <div className="midHead__cart--item">
              <i class="bi bi-cart"></i>
            <span> ({cartNumber}) products</span>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <div className="container">
            <ul className="navigation__origin">
              <li className="navigation__home"><a><Link to='/' >Home</Link></a></li>
              <li className="navigation__about"><a><Link to='About' >About</Link></a></li>
              <li className="navigation__products">
                <div>
                <a><Link to='Products' >Products</Link><i class="bi bi-chevron-down"></i></a>
                <ul className="products__category">
                  {categoryData.map(item =>(
                    <li className="category__item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                </div>
                </li>
              <li className="navigation__news"><a><Link to='News' >News</Link></a></li>
              <li className="navigation__contact"><a><Link to='Contact' >Contact</Link></a></li>
            </ul>
            <div className="navigation__tablet">
              <i class="bi bi-list button__openNavi" onClick={()=>{
                document.querySelector('.navigation-tablet__content').style.display='flex';
                document.querySelector('.navigation-tablet__content').classList.add('moveRight');
              }}></i>
              
              <ul className="navigation-tablet__content">
                <i class="bi bi-x" onClick={()=>{
                  document.querySelector('.navigation-tablet__content').style.display="none";
                }}></i>
                  <li className="navigation__item" onClick={handleClickNavi}><a><Link to='/' >Home</Link></a></li>
                  <li className="navigation__item" onClick={handleClickNavi}><a><Link to='About' >About</Link></a></li>
                  <li className="navigation__item" onClick={handleClickNavi}>
                    <a><Link to='Products' >Products</Link></a><i class="bi bi-chevron-down"></i>
                    </li>
                  <li className="navigation__item" onClick={handleClickNavi}><a><Link to='News' >News</Link></a></li>
                  <li className="navigation__item" onClick={handleClickNavi}><a><Link to='Contact' >Contact</Link></a></li>
                </ul>
                <div className="midHead__cart">
                  <div className="midHead__cart--item">
                  <i class="bi bi-cart"></i>
                    <span> ({cartNumber}) products</span>
                  </div>
                </div>
            </div>
          </div>
        
       
        </div>
        </>
    )
}