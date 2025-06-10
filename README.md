# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cf044c1f-0d09-4d1a-94dd-4b3158776ff9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cf044c1f-0d09-4d1a-94dd-4b3158776ff9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Segment Analytics Integration

This project includes Segment analytics for tracking user interactions and page views. Here's how to set it up and use it:

### Setup

1. **Get your Segment Write Key:**
   - Sign up at [Segment](https://segment.com) if you haven't already
   - Create a new JavaScript source in your Segment workspace
   - Copy the Write Key from your source settings

2. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Segment write key:
   ```
   VITE_SEGMENT_WRITE_KEY=your_segment_write_key_here
   ```

3. **Analytics will initialize automatically** when your app starts.

### Usage

#### Using the Analytics Hook

```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

const MyComponent = () => {
  const { track, identify, page } = useAnalytics();

  const handleButtonClick = () => {
    track('Button Clicked', {
      button_name: 'Get Started',
      page: 'homepage'
    });
  };

  const handleUserLogin = (userId: string) => {
    identify(userId, {
      email: 'user@example.com',
      name: 'John Doe'
    });
  };

  return <button onClick={handleButtonClick}>Get Started</button>;
};
```

#### Direct Analytics Import

```tsx
import { trackEvent, identifyUser, trackPageView } from '@/lib/analytics';

// Track custom events
trackEvent('Purchase Completed', {
  amount: 99.99,
  currency: 'USD'
});

// Identify users
identifyUser('user-123', {
  email: 'user@example.com',
  subscription: 'premium'
});

// Track page views
trackPageView('Product Details', {
  product_id: 'product-123'
});
```

#### Available Methods

- **`track(eventName, properties)`** - Track custom events
- **`identify(userId, traits)`** - Identify users with traits
- **`page(name, properties)`** - Track page views
- **`group(groupId, traits)`** - Associate users with groups

### Example Implementation

The `src/pages/Index.tsx` file shows an example of automatic page view tracking:

```tsx
const Index = () => {
  const { page } = useAnalytics();

  useEffect(() => {
    page('Home', {
      page_title: 'Credit Boost Decentraland Land',
      page_url: window.location.href,
    });
  }, [page]);

  // ... rest of component
};
```

### Files Structure

- `src/lib/analytics.ts` - Core analytics configuration and utilities
- `src/hooks/useAnalytics.ts` - React hook for easy analytics usage
- Analytics initialization in `src/App.tsx`

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Segment Analytics

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/cf044c1f-0d09-4d1a-94dd-4b3158776ff9) and click on Share -> Publish.

**Don't forget to set your environment variables** in your deployment platform:
- `VITE_SEGMENT_WRITE_KEY` - Your Segment write key

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
