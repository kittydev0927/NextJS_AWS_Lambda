jest.mock('#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper');
jest.mock('#components/forms/organisms/ApplicationForms/CurrentAddress/CurrentAddress');
jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { CurrentAddress } from '#components/forms/organisms/ApplicationForms/CurrentAddress/CurrentAddress';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render } from '#utils/testing-library';

import { CurrentResidence } from './CurrentResidence';

type IRouter = ReturnType<typeof useRouter>;

const mockApplicationPageWrapper = jest.mocked(ApplicationPageWrapper);
const mockCurrentAddress = jest.mocked(CurrentAddress);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseRouter = jest.mocked(useRouter);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('CurrentResidence', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouter.mockReturnValue(mockRouter);
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  [
    { validForm: true, isNextDisabled: false },
    { validForm: false, isNextDisabled: true },
  ].forEach(({ validForm, isNextDisabled }) =>
    it(`sets "next" disabled state to ${isNextDisabled} if form validity is ${validForm}`, async () => {
      // Arrange
      type IIsFormValid = Parameters<typeof CurrentAddress>[0]['isFormValid'];
      type IFormValues = Parameters<IIsFormValid>[0];
      let isFormValidSpy: IIsFormValid | undefined;
      let isNextButtonDisabledSpy: boolean | undefined;

      mockApplicationPageWrapper.mockImplementation(props => {
        isNextButtonDisabledSpy = props.isNextButtonDisabled;

        return (
          <div>
            <div>{props.children}</div>
            {props.tipsContent && <div>{props.tipsContent}</div>}
          </div>
        );
      });

      mockCurrentAddress.mockImplementation(props => {
        isFormValidSpy = props.isFormValid;
        return <p>mock current address form</p>;
      });

      render(<CurrentResidence pageData={sampleApplicationPageData as unknown as ISampleData} />);

      // Act
      await act(async () => {
        isFormValidSpy?.({} as unknown as IFormValues, validForm);
      });

      // Assert
      expect(isNextButtonDisabledSpy).toBe(isNextDisabled);
    }),
  );
});
