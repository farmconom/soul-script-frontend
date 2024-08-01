import { HttpErrorResponse } from '@angular/common/http';
// import { Logger } from '../services/logger.service';

// const log = new Logger('error-format');

export const errorFormat = (error: any) => {
  // log.debug('errorFormat error : %o', error);
  const customHttpErrorResponseMessage = error?.error?.message;
  // log.debug('errorFormat customHttpErrorResponseMessage : %o', customHttpErrorResponseMessage);

  if (error instanceof TypeError) {
    // log.debug("TypeError")
    return {
      code: undefined,
      message: error.message,
    };
  } else if (error instanceof HttpErrorResponse) {
    // log.debug("HttpErrorResponse")
    return {
      code: error.status,
      message: customHttpErrorResponseMessage || error?.message || '',
    };
  } else if (typeof error === 'string') {
    // log.debug("string")
    return {
      code: undefined,
      message: error,
    };
  } else {
    // log.debug("else %o",error)
    const e = error as any; // eslint-disable-line
    return {
      code: e?.code || e?.status || undefined,
      message: e?.message || 'unknown error instance',
    };
  }
};

export const fallbackImage = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'assets/images/image-error.png';
};
