This test is disabled due to a bug in jest.

These attempted workarounds have been tried:

Adding to moduleNameMapper in jest.config.ts:

```
'^react$': '<rootDir>/node_modules/react/index.js'
```

The goal of this is to ensure that only a single copy of React is running at a
time, by making all "import react" calls resolve to the same copy. This has
no effect.

Adding to jest.setup.js:

```ts
let mockActualReact;

jest.doMock('react', () => {
  if (!mockActualReact) {
    mockActualReact = jest.requireActual('react');
  }

  return mockActualReact;
});
```

The goal is to mock "react" once, and have all calls to react return the single
"real" react from requireActual. This has no effect.

Options #1 and #2 combined. This has no effect.

Use of `jest.mock('@okta/okta-signin-widget')`. This fails immediately because
the Okta sign-in widget requires the Canvas API for some reason. This API is not
available in NodeJs, so simply having a require, import, or mock causes an
immediate error. I think Lars tried to resolve this problem with
`jest-canvas-mock`, but I don't know what came of it.

The code below comes the closest to working, I think, because it lets us mock
the Okta sign-in widget without ever importing it anywhere. Sadly, this results
in React complaining about an improper use of Hooks.

See https://github.com/facebook/jest/issues/8987 for details.

I've sunk enough dev hours into this to think that further investigation is not
likely to be fruitful. We'll need to wait for new versions of either Jest or of
the Okta sign-in widget.

```ts
type IOktaSignIn = typeof OktaSignIn;

const mockWidget = jest.fn<InstanceType<IOktaSignIn>, ConstructorParameters<IOktaSignIn>>();

jest.unstable_mockModule('@okta/okta-signin-widget', () => ({ default: mockWidget }));

describe('OktaSignInWidget', () => {
  it('renders the Okta sign-in widget', async () => {
    // Arrange
    const ns = await import('@/app/components/OktaSignInWidget/OktaSignInWidget');

    // Act
    render(ns.default());

    // Assert
    expect(mockWidget).toHaveBeenCalled();
  });
});
```
