declare global {
  namespace Express {
    interface Response {
      success: (result: any, status?: number) => void;
      error: (error: any, status?: number) => void;
    }
  }
}

export {};
