import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/lobby">
              RE-VERSE
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>
  );
}

export default Navbar;
