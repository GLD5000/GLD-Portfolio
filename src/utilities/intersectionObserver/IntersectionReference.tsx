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

      {topOnly ? null : <IntersectionPoint identity={identity} />}
    </>
  );
}
