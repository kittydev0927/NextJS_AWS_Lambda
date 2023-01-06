// find percentage of steps (CicularProgress, Stepper, FormProgress components)

// Justification: Meaning is obvious.
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const findPercentage = (step: number, totalSteps: number): number => Math.floor((step / totalSteps) * 100);

// this currently uses a placeholder calculation of monthly max value
// multiplied by 3 to return an income value

// Justification: Temporary code.
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const incomeCalculation = (val: number) => val * 3;
