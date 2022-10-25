import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Box>
      <Box>
        {/* <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/lobby">
              RE-VERSE
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage as={Link} to="/character">
              캐릭터 선택
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage as={Link} to="/friend">
              친구
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage as={Link} to="/archive">
              아카이브
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb> */}
      </Box>
    </Box>
  );
}

export default Navbar;
