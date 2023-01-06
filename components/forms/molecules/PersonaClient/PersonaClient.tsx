import type { Client } from 'persona';
import type Persona from 'persona';
import type { InquiryOptions } from 'persona/dist/lib/interfaces';
import { useCallback, useContext, useEffect, useState } from 'react';

import type { IInquiry } from '#auth/IInquiry';
import type { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';

import type { IPersonaClientProps } from './PersonaClient.types';

const PersonaTemplateId = process.env.NEXT_PUBLIC_PERSONA_TEMPLATE || process.env.STORYBOOK_PERSONA_TEMPLATE;

let personaPromise: Promise<typeof Persona> | undefined;

export const PersonaClient = ({ inquiry, setInquiry }: IPersonaClientProps) => {
  const portalUser = useContext(UserContext);
  const personaAccountId = usePersonaAccountId(portalUser);

  const updateInquiry = useCallback(
    async (updated: IInquiry) => {
      const compared = compareInquiries(updated, inquiry);

      if (compared === 'equal') {
        return;
      }

      await portalUser?.[compared === 'new' ? 'postPersonaInquiry' : 'patchPersonaInquiry'](updated);
      await setInquiry?.(updated);
    },
    [inquiry, portalUser, setInquiry],
  );

  const onComplete = useCallback(
    ({ inquiryId, status }: Parameters<NonNullable<InquiryOptions['onComplete']>>[0]) => {
      if (!(status === 'completed' || status === 'failed')) {
        throw new Error('Could not parse Persona status: ' + status);
      }

      void updateInquiry({ inquiryId, status });
    },
    [updateInquiry],
  );

  const onCancel = useCallback(
    ({ inquiryId, sessionToken }: Parameters<NonNullable<InquiryOptions['onCancel']>>[0]) => {
      if (inquiryId) {
        void updateInquiry({ inquiryId, sessionToken, status: 'opened' });
      }
    },
    [updateInquiry],
  );

  const onError = useCallback(() => {
    if (inquiry?.inquiryId) {
      void updateInquiry({ ...inquiry, status: 'error' });
    }
  }, [inquiry, updateInquiry]);

  useEffect(() => {
    if (!PersonaTemplateId || !personaAccountId) {
      return;
    }

    void (async () => {
      await loadPersonaClient(personaAccountId, inquiry, { onComplete, onCancel, onError });
    })();
  }, [onCancel, onComplete, onError, personaAccountId, inquiry]);

  return null;
};

const usePersonaAccountId = (portalUser?: PortalUser) => {
  const [personaAccountId, setPersonaAccountId] = useState<string | undefined>();

  useEffect(() => {
    if (personaAccountId || !portalUser) {
      return;
    }

    void (async () => {
      const created = await portalUser.getOrCreatePersonaAccount();
      setPersonaAccountId(created.personaAccountId);
    })();
  }, [personaAccountId, portalUser]);

  return personaAccountId;
};

const loadClient = async () => {
  return personaPromise ?? (personaPromise = import('persona'));
};

const loadPersonaClient = async (
  personaAccountId: string,
  inquiry: IInquiry | undefined,
  { onComplete, onCancel, onError }: InquiryOptions,
) => {
  const persona = await loadClient();

  // TODO: appropriately handle success and failure
  // when profile data object is updated to capture this info
  const personaClient: Client = new persona.Client({
    accountId: personaAccountId,
    environment: 'sandbox',
    inquiryId: inquiry?.inquiryId,
    onCancel,
    onComplete,
    onError,
    onReady: () => personaClient.open(),
    sessionToken: hasSessionToken(inquiry) ? inquiry.sessionToken : undefined,
    templateId: PersonaTemplateId,
  });

  return personaClient;
};

const hasSessionToken = (inquiry?: IInquiry): inquiry is IInquiry & { readonly sessionToken: string } =>
  (inquiry?.status === 'opened' || inquiry?.status === 'error') && typeof inquiry.sessionToken === 'string';

const compareInquiries = (updated: IInquiry, original?: IInquiry): 'new' | 'updated' | 'equal' => {
  if (updated.inquiryId !== original?.inquiryId) {
    return 'new';
  }

  if (updated.status === 'completed' || updated.status === 'failed') {
    return updated.status === original.status ? 'equal' : 'updated';
  }

  if (updated.status !== original.status) {
    return 'updated';
  }

  if (hasSessionToken(updated)) {
    if (hasSessionToken(original)) {
      return updated.sessionToken === original.sessionToken ? 'equal' : 'updated';
    }

    return 'updated';
  }

  if (hasSessionToken(original)) {
    return 'updated';
  }

  return 'equal';
};
