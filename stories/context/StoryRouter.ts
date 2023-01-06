import type { NextRouter } from 'next/router';

export default class StoryRouter implements NextRouter {
  public readonly asPath = '/';
  public readonly basePath = '/';

  public readonly events = {
    on: notImplemented,
    off: notImplemented,
    emit: notImplemented,
  };

  public readonly isFallback = false;
  public readonly isLocaleDomain = false;
  public readonly isPreview = false;
  public readonly isReady = true;
  public readonly pathname = '/';
  public readonly query = {};
  public readonly route = '/';

  public async push(url: string): Promise<boolean> {
    console.info('Navigation to', url);
    return Promise.resolve(true);
  }

  public async replace(url: string): Promise<boolean> {
    console.info('Replace current URL with', url);
    return Promise.resolve(true);
  }

  public async reload(): Promise<boolean> {
    window.location.reload();
    return Promise.resolve(true);
  }

  public back(): void {
    window.history.back();
  }

  public async prefetch(url: string): Promise<void> {
    console.info('Prefetch', url);
  }

  public beforePopState() {
    throw new Error('Method not implemented.');
  }
}

const notImplemented = () => {
  throw new Error('Not implemented');
};
