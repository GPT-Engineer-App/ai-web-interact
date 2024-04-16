// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10}>
        {/* Header Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Rethinking the Internet for AI Agents
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Pioneering new ways to integrate AI seamlessly into the digital world.
          </Text>
        </Box>

        {/* AI Tools Section */}
        <Box p={8} shadow="md" borderWidth="1px" borderRadius="lg">
          <VStack spacing={5}>
            <FaRobot size="3em" />
            <Heading as="h2" size="lg">
              AI Integration Tools
            </Heading>
            <Text fontSize="md" color="gray.500">
              Our suite of tools allows AI agents to interact with any website as if they were human, enabling smoother transitions and more intuitive interactions across the web.
            </Text>
          </VStack>
        </Box>

        {/* Image Section */}
        <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEzMjg5OTY3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="AI Technology" />
      </VStack>
    </Container>
  );
};

export default Index;
