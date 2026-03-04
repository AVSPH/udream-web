import api from "@/utils/api";

export interface PublicBlog {
  _id: string;
  title: string;
  featuredImage?: string;
  category?: string;
  slug: string;
  createdAt: string;
}

export interface PublicBlogPagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PublicBlogsResponse {
  data: PublicBlog[];
  pagination: PublicBlogPagination;
}

export interface PublicBlogsParams {
  businessId?: string;
  category?: string;
  page?: number;
  limit?: number;
}

// Get public blogs for landing page
export const getPublicBlogs = async (
  params?: PublicBlogsParams,
): Promise<PublicBlogsResponse> => {
  const response = await api.get<PublicBlogsResponse>("/blogs/public", {
    params: {
      businessId: params?.businessId || undefined,
      category: params?.category || undefined,
      page: params?.page?.toString() || "1",
      limit: params?.limit?.toString() || "10",
    },
  });
  return response.data;
};

// Get blog by slug (full content)
export const getBlogBySlug = async (slug: string) => {
  const response = await api.get(`/blogs/slug/${slug}`);
  return response.data;
};


// Get public blogs for landing page
export const getTopBlogs = async (
  params?: PublicBlogsParams,
): Promise<PublicBlogsResponse> => {
  const response = await api.get<PublicBlogsResponse>("/blogs/top", {
    params: {
      businessId: params?.businessId || undefined,
      category: params?.category || undefined,
      page: params?.page?.toString() || "1",
      limit: params?.limit?.toString() || "3",
    },
  });
  return response.data;
};