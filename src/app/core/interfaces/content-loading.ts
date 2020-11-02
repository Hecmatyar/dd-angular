export interface ContentLoading<T> {
  content: T;
  isLoading: boolean;
}

export const initialContentLoading = {
  content: null,
  isLoading: false
};
