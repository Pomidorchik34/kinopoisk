import React from "react";
import { useState } from "react";
import movie from "../images/Movie.svg";
import oval from "../images/Oval.svg";
import path from "../dopImages/Bookmark.svg";
import shape2 from "../dopImages/Shape.svg";
import shape1 from "../images/Shape-1.svg";
import shape from "../images/Shape.svg";
import search from "../images/search.svg";
import { ToastContainer, toast } from "react-toastify";
import "../App.css";
import shape3 from "../dopImages/Shape.svg";
import { Link } from "react-router-dom";
function Bookmarks() {
  const [data, setData] = useState(
    localStorage.getItem("marked")
      ? JSON.parse(localStorage.getItem("marked"))
      : []
  );
  let marked = [];
  if (localStorage.getItem("marked")) {
    marked = JSON.parse(localStorage.getItem("marked"));
  }
  const notify = () => toast("succes");
  return (
    <>
      <nav className="navbar flex flex-col h-[960px] w-[76px] rounded-[21px] items-center py-[35px]">
        <img
          src={movie}
          width={32}
          height={25}
          alt=""
          className="logo mb-[80px]"
        />
        <ul className="flex flex-col items-center gap-10">
          <li>
            <Link>
              <img className="w-[20px] h-[20px]" src={shape} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img className="w-[20px] h-[20px]" src={shape1} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img className="w-[20px] h-[20px]" src={shape2} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Bookmarks">
              <img className="w-[20px] h-[20px]" src={path} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img
                className="relative top-[472px] w-[20px] h-[20px]"
                src={oval}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <label className="flex gap-6 items-center">
          <img src={search} alt="" />
          <input
            type="text"
            className="bg-transparent pt-2"
            placeholder="Search for bookmarked shows"
          />
        </label>
        <div className="bookmarked movies">
          <h1 className="pt-[34px] pb-[38px]">Bookmarked Movies</h1>
        </div>
        <div className="cards flex flex-wrap gap-[40px]">
          {data.length > 0 &&
            data.map((value, index) => {
              return (
                <div className="card" key={index}>
                  <div className="image relative">
                    <img
                      className="w-[280px] h-[174px] cover rounded-[12px]"
                      src="https://picsum.photos/200/300"
                      alt=""
                    />
                    <button
                      id={value}
                      onClick={(e) => {
                        if (localStorage.getItem("marked")) {
                          marked = JSON.parse(localStorage.getItem("marked"));
                          marked.splice(index);
                          localStorage.setItem(
                            "marked",
                            JSON.stringify(marked)
                          );
                        } else {
                          marked.splice(index);
                          localStorage.setItem(
                            "marked",
                            JSON.stringify(marked)
                          );
                        }
                        notify;
                        setTimeout(() => {
                          location.reload();
                        }, [500]);
                      }}
                      className="absolute right-[16px] top-[16px] bg-slate-600 p-[9px] px-[15px] rounded-[50%]"
                    >
                      <i className="fa-regular fa-bookmark"></i>
                    </button>
                  </div>
                  <ul className="flex gap-3 list">
                    <li>{value.year}</li>
                    <li className="flex items-center gap-1">
                      <img src={shape3} className="w-[12px] h-[12px]" alt="" />
                      Movie
                    </li>
                    <li>18+</li>
                  </ul>
                  <h2 className="28px">{value.name}</h2>
                </div>
              );
            })}
        </div>
        <div className="bookmarked TV serias">
          <h1 className="pt-[34px] pb-[38px]">Bookmarked TV serias</h1>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Bookmarks;
