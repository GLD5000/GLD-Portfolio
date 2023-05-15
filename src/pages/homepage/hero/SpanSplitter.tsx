function getSpanArray(stringIn: string) {
  if (stringIn === undefined) return null;

  return stringIn
    .replaceAll(" ", " [space]")
    .split(" ")
    .map((letter, index) => {
      const key = `word ${index}`;
      return (
        <span
          key={key}
          className=" cursor-default hover:text-primary hover:[transition-duration:800ms] hover:[transition-delay:100ms]"
        >
          {letter.replaceAll("[space]", " ")}
        </span>
      );
    });
}

export default function SpanSplitter({ word }: { word: string }) {
  const spanArray = getSpanArray(word);
  return <>{spanArray}</>;
}
