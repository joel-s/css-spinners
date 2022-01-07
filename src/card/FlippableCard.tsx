import styled from "styled-components";

const Card = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90vmin;
  width: 90vmin;
  margin: auto;
  perspective: 200vmin;
  transition: transform 1000ms;
  will-change: transform;
`;

const Face = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5%;
  transition: transform 1000ms;
  will-change: transform;
  backface-visibility: hidden;
`;

const Front = styled(Face)`
  background-color: white;
`;

const Back = styled(Face)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(200deg, 100%, 45%);
`;

export default function FlippableCard({ children, isOpen, onClick } :
    { children: JSX.Element, isOpen: boolean, onClick: () => void }) {
  return (
    <Card onClick={onClick} style={{
      transform: isOpen
        ? 'translateX(0) translateZ(0) translateY(0)'
        : 'translateX(-75vmin) translateZ(-500vmin) translateY(-75vmin)',
    }}>
      <Front style={{
        transform: isOpen
          ? 'rotateY(0deg)'
          : 'rotateY(180deg)',
      }}>
        {children}
      </Front>
      <Back style={{
        transform: isOpen
          ? 'rotateY(-180deg)'
          : 'rotateY(0deg)',
      }} />
    </Card>
  );
}
