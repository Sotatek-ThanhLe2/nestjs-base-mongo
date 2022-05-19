export class ResponseDto<T> {
  data: T;
  metadata?: Record<string, unknown>;
}
