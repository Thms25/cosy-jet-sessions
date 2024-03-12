export default function seWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  }); // Handler to call on window resize

  const handleResize = useCallback(() => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []); // Add event listener

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

      handleResize(); // Remove event listener on cleanup

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]); // Return the window size

  return windowSize;
}
