import React from "react";
import "./members.css";

export default function Members() {
  return (
    <div className="page__container">
      <div className="page__wrapper">
        <div className="page__hero">
          <div className="page__image"></div>

          <div className="page__text">
            <h1>WELCOME TO THE REVERSE</h1>
            <div className="grid grid-cols-3">
              {/* 기연 */}
              <button>
                <img
                  src="https://images.unsplash.com/photo-1668885975180-d9df94ba8dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </button>
              {/* 윤선 */}
              <button>
                <img
                  src="https://images.unsplash.com/photo-1668885975180-d9df94ba8dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </button>
              {/* 용현 */}
              <button>
                <img
                  src="https://images.unsplash.com/photo-1668885975180-d9df94ba8dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </button>
              {/* 혜은 */}
              <button>
                <img
                  src="https://images.unsplash.com/photo-1668885975180-d9df94ba8dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </button>
              {/* 원창 */}
              <button>
                <img
                  src="https://images.unsplash.com/photo-1668885975180-d9df94ba8dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </button>
              {/* 윤영 */}
              <button>
                <img
                  src="https://images.unsplash.com/photo-1668885975180-d9df94ba8dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const profiles = [
  {
    name: "",
    role: "",
    img: "",
    comments: "",
    github: "",
    mail: "",
  },
];
