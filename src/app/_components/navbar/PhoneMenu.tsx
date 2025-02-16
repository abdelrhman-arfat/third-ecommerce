"use client";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
const NavBarMenuLinks = () => {
  const pathname = usePathname();
  return (
    <StyledWrapper>
      <div className="z-50 button-container flex sm:hidden fixed bottom-7 right-1/2 translate-x-1/2">
        <Link href={"/"} className={`button `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            strokeWidth={0}
            fill="currentColor"
            stroke="currentColor"
            className={`icon ${pathname == "/" && "active"}`}
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
          </svg>
        </Link>
        <Link href={"/contact"} className={`button `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeWidth={2}
            fill="none"
            stroke="currentColor"
            className={`icon ${pathname == "/contact" && "active"}`}
          >
            <path
              d="M3 8l9 6 9-6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <rect
              x="2"
              y="5"
              width="20"
              height="14"
              rx="2"
              ry="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        <Link href={"/register"} className={`button `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={0}
            fill="currentColor"
            stroke="currentColor"
            className={`icon ${pathname == "/register" && "active"}`}
          >
            <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
          </svg>
        </Link>
        <Link href={"/cart"} className={`button `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            strokeLinejoin="round"
            strokeLinecap="round"
            viewBox="0 0 24 24"
            strokeWidth={2}
            fill="none"
            stroke="currentColor"
            className={`icon ${pathname == "/cart" && " active"}`}
          >
            <circle r={1} cy={21} cx={9} />
            <circle r={1} cy={21} cx={20} />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </Link>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-container {
    background-color: rgba(245, 73, 144);
    width: 250px;
    height: 40px;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
      rgba(245, 73, 144, 0.5) 5px 10px 15px;
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }
  .active {
    transform: scale(1.2);
    transition: 0.3s;
    color: white;
    border: 50%;
  }
  .icon {
    font-size: 20px;
  }
`;

export default NavBarMenuLinks;
