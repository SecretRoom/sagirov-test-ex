import { routes } from "app/providers/routes";
import { useEffect, useLayoutEffect, useState } from "react";
import { HeaderUI } from "../ui"

export const Header = ({ children }: any) => {
  const [mainRoutes, setMainRoutes] = useState<any>([]);
  const [dropRoutes, setDropRoutes] = useState<any>([]);
  const [width, setWidth] = useState<number>(0)

  const resizeHandler = () => {
    const links = document.getElementsByClassName('header-content')[0] as HTMLDivElement
    if (links !== undefined &&  links !== null) {
      setWidth(links.clientWidth);
    } else {
      setTimeout(() => {
        resizeHandler()
      })
    }
  }

  const computedRoutesSet = (width: number) => {
    const maxRoutes =  (width - width*0.15) / 170;
    const elem = document.querySelector(".selectWrapper") as HTMLDivElement
    if(elem && elem.style){
      if (elem.style.pointerEvents === "all") {
        elem.style.opacity = '0';
        elem.style.pointerEvents = "none";
      }
    }
    if (maxRoutes < routes.length) {
      setMainRoutes(routes.slice(0, maxRoutes))
      setDropRoutes(routes.slice(maxRoutes))
    } else {
      setDropRoutes([])
      setMainRoutes(routes)
    }
  }

  function openMenu() {
    const elem = document.querySelector(".selectWrapper") as HTMLDivElement
    if(elem && elem.style){
      if (elem.style.pointerEvents === "all") {
        elem.style.opacity = '0';
        elem.style.pointerEvents = "none";
      } else {
        elem.style.opacity = '1';
        elem.style.pointerEvents = "all";
      }
    }
  }
  

  useLayoutEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    computedRoutesSet(width)
  }, [width])

  return <HeaderUI
    children={children}
    openMenu={openMenu}
    mainRoutes={mainRoutes}
    dropRoutes={dropRoutes}
  />
}