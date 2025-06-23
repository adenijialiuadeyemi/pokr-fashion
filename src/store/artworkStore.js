// store/artworkStore.js
import { create } from "zustand";

const useArtworkStore = create((set, get) => ({
  // Gallery state
  currentImageIndex: 0,
  isLiked: false,
  viewCount: 2,

  // Artwork data
  artwork: {
    id: "1",
    title: "Modern Fashion Attire Illustration",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
      aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Curabitur tempus urna eu ligula condimentum lobortis. Ut commodo efficitur ipsum. Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
      aliquet vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
    price: 35000.0,
    currency: "USD",
    tags: ["Fashion", "Illustration", "Modern"],
    images: [
      "/fashion-main.jpg",
      "/fashion2.jpg",
      "/fashion3.jpg",
      "/fashion4.jpg",
    ],
    thumbnails: ["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg", "/thumb4.jpg"],
  },

  // Artist data
  artist: {
    id: "ocean",
    username: "@Ocean",
    name: "Ocean",
    title: "Fashion Artist",
    avatar: "/profile2.png",
    location: "Lagos, Nigeria",
    rating: 5.0,
    reviewCount: 5,
    worksCompleted: 14,
    designsSold: 10,
  },

  // Actions
  setCurrentImageIndex: (index) => set({ currentImageIndex: index }),

  nextImage: () =>
    set((state) => ({
      currentImageIndex:
        (state.currentImageIndex + 1) % state.artwork.images.length,
    })),

  prevImage: () =>
    set((state) => ({
      currentImageIndex:
        (state.currentImageIndex - 1 + state.artwork.images.length) %
        state.artwork.images.length,
    })),

  toggleLike: () =>
    set((state) => ({
      isLiked: !state.isLiked,
    })),

  incrementViewCount: () =>
    set((state) => ({
      viewCount: state.viewCount + 1,
    })),

  // Purchase actions
  purchaseArtwork: async () => {
    // Simulate purchase logic
    console.log("Purchasing artwork:", get().artwork.title);
    // You can add actual purchase logic here
    return { success: true, message: "Purchase initiated" };
  },

  // Share actions
  shareArtwork: (platform) => {
    const artwork = get().artwork;
    const shareUrl = `${window.location.origin}/artwork/${artwork.id}`;
    const shareText = `Check out "${artwork.title}" by ${
      get().artist.username
    }`;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}&url=${encodeURIComponent(shareUrl)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        break;
      default:
        console.log("Share:", { platform, url: shareUrl, text: shareText });
    }
  },

  // Update artwork data (for dynamic loading)
  setArtwork: (artworkData) => set({ artwork: artworkData }),

  // Update artist data
  setArtist: (artistData) => set({ artist: artistData }),

  // Reset store
  reset: () =>
    set({
      currentImageIndex: 0,
      isLiked: false,
      viewCount: 2,
    }),
}));

export default useArtworkStore;
