export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  code?: string;
  details?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface HealthStatus {
  ok: boolean;
  status: "healthy" | "degraded";
  timestamp: string;
  environment: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

