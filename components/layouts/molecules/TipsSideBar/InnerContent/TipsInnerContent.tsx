import parse from 'html-react-parser';

import type { ITips } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

import { StyledList, StyledText, StyledTips, StyledTitle } from './TipsInnerContent.styles';

export const TipsInnerContent: React.FC<ITips> = ({ appTips }) => {
  return (
    <StyledTips className="styled-tips">
      {appTips.applicationTipContent.json.map(node => {
        if (node.nodeType === 'header') {
          return <StyledTitle>{node.content[0].value}</StyledTitle>;
        }
        if (node.nodeType === 'paragraph' && node.content[0]) {
          const parsedParagraph = parse(`${node.content[0].value}`);
          return (
            <StyledText key={node.content[0].value} className="tips-paragraph">
              {parsedParagraph}
            </StyledText>
          );
        }
        if (node.nodeType === 'unordered-list') {
          return (
            <StyledList>
              {node.content.map(listItem => {
                return (
                  <li key={listItem.content[0].value}>
                    <StyledText>{listItem.content[0].value}</StyledText>
                  </li>
                );
              })}
            </StyledList>
          );
        }
        return <></>;
      })}
    </StyledTips>
  );
};
