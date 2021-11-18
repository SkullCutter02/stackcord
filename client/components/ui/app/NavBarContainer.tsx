import React from "react";
import NavUser from "./NavUser";
import NavServers from "./NavServers";
const NavBarContainer: React.FC = () => {
  return (
    <>
      <main>
        <NavUser />
        <div className="divider" />
        <NavServers />
      </main>

      <style jsx>{`
        main {
          display: flex;
          height: 20vh;
          padding: 5vh 0;
          align-items: center;
        }

        .divider {
          height: 10vh;
          background: var(--borderColor);
          width: 2px;
          border-radius: 1px;
        }
      `}</style>
    </>
  );
};

export default NavBarContainer;

// ignore this shit
// import {
//     Box,
//     Flex,
//     Avatar,
//     Link,
//     Button,
//     Menu,
//     MenuButton,
//     useDisclosure,
//     useColorModeValue,
//     HStack,
//     useColorMode,
//     Center,
// } from "@chakra-ui/react";
// import { MoonIcon, SunIcon, AddIcon, SettingsIcon } from "@chakra-ui/icons";

// const NavLink = ({ children }: { children: ReactNode }) => (
//     <Link
//         px={2}
//         py={1}
//         rounded={"md"}
//         _hover={{
//             textDecoration: "none",
//             bg: useColorModeValue("gray.200", "gray.700"),
//         }}
//         href={"#"}
//     >
//         {children}
//     </Link>
// );

// export default function Nav() {
//     const { colorMode, toggleColorMode } = useColorMode();
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     return (
//         <>
//             <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
//                 <Flex h={32} alignItems={"center"} justifyContent={"space-between"}>
//                     <Flex alignItems={"center"}>
//                         <HStack direction={"row"} spacing={7}>
//                             <Button onClick={toggleColorMode}>
//                                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//                             </Button>
//                             <Box h="40px" bg="yellow.200">
//                                 <Canvas
//                                     >
//                             </Box>
//                             <Box h="40px" bg="tomato">
//                                 2
//                             </Box>
//                             <Box h="40px" bg="pink.100">
//                                 3
//                             </Box>
//                         </HStack>
//                     </Flex>
//                 </Flex>
//             </Box>
//         </>
//     );
// }
