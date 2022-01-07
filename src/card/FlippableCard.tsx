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
  transform: rotateY(0deg);
  ${Card}:hover &, ${Card}:focus & {
    transform: rotateY(180deg);
  }
`;

const Back = styled(Face)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(200deg, 100%, 45%);
  transform: rotateY(-180deg);
  ${Card}:hover &, ${Card}:focus & {
    transform: rotateY(0deg);
  }
`;


export default function FlippableCard({ children } : { children: JSX.Element }) {
  return (
    <Card>
      <Front>
        {children}
      </Front>
      <Back />
    </Card>
  );
}
