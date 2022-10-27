import { useLocation } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";
import { useEffect } from "react";

function Navbar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    console.log(location.pathname);
  }, [location]);
  return (
    <Box>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/lobby">RE-VERSE</BreadcrumbLink>
          </BreadcrumbItem>
          {location.pathname === "/character" && (
            <BreadcrumbItem>
              <BreadcrumbLink href="/character">캐릭터 선택</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {location.pathname === "/friend" && (
            <BreadcrumbItem>
              <BreadcrumbLink href="/friend">친구</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {location.pathname === "/archive" && (
            <BreadcrumbItem>
              <BreadcrumbLink href="/archive">아카이브</BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </Box>
    </Box>
    // <Box>
    //   <Box>
    //     <Breadcrumb>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink as={Link} to="/lobby">
    //           RE-VERSE
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink as={Link} to="/character">
    //           캐릭터 선택
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink as={Link} to="/friend">
    //           친구
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink isCurrentPage as={Link} to="/archive">
    //           아카이브
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //     </Breadcrumb>
    //   </Box>
    // </Box>
  );
}

export default Navbar;
