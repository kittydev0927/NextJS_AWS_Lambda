export const setEquality = <T = unknown>(setA: ReadonlySet<T>, setB?: ReadonlySet<T> | null) => {
  if (!setB) {
    return setA.size === 0;
  }

  if (setA.size !== setB.size) {
    return false;
  }

  for (const item of Array.from(setA)) {
    if (!setB.has(item)) {
      return false;
    }
  }

  return true;
};
