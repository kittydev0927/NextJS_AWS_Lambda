export interface ICalculateApplicationCompletionResult {
  readonly completed: readonly boolean[];
  readonly next: number;
  readonly nextPage: string;
  readonly totalSteps: number;
}
