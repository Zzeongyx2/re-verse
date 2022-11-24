import { useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import BreadCrumbBtn from "../atoms/BreadCrumbBtn";

import NavBtn from "../atoms/NavBtn";

import { AiFillHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";
import { TbHanger } from "react-icons/tb";
import { FiPower } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../modules/user";
import { logout } from "../../api/auth";
import { Toast } from "../atoms/Toast";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between pb-14">
      <div>
        <Breadcrumb separator="">
          <>
            <div className="relative">
              <div className="absolute z-50">
                <BreadcrumbItem>
                  <Link to="/lobby">
                    <BreadCrumbBtn
                      text={"RE-VERSE"}
                      from={"from-main1"}
                      to={"to-sub1"}
                    />
                  </Link>
                </BreadcrumbItem>
              </div>
              <div className="absolute left-40 ">
                {location.pathname === "/lobby" && (
                  <BreadcrumbItem>
                    <Link to="/lobby">
                      <BreadCrumbBtn
                        text={"로비"}
                        from={"from-main2"}
                        to={"to-sub2"}
                      />
                    </Link>
                  </BreadcrumbItem>
                )}
                {location.pathname.includes("/friend/") && (
                  <BreadcrumbItem>
                    <Link to="/friend/list">
                      <BreadCrumbBtn
                        text={"친구"}
                        from={"from-main2"}
                        to={"to-sub2"}
                      />
                    </Link>
                  </BreadcrumbItem>
                )}
                {location.pathname.includes("/archive/") && (
                  <BreadcrumbItem>
                    <Link to="/archive/my">
                      <BreadCrumbBtn
                        text={"아카이브"}
                        from={"from-main2"}
                        to={"to-sub2"}
                      />
                    </Link>
                  </BreadcrumbItem>
                )}
                {location.pathname === "/character" && (
                  <BreadcrumbItem>
                    <Link to="/character">
                      <BreadCrumbBtn
                        text={"캐릭터 선택"}
                        from={"from-main2"}
                        to={"to-sub2"}
                      />
                    </Link>
                  </BreadcrumbItem>
                )}
              </div>
            </div>
          </>
        </Breadcrumb>
      </div>
      <div className="flex justify-between w-[260px]">
        <Link to="/lobby">
          {location.pathname === "/lobby" ? (
            <NavBtn
              icon={<AiFillHome className="text-3xl text-gray-800" />}
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<AiFillHome className="text-3xl text-white" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>

        <Link to="/friend/list">
          {location.pathname.includes("/friend/") ? (
            <NavBtn
              icon={<MdPeopleAlt className="text-3xl text-gray-800" />}
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<MdPeopleAlt className="text-3xl text-white" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>

        <Link to="/archive/my">
          {location.pathname.includes("/archive/") ? (
            <NavBtn
              icon={<BsArchiveFill className="text-3xl text-gray-800" />}
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<BsArchiveFill className="text-3xl text-white" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>
        <Link to="/character">
          {location.pathname === "/character" ? (
            <NavBtn
              icon={
                <TbHanger className="text-3xl text-gray-800 -scale-x-100" />
              }
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<TbHanger className="text-3xl text-white -scale-x-100" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>
        {/* logout btn */}

        <NavBtn
          icon={<FiPower className="text-3xl text-white" />}
          from={"from-main1"}
          to={"to-sub1"}
          onClick={() => {
            logout(
              (res) => {
                dispatch(
                  setLoginUser({
                    nickname: "",
                    message: "",
                    avatar: "",
                    bestArchiveId: "",
                  })
                );
                Toast.fire({
                  icon: "success",
                  title: "로그아웃 되었습니다.",
                  timer: 1500,
                });
              },
              (err) => {
                console.log(err);
              }
            );
            dispatch(
              setLoginUser({
                nickname: "",
                message: "",
                avatar: "",
                bestArchiveId: "",
              })
            );
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
