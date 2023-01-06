import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import { StyledContainer, StyledTable } from './Typography.styles';

export const TypographyComponent = React.forwardRef<HTMLElement>(() => {
  return (
    <StyledContainer data-testid="Typography-Container">
      <Typography variant="h3">Typography</Typography>
      <StyledTable>
        <thead>
          <tr>
            <th>Font Style</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Raleway (h1)</td>
            <td>42px</td>
            <td>
              <Typography variant="h1">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
          <tr>
            <td>Raleway (h2)</td>
            <td>40px</td>
            <td>
              <Typography variant="h2">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
          <tr>
            <td>Raleway (h3)</td>
            <td>36px</td>
            <td>
              <Typography variant="h3">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
          <tr>
            <td>Raleway (h4)</td>
            <td>32px</td>
            <td>
              <Typography variant="h4">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
          <tr>
            <td>Raleway (h5)</td>
            <td>28px</td>
            <td>
              <Typography variant="h5">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
          <tr>
            <td>Raleway (h6)</td>
            <td>24px</td>
            <td>
              <Typography variant="h6">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
          <tr>
            <td>Roboto (body1)</td>
            <td>Regular 16px</td>
            <td>
              <Typography variant="body1">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
          <tr>
            <td>Roboto (body2)</td>
            <td>Semi Bold 16px</td>
            <td>
              <Typography variant="body2">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z1
                2 3 4 5 6 7 8 9 0
              </Typography>
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
});

TypographyComponent.displayName = 'Typography';
