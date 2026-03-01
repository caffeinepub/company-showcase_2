import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContentData, ContactInfo, UserProfile, CommonSection } from '../backend';

export function useGetAllContent() {
  const { actor, isFetching } = useActor();

  return useQuery<ContentData>({
    queryKey: ['content'],
    queryFn: async () => {
      console.log('[useGetAllContent] Fetching content from backend...');
      if (!actor) {
        console.warn('[useGetAllContent] Actor not available');
        throw new Error('Actor not available');
      }
      const content = await actor.getAllContent();
      console.log('[useGetAllContent] Content fetched successfully');
      return content;
    },
    enabled: !!actor && !isFetching,
    retry: 2,
    retryDelay: 1000,
  });
}

export function useUpdateSection() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ section, content }: { section: string; content: CommonSection }) => {
      console.log('[useUpdateSection] Updating section:', section);
      if (!actor) throw new Error('Actor not available');
      await actor.updateSection(section, content);
      console.log('[useUpdateSection] Section updated successfully');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content'] });
    },
    onError: (error) => {
      console.error('[useUpdateSection] Update failed:', error);
    },
  });
}

export function useGetContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInfo>({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      console.log('[useGetContactInfo] Fetching contact info...');
      if (!actor) {
        console.warn('[useGetContactInfo] Actor not available');
        throw new Error('Actor not available');
      }
      const info = await actor.getContactInfo();
      console.log('[useGetContactInfo] Contact info fetched successfully');
      return info;
    },
    enabled: !!actor && !isFetching,
    retry: 2,
  });
}

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      console.log('[useGetCallerUserProfile] Fetching user profile...');
      if (!actor) {
        console.warn('[useGetCallerUserProfile] Actor not available');
        throw new Error('Actor not available');
      }
      const profile = await actor.getCallerUserProfile();
      console.log('[useGetCallerUserProfile] Profile fetched:', profile ? 'exists' : 'null');
      return profile;
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      console.log('[useSaveCallerUserProfile] Saving profile...');
      if (!actor) throw new Error('Actor not available');
      await actor.saveCallerUserProfile(profile);
      console.log('[useSaveCallerUserProfile] Profile saved successfully');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
    onError: (error) => {
      console.error('[useSaveCallerUserProfile] Save failed:', error);
    },
  });
}
