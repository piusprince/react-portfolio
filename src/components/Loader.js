import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const Loader = () => {
  return (
    <Wrapper>
      <Circle
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 5,
        }}
      ></Circle>
      <Circle
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 5,
        }}
      ></Circle>
      <Circle
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 5,
        }}
      ></Circle>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const Circle = styled(motion.div)`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-image: linear-gradient(to right, #33345a, #051937);
`;
