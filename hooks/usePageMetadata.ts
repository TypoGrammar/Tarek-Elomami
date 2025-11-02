import { useEffect } from 'react';

const usePageMetadata = ({ title, description }: { title: string, description: string }) => {
  useEffect(() => {
    // Update the document title
    document.title = title;

    // Helper to update or create a meta tag
    const setMetaTag = (attr: 'name' | 'property', key: string, value: string) => {
      let element = document.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Update standard meta tags
    setMetaTag('name', 'description', description);
    
    // Update Open Graph meta tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);

    // Update Twitter meta tags
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);

  }, [title, description]);
};

export default usePageMetadata;
