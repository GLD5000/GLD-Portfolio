function getSpanArray(stringIn: string) {
  return stringIn
    .replaceAll(" ", " [space]")
    .split(" ")
    .map((letter, index) => {
      const key = `word ${index}`;
      return (
        <span
          key={key}
          className=" cursor-default [transition-duration:800ms] [transition-delay:100ms] hover:text-brand"
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
