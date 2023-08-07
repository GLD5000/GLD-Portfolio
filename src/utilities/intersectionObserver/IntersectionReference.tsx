"use client";

import IntersectionPoint from "./IntersectionPoint";

export default function IntersectionReference({
  identity,
  topOnly = false,
}: {
  identity: string;
  topOnly?: boolean;
}) {
  return (
    <>
      <IntersectionPoint identity={identity} top />
      <IntersectionPoint identity={identity} top offset />

      {topOnly ? null : (
        <>
          <IntersectionPoint identity={identity} />
          <IntersectionPoint identity={identity} offset />
        </>
      )}
    </>
  );
}
