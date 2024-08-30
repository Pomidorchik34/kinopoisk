import { useEffect, useState } from "react";
import movie from "../images/Movie.svg";
import oval from "../images/Oval.svg";
import path from "../images/Path.svg";
import shape from "../images/Shape.svg";
import shape1 from "../images/Shape-1.svg";
import shape2 from "../images/Shape-2.svg";
import search from "../images/search.svg";
import shape3 from "../dopImages/Shape.svg";
import { ToastContainer, toast } from "react-toastify";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("https://api.kinopoisk.dev/v1.4/movie", {
    //   headers: {
    //     "X-API-KEY": "CYE4W49-C8544FW-PFWEDHC-YABZPNV",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
    axios("https://api.kinopoisk.dev/v1.4/movie", {
      headers: {
        "X-API-KEY": "CYE4W49-C8544FW-PFWEDHC-YABZPNV",
      },
    }).then((response) => {
      setData(response.data.docs);
      console.log(data);
    });
  }, []);
  const [count, setCount] = useState(0);
  let marked = [];
  if (localStorage.getItem("marked")) {
    marked = JSON.parse(localStorage.getItem("marked"));
  }
  const notify = () => toast("succes");
  return (
    <>
      <nav className="navbar flex flex-col h-[960px] w-[136px] rounded-[21px] items-center py-[35px] px-[12px]">
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
            <Link>
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
            placeholder="Search for movies"
          />
        </label>
        <div className="movies pt-[34px]">
          <h1 className="heading pb-[38px]">Movies</h1>
          <div className="cards flex flex-wrap gap-[40px]">
            {data.map((value, index) => {
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
                        notify;
                        if (localStorage.getItem("marked")) {
                          marked = JSON.parse(localStorage.getItem("marked"));
                          marked.push({ index, value });
                          localStorage.setItem(
                            "marked",
                            JSON.stringify(marked)
                          );
                        } else {
                          marked.push({ index, value });
                          localStorage.setItem(
                            "marked",
                            JSON.stringify(marked)
                          );
                        }
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
      </div>
    </>
  );
}

export default Movies;
