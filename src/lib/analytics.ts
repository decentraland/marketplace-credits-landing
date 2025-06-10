import { AnalyticsBrowser } from '@segment/analytics-next'

// Initialize Segment Analytics
const getWriteKey = () => {
  // Get write key from environment variables
  // You can set this in your .env file as VITE_SEGMENT_WRITE_KEY
  return "GuSYClYPKXMO72REcpGRExlCYRLxnFBz"
}

// Create analytics instance
export const analytics = new AnalyticsBrowser()

// Load analytics with configuration
export const initializeAnalytics = async () => {
  const writeKey = getWriteKey()

  if (!writeKey) {
    console.warn('Segment write key not found. Set VITE_SEGMENT_WRITE_KEY in your environment variables.')
    return
  }

  try {
    await analytics.load({ 
      writeKey,
      // Optional: Add additional configuration
      cdnURL: 'https://cdn.segment.com', // Default CDN
    })

    console.log('Segment Analytics initialized successfully')
  } catch (error) {
    console.error('Failed to initialize Segment Analytics:', error)
  }
}

// Utility functions for common tracking events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  analytics.track(eventName, properties)
}

export const identifyUser = (userId: string, traits?: Record<string, any>) => {
  analytics.identify(userId, traits)
}

export const trackPageView = (name?: string, properties?: Record<string, any>) => {
  analytics.page(name, properties)
}

export const setUserGroup = (groupId: string, traits?: Record<string, any>) => {
  analytics.group(groupId, traits)
}

// Export the analytics instance for advanced usage
export { analytics as segmentAnalytics } 