import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Img,
  SimpleGrid,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useState} from "react";
import { LoadSkeleton } from "./Skeleton";

const User = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <Container maxW="100vw" py={{md: "100px", base: "0px"}}>
      <Center>
        <Grid
          templateColumns={{md: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}}
          w={{lg: "60%", md: "80%", base: "100%"}}
          h={{lg: "600px", md: "600px"}}
        >
          <GridItem colSpan={1}>
            <SimpleGrid
              h="full"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              p={2}
              pt={5}
              columns={1}
            >
              <Box>
                <a href="/">
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={10}
                    color="white"
                    bg="#44337A"
                    h="81"
                  >
                    <Text fontSize={25}>CredBee</Text>
                  </Flex>
                </a>
                <Grid
                  mt={2}
                  templateColumns={{
                    md: "repeat(1, 1fr)",
                    base: "repeat(2, 1fr)",
                  }}
                  gap={1}
                >
                  <Button color="#44337A">Users</Button>
                  <Button color="#44337A">Subcriptions</Button>
                  <Button color="#44337A">Invice & Credit Notes</Button>
                  <Button color="#44337A">Product Catalog</Button>
                  <Button color="#44337A">Logs</Button>
                  <Button color="#44337A">RevenueStory</Button>
                  <Button color="#44337A">Classic Reports</Button>
                  <Button color="#44337A">Apps</Button>
                </Grid>
              </Box>
            </SimpleGrid>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            pt={5}
            colSpan={2}
          >
            <VStack spacing={5}>
              <Center>
                {loading ? (
                  <Box border="1px solid">
                    <Img
                      w="200px"
                      src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                    />
                  </Box>
                ) : (
                  <SkeletonCircle size="200" />
                )}
              </Center>
              {loading ? (
                <>
                  <Flex
                    width="100%"
                    border="1px solid"
                    justifyContent="space-around"
                  >
                    <Box width="150px">
                      <Text fontSize={25}>Name :</Text>
                    </Box>
                    <Box textAlign="left" width="250px">
                      <Text fontSize={25}>Gunjan Kuthe</Text>
                    </Box>
                  </Flex>
                  <Flex
                    width="100%"
                    border="1px solid"
                    justifyContent="space-around"
                  >
                    <Box width="150px">
                      <Text fontSize={25}>Email :</Text>
                    </Box>
                    <Box textAlign="left" width="250px">
                      <Text fontSize={25}>masai@gmail.com</Text>
                    </Box>
                  </Flex>
                  <Flex
                    width="100%"
                    border="1px solid"
                    justifyContent="space-around"
                  >
                    <Box width="150px">
                      <Text fontSize={25}>Phone No. :</Text>
                    </Box>
                    <Box textAlign="left" width="250px">
                      <Text fontSize={25}>5415464564</Text>
                    </Box>
                  </Flex>
                  <Flex
                    width="100%"
                    border="1px solid"
                    justifyContent="space-around"
                  >
                    <Box width="150px">
                      <Text fontSize={25}>Company :</Text>
                    </Box>
                    <Box textAlign="left" width="250px">
                      <Text fontSize={25}>Masai</Text>
                    </Box>
                  </Flex>
                  <Flex
                    width="100%"
                    border="1px solid"
                    justifyContent="space-around"
                  >
                    <Box width="150px">
                      <Text fontSize={25}>Plan :</Text>
                    </Box>
                    <Box textAlign="left" width="250px">
                      <Text fontSize={25}>Gold axkbsxsa</Text>
                    </Box>
                  </Flex>
                </>
              ) : (
                <LoadSkeleton />
              )}
            </VStack>
          </GridItem>
        </Grid>
      </Center>
    </Container>
  );
};


export default User;
