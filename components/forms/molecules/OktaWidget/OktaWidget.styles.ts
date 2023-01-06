import { styled } from '@mui/material';

export const StyledOktaSignInWidget = styled('div')`
  #okta-sign-in.auth-container.main-container {
    border: none;
    box-shadow: none;
    margin-top: 16px;
    background-color: transparent;

    .margin-btm-30 {
      margin-bottom: 23px;
    }
  }
  #okta-sign-in.auth-container {
    .okta-sign-in-header {
      display: none;
    }
    h2 {
      display: none;
    }
    .button-primary {
      background: ${({ theme }) => theme.colors.teal};
      border-color: unset;
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      box-shadow: none;
      height: 50px;
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    .o-form-explain.okta-form-input-error {
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      font-size: 14px;
      margin-left: 2px;
    }
    .okta-form-input-field input {
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      font-size: 16px !important;
      color: ${({ theme }) => theme.colors.darkGray} !important;
    }
    .link:link {
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: 18px;
      color: ${({ theme }) => theme.colors.darkGreen};
      box-shadow: none;
    }
    .link {
      color: ${({ theme }) => theme.colors.darkGreen};
    }
  }
  #okta-sign-in {
    @media screen and (max-width: 450px) {
      min-width: auto;
    }
    .infobox {
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      font-size: 14px;
    }
    .o-form label {
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      font-size: 14px;
    }
    .auth-content {
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    .o-form .input-fix {
      height: 50px;
      padding: 0 19px 0 23px;
      border: solid 1.5px #c4c4c4;
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      box-shadow: none;
    }
    .o-form-edit-mode .o-form-content {
      padding: 0;
    }
    .o-form-button-bar {
      padding: 0 0 27px;
    }
    .custom-checkbox {
      display: none;
    }
    .auth-footer {
      text-align: center;
      .link.help.js-help {
        text-decoration: none;
        &::before {
          content: '▶';
          margin-right: 10px;
        }
        &[aria-expanded='true'] {
          &::before {
            content: '▼';
          }
        }
      }
    }
  }

  #okta-sign-in .social-auth-button.link-button {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    text-align: center;
  }
`;
