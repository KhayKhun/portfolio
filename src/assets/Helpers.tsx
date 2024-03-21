export function Lights() {
  return (
    <>
      <pointLight intensity={400} color={"#ff0f0f"} position={[7, 0, 0]} />
      <ambientLight intensity={0.8}/>
    </>
  );
}
