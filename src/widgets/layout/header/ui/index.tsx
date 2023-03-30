import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import './styles/index.sass'

export const HeaderUI = ({
  children,
  openMenu,
  mainRoutes,
  dropRoutes,
}: any): ReactElement => (
  <>
    <div className="header">
      <NavLink to='/' className='logo'><img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt='logo'/></NavLink>
      <div className="header-content">
        <div className="links">
          {
            mainRoutes.map((route: any) => (
              <NavLink 
                to={route.path} 
                className="link"
                key={route.title}
              >{route.title}</NavLink>
            ))
          }
          {dropRoutes.length ? (
            <div className="flexDiv">
              <div className="menu" onClick={openMenu}/>
              <div className="selectWrapper">
                <div className="multiSelect" id="menu-0">
                  {
                    dropRoutes.map((route: any) => (
                      <div key={route.title} className='item'>
                        <NavLink
                          to={route.path}  
                          onClick={() => {
                            const elem = document.querySelector(".selectWrapper") as HTMLDivElement
                            if(elem && elem.style){
                              if (elem.style.pointerEvents === "all") {
                                elem.style.opacity = '0';
                                elem.style.pointerEvents = "none";
                              }
                            }
                          }}
                        >{route.title}</NavLink>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    {children}
  </>
)