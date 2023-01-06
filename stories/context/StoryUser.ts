import type { IHomesDetail } from 'homedetail/IHomeDetail';

import type { IProfile } from '#auth/IProfile';
import { PortalUser } from '#auth/PortalUser';

const localStorageKey = 'stories-auth-StoryUser';

export default class StoryUser extends PortalUser {
  private get storage(): IProfile {
    const raw = window.localStorage.getItem(localStorageKey);
    if (typeof raw === 'string') {
      return JSON.parse(raw) as IProfile;
    }

    this.storage = {
      currentProgressResident: false,
      emailAddress: 'sjones@email.com',
      firstName: 'Samantha',
      lastName: 'Jones',
      phoneNumber: '(230) 234-3885',
      privacyConsent: true,
      optInConsent:
        'By checking here and clicking the Register button, you agree that we may call you at the number you entered above or email you at the email address you entered above with reminders, offers and other info, including possibly using automated technology, text messages, email, prerecorded messages and artificial voices. Consent is not a condition of purchase. Reply STOP to opt out of text messaging. Standard message and data rates apply.',
    };

    return this.storage;
  }

  private set storage(profile: IProfile) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(profile));
  }

  public override async getProfile(): Promise<IProfile | undefined> {
    return Promise.resolve(this.storage);
  }

  public override async patchProfile(profile: IProfile): Promise<IProfile> {
    const patched: IProfile = {
      ...this.storage,
      ...profile,
    };

    // Behavior of the API is to delete keys that are set to null.
    const processed = Object.fromEntries(Object.entries(patched).filter(([, value]) => value !== null));

    this.storage = processed;

    return Promise.resolve(processed);
  }

  public override async register() {
    throw new Error('Not implemented');
  }

  public override async signOut() {
    throw new Error('Not implemented');
  }

  public override async getSavedHomes(): Promise<IHomesDetail | undefined> {
    throw new Error('Not implemented');
  }

  public override async changePassword() {
    throw new Error('Not implemented');
  }

  public override async removeSavedHomes() {
    throw new Error('Not implemented');
  }

  public override async addSavedHomes() {
    throw new Error('Not implemented');
  }
}
