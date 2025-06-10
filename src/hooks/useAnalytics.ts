import { useCallback } from 'react'
import { trackEvent, identifyUser, trackPageView, setUserGroup } from '@/lib/analytics'

export const useAnalytics = () => {
  const track = useCallback((eventName: string, properties?: Record<string, any>) => {
    trackEvent(eventName, properties)
  }, [])

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    identifyUser(userId, traits)
  }, [])

  const page = useCallback((name?: string, properties?: Record<string, any>) => {
    trackPageView(name, properties)
  }, [])

  const group = useCallback((groupId: string, traits?: Record<string, any>) => {
    setUserGroup(groupId, traits)
  }, [])

  return {
    track,
    identify,
    page,
    group,
  }
}

export default useAnalytics 