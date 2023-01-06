export interface IYesNoQuestionProps {
  questionText: string;
  defaultAnswer: 'yes' | 'no' | null;
  setPageFilledContext?: React.Dispatch<React.SetStateAction<boolean | null>>;
}
